import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToHowItWorks = () => {
    const element = document.querySelector("#how-it-works");
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-br from-white to-primary-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Turn Unused Software Licenses Into <span className="text-primary-600 dark:text-primary-400">Instant Cash</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              SoftSell gives you the highest value for your unused enterprise software licenses with our simple 3-step process and industry-leading payouts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-center"
              >
                Sell My Licenses
              </button>
              <button
                onClick={scrollToHowItWorks}
                className="bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 font-medium py-3 px-6 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-300 text-center"
              >
                How It Works
              </button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                {/* Professional headshots for social proof */}
                <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User profile" />
                <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User profile" />
                <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User profile" />
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold">300+</span> IT managers sold licenses last month
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* A professional business person with software license concept */}
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="Business professional managing software licenses" 
              className="rounded-2xl shadow-xl max-w-full w-full max-h-[500px] object-cover object-center" 
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 py-6 px-6 bg-white dark:bg-gray-800 rounded-xl shadow-md grid grid-cols-2 md:grid-cols-4 gap-6 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="text-primary-600 dark:text-primary-400 font-bold text-3xl">$12M+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Paid to customers</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-primary-600 dark:text-primary-400 font-bold text-3xl">3,500+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Licenses sold</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-primary-600 dark:text-primary-400 font-bold text-3xl">24h</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Average payout time</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-primary-600 dark:text-primary-400 font-bold text-3xl">40%</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Higher returns on average</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
