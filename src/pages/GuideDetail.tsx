import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { guides, Guide, Review } from "@/data/guides";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Star, ArrowLeft, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const GuideDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [guide, setGuide] = useState<Guide | null>(null);
  const [allReviews, setAllReviews] = useState<Review[]>([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewStars, setReviewStars] = useState(5);

  useEffect(() => {
    const foundGuide = guides.find((g) => g.id === id);
    if (foundGuide) {
      setGuide(foundGuide);
      
      // Load reviews from localStorage
      const storedReviews = localStorage.getItem(`reviews_${id}`);
      const parsedStoredReviews: Review[] = storedReviews ? JSON.parse(storedReviews) : [];
      
      // Combine mock reviews with stored reviews
      setAllReviews([...foundGuide.reviews, ...parsedStoredReviews]);
    }
  }, [id]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reviewText.trim()) {
      toast.error("Please write your review");
      return;
    }

    const newReview: Review = {
      reviewerName: localStorage.getItem("user") || "Traveller",
      reviewText: reviewText.trim(),
      stars: reviewStars,
      date: new Date().toISOString().split('T')[0]
    };

    // Get existing stored reviews
    const storedReviews = localStorage.getItem(`reviews_${id}`);
    const existingReviews: Review[] = storedReviews ? JSON.parse(storedReviews) : [];
    
    // Add new review
    const updatedReviews = [...existingReviews, newReview];
    localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));
    
    // Update displayed reviews
    setAllReviews([...(guide?.reviews || []), ...updatedReviews]);
    
    // Reset form
    setReviewText("");
    setReviewStars(5);
    toast.success("Review submitted successfully!");
  };

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Guide not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/search")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Guide Profile */}
        <Card className="shadow-elevated mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <img
                src={guide.profilePictureUrl}
                alt={guide.name}
                className="h-32 w-32 rounded-full border-4 border-primary"
              />
              <div className="flex-1 space-y-4">
                <div>
                  <CardTitle className="text-3xl mb-2">{guide.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-base">
                    <MapPin className="h-4 w-4" />
                    {guide.city}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-bold text-lg">{guide.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({allReviews.length} reviews)</span>
                </div>
                <p className="text-foreground">{guide.personalInfo}</p>
                <div className="flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  className="w-full md:w-auto"
                  onClick={() => navigate(`/chat/${guide.id}`)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact {guide.name.split(' ')[0]}
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Reviews Section */}
        <Card className="shadow-soft mb-8">
          <CardHeader>
            <CardTitle>Reviews</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {allReviews.map((review, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{review.reviewerName}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.stars
                              ? "fill-accent text-accent"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{review.reviewText}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Write Review */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Write a Review</CardTitle>
            <CardDescription>Share your experience with {guide.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div className="space-y-2">
                <Label>Rating</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewStars(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-8 w-8 cursor-pointer transition-colors ${
                          star <= reviewStars
                            ? "fill-accent text-accent"
                            : "text-muted hover:text-accent"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="review">Your Review</Label>
                <Textarea
                  id="review"
                  placeholder="Tell us about your experience..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Submit Review
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GuideDetail;
