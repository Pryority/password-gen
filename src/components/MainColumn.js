import React from 'react'
import CopyButton from './buttons/CopyButton'
import GenerateButton from './buttons/GenerateButton'
import OptionsArray from './OptionsArray'

export default function MainColumn() {
    return (
        <div className="flex flex-col items-center w-full space-y-4">
            <h1 className='text-3xl my-8'>Password Generator</h1>
            <OptionsArray />
            <GenerateButton />
            <div className='flex w-4/5'>
                <div className='relative flex flex-col w-full h-40 border-2 border-slate-300 mt-8 rounded-md'>
                    <p className='p-2 text-slate-500'>Generated Password:</p>
                    <div className='flex w-full justify-center items-center h-full'>
                        <p>this is a new password</p>
                    </div>
                    <div className='flex w-full justify-end items-center'>
                        <CopyButton />
                    </div>
                </div>
            </div>
        </div>
    )
}
