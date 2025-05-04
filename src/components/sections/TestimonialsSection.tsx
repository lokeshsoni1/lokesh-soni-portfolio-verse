
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "बहुत बेहतरीन काम किया लोकेश ने, समय पर डिलीवरी मिली और क्वालिटी शानदार थी।",
    author: "राजेश कुमार",
    role: "व्यापारी",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    text: "UI डिज़ाइन देखकर क्लाइंट खुश हो गया। धन्यवाद लोकेश!",
    author: "अमित शर्मा",
    role: "स्टार्टअप संस्थापक",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 3,
    text: "Data entry का काम प्रोफेशनली और जल्दी पूरा किया गया। शानदार अनुभव।",
    author: "प्रिया वर्मा",
    role: "स्मॉल बिज़नेस ओनर",
    avatar: "https://i.pravatar.cc/150?img=13"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slidesRef = useRef<HTMLDivElement>(null);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title animate-on-scroll">Testimonials</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Here's what my clients have to say about their experience working with me.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          {/* Testimonial slider */}
          <div 
            ref={slidesRef}
            className="relative overflow-hidden min-h-[260px]"
          >
            <div 
              className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map(testimonial => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-lg p-8 border border-border shadow-md relative">
                    <div className="text-primary/20 absolute top-4 left-4">
                      <Quote size={48} />
                    </div>
                    
                    <div className="relative z-10">
                      <p className="text-lg mb-6 pt-6">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-background w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-border hover:bg-muted transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-background w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-border hover:bg-muted transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-primary w-6" 
                    : "bg-muted hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
