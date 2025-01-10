import React from 'react'
import '../index.css'
import { useState, useEffect, useRef } from 'react'


function Home({ setAudioStrem, setFile }) {

    const [recordingStatus, setRecordingStatus] = useState('inactive')
    const [audioChunks, setAudioChunks] = useState([])
    const [duration, setDuration] = useState(0)

    const mediaReacorder = useRef(null);

    const mimeType = 'audio/webm'


    // Recording Start  Funcation 

    async function startReacording() {
        console.log("Start Recording...");
    
        try {
            const stremData = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false,
            });
            console.log("Stream started:", stremData);
            setRecordingStatus("recording");
    
            const media = new MediaRecorder(stremData, { mimeType });
            mediaReacorder.current = media;
    
            let localAudioChunks = [];
            media.ondataavailable = (event) => {
                if (event.data.size > 0) localAudioChunks.push(event.data);
            };
    
            media.start();
            setAudioChunks(localAudioChunks);
        } catch (err) {
            if (err.name === "NotFoundError") {
                console.error("Microphone not found or not accessible. Please check your device.");
                alert("Microphone not found. Please connect a microphone and try again.");
            } else if (err.name === "NotAllowedError") {
                console.error("Permission denied. Please allow microphone access.");
                alert("Permission denied. Please allow microphone access in your browser settings.");
            } else {
                console.error("Error accessing media devices:", err.name, err.message);
            }
        }
    }
    
    

    async function stopRecording() {
        console.log("Stop Recording");
      
        if (!mediaReacorder.current) {
            console.error("MediaRecorder is not initialized. Cannot stop recording.");
            return;
        }
    
        setRecordingStatus("inactive");
    
        try {
            mediaReacorder.current.stop();
        } catch (err) {
            console.error("Error stopping MediaRecorder:", err.name, err.message);
        }
    
        mediaReacorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: mimeType });
            setAudioStrem(audioBlob);
            setAudioChunks([]);
            setDuration(0);
            
        };
    }
    

    useEffect(() => {
        // That Code That To Be The Run 
        if (recordingStatus === 'inactive') { return }


        const interval = setInterval(() => {
            setDuration(curr => curr + 1)
        }, 1000)

        return () => clearInterval(interval)


    })  //The  Dependacy Array 

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
            <button className='  speciaBtn py-1 px-4 border rounded-md  text-lg mt-4 flex items-center gap-4 justify-between text-base w-72  max-w-full
                
            '  onClick={() => {
                if (recordingStatus === 'inactive') {
                    startReacording();
                } else if (recordingStatus === 'recording') {
                    stopRecording();
                }
            }}>
                <p className='text-gray-400'>{recordingStatus === 'inactive' ? 'Record' : 'Stop recording'}</p>
                <div className='flex items-center gap-2'>
                    {duration !== 0 && (
                        <p className='text-sm '>{duration}s</p>
                    )}

                    <i className={" fa-solid fa-microphone " + (recordingStatus === 'recording' ? 'text-rose-900' : "")} />
                </div>

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
                            const tempFile = e.target.files[0]
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
