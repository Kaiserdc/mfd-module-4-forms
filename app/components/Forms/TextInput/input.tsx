import {type FC, type InputHTMLAttributes, type ReactElement} from "react";


type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type InputVariant = 'default' | 'filled' | 'unstyled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string,
    name: string;
    type: "text" | "email" | "password";
    lefticon?: ReactElement,
    righticon?: ReactElement,
    inputSize?: InputSize,
    inputVariant?: InputVariant
    error?: string;
    placeholder?: string,
    radius?: number,
    label?: string,
    disabled?: boolean,
    required?: boolean,
}

export const Input = ({
                          id,
                          name,
                          value,
                          type,
                          label,
                          placeholder,
                          disabled,
                          inputSize,
                          error,
                          required,
                          ...rest
                      }: InputProps) => {


    const renderIcon = (icon: ReactElement) => {
        return <span className="input-icon">{icon}</span>
    }
    return (
        <div className={`form-group ${inputSize ? `form-group-${inputSize}` : ''}`}>
            {label && <label htmlFor={name} className={'form-label'}>{label}</label>}
            <div
                className={`position-relative ${(rest.lefticon) ? 'with-left-icon' : ''} ${rest.righticon ? 'with-right-icon' : ''}`}>
                {rest.lefticon && renderIcon(rest.lefticon)}
                {rest.righticon && renderIcon(rest.righticon)}
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    className={`form-control ${inputSize ? `form-control-${inputSize}` : ''} ${error ? 'is-invalid' : ''}`}
                    placeholder={placeholder}
                    required={required}
                    {...rest}
                />
            </div>
            {error && <div className="invalid-feedback text-danger text-sm d-block">{error}</div>}

        </div>
    )
}
