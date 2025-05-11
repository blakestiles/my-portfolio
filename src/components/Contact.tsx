
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, User, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Contact = () => {
  const { toast } = useToast();
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with slight delay for better UX
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        when: "beforeChildren"
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.4, 0.0, 0.2, 1] } 
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.4 }
    })
  };

  return (
    <section 
      id="contact" 
      className="py-20"
      ref={sectionRef}
    >
      <div className="section-container">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-white"
              variants={itemVariants}
            >
              Let's Connect
            </motion.h3>
            <motion.p 
              className="text-[#8b949e] mb-8 leading-relaxed"
              variants={itemVariants}
            >
              I'm currently looking for new opportunities. Whether you have a question, project idea, or just want to say hi, feel free to reach out!
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="h-12 w-12 rounded-full bg-[#238636]/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Phone className="h-5 w-5 text-[#238636]" />
                </motion.div>
                <div>
                  <p className="text-sm text-[#8b949e]">Phone</p>
                  <p className="font-medium text-white">714-519-7072</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="h-12 w-12 rounded-full bg-[#1f6feb]/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Mail className="h-5 w-5 text-[#1f6feb]" />
                </motion.div>
                <div>
                  <p className="text-sm text-[#8b949e]">Email</p>
                  <p className="font-medium text-white">gandhe.sainath@csu.fullerton.edu</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="h-12 w-12 rounded-full bg-[#8b949e]/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <User className="h-5 w-5 text-[#8b949e]" />
                </motion.div>
                <div>
                  <p className="text-sm text-[#8b949e]">Location</p>
                  <p className="font-medium text-white">Fullerton, CA</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="repo-card">
              <CardHeader>
                <CardTitle className="text-white">Send Me a Message</CardTitle>
                <CardDescription className="text-[#8b949e]">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <motion.div
                    custom={0}
                    variants={inputVariants}
                  >
                    <label htmlFor="name" className="text-sm font-medium block mb-1 text-[#c9d1d9]">Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#0d1117] border-[#30363d] text-white focus:border-[#1f6feb] focus:ring-[#1f6feb]"
                    />
                  </motion.div>
                  <motion.div
                    custom={1}
                    variants={inputVariants}
                  >
                    <label htmlFor="email" className="text-sm font-medium block mb-1 text-[#c9d1d9]">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#0d1117] border-[#30363d] text-white focus:border-[#1f6feb] focus:ring-[#1f6feb]"
                    />
                  </motion.div>
                  <motion.div
                    custom={2}
                    variants={inputVariants}
                  >
                    <label htmlFor="message" className="text-sm font-medium block mb-1 text-[#c9d1d9]">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-[#0d1117] border-[#30363d] text-white focus:border-[#1f6feb] focus:ring-[#1f6feb]"
                    />
                  </motion.div>
                </CardContent>
                <CardFooter>
                  <motion.div
                    custom={3}
                    variants={inputVariants}
                    className="w-full"
                  >
                    <Button 
                      type="submit" 
                      className="gh-button-primary w-full group" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </CardFooter>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
