// src/components/AudioVisualizer.jsx
import { useEffect, useRef } from 'react'

export default function AudioVisualizer() {
  const canvasRef = useRef(null)
  const audioRef = useRef(null)
  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    if (!isListening) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let audioContext, analyser, dataArray, source

    const initAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        audioContext = new (window.AudioContext || window.webkitAudioContext)()
        analyser = audioContext.createAnalyser()
        source = audioContext.createMediaStreamSource(stream)
        source.connect(analyser)
        analyser.fftSize = 256
        dataArray = new Uint8Array(analyser.frequencyBinCount)
        
        visualize()
      } catch (err) {
        console.error('Error accessing microphone:', err)
      }
    }

    const visualize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      analyser.getByteFrequencyData(dataArray)
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw audio waves
      ctx.fillStyle = 'rgba(59, 130, 246, 0.1)'
      ctx.beginPath()
      
      const sliceWidth = canvas.width / analyser.frequencyBinCount
      let x = 0
      
      for(let i = 0; i < analyser.frequencyBinCount; i++) {
        const v = dataArray[i] / 255
        const y = v * canvas.height
        
        if(i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
        
        x += sliceWidth
      }
      
      ctx.lineTo(canvas.width, canvas.height/2)
      ctx.fill()
      
      requestAnimationFrame(visualize)
    }

    initAudio()

    return () => {
      if (audioContext) audioContext.close()
    }
  }, [isListening])

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />
      <button
        onClick={() => setIsListening(!isListening)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg"
      >
        {isListening ? '🔇 Stop Audio' : '🎤 Start Audio'}
      </button>
    </>
  )
}