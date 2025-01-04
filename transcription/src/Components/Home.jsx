import React from 'react'
import '../index.css'
import { use } from 'react'

function Home({ setAudioStream, setFile }) {

    
    return (
        <main className="mt-3 lg:mt-20 sm:mt-7 flex-1 flex flex-col justify-center items-center h-screen p-4 gap-3 sm:gap-3 md:gap-5 text-center bg-gray-100">
            <h1 className="p-2 text-5xl font-bold sm:text-6xl lg:text-7xl">
                Free<span className="text-blue-600">Script</span>
            </h1>
            <h3 className="font-medium">
                Record <span className="text-blue-400">&rarr;</span>
                Transcribe <span className="text-blue-400">&rarr;</span>
                Translate
            </h3>
            <button className=' speciaBtn py-1 px-4 border rounded-md  text-lg mt-4 flex items-center gap-4 justify-between text-base w-72  max-w-full' >
                <p className='text-gray-400'>Record</p>
                <i className="fa-solid fa-microphone" 
                    // onChange={(e)=>{

                    //     const tempFile=e.target.[0]
                    //     setAudioStrem(tempFile);
                    // }
                    // }
                
                />
            </button>
            <p className="text-base">
                Or{' '}
                <label className="text-blue-500 font-semibold cursor-pointer" htmlFor="fileInput">
                    Upload
                    <input
                        id="fileInput"
                        className="hidden"
                        type="file"
                        accept=".mp3,.wav"
                        onChange={(e) => {
                            const tempFile= e.target.files[0]
                            setFile(tempFile)
                            
                        }}
                    />
                </label>{' '}
                an MP3 or WAV file.
            </p>


            <p className='italic text-gray-500'>Free Now Free Forever</p>
        </main>


    )
}

export default Home
