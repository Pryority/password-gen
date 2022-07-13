import React, { useState, useEffect, useMemo, useRef } from 'react';

import CheckBox from './checkbox/CheckBox';

const Container = props => {
    const [password, setPassword] = useState({
        length: 5,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    });

    const [copy, setCopy] = useState('');

    const [handleText, setHandleText] = useState('');

    const handleChangeLowercase = () => {
        setPassword({
            ...password,
            lowercase: !password.lowercase,
        });
    };
    const handleChangeNumbers = () => {
        setPassword({
            ...password,
            numbers: !password.numbers,
        });
    };
    const handleChangeSymbols = () => {
        setPassword({
            ...password,
            symbols: !password.symbols,
        });
    };
    const handleChangeUppercase = () => {
        setPassword({
            ...password,
            uppercase: !password.uppercase,
        });
    };

    const setPasswordLength = (val) => {
        setHandleText({
            ...password,
            length: val
        })
    };

    const passwordRef = useRef(null);
    let pwdDescription = '';

    const setBackgroundColor = password => {
        if (password && password.length === 1 && password.length <= 5) {
            pwdDescription = 'Bad password';
            return '#cb473e';
        } else if (password && password.length >= 6 && password.length <= 10) {
            pwdDescription = 'Weak password';
            return '#f07df8';
        } else if (password && password.length > 10) {
            pwdDescription = 'Strong password';
            return '#55a95d';
        } else {
            pwdDescription = 'Bad password';
            return '#cb473e'
        }
    }

    return (
        <>
            <div className='border-2 border-slate-300 p-4 bg-blue-100 rounded-md flex w-full'>
                <div id='password-settings' className="flex flex-col w-full space-y-8 items-center">
                    <p className="font-medium">Use the slider, and select from the options.</p>


                    <div className="flex justify-center flex-col space-y-4 w-full">
                        <div className='flex items-center justify-between'>
                            <p className='flex w-full'>Password length</p>
                            <span className='w-full' />
                            <input
                                value={handleText}
                                onChange={(e) => setPasswordLength(e.target.value)}
                                className='w-1/2'
                            />
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='flex w-full'>Include uppercase letters</p>
                            <span className='w-full' />
                            <CheckBox value={password.uppercase} onChange={handleChangeUppercase} />
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='flex w-full'>Include lowercase letters</p>
                            <span className='w-full' />
                            <CheckBox value={password.lowercase} onChange={handleChangeLowercase} />
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='flex w-full'>Include numbers</p>
                            <span className='w-full' />
                            <CheckBox value={password.numbers} onChange={handleChangeNumbers} />
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='flex w-full'>Include symbols</p>
                            <span className='w-full' />
                            <CheckBox value={password.symbols} onChange={handleChangeSymbols} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative flex flex-col w-full h-40 border-2 border-slate-300 rounded-md'
                style={{ backgroundColor: setBackgroundColor(password) }}>
                <p className='p-3 text-white font-medium'>Generated Password:</p>
                <div className='flex w-full justify-center items-center h-full'>
                    <input
                        ref={passwordRef}
                        type="text"
                        value={password}
                        className='bg-inherit ring-0 focus:ring-0 outline-none text-center text-xl text-white font-bold'
                        readOnly
                    />
                </div>
                <div className='flex flex-wrap justify-between items-center p-4'>
                    <div className='flex space-x-2 items-center'>
                        <div>{
                            password && password.length > 10 ?
                                <div className='flex items-center w-full space-x-2'>

                                </div> :
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="white"
                                    className='mr-6'
                                    class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                    <path
                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path
                                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                                </svg>
                        }</div>
                        <div>{
                            password && password.length > 10 ?
                                <div className='flex items-center w-full space-x-2 text-white'>
                                    {pwdDescription}
                                </div> :
                                <div className='flex items-center w-full space-x-2 text-white'>
                                    {pwdDescription}
                                </div>
                        }</div>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <button
                            className="flex justify-center space-x-2 rounded-md  items-center bg-blue-100 p-2"
                            iconClass="far fa-copy"
                            onClick={() => {
                                if (handleText.length > 0) {
                                    navigator.clipboard.writeText(handleText);
                                    setCopy(true);
                                    setInterval(() => {
                                        setCopy(false);
                                    }, 2000);
                                }
                            }}
                        >
                            <p>{copy ? 'Copied' : 'Copy'}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z" />
                            </svg>
                        </button>
                        <button
                            className='flex justify-center space-x-2 rounded-md  items-center bg-blue-100 p-2'
                        >
                            <p>Generate</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Container };