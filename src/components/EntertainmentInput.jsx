import React, { useState } from 'react';
import { Gamepad2, Save } from 'lucide-react';

const EntertainmentInput = ({ entHours, onSaveEnt }) => {
    const [inputValue, setInputValue] = useState(entHours > 0 ? entHours.toString() : '');

    const handleSave = () => {
        const val = parseFloat(inputValue);
        if (!isNaN(val) && val >= 0) {
            onSaveEnt(val);
        }
    };

    return (
        <div className="glass-panel">
            <h2><Gamepad2 size={20} /> Entertainment Time</h2>

            <div style={{ marginBottom: '16px' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>
                    Log hours spent on non-productive activities.
                </div>

                <input
                    type="number"
                    step="0.5"
                    min="0"
                    className="input-field"
                    placeholder="e.g., 1.5"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            <button className="btn btn-secondary" onClick={handleSave}>
                <Save size={18} /> Update Hours
            </button>

            {entHours > 0 && (
                <div style={{ marginTop: '12px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Currently logged: <strong style={{ color: '#fff' }}>{entHours}h</strong>
                </div>
            )}
        </div>
    );
};

export default EntertainmentInput;
