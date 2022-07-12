import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = props => {
    const { label, value, checked, name, onChange, disabled } = props;
    return (
        <>
            <div className='flex w-full justify-center'>
                <label className="flex items-center justify-center space-x-2">
                    <h1>{label}</h1>
                    <input
                        id='checkbox-input'
                        type="checkbox"
                        name={name}
                        checked={checked}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                        className=""
                    />
                    <span className="checkmark"
                        style={{ opacity: disabled ? '0.7' : '' }}
                    ></span>
                </label>
            </div>
        </>
    )
}
CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    checked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}
export default CheckBox;