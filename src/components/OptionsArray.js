import React from 'react'
import options from '../utils/Options'

export default function SingleOption() {

    const optionsArr = options;

    return (
        <div className='border-2 border-slate-300 p-4 rounded-md'>
            {optionsArr.map(({ option, name }, index) =>
                <li key={index} className='list-none'>
                    <div class="flex items-center ">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 my-2 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        // checked={checkedState}
                        // onChange={handleOnChange}
                        />
                        <label for="" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{name}</label>
                    </div>
                </li>
            )}
        </div>
    );
};