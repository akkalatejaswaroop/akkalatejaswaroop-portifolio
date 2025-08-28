import React, { useState, useRef, useEffect } from 'react';
import Section from './Section';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';
import { RESUME_DATA_FOR_AI } from '../constants';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const AiChat: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    const systemInstruction = `You are an expert AI assistant for Akkala Teja Swaroop's portfolio. Your goal is to answer questions from potential recruiters and collaborators based *strictly* on the provided resume information. Do not invent any information. If a question cannot be answered from the provided context, politely state that the information is not available in the resume and suggest they contact Akkala Teja Swaroop directly for more details. Format your answers clearly using markdown (e.g., lists, bolding).

Here is the resume information:
---
${RESUME_DATA_FOR_AI}
---
`;

    const handleSend = async (messageText: string) => {
        const userMessage: ChatMessage = { role: 'user', content: messageText };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: messageText,
                config: {
                    systemInstruction: systemInstruction,
                }
            });

            const aiMessage: ChatMessage = { role: 'model', content: response.text };
            setMessages(prev => [...prev, aiMessage]);

        } catch (err) {
            console.error(err);
            setError('Sorry, something went wrong. Please try again.');
            const errorMessage: ChatMessage = { role: 'model', content: 'Sorry, I encountered an error. Please try again.' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isLoading) {
            handleSend(input.trim());
        }
    };
    
    const examplePrompts = [
        "What are his main programming languages?",
        "Tell me about his 'AI-powered Chatbot' project.",
        "What was his role at Edunet Foundation?",
    ];

    return (
        <Section title="AI Resume Assistant" id="ai-chat">
            <div className="bg-secondary rounded-lg border border-border-color p-4 md:p-6 shadow-2xl">
                <div className="h-96 overflow-y-auto pr-4 mb-4 space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold text-primary flex-shrink-0">AI</div>
                        <div className="bg-border-color rounded-lg p-3 max-w-md">
                            <p>Hello! I'm an AI assistant trained on Akkala Teja Swaroop's resume. Ask me anything about his skills, experience, or projects!</p>
                        </div>
                    </div>
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                            {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold text-primary flex-shrink-0">AI</div>}
                            <div className={`rounded-lg p-3 max-w-md ${msg.role === 'user' ? 'bg-accent text-primary' : 'bg-border-color'}`}>
                                <div className="prose prose-sm prose-invert max-w-none">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {msg.content}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                         <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold text-primary flex-shrink-0">AI</div>
                            <div className="bg-border-color rounded-lg p-3 max-w-md">
                               <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse delay-75"></span>
                                    <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse delay-150"></span>
                                    <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse delay-300"></span>
                               </div>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef}></div>
                </div>

                 {messages.length === 0 && !isLoading && (
                    <div className="mb-4 flex flex-wrap gap-2">
                        {examplePrompts.map(prompt => (
                            <button key={prompt} onClick={() => handleSend(prompt)} className="text-xs bg-border-color text-text-secondary px-3 py-1 rounded-full hover:bg-accent hover:text-primary transition-colors">
                                "{prompt}"
                            </button>
                        ))}
                    </div>
                )}
                
                <form onSubmit={handleFormSubmit} className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about my projects..."
                        disabled={isLoading}
                        className="flex-grow bg-primary border border-border-color rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent transition-all disabled:opacity-50"
                    />
                    <button type="submit" disabled={isLoading} className="bg-accent text-primary font-bold px-4 py-2 rounded-md hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        Send
                    </button>
                </form>
                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </div>
        </Section>
    );
};

export default AiChat;