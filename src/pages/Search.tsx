import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { guides, Guide } from "@/data/guides";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search as SearchIcon, Sparkles, MapPin, Star, LogOut } from "lucide-react";
import { toast } from "sonner";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [aiQuery, setAiQuery] = useState("");
  const [filteredGuides, setFilteredGuides] = useState<Guide[]>(guides);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    } else {
      setUserName(user);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const handleLocalSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredGuides(guides);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = guides.filter(
      (guide) =>
        guide.name.toLowerCase().includes(lowerQuery) ||
        guide.city.toLowerCase().includes(lowerQuery) ||
        guide.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
    setFilteredGuides(filtered);
  };

  const handleAiSearch = async () => {
    if (!aiQuery.trim()) {
      toast.error("Please enter your travel preferences");
      return;
    }

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      toast.error("Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your environment.");
      return;
    }

    setIsAiLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

      const guidesData = JSON.stringify(guides);
      const prompt = `You are a travel guide recommendation system. Based on the user's request and the guide database, recommend the best-matched guides — return as many relevant guides as appropriate.

User Request: "${aiQuery}"

Guide Database:
${guidesData}

Return ONLY a JSON object in this exact format with no additional text. The "recommendations" array may contain any number of entries depending on relevance:
{
  "recommendations": [
    {"name": "Guide Name", "id": "guide-id", "reason": "Why this guide matches"}
  ]
}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Extract JSON from response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("Invalid response format");
      }
      
      const recommendations = JSON.parse(jsonMatch[0]);
      
      if (recommendations.recommendations && recommendations.recommendations.length > 0) {
        const recommendedIds = recommendations.recommendations.map((r: any) => r.id);
        const matched = guides.filter((guide) => recommendedIds.includes(guide.id));
        setFilteredGuides(matched);
        toast.success(`Found ${matched.length} AI-matched guides for you!`);
      } else {
        toast.error("No matching guides found. Try different preferences.");
      }
    } catch (error) {
      console.error("AI search error:", error);
      toast.error("AI search failed. Please try again or use local search.");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">AuthentiCity</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Hi, {userName}!</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Search Section */}
        <div className="space-y-6 mb-8">
          {/* Local Search */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SearchIcon className="h-5 w-5 text-primary" />
                Quick Search
              </CardTitle>
              <CardDescription>Search by name, city, or tags</CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="Try 'food', 'Paris', or 'history'..."
                value={searchQuery}
                onChange={(e) => handleLocalSearch(e.target.value)}
                className="w-full"
              />
            </CardContent>
          </Card>

          {/* AI Search */}
          <Card className="shadow-soft bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                AI-Powered Matchmaking
              </CardTitle>
              <CardDescription>
                Describe your ideal experience, and our AI will find the perfect guides
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="E.g., 'I want a quiet, historical walking tour in Paris with a focus on art'"
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                className="w-full"
              />
              <Button
                onClick={handleAiSearch}
                disabled={isAiLoading}
                className="w-full bg-gradient-hero"
              >
                {isAiLoading ? (
                  <>
                    <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                    Finding Your Perfect Matches...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Find My Perfect Guide
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            {filteredGuides.length} {filteredGuides.length === 1 ? "Guide" : "Guides"} Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide) => (
              <Card
                key={guide.id}
                className="shadow-soft hover:shadow-elevated transition-all cursor-pointer group"
                onClick={() => navigate(`/guide/${guide.id}`)}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img
                      src={guide.profilePictureUrl}
                      alt={guide.name}
                      className="h-16 w-16 rounded-full border-2 border-primary"
                    />
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {guide.name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {guide.city}
                      </CardDescription>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-semibold">{guide.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {guide.personalInfo}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {guide.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {guide.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{guide.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
