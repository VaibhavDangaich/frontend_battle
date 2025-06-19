'use client';

import React, { useState } from 'react';
import { BarChart3, TrendingUp, PieChart, DollarSign, Settings, Star } from 'lucide-react';
import Image from 'next/image';
import GlareHover from './ui/GlareHover';

const InteractiveHomepage = () => {
  
    const [hoveredWord, setHoveredWord] = useState(null);

    const dashboardCards = [
        {
            id: 'revenue', title: 'Total Revenue', value: '$426.8K', change: '+36.5%', subtitle: '$672.5K total last year', icon: DollarSign, position: { top: '20%', right: '10%' }
        },
        {
            id: 'performance', title: 'Performance', value: '94.2%', change: '+5.1%', subtitle: 'System uptime', icon: BarChart3, position: { top: '60%', right: '15%' }
        },
        {
            id: 'analytics', title: 'Analytics', value: '12,482', change: '+12.3%', subtitle: 'Active sessions', icon: PieChart, position: { bottom: '20%', left: '8%' }
        }
    ];

    const reportsCards = [
        {
            id: 'monthly', title: 'Monthly Report', value: '$288,721', change: '+202.9%', subtitle: 'Revenue this month', icon: TrendingUp, position: { top: '25%', left: '12%' }
        },
        {
            id: 'quarterly', title: 'Quarterly Stats', value: '87.5%', change: '+12.8%', subtitle: 'Target achievement', icon: BarChart3, position: { top: '50%', right: '20%' }
        },
        {
            id: 'annual', title: 'Annual Growth', value: '156%', change: '+23.1%', subtitle: 'Year over year', icon: PieChart, position: { bottom: '25%', right: '8%' }
        }
    ];

    const forecastCards = [
        {
            id: 'prediction', title: 'Revenue Forecast', value: '$1.2M', change: '+45.2%', subtitle: 'Next quarter', icon: TrendingUp, position: { top: '30%', left: '15%' }
        },
        {
            id: 'trends', title: 'Market Trends', value: '8,429', change: '+18.7%', subtitle: 'Projected growth', icon: BarChart3, position: { top: '45%', right: '12%' }
        },
        {
            id: 'projections', title: 'AI Projections', value: '342%', change: '+67.3%', subtitle: 'ML predictions', icon: PieChart, position: { bottom: '30%', left: '20%' }
        }
    ];

    const consolidationCards = [
        {
            id: 'integration',
            title: 'Data Integration',
            value: '99.8%',
            change: '+2.1%',
            subtitle: 'Sync accuracy',
            icon: Settings,
            position: { top: '30%', right: '8%' } // moved a bit higher and more right
        },
        {
            id: 'unified',
            title: 'Unified View',
            value: '24,892',
            change: '+34.5%',
            subtitle: 'Data points',
            icon: BarChart3,
            position: { top: '60%', left: '10%' } // moved more left
        },
        {
            id: 'consolidated',
            title: 'Consolidated',
            value: '$456.2K',
            change: '+28.9%',
            subtitle: 'Total value',
            icon: DollarSign,
            position: { bottom: '20%', right: '20%' } // moved up and more right
        }
    ];

    const getCardsForWord = (word) => {
        switch (word) {
            case 'dashboard':
            case 'dashboards':
                return dashboardCards;
            case 'reports':
                return reportsCards;
            case 'forecasts':
                return forecastCards;
            case 'consolidations':
                return consolidationCards;
            default:
                return [];
        }
    };

    const renderCard = (card, isActive) => {
        const IconComponent = card.icon;
        return (
            <div key={card.id} className={`absolute bg-white rounded-xl p-6 shadow-2xl transition-all duration-500 ease-out transform w-72 ${isActive ? 'opacity-100 scale-100 z-20' : 'opacity-30 scale-95 z-10'}`} style={card.position}>
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 text-sm">{card.title}</h3>
                            <p className="text-xs text-gray-500 mt-1">{card.subtitle}</p>
                        </div>
                    </div>
                    <Settings className="w-4 h-4 text-gray-400" />
                </div>

                <div className="mb-4">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{card.value}</div>
                    <div className="flex items-center gap-1">
                        <span className="text-green-600 text-sm font-medium">{card.change}</span>
                    </div>
                </div>

                <div className="h-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg flex items-end justify-center p-2">
                    <div className="flex items-end gap-1 h-full">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="bg-gradient-to-t from-blue-400 to-blue-300 rounded-sm flex-1 transition-all duration-300" style={{ height: `${Math.random() * 80 + 20}%` }} />
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const allCards = [...dashboardCards, ...reportsCards, ...forecastCards, ...consolidationCards];
    const activeCards = hoveredWord ? getCardsForWord(hoveredWord) : [];

    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-[#003A6F] via-[#005B96] to-[#0077B6] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
            </div>

            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-4 sm:gap-8 z-30 w-full px-4 justify-center text-sm sm:text-base">
                {["Capterra", "G2", "Xero", "QuickBooks"].map((platform, i) => (
                    <div key={i} className="flex items-center gap-1 text-white/90 whitespace-nowrap">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-slate-200 leading-relaxed">{i === 0 ? "4.8 rating on" : i === 2 ? "350+ reviews on" : i === 3 ? "550+ reviews on" : "4.8 rating on"} <span className="font-semibold text-slate-200">{platform}</span></span>
                    </div>
                ))}
            </div>

            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8">
                <div className="text-center max-w-6xl mx-auto">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold lg:text-white sm:text-black leading-tight mb-8 text-center">
                        Create{' '}
                        <span className="hover:text-teal-300 transition-colors duration-300 cursor-pointer" onMouseEnter={() => setHoveredWord('reports')} onMouseLeave={() => setHoveredWord(null)}>reports</span>,{' '}
                        <span className="hover:text-teal-300 transition-colors duration-300 cursor-pointer" onMouseEnter={() => setHoveredWord('forecasts')} onMouseLeave={() => setHoveredWord(null)}>forecasts</span>,<br />
                        <span className="hover:text-teal-300 transition-colors duration-300 cursor-pointer" onMouseEnter={() => setHoveredWord('dashboards')} onMouseLeave={() => setHoveredWord(null)}>dashboards</span>{' & '}
                        <span className="hover:text-teal-300 transition-colors duration-300 cursor-pointer" onMouseEnter={() => setHoveredWord('consolidations')} onMouseLeave={() => setHoveredWord(null)}>consolidations</span>
                    </h1>

                    <div className="flex items-center justify-center gap-3 mb-8 mx-auto">
                        <Image src="/stars.png" width={50} height={50} alt="stars" />
                        <span className="text-2xl sm:text-4xl lg:text-white font-bold tracking-tight text-center sm:text-black">Now with AI-insights</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <GlareHover
                            glareColor="#ffffff"
                            glareOpacity={0.3}
                            glareAngle={-30}
                            glareSize={250}
                            transitionDuration={1200}
                            playOnce={false}
                            className="bg-gradient-to-b from-[#419db1] to-[#ffffff] text-black hover:scale-110 transition-transform px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl border-none"
                        >
                            <span className="relative z-10">Start 14-day free trial →</span>
                        </GlareHover>

                        <button className="bg-white/10 hover:bg-white/20 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 border border-white/20">
                            📊 See what we do
                        </button>
                    </div>
                </div>
            </div>

            {allCards.map(card => renderCard(card, activeCards.some(active => active.id === card.id)))}

            <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-80 z-10"></div>
            <div className="absolute top-1/3 left-10 w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-60 z-10"></div>
        </div>
    );
};

export default InteractiveHomepage;
