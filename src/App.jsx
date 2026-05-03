import React, { useState, useEffect } from 'react';
import HeartsBackground from './components/HeartsBackground';
import Flame from './components/Flame';
import Timer from './components/Timer';
import EntertainmentInput from './components/EntertainmentInput';
import MoodTracker from './components/MoodTracker';
import Login from './components/Login';

// Helper to get formatted date string for today
const getTodayStr = () => new Date().toISOString().split('T')[0];

function App() {
  // Application State
  const [username, setUsername] = useState('');
  const [streak, setStreak] = useState(0);
  const [currentDate, setCurrentDate] = useState(getTodayStr());

  // Daily Metrics State
  const [studyMinutes, setStudyMinutes] = useState(0);
  const [entHours, setEntHours] = useState(0);
  const [mood, setMood] = useState(null);

  // Load from LocalStorage on mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('fs_username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    const storedData = JSON.parse(localStorage.getItem('fs_data'));
    if (storedData) {
      const today = getTodayStr();

      // If returning on a new day, evaluate the previous day and process the streak
      if (storedData.date !== today) {
        evaluatePreviousDayAndReset(storedData, today);
      } else {
        // Otherwise load today's ongoing data
        setStreak(storedData.streak || 0);
        setStudyMinutes(storedData.studyMinutes || 0);
        setEntHours(storedData.entHours || 0);
        setMood(storedData.mood || null);
        setCurrentDate(today);
      }
    }
  }, []);

  // Save to LocalStorage whenever monitored variables change
  useEffect(() => {
    if (username) {
      localStorage.setItem('fs_username', username);
      localStorage.setItem('fs_data', JSON.stringify({
        date: currentDate,
        streak,
        studyMinutes,
        entHours,
        mood
      }));
    }
  }, [username, streak, currentDate, studyMinutes, entHours, mood]);

  // Streak evaluation logic based on specified rules
  const evaluatePreviousDayAndReset = (prevData, today) => {
    // 120 minutes = 2 hours
    const metStudyRec = prevData.studyMinutes >= 120;
    const metEntRec = prevData.entHours <= 2;
    const loggedMood = prevData.mood !== null;

    let newStreak = prevData.streak || 0;

    // "study time >= 2 hours AND coding > 2 hours (interpreted as one combined metric) AND entertainment <= 2 hours AND mood logged"
    if (metStudyRec && metEntRec && loggedMood) {
      newStreak += 1;
    } else {
      newStreak = 0; // Reset streak if conditions aren't met
    }

    // Update state for a new day
    setStreak(newStreak);
    setStudyMinutes(0);
    setEntHours(0);
    setMood(null);
    setCurrentDate(today);
  };

  // Handlers
  const handleLogin = (name) => {
    setUsername(name);
  };

  const addStudyTime = (minutes) => {
    setStudyMinutes(prev => prev + minutes);
  };

  const updateEntTime = (hours) => {
    setEntHours(hours);
  };

  const updateMood = (rating) => {
    setMood(rating);
  };

  return (
    <div className="app-container">
      {/* Dynamic Backgrounds */}
      <div className="bg-image" />
      <div className="bg-overlay" />
      <HeartsBackground />

      <main style={{ zIndex: 10, width: '100%' }}>
        {!username ? (
          <Login onLogin={handleLogin} />
        ) : (
          <div style={{ padding: '20px 0' }}>
            <header className="dashboard-header">
              <h1>
                <span className="text-gradient">Sarah&apos;s Dashboard</span>
              </h1>
            </header>

            <div className="dashboard-grid">
              <Flame streak={streak} />

              <Timer totalStudyMinutes={studyMinutes} onAddStudyTime={addStudyTime} />

              <EntertainmentInput entHours={entHours} onSaveEnt={updateEntTime} />

              <MoodTracker mood={mood} onSaveMood={updateMood} />

              {/* Daily Requirements Overview Card */}
              <div className="glass-panel full-width">
                <h2>Daily Discipline Path</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                  <div style={{ color: studyMinutes >= 120 ? '#4ade80' : 'var(--text-secondary)' }}>
                    {studyMinutes >= 120 ? '✓' : '✗'} 2+ Hours Coding/Study ({Math.floor(studyMinutes / 60)}h {studyMinutes % 60}m)
                  </div>
                  <div style={{ color: entHours <= 2 ? '#4ade80' : 'var(--accent-color)' }}>
                    {entHours <= 2 ? '✓' : '✗'} Max 2 Hours Entertainment ({entHours}h)
                  </div>
                  <div style={{ color: mood ? '#4ade80' : 'var(--text-secondary)' }}>
                    {mood ? '✓' : '✗'} Log Mood ({mood || 'Not Logged'})
                  </div>
                </div>
                <div style={{ marginTop: '15px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Satisfy all path requirements to increase your flame streak at midnight.
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
