import React, { useState } from 'react';

// ✅ Fast imports (Direct paths to avoid scanning 1000+ icons)
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import Send from 'lucide-react/dist/esm/icons/send';
import X from 'lucide-react/dist/esm/icons/x';

import { getStyleAdvice } from '../services/geminiService';
import { ChatMessage, ConciergeState } from '../types';

const QUICK_PROMPTS = [
  "Wedding guest attire",
  "Business casual update",
  "Black tie options",
  "Summer linen suits"
];

export const StyleConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<ConciergeState>(ConciergeState.IDLE);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Greetings. I am Alexander, your digital concierge. I can assist with style advice for any occasion or help you navigate our brands." }
  ]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInput('');
    setState(ConciergeState.ANALYZING);

    const advice = await getStyleAdvice(text);

    setMessages(prev => [...prev, { role: 'assistant', content: advice }]);
    setState(ConciergeState.SUGGESTING);
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-40 bg-navy-900 text-white w-14 h-14 rounded-full shadow-2xl hover:bg-gold-500 transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
        >
          <Sparkles className="w-6 h-6" />
        </button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-8 right-4 md:right-8 w-[90vw] md:w-[400px] h-[600px] bg-white shadow-2xl z-50 flex flex-col rounded-lg border border-gray-100 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-navy-900 p-4 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/10 rounded-full">
                <Sparkles className="w-4 h-4 text-gold-300" />
              </div>
              <div>
                <h3 className="font-serif text-lg tracking-wide leading-none">Alexander</h3>
                <span className="text-[10px] font-sans text-gold-300 uppercase tracking-wider">Virtual Stylist</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gold-300 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                  ? 'bg-navy-900 text-white rounded-br-none'
                  : 'bg-white text-navy-900 border border-gray-100 rounded-bl-none'
                  }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {state === ConciergeState.ANALYZING && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 rounded-bl-none shadow-sm flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-sans mr-2">Thinking</span>
                  <div className="w-1.5 h-1.5 bg-navy-900 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-navy-900 rounded-full animate-bounce delay-75" />
                  <div className="w-1.5 h-1.5 bg-navy-900 rounded-full animate-bounce delay-150" />
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts & Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            {messages.length < 3 && (
              <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                {QUICK_PROMPTS.map(prompt => (
                  <button
                    key={prompt}
                    onClick={() => handleSend(prompt)}
                    className="whitespace-nowrap px-3 py-1.5 bg-cream border border-gold-100 text-navy-900 text-xs rounded-full hover:bg-gold-500 hover:text-white transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Ask about styles, fits, or brands..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 font-sans transition-all"
              />
              <button
                onClick={() => handleSend(input)}
                disabled={!input.trim() || state === ConciergeState.ANALYZING}
                className="bg-navy-900 text-white p-3 rounded-lg hover:bg-gold-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center mt-3">
              <span className="text-[9px] text-gray-400 uppercase tracking-wider">Powered by Gemini • Advice for inspiration only</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};