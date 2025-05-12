
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, User, Send, Github, Linkedin, ExternalLink, MessageSquare } from 'lucide-react';
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
      url: "https://github.com/sainath-gandhe", 
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

  // Animation for particle effects
  const particleCount = 20;
  const particles = Array.from({ length: particleCount });

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
        
        {/* Animated particles */}
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#1f6feb]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.1,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, Math.random() * -200 - 50],
              opacity: [null, 0],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
        ))}
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
          {/* Contact Methods Section */}
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
            
            {/* Contact Cards with Neural Connection Animation */}
            <motion.div 
              className="space-y-6 neural-container"
              variants={containerVariants}
            >
              {contactMethods.map((method, index) => (
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
                    {/* Gradient border animation */}
                    <div 
                      className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                      style={{backgroundImage: `linear-gradient(to right, ${method.color}, ${method.color}60, ${method.color})`}}
                    />
                    
                    <div className="relative p-5 z-10">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="h-14 w-14 rounded-full bg-[#21262d] flex items-center justify-center shadow-lg relative neural-node"
                          style={{ animationDelay: `${index * 0.3}s` }}
                          whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {/* Pulsing ring */}
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
                          <p className="font-medium text-white text-lg flex items-center gap-1 group-hover:text-transparent group-hover:bg-clip-text" 
                             style={{backgroundImage: `linear-gradient(to right, ${method.color}, ${method.color}90)`}}>
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
              ))}

              {/* SVG Connection Lines */}
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {contactMethods.slice(0, -1).map((_, i) => (
                  <motion.line
                    key={i}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 0.2 } : { pathLength: 0, opacity: 0 }}
                    transition={{ delay: 0.5 + i * 0.3, duration: 1.5 }}
                    x1="34"
                    y1={90 + i * 95}
                    x2="34"
                    y2={160 + i * 95}
                    stroke={contactMethods[i].color}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="connection-line"
                  />
                ))}
              </svg>

              {/* Social Media Links */}
              <motion.div variants={itemVariants} className="pt-8">
                <p className="text-[#8b949e] mb-4 font-medium">Connect on social media:</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        scale: 1,
                        transition: { delay: 0.8 + social.delay, duration: 0.3 } 
                      } : {}}
                    >
                      <motion.div
                        className="h-12 w-12 rounded-lg bg-[#21262d] flex items-center justify-center text-white hover:bg-[#30363d] transition-all duration-300 relative z-10 overflow-hidden shadow-lg"
                        whileHover={{ 
                          scale: 1.15,
                          boxShadow: `0 0 20px ${social.color}40`,
                        }}
                      >
                        {/* Gradient background on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br transition-opacity duration-300"
                             style={{ backgroundImage: `linear-gradient(to bottom right, ${social.color}, ${social.color}60)` }} />
                        
                        <motion.span
                          animate={{ y: social.name === "Email" ? 0 : [0, -1, 1, 0] }}
                          transition={{ 
                            repeat: Infinity, 
                            repeatDelay: 3,
                            duration: 1 
                          }}
                          style={{color: social.color}}
                        >
                          {social.icon}
                        </motion.span>
                      </motion.div>
                      
                      {/* Tooltip */}
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-[#21262d] text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        {social.name}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form Section */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            key={isInView ? "visible-form" : "hidden-form"}
          >
            <Card className="repo-card overflow-hidden relative card-3d group">
              {/* Animated 3D effect */}
              <div className="card-3d-face">
                {/* Animated border and spotlight */}
                <div className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-r from-[#238636] via-[#1f6feb] to-[#8957e5] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                <div 
                  className="absolute -inset-[150px] opacity-0 group-hover:opacity-30 transition-all duration-700 z-0"
                  style={{
                    background: `radial-gradient(circle, #1f6feb50 0%, transparent 70%)`,
                    transform: 'translateZ(0)',
                  }}
                ></div>
                
                <CardHeader className="bg-gradient-to-b from-[#161b22] to-[#161b22]/90 relative z-10">
                  <div className="flex items-center gap-3 mb-1">
                    <MessageSquare className="h-5 w-5 text-[#1f6feb]" />
                    <CardTitle className="text-white">
                      <span className="bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] text-transparent bg-clip-text">Send Me a Message</span>
                    </CardTitle>
                  </div>
                  <CardDescription className="text-[#8b949e]">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                
                <form onSubmit={handleSubmit} className="relative z-10">
                  <CardContent className="space-y-4 bg-[#161b22]/90">
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
                          className="bg-[#0d1117] border-[#30363d] text-white focus:border-[#1f6feb] focus:ring-[#1f6feb] pl-10 transition-all duration-300 group-hover:border-[#8b949e]"
                        />
                        <User className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-[#8b949e] group-hover:text-[#1f6feb] transition-colors" />
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
                          className="bg-[#0d1117] border-[#30363d] text-white focus:border-[#1f6feb] focus:ring-[#1f6feb] pl-10 transition-all duration-300 group-hover:border-[#8b949e]"
                        />
                        <Mail className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-[#8b949e] group-hover:text-[#1f6feb] transition-colors" />
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
                          className="bg-[#0d1117] border-[#30363d] text-white focus:border-[#1f6feb] focus:ring-[#1f6feb] resize-none transition-all duration-300 group-hover:border-[#8b949e]"
                        />
                        <motion.div 
                          className="absolute top-3 right-3 w-5 h-5"
                          initial={{ opacity: 0.5 }}
                          animate={{ 
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity 
                          }}
                        >
                          <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8b949e]">
                            <path d="M20 20 L80 20 L80 80 L20 80 Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 5" />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                  </CardContent>
                  
                  <CardFooter className="bg-[#161b22]/90">
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
                        <motion.div 
                          className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#238636] to-[#3fb950] opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.5 }}
                        />
                        
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
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
