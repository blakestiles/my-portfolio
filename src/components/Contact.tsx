
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, User, Send, Github, Linkedin } from 'lucide-react';
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

  // Social media links
  const socialLinks = [
    { name: "GitHub", icon: <Github />, url: "https://github.com/sainath-gandhe", color: "#8b949e" },
    { name: "LinkedIn", icon: <Linkedin />, url: "https://linkedin.com/in/sainath-gandhe", color: "#1f6feb" }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 relative"
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
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            key={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-white bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] text-transparent bg-clip-text"
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
              className="space-y-8"
              variants={containerVariants}
            >
              <motion.div 
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
                variants={itemVariants}
              >
                <div className="glass-card p-6 rounded-lg border-cyber" style={{"--cyber-color1": "#238636", "--cyber-color2": "#3fb950"} as React.CSSProperties}>
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="h-14 w-14 rounded-full bg-[#238636]/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Phone className="h-6 w-6 text-[#238636]" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-[#8b949e]">Phone</p>
                      <p className="font-medium text-white text-lg">714-519-7072</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
                variants={itemVariants}
              >
                <div className="glass-card p-6 rounded-lg border-cyber" style={{"--cyber-color1": "#1f6feb", "--cyber-color2": "#58a6ff"} as React.CSSProperties}>
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="h-14 w-14 rounded-full bg-[#1f6feb]/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Mail className="h-6 w-6 text-[#1f6feb]" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-[#8b949e]">Email</p>
                      <p className="font-medium text-white text-lg">gandhe.sainath@csu.fullerton.edu</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
                variants={itemVariants}
              >
                <div className="glass-card p-6 rounded-lg border-cyber" style={{"--cyber-color1": "#8b949e", "--cyber-color2": "#c9d1d9"} as React.CSSProperties}>
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="h-14 w-14 rounded-full bg-[#8b949e]/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <User className="h-6 w-6 text-[#8b949e]" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-[#8b949e]">Location</p>
                      <p className="font-medium text-white text-lg">Fullerton, CA</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Media Links */}
              <motion.div variants={itemVariants} className="flex gap-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-[#21262d] flex items-center justify-center text-white hover:bg-[#30363d] transition-all duration-300"
                    whileHover={{ 
                      scale: 1.15,
                      boxShadow: `0 0 15px ${social.color}`,
                      color: social.color
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0, transition: { delay: 0.3 + index * 0.1 } } : {}}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            key={isInView ? "visible-form" : "hidden-form"}
          >
            <Card className="repo-card overflow-hidden relative">
              {/* Animated border */}
              <div className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-r from-[#238636] via-[#1f6feb] to-[#8957e5] opacity-30 animate-pulse-slow"></div>
              
              <div className="relative z-10">
                <CardHeader className="bg-gradient-to-b from-[#161b22] to-transparent">
                  <CardTitle className="text-white flex items-center">
                    <Send className="h-5 w-5 mr-2 text-[#1f6feb]" />
                    <span className="bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] text-transparent bg-clip-text">Send Me a Message</span>
                  </CardTitle>
                  <CardDescription className="text-[#8b949e]">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit} className="relative z-10">
                  <CardContent className="space-y-4">
                    <motion.div
                      custom={0}
                      variants={inputVariants}
                    >
                      <label htmlFor="name" className="text-sm font-medium block mb-1 text-[#c9d1d9]">Name</label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-[#0d1117] border-[#30363d] text-white focus:border-[#1f6feb] focus:ring-[#1f6feb] pl-10"
                        />
                        <User className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-[#8b949e]" />
                      </div>
                    </motion.div>
                    <motion.div
                      custom={1}
                      variants={inputVariants}
                    >
                      <label htmlFor="email" className="text-sm font-medium block mb-1 text-[#c9d1d9]">Email</label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-[#0d1117] border-[#30363d] text-white focus:border-[#1f6feb] focus:ring-[#1f6feb] pl-10"
                        />
                        <Mail className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-[#8b949e]" />
                      </div>
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
                        className="gh-button-primary w-full group relative overflow-hidden" 
                        disabled={isSubmitting}
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#238636] to-[#3fb950] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        <span className="relative z-10 flex items-center justify-center">
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Sending...</span>
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              <span>Send Message</span>
                            </span>
                          )}
                        </span>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </form>
              </div>

              {/* Light effect in the corner */}
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 bg-[#1f6feb] rounded-full opacity-10 filter blur-xl"
                style={{ 
                  backgroundImage: 'radial-gradient(circle, #1f6feb 0%, transparent 70%)',
                  animation: 'pulse-subtle 4s infinite'
                }}
              ></div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
