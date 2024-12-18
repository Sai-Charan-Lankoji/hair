import React from 'react'; 
import TestimonialCard from './TestimonialCard'; 
import { testimonials } from './data'; 
import { useTestimonialScroll } from './hooks/useTestimonialScroll'; 
import { testimonialStyles as styles } from './utils/styles';
import { cn } from './utils/cn'; 

const Testimonials: React.FC = () => {   
  const { containerRef, scrollerRef, start } = useTestimonialScroll();

  // Double the testimonials for seamless infinite scroll   
  const doubledTestimonials = [...testimonials, ...testimonials];    

  return (     
    <div className="mx-auto px-4 py-16 bg-[#f4e4cd]">       
      <h2 className={styles.title}>         
        What People Say About Us       
      </h2>        
      <div          
        ref={containerRef}         
        className={styles.scrollContainer}       
      >         
        <div            
          ref={scrollerRef}           
          className={cn(
            styles.cardContainer,
            start && "animate-scroll"
          )}         
        >           
          {doubledTestimonials.map((testimonial, index) => (             
            <TestimonialCard               
              key={`${testimonial.id}-${index}`}               
              {...testimonial}             
            />           
          ))}         
        </div>       
      </div>     
    </div>   
  ); 
};  

export default Testimonials;