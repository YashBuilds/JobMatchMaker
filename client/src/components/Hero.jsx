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
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-br from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Turn Unused Software Licenses Into <span className="text-primary-600 dark:text-primary-400">Instant Cash</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              SoftSell gives you the highest value for your unused enterprise software licenses with our simple 3-step process and industry-leading payouts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg"
              >
                Sell My Licenses
              </button>
              <button
                onClick={scrollToHowItWorks}
                className="bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 font-medium py-3 px-6 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700"
              >
                How It Works
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="Business professional" 
              className="rounded-2xl shadow-xl max-w-full w-full max-h-[500px] object-cover object-center" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}