import React from 'react';

interface RadioInputProps {
    label: string;
    value: string;
    name: string;
    checked?: boolean;
    onChange: (value: string) => void;
}

export function RadioInput({label, value, name, checked, onChange}: RadioInputProps) {
    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input"
                   type="radio"
                   name={name}
                   value={value}
                   checked={checked}
                   onChange={() => onChange(value)}
            />
            {label &&
                <label className="form-check-label" htmlFor={name}>
                    {label}
                </label>}
        </div>
    );
}

