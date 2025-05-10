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

  return (
    <section id="why-choose-us" className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose SoftSell</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">We've pioneered the software license resale market with a focus on transparency, security, and maximizing value.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                <i className={`fas ${feature.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}