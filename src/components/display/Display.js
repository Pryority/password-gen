import React, { useState, useRef } from 'react'
import CopyButton from '../buttons/CopyButton'
// import OptionsArray from './OptionsArray'
import optionsArr from '../../utils/Options'
import PasswordBox from '../PasswordBox'

export default function Display() {
    return (
        <div className="flex flex-col items-center w-full space-y-4">
            <h1 className='text-3xl my-8'>Password Generator</h1>
            <div className='border-2 border-slate-300 p-4 bg-blue-200 rounded-md'>
                <p className='mb-3'>Password must contain:</p>
                {optionsArr.map(({ option, name }, index) =>
                    <li key={index} className='list-none'>
                        <div className="flex items-center ">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                name='uppercase'
                                className="w-4 h-4 my-2 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{name}</label>
                        </div>
                    </li>
                )
                }
            </div >
            <button
                className='bg-blue-400 font-medium px-6 py-2 rounded-lg border-2 border-slate-300 text-white hover:text-slate-900'
            >Generate</button>
            <div id='lower-col' className='flex w-4/5'>

                <PasswordBox />
            </div>
        </div>
    )
}
