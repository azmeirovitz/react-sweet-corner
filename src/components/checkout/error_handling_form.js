import React from 'react';

export default props => {
    const { autoComplete = 'off', input, label, meta, type = 'text', className, placeholder } = props;

    const hasError = meta.touched && meta.error;

    return (
        <div className="input-field">
            <label>{label}</label>
            <input 
                {...input} 
                className={hasError ? 'with-error' : className}
                placeholder= {hasError ? 'with-error' : placeholder}
                type={type} 
                autoComplete={autoComplete} 
                />
            <div className="errorMessage">{hasError}</div>
        </div>
    );

}
