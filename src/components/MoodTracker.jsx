import React from 'react';
import { Smile } from 'lucide-react';

const MoodTracker = ({ mood, onSaveMood }) => {
    const ratingScale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="glass-panel full-width">
            <h2><Smile size={20} /> Mental Energy & Mood</h2>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                Rate your overall mental state today (1 = Exhausted/Low, 10 = Energized/Focused).
            </div>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
                padding: '10px 0'
            }}>
                {ratingScale.map((rating) => {
                    const isSelected = mood === rating;
                    return (
                        <button
                            key={rating}
                            onClick={() => onSaveMood(rating)}
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: isSelected ? '2px solid var(--accent-color)' : '1px solid var(--panel-border)',
                                background: isSelected ? 'rgba(255, 51, 102, 0.2)' : 'rgba(0, 0, 0, 0.5)',
                                color: isSelected ? '#fff' : 'var(--text-secondary)',
                                fontWeight: isSelected ? 'bold' : 'normal',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {rating}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default MoodTracker;
