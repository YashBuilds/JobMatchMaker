import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: "fa-dollar-sign",
      title: "Best Price Guarantee",
      description: "Our extensive network of buyers ensures you get the highest value for your software licenses."
    },
    {
      icon: "fa-shield-alt",
      title: "Secure Process",
      description: "Industry-leading security measures protect your data and ensure compliant license transfers."
    },
    {
      icon: "fa-bolt",
      title: "Fast Turnaround",
      description: "Get valuations within 24 hours and receive payment quickly after accepting offers."
    },
    {
      icon: "fa-headset",
      title: "Dedicated Support",
      description: "Our license experts guide you through every step of the process with personalized assistance."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="why-choose-us" className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mb-4">
                    <i className={`fas ${feature.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center md:text-left mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose SoftSell</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">We've pioneered the software license resale market with a focus on transparency, security, and maximizing value for our customers.</p>
            </div>
            
            {/* Modern tech office environment */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Modern tech office environment" 
              className="rounded-xl shadow-lg w-full h-auto object-cover" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
