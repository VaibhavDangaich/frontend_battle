'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Beauty Entrepreneur",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
        rating: 5,
        text: "This platform transformed my beauty business completely. The quality of products and customer service is absolutely exceptional. I've never been happier with a business partnership!"
    },
    {
        id: 2,
        name: "Maria Rodriguez",
        role: "Skincare Specialist",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
        rating: 5,
        text: "Amazing experience from start to finish. The support team is incredible and the product range is exactly what my customers were looking for. Highly recommend!"
    },
    {
        id: 3,
        name: "Emily Chen",
        role: "Makeup Artist",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
        rating: 5,
        text: "I've been selling beauty products for years, but this platform made everything so much easier. The quality is outstanding and my clients absolutely love everything!"
    },
    {
        id: 4,
        name: "Jessica Williams",
        role: "Beauty Blogger",
        image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300",
        rating: 5,
        text: "Exceptional products and service! The entire experience has been seamless. My audience loves the recommendations and I couldn't be more satisfied with the results."
    },
    {
        id: 5,
        name: "Amanda Davis",
        role: "Salon Owner",
        image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
        rating: 5,
        text: "This partnership has been a game-changer for my salon. The product quality exceeds expectations and my clients are thrilled with the results they're seeing."
    },
    {
        id: 6,
        name: "Lisa Thompson",
        role: "Beauty Consultant",
        image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300",
        rating: 5,
        text: "Outstanding experience! The team is professional, the products are top-notch, and the support is incredible. I recommend this to all my fellow beauty professionals."
    }
];

export default function TestimonialsSection() {
    const [isAnimated, setIsAnimated] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    setTimeout(() => {
                        setIsAnimated(true);
                    }, 500);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const scrollToTestimonial = (index) => {
        setCurrentIndex(index);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: index * scrollContainerRef.current.offsetWidth * 0.9,
                behavior: 'smooth',
            });
        }
    };

    const nextTestimonial = () => scrollToTestimonial((currentIndex + 1) % testimonials.length);
    const prevTestimonial = () => scrollToTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
                <div className="text-center mb-8">
                    <p className="text-purple-300 text-sm font-medium mb-4 tracking-wider uppercase">
                        Customer Testimonials
                    </p>
                </div>

                <div className="absolute top-1/2 left-1/2 z-20 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 h-32 pointer-events-none">
                    <div className={`text-4xl sm:text-5xl md:text-8xl font-bold text-white transition-all duration-1000 ease-out ${isAnimated ? '-translate-x-32 opacity-0' : 'translate-x-0 opacity-100'}`}>Happy</div>
                    <div className={`w-px bg-white/30 mx-4 md:mx-8 transition-all duration-1000 ease-out ${isAnimated ? 'h-20 opacity-0' : 'h-0 opacity-100'}`} />
                    <div className={`text-4xl sm:text-5xl md:text-8xl font-bold text-white transition-all duration-1000 ease-out ${isAnimated ? 'translate-x-32 opacity-0' : 'translate-x-0 opacity-100'}`}>Sellers</div>
                </div>

                <div className={`w-full max-w-7xl transition-all duration-1000 ease-out delay-500 ${isAnimated ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-8'}`}>
                    <div className="flex justify-center gap-4 mb-6 sm:mb-8">
                        <button onClick={prevTestimonial} className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95">
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <button onClick={nextTestimonial} className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95">
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>

                    <div ref={scrollContainerRef} className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 sm:px-0">
                        {testimonials.map((t, i) => (
                            <div key={t.id} className={`flex-shrink-0 w-[90%] sm:w-96 bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 transition-all duration-500 hover:bg-white/15 hover:scale-105 hover:border-white/30 ${i === currentIndex ? 'ring-2 ring-white/50 scale-105' : ''}`}>
                                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300 mb-4 sm:mb-6" />
                                <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-light">"{t.text}"</p>
                                <div className="flex gap-1 mb-4 sm:mb-6">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img src={t.image} alt={t.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white/30" />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-base sm:text-lg">{t.name}</h4>
                                        <p className="text-purple-300 text-xs sm:text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                        {testimonials.map((_, i) => (
                            <button key={i} onClick={() => scrollToTestimonial(i)} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50 hover:scale-110'}`} />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}