import React, { useState } from 'react'
import Transcribing from './Transcribing'
import Transcription from'./Transcription'


function Information() {

    const [tab, setTab] = useState('transcription')
    return (
        <div className=" mt-3 lg:mt-20 sm:mt-7 flex-1 flex flex-col justify-center items-center h-screen    gap-3 sm:gap-3 md:gap-5 text-center bg-gray-100 w-fit max-w-full mx-auto">
            <div className='flex flex-col  gap-2 sm:gap-4'>
                <h1 className='font-semibold text-center text-4xl sm:text-5xl md:text-6xl whitespace-nowrap'>Your <span className='text-blue-400 bold'>Transcription</span></h1>
                <div className='grid grid-cols-2 mt-2 sm:mx-auto bg-white  rounded overflow-hidden items-center p-1 blueShadow border-[2px] border-solid border-blue-300'>
                    <button
                        onClick={() => setTab('transcription')}
                        className={'px-4 rounded duration-200 py-1 ' + (tab === 'transcription' ? ' bg-blue-500 text-white' : ' text-blue-400 hover:text-blue-600')}>Transcription</button>
                    <button
                        onClick={() => setTab('translation')}
                        className={'px-4 rounded duration-200 py-1 ' + (tab === 'translation' ? ' bg-blue-500 text-white' : ' text-blue-400 hover:text-blue-600')}>Translation</button>
                </div>

                 {tab=== 'transcription'? (
                    <Transcription/>
                 ):(
                    <Tra/>
                 )}
           

            </div>
        </div>
    )
}

export default Information
