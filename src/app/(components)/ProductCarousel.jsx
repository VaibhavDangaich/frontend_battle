'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Star } from 'lucide-react';


const products = [
    {
        id: '1',
        name: 'Radiant Glow Serum',
        price: '$89',
        originalPrice: '$120',
        isNew: true,
        rating: 4.8,
        category: 'Skincare',
        primaryImage: 'https://images.pexels.com/photos/7755659/pexels-photo-7755659.jpeg?auto=compress&cs=tinysrgb&w=400',
        hoverImage: 'https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Intensive hydrating serum with vitamin C'
    },
    {
        id: '2',
        name: 'Velvet Matte Lipstick',
        price: '$45',
        isNew: true,
        rating: 4.9,
        category: 'Makeup',
        primaryImage: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
        hoverImage: 'https://images.pexels.com/photos/3785803/pexels-photo-3785803.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Long-lasting matte finish in 12 shades'
    },
    {
        id: '3',
        name: 'Golden Hour Palette',
        price: '$78',
        originalPrice: '$95',
        isNew: false,
        rating: 4.7,
        category: 'Makeup',
        primaryImage: 'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=400',
        hoverImage: 'https://images.pexels.com/photos/3785815/pexels-photo-3785815.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Warm-toned eyeshadow palette with 16 colors'
    },
    {
        id: '4',
        name: 'Luxury Face Cream',
        price: '$156',
        isNew: true,
        rating: 4.6,
        category: 'Skincare',
        primaryImage: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
        hoverImage: 'https://images.pexels.com/photos/7755705/pexels-photo-7755705.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Anti-aging cream with peptides and retinol'
    },
    {
        id: '5',
        name: 'Illuminating Highlighter',
        price: '$52',
        isNew: false,
        rating: 4.8,
        category: 'Makeup',
        primaryImage: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
        hoverImage: 'https://images.pexels.com/photos/3785830/pexels-photo-3785830.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Multi-dimensional glow with champagne undertones'
    }
];

export default function ProductCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [addingToBag, setAddingToBag] = useState(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(products.length / 2));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + Math.ceil(products.length / 2)) % Math.ceil(products.length / 2));
    };

    const handleAddToBag = async (productId) => {
        setAddingToBag(productId);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1200));
        setAddingToBag(null);
    };

    const visibleProducts = products.slice(currentIndex * 2, currentIndex * 2 + 2);

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover our latest collection of premium beauty products, carefully curated for the modern beauty enthusiast
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 rounded-3xl overflow-hidden shadow-2xl flex lg:flex-row sm:flex-col md:flex-row">
                <div className="flex flex-col lg:flex-row w-full">
                    {visibleProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="flex-1 min-w-[100%] lg:min-w-0 relative overflow-hidden group"
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 ">
                                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                                    <img
                                        src={product.primaryImage}
                                        alt={product.name}
                                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${hoveredProduct === product.id ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                                            }`}
                                    />
                                    <img
                                        src={product.hoverImage}
                                        alt={`${product.name} alternate view`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${hoveredProduct === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                                            }`}
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between p-8">
                                {/* Top Section */}
                                <div className="flex justify-between items-start">
                                    {product.isNew && (
                                        <div className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-semibold transform transition-all duration-300 group-hover:scale-105 group-hover:bg-white">
                                            NEW
                                        </div>
                                    )}
                                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                                    </div>
                                </div>

                                {/* Bottom Section */}
                                <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                                    <div className="mb-6">
                                        <p className="text-white/80 text-sm mb-2 transform transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                                            {product.category}
                                        </p>
                                        <h3 className="text-2xl font-bold text-white mb-2 transform transition-all duration-300 delay-75 group-hover:translate-y-0 translate-y-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-white/90 text-sm mb-4 transform transition-all duration-300 delay-100 group-hover:translate-y-0 translate-y-2">
                                            {product.description}
                                        </p>
                                        <div className="flex items-center gap-3 mb-6 transform transition-all duration-300 delay-150 group-hover:translate-y-0 translate-y-2">
                                            <span className="text-2xl font-bold text-white">{product.price}</span>
                                            {product.originalPrice && (
                                                <span className="text-lg text-white/60 line-through">{product.originalPrice}</span>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleAddToBag(product.id)}
                                        disabled={addingToBag === product.id}
                                        className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-4 px-6 rounded-xl transform transition-all duration-300 delay-200 group-hover:translate-y-0 translate-y-4 group-hover:opacity-100 opacity-90 hover:scale-105 active:scale-95"
                                    >
                                        {addingToBag === product.id ? (
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                                                Adding...
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center gap-2">
                                                <ShoppingBag className="w-5 h-5" />
                                                Add to Bag
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Divider */}
                            {index === 0 && visibleProducts.length > 1 && (
                                <div className="absolute right-0 top-0 w-px h-full bg-white/20" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 gap-3">
                {Array.from({ length: Math.ceil(products.length / 2) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-gray-900 scale-125'
                                : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}