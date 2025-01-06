import { useState } from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"
import FileDisplay from "./Components/FileDisplay"

function App() {




  const [file, setFile] = useState('')
  const [audioStrem, setAudioStrem] = useState('');

  const isAudioAvalaible = file || audioStrem

  function handleAudioReset() {
    setFile(null);
    setAudioStrem(null);
  }

  return (
    <>
      
        <div className="   flex flex-col  max-w-[1000px] mx-auto w-full">
          <section className="max-h-screen flex flex-col">
            <Header />
            {isAudioAvalaible ?
              (<FileDisplay handleAudioReset={handleAudioReset} file={file} audioStrem={audioStrem} />) :
              (<Home setFile={setFile} setAudioStrem={setAudioStrem} />)}
          </section>

        </div>
        <Footer />
     

    </>
  )
}

export default App
