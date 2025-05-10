import { motion } from "framer-motion";

export default function CTABanner() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-primary-600 dark:bg-primary-700 transition-colors duration-300">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="md:w-2/3">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">Ready to Convert Your Licenses to Cash?</h2>
            <p className="text-primary-100">Join thousands of businesses that have optimized their software investments with SoftSell.</p>
          </div>
          <div>
            <button
              onClick={scrollToContact}
              className="inline-block bg-white text-primary-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
