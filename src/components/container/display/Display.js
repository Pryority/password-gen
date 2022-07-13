import React, { useState } from 'react'
import PasswordBox from '../../PasswordBox'
import { Container } from '../Container';

export default function Display() {
    const [password, setPassword] = useState({
        length: 5,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    });
    return (
        <div className='flex flex-col items-center'>
            <div className="flex flex-col items-center justify-center min-h-screen w-2/3">
                <div className='flex w-full justify-center mb-8'>
                    <h1 className='text-3xl font-medium text-center'>Password Generator</h1>
                </div>
                <div className='flex flex-col space-y-4 w-full'>
                    <Container />
                    {/* <PasswordBox /> */}
                </div>
            </div>
        </div>
    )
}
