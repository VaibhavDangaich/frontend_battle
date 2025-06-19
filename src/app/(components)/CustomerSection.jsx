'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const CustomerSection = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const [nextSet, setNextSet] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Logo sets - each set contains 6 logos
    const logoSets = [
        [
            {
                name: 'Perplexity',
                component: (
                    <div className="text-2xl font-bold text-white">
                        <span className="text-blue-400">※</span> perplexity
                    </div>
                )
            },
            {
                name: 'Supercell',
                component: (
                    <div className="text-2xl font-black text-white uppercase tracking-wider">
                        SUP<br />
                        ER<br />
                        CELL
                    </div>
                )
            },
            {
                name: 'Monzo',
                component: (
                    <div className="text-3xl font-bold text-white lowercase">
                        monzo
                    </div>
                )
            },
            {
                name: 'Raycast',
                component: (
                    <div className="flex items-center gap-2 text-white">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-blue-500 rounded"></div>
                        <span className="text-xl font-medium">Raycast</span>
                    </div>
                )
            },
            {
                name: 'Retool',
                component: (
                    <div className="flex items-center gap-2 text-white">
                        <div className="text-orange-400 text-xl">⚡</div>
                        <span className="text-xl font-semibold">Retool</span>
                    </div>
                )
            },
            {
                name: 'Mercury',
                component: (
                    <div className="flex items-center gap-2 text-white">
                        <div className="w-6 h-6 rounded-full border-2 border-white"></div>
                        <span className="text-xl font-medium uppercase tracking-wide">MERCURY</span>
                    </div>
                )
            }
        ],
        [
            {
                name: 'Ramp',
                component: (
                    <div className="flex items-center gap-2 text-white">
                        <div className="text-green-400 text-xl">📈</div>
                        <span className="text-xl font-medium">ramp</span>
                    </div>
                )
            },
            {
                name: 'OpenAI',
                component: (
                    <div className="flex items-center gap-2 text-white">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                        <span className="text-xl font-semibold">OpenAI</span>
                    </div>
                )
            },
            {
                name: 'Scale',
                component: (
                    <div className="text-2xl font-bold text-white lowercase">
                        scale
                    </div>
                )
            },
            {
                name: 'Boom',
                component: (
                    <div className="flex items-center gap-2 text-white">
                        <div className="text-blue-400 text-xl">💥</div>
                        <span className="text-xl font-black uppercase">BOOM</span>
                    </div>
                )
            },
            {
                name: 'Cash App',
                component: (
                    <div className="flex items-center gap-2 text-white">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white font-bold text-sm">$</div>
                        <span className="text-xl font-semibold">Cash App</span>
                    </div>
                )
            },
            {
                name: 'Vercel',
                component: (
                    <div className="flex items-center gap-2 text-white">
                        <div className="w-0 h-0 border-l-3 border-r-3 border-b-5 border-transparent border-b-white"></div>
                        <span className="text-xl font-medium">Vercel</span>
                    </div>
                )
            }
        ],
        [
            {
                name: 'GitHub',
                component: (
                    <div className="flex items-center gap-2 text-white">
                        <div className="text-xl">🐙</div>
                        <span className="text-xl font-semibold">GitHub</span>
                    </div>
                )
            },
            {
                name: 'Stripe',
                component: (
                    <div className="text-2xl font-bold text-white">
                        Stripe
                    </div>
                )
            },
            {
                name: 'Notion',
                component: (
                    <div className="flex items-center gap-2 text-white">
                        <div className="text-xl">📝</div>
                        <span className="text-xl font-semibold">Notion</span>
                    </div>
                )
            },
            {
                name: 'Discord',
                component: (
                    <div className="flex items-center gap-2 text-white">
                        <div className="w-6 h-6 bg-indigo-500 rounded-full"></div>
                        <span className="text-xl font-semibold">Discord</span>
                    </div>
                )
            },
            {
                name: 'Figma',
                component: (
                    <div className="flex items-center gap-2 text-white">
                        <div className="text-orange-400 text-xl">🎨</div>
                        <span className="text-xl font-semibold">Figma</span>
                    </div>
                )
            },
            {
                name: 'Spotify',
                component: (
                    <div className="flex items-center gap-2 text-white">
                        <div className="text-green-500 text-xl">🎵</div>
                        <span className="text-xl font-bold">Spotify</span>
                    </div>
                )
            }
        ]
    ];

    // Smooth transition between logo sets
    const transitionToNextSet = () => {
        if (isHovered) return;

        setIsTransitioning(true);

        // After fade out, change the sets
        setTimeout(() => {
            setCurrentSet(nextSet);
            setNextSet((nextSet + 1) % logoSets.length);
            setIsTransitioning(false);
        }, 400); // Half of transition duration
    };

    // Auto-rotate logos every 4 seconds
    useEffect(() => {
        const interval = setInterval(transitionToNextSet, 1000);
        return () => clearInterval(interval);
    }, [nextSet, isHovered]);

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Container with hover overlay */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Logo Grid */}
                    <div
                        className={`grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 transition-all duration-800 ease-in-out ${isHovered ? 'blur-sm opacity-40' : 'blur-0 opacity-100'
                            } ${isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
                            }`}
                    >
                        {logoSets[currentSet].map((logo, index) => (
                            <div
                                key={`${currentSet}-${index}`}
                                className="flex items-center justify-center p-6 transition-all duration-500 ease-out transform"
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                }}
                            >
                                <div className="opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                                    {logo.component}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Hover Overlay with Light Blur Background */}
                    <div
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${isHovered
                                ? 'opacity-100 pointer-events-auto'
                                : 'opacity-0 pointer-events-none'
                            }`}
                    >
                        <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md rounded-full px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/5 flex items-center gap-3 group">
                            Meet our customers
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Subtle gradient overlays for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 pointer-events-none" />
        </section>
    );
};

export default CustomerSection;