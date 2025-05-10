import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "CIO, Nexus Technologies",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote: "After our company downsized, we had excess Microsoft and Adobe licenses that were just sitting unused. SoftSell offered us 42% more than other resellers, and the payment was in our account within 48 hours. The process was remarkably straightforward and professional.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "IT Director, Global Innovations",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote: "I was skeptical about selling our unused Oracle licenses, but SoftSell's team walked me through every step of the compliance process. Their expertise saved us from potential legal issues, and we received much more than we expected. I've recommended them to everyone in my network.",
      rating: 4.5
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
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-accent-500"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-accent-500"></i>);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-accent-500"></i>);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Hear from IT leaders who have successfully sold their software licenses through SoftSell.</p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4" 
                />
                <div>
                  <h3 className="font-display font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex">
                {renderStars(testimonial.rating)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
