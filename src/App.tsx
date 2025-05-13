
import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  // Handle smooth scrolling for hash links
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleSmoothScroll = (event: any) => {
      // Check if the clicked element is an anchor tag with a hash
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetElement = document.getElementById(targetId.substring(1));
          
          if (targetElement) {
            event.preventDefault();
            window.scrollTo({
              top: targetElement.offsetTop - 70, // Adjust for header height
              behavior: 'smooth'
            });
            
            // Update URL without page reload
            window.history.pushState(null, '', targetId);
          }
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
