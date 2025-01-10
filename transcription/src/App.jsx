import { useState,useRef,useEffect } from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"
import FileDisplay from "./Components/FileDisplay"
import Information from "./Components/information"
import Transcribing from "./Components/Transcribing"


function App() {




  const [file, setFile] = useState(null)
  const [audioStrem, setAudioStrem] = useState(null);
  const [output,setOutput]=useState(null);
  const [loading ,setLoading]=useState(null);
  const [finish ,setFinished]=useState(true);
  const [downloding,setDownloding]=useState(false)
  

  const isAudioAvalaible = file || audioStrem

  function handleAudioReset() {
    setFile(null);
    setAudioStrem(null);
  }

  const worker=useRef(null)

  useEffect (()=>{
      if(!worker.current){
         worker.current=new Worker(new URL('./utils/Wisper.worker.js',import.meta.url) ,
        {
          type:'module'
        })
      }
      const onMessageReceived =async(e)=>{
        switch(e.data.type)
        {
           case'DOWNLOADING':
              setDownloding(true);
              console.log('DOWNLOADING');
              break;
    
              case'LOADING ':
              setLoading(true);
              console.log('LOADING');
              break;
    
    
              case'RESULT':
              setOutput(e.data.results);
              console.log(e.data.results);
              break;
    
              case'INFERENCE_DONE':
              setFinished(true);
              console.log("DONE");
              break;
    
        }
      }

      worker.current.addEventListener('message', onMessageReceived)
      return () => worker.current.removeEventListener('message', onMessageReceived)


  })

      async function readAudioFrom(file){
          const sampling_rate=1600
          const audioCTX = new audioCTX({sampleRate:sampling_rate})
          const  response= await file.arrayBuffer()
          const decoded =await audioCTX.decodeAudioData(response)
          const audio = decoded.getChannelData(0)
          return audio 

      }

      async function handleFormSubmission(){
        if(!file && !audioStrem){return}

        let  audio = await readAudioFrom(file ? file : audioStrem)
        const model_name=`openai/whisper-tiny.en`

        worker.current.postMessage({
          type:MessageTypes.INFERENCE_REQUEST,
          audio,
           model_name
        })
      }
  
  

  return (
    <>
      
        <div className="   flex flex-col  max-w-[1000px] mx-auto w-full">
          <section className="max-h-screen flex flex-col">
            <Header />

            {output ? (
              <Information/>
            ): loading ?(
              <Transcribing/>
            ): isAudioAvalaible?(
              <FileDisplay handleAudioReset={handleAudioReset} file={file} audioStrem={audioStrem} />
            ):(
              <Home setFile={setFile} setAudioStrem={setAudioStrem} />
            )}
          

          </section>

        </div>
        <Footer />
     

    </>
  )
}

export default App

// 4:5
