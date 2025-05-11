
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, User, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { toast } = useToast();
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
    
    // Simulate form submission
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

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
            <p className="text-[#8b949e] mb-8">
              I'm currently looking for new opportunities. Whether you have a question, project idea, or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#238636]/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-[#238636]" />
                </div>
                <div>
                  <p className="text-sm text-[#8b949e]">Phone</p>
                  <p className="font-medium text-white">714-519-7072</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#1f6feb]/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#1f6feb]" />
                </div>
                <div>
                  <p className="text-sm text-[#8b949e]">Email</p>
                  <p className="font-medium text-white">gandhe.sainath@csu.fullerton.edu</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#8b949e]/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-[#8b949e]" />
                </div>
                <div>
                  <p className="text-sm text-[#8b949e]">Location</p>
                  <p className="font-medium text-white">Fullerton, CA</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="gh-button-primary w-full" disabled={isSubmitting}>
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
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
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
