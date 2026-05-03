import React, { useState, useEffect } from 'react';
import { Play, Square } from 'lucide-react';

const Timer = ({ totalStudyMinutes, onAddStudyTime }) => {
    const [isActive, setIsActive] = useState(false);
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const [sessionStartTime, setSessionStartTime] = useState(null);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSecondsElapsed(Math.floor((Date.now() - sessionStartTime) / 1000));
            }, 1000);
        } else if (!isActive && secondsElapsed !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, secondsElapsed, sessionStartTime]);

    const handleStart = () => {
        setSessionStartTime(Date.now());
        setSecondsElapsed(0);
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
        const minutesStudied = Math.floor(secondsElapsed / 60);
        if (minutesStudied > 0) {
            onAddStudyTime(minutesStudied);
        }
        setSecondsElapsed(0);
        setSessionStartTime(null);
    };

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours > 0 ? hours + 'h ' : ''}${minutes}m ${seconds}s`;
    };

    const formatTotalTime = (minutes) => {
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return `${h > 0 ? h + 'h ' : ''}${m}m`;
    };

    return (
        <div className="glass-panel">
            <h2>Study Timer</h2>

            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
                    {formatTime(secondsElapsed)}
                </div>
                <div style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                    Today's Total: <span style={{ color: '#fff' }}>{formatTotalTime(totalStudyMinutes)}</span>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
                {!isActive ? (
                    <button className="btn" onClick={handleStart}>
                        <Play size={18} /> Start Session
                    </button>
                ) : (
                    <button className="btn" style={{ background: '#333' }} onClick={handleStop}>
                        <Square size={18} /> Stop Session
                    </button>
                )}
            </div>
        </div>
    );
};

export default Timer;
