import React, { useState, useEffect, useMemo } from 'react';

import Button from './button/Button';
import Slider from './slider/Slider';
import CheckBox from './checkbox/CheckBox';
import { generatePassword, setPasswordLength, copyToClipBoard } from '../../utils/Helpers';


const CHECKBOX_LIST = [
    {
        id: 0,
        name: 'uppercase',
        label: 'Uppercase',
        isChecked: true
    },
    {
        id: 1,
        name: 'lowercase',
        label: 'Lowercase',
        isChecked: true
    },
    {
        id: 2,
        name: 'symbols',
        label: 'Symbols',
        isChecked: true
    },
    {
        id: 3,
        name: 'numbers',
        label: 'Numbers',
        isChecked: true
    },
];

const Container = props => {
    const { setPassword, setRange, setPasswordProps, passwordRef, type } = props;

    const onChangeSlider = event => { }

    const [checkbox, setCheckBox] = useState({
        uppercase: true,
        lowercase: true,
        symbols: true,
        numbers: true
    });

    const [checked, setChecked] = useState(false);
    const [checkedName, setCheckedName] = useState('');

    const onChangeCheckBox = e => {
    }

    return (
        <div className='border-2 border-slate-300 p-4 bg-blue-100 rounded-md flex w-full'>
            <div id='password-settings' className="flex flex-col w-full space-y-8 items-center">
                <h3 className="">Use the slider, and select from the options.</h3>
                <div className="flex w-full">
                    <div id='form-group' className="flex w-full">
                        &nbsp;
                        <Slider
                            min={0}
                            max={50}
                            step={1}
                            defaultLength={10}
                            value={20}
                            onChangeValue={onChangeSlider}
                        />
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <div className="flex w-full justify-center">
                        {
                            CHECKBOX_LIST.map(checkbox =>
                                <CheckBox
                                    key={checkbox.id}
                                    name={checkbox.name}
                                    checked={checkbox.isChecked}
                                    label={checkbox.label}
                                    value={checkbox.isChecked}
                                    onChange={onChangeCheckBox}
                                    disabled={
                                        checked && checkbox.isChecked && checkedName === checkbox.name
                                    }
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Container };