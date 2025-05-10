import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { insertLeadFormSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message?: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>({
    resolver: zodResolver(insertLeadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/leads", data);
      setIsSuccess(true);
      toast({
        title: "Submission successful!",
        description: "We will contact you within 24 hours with a valuation.",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const licenseTypes = [
    { value: "microsoft", label: "Microsoft (Office, Windows, Server)" },
    { value: "adobe", label: "Adobe (Creative Cloud, Acrobat)" },
    { value: "oracle", label: "Oracle (Database, Middleware)" },
    { value: "vmware", label: "VMware (vSphere, NSX)" },
    { value: "sap", label: "SAP" },
    { value: "salesforce", label: "Salesforce" },
    { value: "other", label: "Other" }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get a Valuation</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Ready to turn your unused software licenses into cash? Fill out the form and our team will provide a valuation within 24 hours.</p>
            
            {/* Software startup team image */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Software startup team discussing" 
              className="rounded-xl shadow-lg w-full h-auto object-cover" 
            />
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900 rounded-full p-3 mr-4">
                  <i className="fas fa-envelope text-primary-600 dark:text-primary-400"></i>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-300">info@softsell.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900 rounded-full p-3 mr-4">
                  <i className="fas fa-phone text-primary-600 dark:text-primary-400"></i>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-300">+1 (800) 555-9876</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
              {isSuccess ? (
                <motion.div 
                  className="text-center p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-green-600 dark:text-green-400 text-2xl"></i>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-300">Your information has been submitted successfully. Our team will contact you within 24 hours with a valuation.</p>
                </motion.div>
              ) : (
                <motion.form 
                  id="contactForm" 
                  className="space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name*</label>
                      <input 
                        type="text" 
                        id="name"
                        className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                        placeholder="John Smith"
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address*</label>
                      <input 
                        type="email" 
                        id="email"
                        className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                        placeholder="john@example.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </motion.div>
                  </div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company*</label>
                    <input 
                      type="text" 
                      id="company"
                      className={`w-full px-4 py-2 border ${errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                      placeholder="Acme Inc."
                      {...register("company")}
                    />
                    {errors.company && (
                      <p className="text-red-600 text-sm mt-1">{errors.company.message}</p>
                    )}
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">License Type*</label>
                    <select 
                      id="licenseType"
                      className={`w-full px-4 py-2 border ${errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                      {...register("licenseType")}
                    >
                      <option value="" disabled>Select license type</option>
                      {licenseTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                    {errors.licenseType && (
                      <p className="text-red-600 text-sm mt-1">{errors.licenseType.message}</p>
                    )}
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Additional Details</label>
                    <textarea 
                      id="message"
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Tell us about your licenses (quantity, version, expiration date, etc.)"
                      {...register("message")}
                    ></textarea>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <button 
                      type="submit" 
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : "Get My Valuation"}
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
