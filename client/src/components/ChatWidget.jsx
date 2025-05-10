import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi there! How can I help you today with selling your software licenses?",
      isUser: false
    }
  ]);
  const messageContainerRef = useRef(null);
  const inputRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Simple mock responses for chat functionality
  const getResponse = (message) => {
    const normalizedMessage = message.toLowerCase();
    
    if (normalizedMessage.includes('hi') || normalizedMessage.includes('hello') || normalizedMessage.includes('hey')) {
      return "Hello! How can I help you today with selling your software licenses?";
    } else if (normalizedMessage.includes('how') && (normalizedMessage.includes('sell') || normalizedMessage.includes('work'))) {
      return "Selling your licenses is easy! Just fill out our form with details about your licenses, and we'll provide a valuation within 24 hours. Once you accept our offer, we'll guide you through the transfer process and pay you promptly.";
    } else if (normalizedMessage.includes('license') && (normalizedMessage.includes('buy') || normalizedMessage.includes('sell') || normalizedMessage.includes('type'))) {
      return "We buy a wide range of software licenses including Microsoft, Adobe, Oracle, VMware, SAP, Salesforce, and many others. Even if your license isn't on this list, we'd be happy to evaluate it.";
    } else if (normalizedMessage.includes('value') || normalizedMessage.includes('worth') || normalizedMessage.includes('price')) {
      return "The value of your licenses depends on several factors: the software type, version, remaining term, quantity, and current market demand. Our valuation system ensures you get the highest possible price.";
    } else if (normalizedMessage.includes('time') || normalizedMessage.includes('long') || normalizedMessage.includes('process')) {
      return "Our process is quick! You'll typically receive a valuation within 24 hours, and payment within 24 hours after license verification is complete.";
    } else {
      return "I'm not sure I understand. Could you please rephrase your question? You can ask about our selling process, license types we accept, or how long the process takes.";
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;
    
    // Add user message
    const newUserMessage = {
      text: inputMessage,
      isUser: true
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage("");
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const responseText = getResponse(newUserMessage.text);
      const newAiMessage = {
        text: responseText,
        isUser: false
      };
      
      setMessages(prev => [...prev, newAiMessage]);
    }, 1000);
    
    // Focus the input after sending a message
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const exampleQuestions = [
    "How do I sell my license?",
    "What licenses do you buy?",
    "How much is my license worth?",
    "How long does the process take?"
  ];

  const handleExampleClick = (question) => {
    setInputMessage(question);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-80 md:w-96 overflow-hidden mb-4">
          <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">SoftSell Support</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div 
            ref={messageContainerRef}
            className="p-4 h-80 overflow-y-auto"
            style={{ scrollBehavior: 'smooth' }}
          >
            {messages.map((msg, index) => (
              <div key={index} className={`flex mb-4 ${msg.isUser ? 'justify-end' : ''}`}>
                {!msg.isUser && (
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">S</span>
                    </div>
                  </div>
                )}
                <div className={`py-2 px-4 rounded-lg max-w-[75%] ${
                  msg.isUser 
                    ? 'bg-primary-100 dark:bg-primary-800 text-gray-800 dark:text-gray-200' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                }`}>
                  <p>{msg.text}</p>
                </div>
                {msg.isUser && (
                  <div className="flex-shrink-0 ml-3">
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-gray-600 dark:text-gray-300 text-sm"></i>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex gap-2">
              <input 
                type="text" 
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..." 
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" 
              />
              <button 
                onClick={handleSendMessage}
                className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg"
                aria-label="Send message"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Try asking: 
              <div className="mt-1 flex flex-wrap gap-1">
                {exampleQuestions.map((q, i) => (
                  <button 
                    key={i}
                    onClick={() => handleExampleClick(q)}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    "{q.length > 15 ? q.substring(0, 15) + '...' : q}"
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <button 
        onClick={toggleChat}
        className="bg-primary-600 hover:bg-primary-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        aria-label="Open chat"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-2xl`}></i>
      </button>
    </div>
  );
}