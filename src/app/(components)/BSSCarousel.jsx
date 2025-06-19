'use client';

import React, { useState, useEffect } from 'react';
import { CreditCard, Zap, Database, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const BSSCarousel = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [progress, setProgress] = useState(0);
    const slideDuration = 5000; // 5 seconds per slide

    const tabs = [
        {
            id: 'billing',
            title: 'BILLING',
            icon: CreditCard,
            color: 'bg-pink-200',
            content: {
                title: 'Smart Billing System',
                description: 'AI-powered insights that predict customer needs and drive personalized experiences.',
                mockup: {
                    type: 'billing',
                    amount: '€89.00',
                    details: ['Monthly subscription', 'Premium features', 'Advanced analytics']
                }
            }
        },
        {
            id: 'charging',
            title: 'CHARGING',
            icon: Zap,
            color: 'bg-yellow-200',
            content: {
                title: 'Online Charging System',
                description: 'AI-powered insights that predict customer needs and drive personalized experiences.',
                mockup: {
                    type: 'charging',
                    amount: '€0.00',
                    trafficType: 'Data usage monitoring',
                    location: 'Network optimization'
                }
            }
        },
        {
            id: 'catalog',
            title: 'CATALOG',
            icon: Database,
            color: 'bg-green-200',
            content: {
                title: 'Product Catalog',
                description: 'Intuitive tools that empower customers to manage their accounts with ease, freeing up your team.',
                mockup: {
                    type: 'catalog',
                    apps: ['Netflix', 'Apple Music', 'Spotify'],
                    plan: 'TOTAL UNLIMITED',
                    features: ['Unlimited minutes', 'Premium access']
                }
            }
        },
        {
            id: 'events',
            title: 'EVENTS',
            icon: Calendar,
            color: 'bg-cyan-200',
            content: {
                title: 'Event Management',
                description: 'Comprehensive event tracking and management system for all your business operations.',
                mockup: {
                    type: 'events',
                    events: ['System alerts', 'User activities', 'Performance metrics'],
                    status: 'Active monitoring'
                }
            }
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    setActiveTab(current => (current + 1) % tabs.length);
                    return 0;
                }
                return prev + (100 / (slideDuration / 100));
            });
        }, 100);

        return () => clearInterval(interval);
    }, [tabs.length]);

    const handleTabClick = (index) => {
        setActiveTab(index);
        setProgress(0);
    };

    const renderMockup = (mockup) => {
        switch (mockup.type) {
            case 'billing':
                return (
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                        <div className="text-center mb-4">
                            <div className="text-4xl font-bold text-gray-800">{mockup.amount}</div>
                            <div className="text-sm text-gray-600 mt-2">Current balance</div>
                        </div>
                        <div className="space-y-2">
                            {mockup.details.map((detail, idx) => (
                                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-600">{detail}</span>
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'charging':
                return (
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                        <div className="text-center mb-6">
                            <div className="text-4xl font-bold text-gray-800">{mockup.amount}</div>
                            <div className="text-sm text-gray-600 mt-2">Current charges</div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-gray-100 rounded-lg p-4">
                                <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Traffic Type</div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm font-medium">{mockup.trafficType}</span>
                                </div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-4">
                                <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Location</div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-sm font-medium">{mockup.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'catalog':
                return (
                    <div className="space-y-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-3">Add-ons</div>
                            <div className="flex gap-3">
                                {mockup.apps.map((app, idx) => (
                                    <div key={idx} className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">{app[0]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                            <div className="text-xs text-green-600 uppercase tracking-wide mb-2">Mobile App Only</div>
                            <div className="text-lg font-bold text-gray-800 mb-2">{mockup.plan}</div>
                            <div className="space-y-1">
                                {mockup.features.map((feature, idx) => (
                                    <div key={idx} className="text-sm text-gray-600">{feature}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'events':
                return (
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                        <div className="text-center mb-4">
                            <div className="text-2xl font-bold text-gray-800">{mockup.status}</div>
                            <div className="text-sm text-gray-600 mt-2">System status</div>
                        </div>
                        <div className="space-y-3">
                            {mockup.events.map((event, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm text-gray-700">{event}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[#9FB4BA] flex flex-col items-center justify-center p-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                    Unparalleled
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-700">
                    BSS/OSS Capabilities
                </h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 mb-8 bg-white/50 backdrop-blur-sm rounded-2xl p-2">
                {tabs.map((tab, index) => {
                    const IconComponent = tab.icon;
                    const isActive = activeTab === index;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => handleTabClick(index)}
                            className={`relative flex items-center gap-3 rounded-xl transition-all duration-500 ease-out overflow-hidden ${isActive
                                    ? `${tab.color} shadow-lg px-8 py-5 min-w-[280px] transform scale-105`
                                    : 'bg-white/70 hover:bg-white/90 px-4 py-3 min-w-[140px] transform scale-95'
                                }`}
                        >
                            {/* Full Tab Progress Bar Background */}
                            {isActive && (
                                <div
                                    className="absolute inset-0 bg-white/20 transition-all duration-100 ease-linear"
                                    style={{
                                        width: `${progress}%`,
                                        borderRadius: 'inherit'
                                    }}
                                />
                            )}

                            {/* Tab Content */}
                            <div className="relative z-10 flex items-center gap-3">
                                <div className={`rounded-lg transition-all duration-300 ${isActive ? 'bg-white/80 p-3' : 'bg-gray-100 p-2'
                                    }`}>
                                    <IconComponent className={`text-gray-700 transition-all duration-300 ${isActive ? 'w-6 h-6' : 'w-4 h-4'
                                        }`} />
                                </div>
                                <span style={{fontFamily: 'var(--font-ibm-plex-mono)'}} className={`font-semibold text-gray-800 transition-all duration-300 ${isActive ? 'text-xl tracking-wide' : 'text-sm'
                                    }`}>
                                    {tab.title}
                                </span>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Content Area */}
            <div className="w-full max-w-6xl bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 ">
                        <h3 className="text-4xl font-bold text-gray-800 " style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
                            {tabs[activeTab].content.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
                            {tabs[activeTab].content.description}
                        </p>

                        {/* Navigation Arrows */}
                        <div className="flex gap-4 pt-4">
                            <button style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}
                                onClick={() => handleTabClick((activeTab - 1 + tabs.length) % tabs.length)}
                                className="p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-700" />
                            </button>
                            <button style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}
                                onClick={() => handleTabClick((activeTab + 1) % tabs.length)}
                                className="p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-700" />
                            </button>
                        </div>
                    </div>

                    {/* Mockup Content */}
                    <div className="flex justify-center">
                        <div className="transform transition-all duration-700 ease-out ">
                            {renderMockup(tabs[activeTab].content.mockup)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="mt-12 bg-gray-800 rounded-2xl px-8 py-4">
                <div className="flex items-center gap-8 text-white">
                    <div className="flex items-center gap-4">
                        <span className="text-sm opacity-75" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>PRODUCTS +</span>
                        <span className="text-sm opacity-75" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>SOLUTIONS +</span>
                        <span className="text-sm opacity-75" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>RESOURCES +</span>
                        <span className="text-sm opacity-75" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>SERVICES</span>
                    </div>
                    <button style={{ fontFamily: 'var(--font-ibm-plex-mono)' }} className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
                        BOOK A MEETING
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BSSCarousel;