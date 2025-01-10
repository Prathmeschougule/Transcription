import React from 'react'

function FileDisplay({handleAudioReset ,file,audioStrem}) {
    
   
  return (
   <main  className=" mt-3 lg:mt-20 sm:mt-7 flex-1 flex flex-col justify-center items-center h-screen    gap-3 sm:gap-3 md:gap-5 text-center bg-gray-100 w-fit max-w-full mx-auto">
             <h1 className="p-2 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Your <span className="text-blue-600">File</span>

            </h1>

            <div className='flex flex-col text-left mx-auto '>
                <h3 className='  font-semibold'>Name:</h3>
                <p>{file ? file?.name : 'Custom audio'} </p>
            </div>
           
            <div className='flex justify-between items-center gap-4'>
                
                <button className=' hover:bg-gray-800 speciaBtn py-1 px-3 rounded-lg hover:text-white duration-100'
                onClick={handleAudioReset}                
                >Reset</button>
                <button className=' flex justify-center items-center gap-1 speciaBtn  hover:bg-gray-800 duration-200 py-1 px-3 rounded-lg hover:text-white duration-100'>
                    <p>Transcrip</p>                    
                    <i class="fa-solid fa-pen "/>
            </button>
               
               
            </div>
            
   </main>
  ) 
}

export default FileDisplay
