import React from 'react';

const Flame = ({ streak }) => {
    // Determine flame properties based on streak count
    let sizeClass = 'flame-streak-small';
    let colors = {
        base: '#ff5500',
        core: '#ffbb00',
        outer: '#ff3300'
    };

    if (streak >= 4 && streak <= 7) {
        sizeClass = 'flame-streak-medium';
        colors = {
            base: '#ff3300',
            core: '#ffcc00',
            outer: '#ff0000'
        };
    } else if (streak >= 8) {
        sizeClass = 'flame-streak-large';
        colors = {
            base: '#ff0000',
            core: '#ffffff',
            outer: '#cc0000'
        };
    }

    // Fallback for streak 0
    const isZero = streak === 0;

    return (
        <div className="flame-container">
            {!isZero ? (
                <div className={`flame-svg ${sizeClass}`}>
                    <svg width="80" height="120" viewBox="0 0 80 120" xml dns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="glowGlow" x1="0%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor={colors.base} stopOpacity="0.8" />
                                <stop offset="60%" stopColor={colors.outer} stopOpacity="0.5" />
                                <stop offset="100%" stopColor={colors.outer} stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Outer Flame */}
                        <path
                            d="M40,120 C20,120 0,100 0,60 C0,30 25,15 40,0 C55,15 80,30 80,60 C80,100 60,120 40,120 Z"
                            fill="url(#glowGlow)"
                        />

                        {/* Inner Core Flame */}
                        <path
                            d="M40,110 C25,110 15,90 15,65 C15,45 28,30 40,15 C52,30 65,45 65,65 C65,90 55,110 40,110 Z"
                            fill={colors.base}
                        />

                        {/* Center White Hot */}
                        <path
                            d="M40,100 C30,100 25,85 25,70 C25,55 35,45 40,30 C45,45 55,55 55,70 C55,85 50,100 40,100 Z"
                            fill={colors.core}
                        />
                    </svg>
                </div>
            ) : (
                <div style={{ height: '120px', display: 'flex', alignItems: 'center', opacity: 0.5 }}>
                    <span style={{ fontSize: '3rem' }}>🌑</span>
                </div>
            )}

            <div className="streak-display">
                {streak} {streak === 1 ? 'Day' : 'Days'} Streak
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
                The Flame System
            </div>
        </div>
    );
};

export default Flame;
