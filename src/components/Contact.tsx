import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Send, Github, Linkedin, ExternalLink, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Contact = () => {
  const { toast } = useToast();
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    triggerOnce: false,
    reappear: true
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

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-[#1f6feb]" />,
      title: "Email",
      value: "gandhe.sainath@csu.fullerton.edu",
      link: "mailto:gandhe.sainath@csu.fullerton.edu",
      color: "#1f6feb",
      gradient: "from-[#1f6feb] to-[#58a6ff]"
    },
    {
      icon: <Phone className="h-6 w-6 text-[#238636]" />,
      title: "Phone",
      value: "714-519-7072",
      link: "tel:7145197072",
      color: "#238636",
      gradient: "from-[#238636] to-[#3fb950]"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8b949e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
      title: "Location",
      value: "Fullerton, CA",
      link: "https://maps.google.com/?q=Fullerton,CA",
      color: "#8b949e",
      gradient: "from-[#8b949e] to-[#c9d1d9]"
    }
  ];

  // Social media links
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <Github />, 
      url: "https://github.com/blakestiles", 
      color: "#8b949e",
      gradient: "from-[#8b949e] to-[#c9d1d9]",
      delay: 0
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin />, 
      url: "https://linkedin.com/in/sainath-gandhe", 
      color: "#1f6feb",
      gradient: "from-[#1f6feb] to-[#58a6ff]",
      delay: 0.1
    },
    { 
      name: "Email", 
      icon: <Mail />, 
      url: "mailto:gandhe.sainath@csu.fullerton.edu", 
      color: "#238636",
      gradient: "from-[#238636] to-[#3fb950]",
      delay: 0.2
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 relative bg-[#0d1117]"
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0d1117]"></div>
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-[#238636]/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 bg-[#1f6feb]/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Contact Details Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            key={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <motion.div 
                className="p-6 bg-[#161b22] border border-[#30363d] rounded-lg shadow-lg transition-all mb-6"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.5)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#238636] to-[#1f6feb] p-0.5">
                    <div className="h-full w-full rounded-full overflow-hidden border-2 border-[#0d1117] bg-[#161b22]">
                      <img 
                        src="/lovable-uploads/a03692e5-c82d-4a3d-9867-8ccfcc8d132f.png" 
                        alt="Profile" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Sainath Gandhe</h3>
                    <p className="text-[#1f6feb]">Software Developer</p>
                  </div>
                </div>
                <p className="text-[#8b949e] mb-6">
                  I'm currently looking for new opportunities. Whether you have a question, project idea, or just want to say hi, feel free to reach out!
                </p>
              </motion.div>
            </motion.div>
            
            {/* Contact Cards */}
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {contactMethods.map((method, index) => (
                method.title === "Email" ? (
                  <motion.div
                    key={index}
                    className="block transform transition-all duration-300 hover:-translate-y-2 relative z-10"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                  >
                    <Card className="bg-[#161b22]/80 backdrop-blur-md border border-[#30363d] hover:border-[#8b949e]/50 overflow-hidden group">
                      <div className="relative p-5 z-10">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className="h-12 w-12 rounded-full bg-[#21262d] flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <motion.div
                              className="absolute inset-0 rounded-full"
                              animate={{
                                boxShadow: [
                                  `0 0 0 0px ${method.color}00`,
                                  `0 0 0 4px ${method.color}30`,
                                  `0 0 0 8px ${method.color}00`
                                ]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1
                              }}
                            />
                            {method.icon}
                          </motion.div>
                          <div className="space-y-1">
                            <p className="text-sm text-[#8b949e]">{method.title}</p>
                            <p className="font-medium text-white text-lg flex items-center gap-1">
                              {method.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.a
                    key={index}
                    href={method.link}
                    target={method.title !== "Phone" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block transform transition-all duration-300 hover:-translate-y-2 relative z-10"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                  >
                    <Card className="bg-[#161b22]/80 backdrop-blur-md border border-[#30363d] hover:border-[#8b949e]/50 overflow-hidden group">
                      <div className="relative p-5 z-10">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className="h-12 w-12 rounded-full bg-[#21262d] flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <motion.div
                              className="absolute inset-0 rounded-full"
                              animate={{
                                boxShadow: [
                                  `0 0 0 0px ${method.color}00`,
                                  `0 0 0 4px ${method.color}30`,
                                  `0 0 0 8px ${method.color}00`
                                ]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1
                              }}
                            />
                            {method.icon}
                          </motion.div>
                          <div className="space-y-1">
                            <p className="text-sm text-[#8b949e]">{method.title}</p>
                            <p className="font-medium text-white text-lg flex items-center gap-1">
                              {method.value}
                              {method.title !== "Phone" && (
                                <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#8b949e]" />
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.a>
                )
              ))}
            </motion.div>
          </motion.div>
          
          {/* Contact Form Section */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            key={isInView ? "visible-form" : "hidden-form"}
            className="flex flex-col h-full"
          >
            <Card className="bg-[#0d1117] border-[#30363d] overflow-hidden relative group flex flex-col h-full">
              {/* Animated border and spotlight */}
              <div className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-r from-[#238636] via-[#1f6feb] to-[#8957e5] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
              
              <CardHeader className="bg-[#161b22] relative z-10">
                <div className="flex items-center gap-3 mb-1">
                  <MessageSquare className="h-5 w-5 text-[#1f6feb] align-middle" />
                  <CardTitle className="text-white flex items-center">
                    <span className="bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] text-transparent bg-clip-text">Send Me a Message</span>
                  </CardTitle>
                </div>
                <CardDescription className="text-[#8b949e]">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              
              <form
                action="https://formspree.io/f/xqaqyovq"
                method="POST"
                className="relative z-10"
              >
                <CardContent className="space-y-4 bg-[#161b22]">
                  <motion.div
                    custom={0}
                    variants={inputVariants}
                  >
                    <label htmlFor="name" className="text-sm font-medium block mb-1 text-[#c9d1d9]">Name</label>
                    <div className="relative group">
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-[#0d1117] border-[#30363d] text-white focus:border-[#1f6feb] focus:ring-[#1f6feb] pl-4 transition-all duration-300 group-hover:border-[#8b949e] placeholder:text-[#8b949e] placeholder:pl-0"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    custom={1}
                    variants={inputVariants}
                  >
                    <label htmlFor="email" className="text-sm font-medium block mb-1 text-[#c9d1d9]">Email</label>
                    <div className="relative group">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-[#0d1117] border-[#30363d] text-white focus:border-[#1f6feb] focus:ring-[#1f6feb] pl-4 transition-all duration-300 group-hover:border-[#8b949e] placeholder:text-[#8b949e] placeholder:pl-0"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    custom={2}
                    variants={inputVariants}
                  >
                    <label htmlFor="message" className="text-sm font-medium block mb-1 text-[#c9d1d9]">Message</label>
                    <div className="relative group">
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-[#0d1117] border-[#30363d] text-white focus:border-[#1f6feb] focus:ring-[#1f6feb] resize-none transition-all duration-300 group-hover:border-[#8b949e] placeholder:text-[#8b949e] placeholder:pl-0"
                      />
                    </div>
                  </motion.div>
                  <input type="hidden" name="_subject" value="New message from portfolio contact form" />
                </CardContent>
                
                <CardFooter className="bg-[#161b22]">
                  <Button
                    type="submit"
                    className="bg-[#238636] text-white border border-[#238636] hover:bg-[#2ea043] hover:border-[#3fb950] w-full group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span>Send Message</span>
                    </span>
                  </Button>
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
