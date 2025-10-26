import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { guides } from "@/data/guides";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send } from "lucide-react";
import { toast } from "sonner";

interface Message {
  sender: "user" | "guide";
  text: string;
  timestamp: Date;
}

const Chat = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [guide, setGuide] = useState<any>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [hasAutoReplied, setHasAutoReplied] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const foundGuide = guides.find((g) => g.id === id);
    if (foundGuide) {
      setGuide(foundGuide);
    }
  }, [id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) {
      return;
    }

    // Add user message
    const userMessage: Message = {
      sender: "user",
      text: inputMessage.trim(),
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Send auto-reply after 3 seconds (only once)
    if (!hasAutoReplied) {
      setTimeout(() => {
        const autoReply: Message = {
          sender: "guide",
          text: `Hi, ${localStorage.getItem("user") || "Traveller"}! Thanks for reaching out. I've received your request and will follow up with you by email to discuss details!`,
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, autoReply]);
        setHasAutoReplied(true);
        toast.success("Message received! Guide will respond via email.");
      }, 3000);
    }
  };

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Guide not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b bg-card shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate(`/guide/${id}`)}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-3 flex-1">
            <img
              src={guide.profilePictureUrl}
              alt={guide.name}
              className="h-10 w-10 rounded-full border-2 border-primary"
            />
            <div>
              <h2 className="font-semibold">{guide.name}</h2>
              <p className="text-sm text-muted-foreground">{guide.city}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 container mx-auto px-4 py-6 max-w-4xl overflow-y-auto">
        <div className="space-y-4">
          {messages.length === 0 && (
            <Card className="shadow-soft bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Start a conversation with {guide.name}. They'll respond via email!
                </p>
              </CardContent>
            </Card>
          )}
          
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <Card
                className={`max-w-[70%] ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card"
                }`}
              >
                <CardContent className="pt-4 pb-4">
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-2 ${
                      message.sender === "user"
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t bg-card shadow-soft">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
