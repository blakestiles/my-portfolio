import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Send, ExternalLink, MessageSquare, MapPin } from 'lucide-react';
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

  const [localTime, setLocalTime] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      setLocalTime(time);
      const hour = parseInt(new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', hour: 'numeric', hour12: false }));
      setIsAvailable(hour >= 9 && hour < 22);
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xqaqyovq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`Submission failed: ${res.status}`);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try emailing me directly.",
        variant: "destructive",
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
      icon: <MapPin className="h-6 w-6 text-[#8b949e]" />,
      title: "Location",
      value: "Fullerton, CA",
      link: "https://maps.google.com/?q=Fullerton,CA",
      color: "#8b949e",
      gradient: "from-[#8b949e] to-[#c9d1d9]"
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
            className="relative"
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <motion.div
                className="p-6 bg-[#161b22] border border-[#30363d] rounded-lg shadow-lg mb-6"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.5)" }}
              >
                <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-4">Quick Facts</p>
                <div className="space-y-3">
                  {[
                    { label: 'Response Time', value: 'Within 24 hours', icon: '⚡' },
                    { label: 'Preferred Contact', value: 'Email or LinkedIn', icon: '✉️' },
                    { label: 'Open To', value: 'Full-time · Internships · Contracts', icon: '🎯' },
                    { label: 'Time Zone', value: 'PST (UTC−8)', icon: '🌐' },
                    { label: 'Status', value: 'Actively interviewing', icon: '🟢' },
                  ].map((fact) => (
                    <div key={fact.label} className="flex items-start gap-3">
                      <span className="text-base shrink-0 mt-0.5">{fact.icon}</span>
                      <div>
                        <p className="text-[10px] text-[#8b949e] uppercase tracking-wider">{fact.label}</p>
                        <p className="text-sm text-[#c9d1d9] font-medium">{fact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Cards */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
            >
              {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target={method.title === "Location" ? "_blank" : undefined}
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
                              {method.title === "Location" && (
                                <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#8b949e]" />
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.a>
              ))}
            </motion.div>

            {/* Live timezone indicator */}
            {localTime && (
              <motion.div
                variants={itemVariants}
                className="mt-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-[#161b22] border border-[#30363d] w-fit"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{
                    backgroundColor: isAvailable ? '#3fb950' : '#e3b341',
                    boxShadow: isAvailable ? '0 0 6px #3fb95080' : '0 0 6px #e3b34180',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
                <span className="text-xs text-[#8b949e] font-mono">
                  {localTime} PST
                </span>
                <span className="text-[10px] text-[#30363d]">·</span>
                <span className={`text-xs font-medium ${isAvailable ? 'text-[#3fb950]' : 'text-[#e3b341]'}`}>
                  {isAvailable ? 'Available' : 'Away'}
                </span>
              </motion.div>
            )}

            {/* Available for tags */}
            <motion.div
              variants={itemVariants}
              className="mt-4 p-4 bg-[#161b22] border border-[#30363d] rounded-lg"
            >
              <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-3">Available for</p>
              <div className="flex flex-wrap gap-2">
                {['Full-time Roles', 'AI Projects', 'Internships', 'Collaborations'].map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-[#238636]/10 text-[#3fb950] border border-[#238636]/30 hover:bg-[#238636]/20 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col h-full"
          >
            <div className="relative flex flex-col h-full rounded-xl overflow-hidden border border-[#30363d] bg-[#0d1117] group">
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: 'linear-gradient(#0d1117, #0d1117) padding-box, linear-gradient(135deg, #238636, #1f6feb, #8957e5) border-box', border: '1px solid transparent' }} />

              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-[#30363d] bg-[#161b22]">
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-8 w-8 rounded-lg bg-[#1f6feb]/15 border border-[#1f6feb]/30 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-[#1f6feb]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] bg-clip-text text-transparent">
                      Send Me a Message
                    </h3>
                    <p className="text-[#8b949e] text-xs">Typically replies within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Form body */}
              <form onSubmit={handleSubmit} className="flex flex-col flex-1 p-6 gap-5">
                {/* Name field */}
                <motion.div custom={0} variants={inputVariants} className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#8b949e] flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1f6feb]" />
                    Full Name
                  </label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#161b22] border-[#30363d] text-white h-11 pl-4 pr-4 focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb]/30 hover:border-[#8b949e]/50 placeholder:text-[#8b949e]/50 transition-all duration-200 rounded-lg"
                    />
                  </div>
                </motion.div>

                {/* Email field */}
                <motion.div custom={1} variants={inputVariants} className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#8b949e] flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#238636]" />
                    Email Address
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="e.g. jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#161b22] border-[#30363d] text-white h-11 pl-4 pr-4 focus:border-[#238636] focus:ring-1 focus:ring-[#238636]/30 hover:border-[#8b949e]/50 placeholder:text-[#8b949e]/50 transition-all duration-200 rounded-lg"
                    />
                  </div>
                </motion.div>

                {/* Message field */}
                <motion.div custom={2} variants={inputVariants} className="space-y-1.5 flex-1">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#8b949e] flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8957e5]" />
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What's on your mind? A project idea, job opportunity, or just saying hi..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-[#161b22] border-[#30363d] text-white focus:border-[#8957e5] focus:ring-1 focus:ring-[#8957e5]/30 hover:border-[#8b949e]/50 resize-none placeholder:text-[#8b949e]/50 transition-all duration-200 rounded-lg w-full"
                  />
                </motion.div>

                {/* Submit */}
                <motion.div custom={3} variants={inputVariants}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 bg-gradient-to-r from-[#238636] to-[#2ea043] text-white border-0 hover:from-[#2ea043] hover:to-[#3fb950] disabled:opacity-50 disabled:cursor-not-allowed font-semibold tracking-wide transition-all duration-300 group rounded-lg shadow-lg shadow-[#238636]/20 hover:shadow-[#238636]/40"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>

                {/* Footer note */}
                <p className="text-center text-[10px] text-[#8b949e]/50 -mt-2">
                  🔒 Your information is never shared with third parties
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
