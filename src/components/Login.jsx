import React, { useState } from 'react';
import { Flame as FlameIcon } from 'lucide-react';

const Login = ({ onLogin }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim().length > 0) {
            onLogin(name.trim());
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            width: '100%',
            padding: '20px'
        }}>
            <div className="glass-panel" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', color: 'var(--accent-color)' }}>
                    <FlameIcon size={48} />
                </div>

                <h1 style={{ marginBottom: '10px', fontSize: '1.8rem' }}>The Flame System</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '0.95rem' }}>
                    Discipline. Control. Balance. Growth.
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ textAlign: 'center', marginBottom: '20px' }}
                        maxLength={20}
                        required
                    />
                    <button type="submit" className="btn">
                        Ignite Journey
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
