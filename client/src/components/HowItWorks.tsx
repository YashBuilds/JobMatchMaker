import { motion } from "framer-motion";

export default function HowItWorks() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  const steps = [
    {
      icon: "fa-upload",
      title: "Upload License",
      description: "Tell us about your licenses through our simple submission form. Include license type, quantity, and expiration date."
    },
    {
      icon: "fa-calculator",
      title: "Get Valuation",
      description: "Receive a competitive valuation within 24 hours based on our proprietary market analysis and buyer network."
    },
    {
      icon: "fa-money-bill-wave",
      title: "Get Paid",
      description: "Accept our offer and get paid via wire transfer, PayPal, or cryptocurrency within 24 hours of verification."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Our simple three-step process makes selling your unused software licenses quick and painless.</p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`fas ${step.icon} text-primary-600 dark:text-primary-400 text-2xl`}></i>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            onClick={scrollToContact}
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Start Selling Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
