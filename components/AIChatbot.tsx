import React, { useState, useRef, useEffect } from 'react';
import { Guide, ChatMessage, RecommendedGuide } from '../types';
import { getGuideRecommendations } from '../services/geminiService';

interface AIChatbotProps {
  guides: Guide[];
  onSelectGuide: (guide: Guide) => void;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ guides, onSelectGuide }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, sender: 'ai', text: "Hello! I'm your AuthentiCity assistant. Tell me about your ideal tour, and I'll find the perfect local guide for you. For example, 'I'm in Barcelona and love art and food.'" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const newUserMessage: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text: userInput,
    };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setUserInput('');
    setIsLoading(true);

    try {
        const responseText = await getGuideRecommendations(updatedMessages, guides);
        const responseData = JSON.parse(responseText);

        const recommendedGuides: RecommendedGuide[] = responseData.recommendedGuides
            .map((rec: { guideId: string, matchPercentage: number }) => {
                const guide = guides.find(g => g.id === rec.guideId);
                return guide ? { guide, matchPercentage: rec.matchPercentage } : null;
            })
            .filter((item: RecommendedGuide | null): item is RecommendedGuide => item !== null);


        const newAiMessage: ChatMessage = {
            id: Date.now() + 1,
            sender: 'ai',
            text: responseData.recommendationText,
            recommendedGuides: recommendedGuides,
        };
        setMessages(prev => [...prev, newAiMessage]);

    } catch (error) {
        console.error("Failed to parse Gemini response or find guides:", error);
        const errorAiMessage: ChatMessage = {
            id: Date.now() + 1,
            sender: 'ai',
            text: "Sorry, I encountered an error while finding recommendations. Please try rephrasing your request.",
        };
        setMessages(prev => [...prev, errorAiMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  const ChatBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
    const isUser = message.sender === 'user';
    return (
      <div className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${isUser ? 'bg-teal-500 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
          <p className="text-sm">{message.text}</p>
        </div>
      </div>
    );
  };
  
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-teal-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-teal-700 transition-transform transform hover:scale-110 focus:outline-none z-50"
        aria-label="Toggle AI Chat"
      >
         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[calc(100%-3rem)] sm:w-96 h-[60vh] max-h-[700px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200">
          <header className="bg-teal-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold text-lg">AI Matchmaker</h3>
            <button onClick={() => setIsOpen(false)} className="text-white text-2xl leading-none">&times;</button>
          </header>

          <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id}>
                  <ChatBubble message={msg} />
                  {msg.recommendedGuides && msg.recommendedGuides.length > 0 && (
                     <div className="mt-4 space-y-3">
                        {msg.recommendedGuides.map(({ guide, matchPercentage }) => (
                            <div key={guide.id} className="bg-white border rounded-lg p-3 shadow-sm">
                               <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-sm text-gray-800">{guide.name}</h4>
                                        <p className="text-xs text-gray-500 mb-2">{guide.expertiseTags.slice(0, 3).join(', ')}</p>
                                    </div>
                                    <span className="text-xs font-bold text-teal-600 bg-teal-100 py-1 px-2 rounded-full">{matchPercentage}% Match</span>
                               </div>
                               <button onClick={() => { onSelectGuide(guide); setIsOpen(false); }} className="w-full mt-2 text-xs bg-gray-100 text-gray-800 font-semibold py-1.5 rounded hover:bg-gray-200 transition">
                                 View Profile
                               </button>
                            </div>
                        ))}
                     </div>
                  )}
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                    <div className="px-4 py-3 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-none">
                       <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                       </div>
                    </div>
                 </div>
              )}
              <div ref={chatEndRef}></div>
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading || !userInput.trim()} className="bg-teal-500 text-white rounded-full p-2.5 disabled:bg-gray-300 hover:bg-teal-600 transition flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M3.105 3.105a1 1 0 011.414 0L10 8.586l5.48-5.481a1 1 0 011.415 1.415L11.414 10l5.481 5.48a1 1 0 01-1.415 1.415L10 11.414l-5.48 5.481a1 1 0 01-1.415-1.415L8.586 10 3.105 4.52a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" /></svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
