// import React, { useState, useRef } from 'react'
// // import CopyButton from './buttons/CopyButton'

// export default function PasswordBox() {
//     const [password, setPassword] = useState('');
//     const passwordRef = useRef(null);
//     let pwdDescription = '';

   

//     const generateNewPassword = () => {
//     }

//     const copyClipBoard = () => {

//     }
//     return (
//         <div className='relative flex flex-col w-full h-40 border-2 border-slate-300 rounded-md'
//             style={{ backgroundColor: setBackgroundColor(password) }}>
//             <p className='p-3 text-white font-medium'>Generated Password:</p>
//             <div className='flex w-full justify-center items-center h-full'>
//                 <input
//                     ref={passwordRef}
//                     type="text"
//                     value={password}
//                     className='bg-inherit ring-0 focus:ring-0 outline-none text-center text-xl text-white font-bold'
//                     readOnly
//                 />
//             </div>
//             <div className='flex flex-wrap justify-between items-center p-4'>
//                 <div className='flex space-x-2 items-center'>
//                     <div>{
//                         password && password.length > 10 ?
//                             <div className='flex items-center w-full space-x-2'>

//                             </div> :
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="16"
//                                 height="16"
//                                 fill="white"
//                                 className='mr-6'
//                                 class="bi bi-exclamation-circle" viewBox="0 0 16 16">
//                                 <path
//                                     d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                                 <path
//                                     d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
//                             </svg>
//                     }</div>
//                     <div>{
//                         password && password.length > 10 ?
//                             <div className='flex items-center w-full space-x-2 text-white'>
//                                 {pwdDescription}
//                             </div> :
//                             <div className='flex items-center w-full space-x-2 text-white'>
//                                 {pwdDescription}
//                             </div>
//                     }</div>
//                 </div>
//                 <div className='flex space-x-2 items-center'>
//                     <button
//                         className="flex rounded-md  items-center bg-blue-100 p-2"
//                         iconClass="far fa-copy"
//                         onClick={() => {
//                             if()
//                         }}
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-fill" viewBox="0 0 16 16">
//                             <path fill-rule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z" />
//                         </svg>
//                     </button>
//                     <button
//                         handleClick={generateNewPassword}
//                         className='flex rounded-md  items-center bg-blue-100 p-2'
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
//                             <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
//                             <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }
