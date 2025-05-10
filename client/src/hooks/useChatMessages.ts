import { useState, useEffect } from "react";
import { ChatMessage } from "@/lib/types";

// Mock responses for chat functionality
const mockResponses: Record<string, string> = {
  "default": "I'm not sure I understand. Could you please rephrase your question?",
  "greeting": "Hello! How can I help you today with selling your software licenses?",
  "how": "Selling your licenses is easy! Just fill out our form with details about your licenses, and we'll provide a valuation within 24 hours. Once you accept our offer, we'll guide you through the transfer process and pay you promptly.",
  "licenses": "We buy a wide range of software licenses including Microsoft, Adobe, Oracle, VMware, SAP, Salesforce, Autodesk, and many others. Even if your license isn't on this list, we'd be happy to evaluate it.",
  "value": "The value of your licenses depends on several factors: the software type, version, remaining term, quantity, and current market demand. Our proprietary valuation system ensures you get the highest possible price.",
  "process": "Our process is simple: 1) Submit your license details through our form, 2) Receive a competitive valuation within 24 hours, 3) Accept our offer and complete the transfer, 4) Get paid via your preferred method within 24 hours of verification.",
  "payment": "We offer several payment methods including wire transfer, PayPal, and cryptocurrency. Most payments are processed within 24 hours after license verification is complete."
};

function getResponse(message: string): string {
  const normalizedMessage = message.toLowerCase();
  
  if (normalizedMessage.includes('hi') || normalizedMessage.includes('hello') || normalizedMessage.includes('hey')) {
    return mockResponses.greeting;
  } else if (normalizedMessage.includes('how') && (normalizedMessage.includes('sell') || normalizedMessage.includes('work'))) {
    return mockResponses.how;
  } else if (normalizedMessage.includes('license') && (normalizedMessage.includes('buy') || normalizedMessage.includes('sell') || normalizedMessage.includes('type'))) {
    return mockResponses.licenses;
  } else if (normalizedMessage.includes('value') || normalizedMessage.includes('worth') || normalizedMessage.includes('price')) {
    return mockResponses.value;
  } else if (normalizedMessage.includes('process') || normalizedMessage.includes('step')) {
    return mockResponses.process;
  } else if (normalizedMessage.includes('payment') || normalizedMessage.includes('pay') || normalizedMessage.includes('money')) {
    return mockResponses.payment;
  } else {
    return mockResponses.default;
  }
}

export default function useChatMessages() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Hi there! How can I help you today with selling your software licenses?",
      isUser: false
    }
  ]);

  const addMessage = (text: string, isUser: boolean) => {
    setMessages(prev => [...prev, { text, isUser }]);
    
    // If it's a user message, generate an AI response after a short delay
    if (isUser) {
      setTimeout(() => {
        const responseText = getResponse(text);
        setMessages(prev => [...prev, { text: responseText, isUser: false }]);
      }, 1000);
    }
  };

  return { messages, addMessage };
}
