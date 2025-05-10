import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useChatMessages from "@/hooks/useChatMessages";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { messages, addMessage } = useChatMessages();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;
    
    // Add user message
    addMessage(inputMessage, true);
    setInputMessage("");
    
    // Focus the input after sending a message
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
    "How long does the process take?",
    "How do I get paid?"
  ];

  const handleExampleClick = (question: string) => {
    setInputMessage(question);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-80 md:w-96 overflow-hidden mb-4"
          >
            <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-medium">SoftSell Support</h3>
              <button 
                onClick={toggleChat}
                className="text-white hover:text-gray-200 focus:outline-none"
                aria-label="Close chat"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div 
              ref={messageContainerRef}
              className="p-4 h-80 overflow-y-auto custom-scrollbar"
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
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" 
                />
                <button 
                  onClick={handleSendMessage}
                  className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors duration-300"
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
                      "{q.length > 20 ? q.substring(0, 20) + '...' : q}"
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button 
        onClick={toggleChat}
        className="bg-primary-600 hover:bg-primary-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-2xl`}></i>
      </motion.button>
    </div>
  );
}
