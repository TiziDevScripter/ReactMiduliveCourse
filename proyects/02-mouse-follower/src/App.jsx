import { useState, useEffect } from 'react';
import './App.css';

const MouseFollower = () => {
  const [cursorEnabled, setCursorEnabled] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: 0,y: 0})

  useEffect(()=>{
    console.log('render', cursorEnabled);

    const handleMove = (event) => {
      const {clientX, clientY} = event;
      setMousePosition({x: clientX,y: clientY})
    }
    if(cursorEnabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return ()=>{
      window.removeEventListener('pointermove', handleMove)
      setMousePosition({x: 0,y: 0})
      console.log('clean');
    }
  },[cursorEnabled]);


  return (
    <main>
      <div style={{
        position: 'absolute',
        top:'-20px', left:'-20px',
        width:"40px", height:"40px",
        backgroundColor:'red', borderRadius:'50%',
        zIndex:100, pointerEvents: 'none',
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
      }}/>
      <button onClick={()=>setCursorEnabled(!cursorEnabled)}>
        {cursorEnabled ? 'Turn off' : 'Turn on'} mouse follower
      </button>
    </main>
  );
}

function App() {

  return (
    <>
    <h1>React</h1>
    <MouseFollower/>
    </>
  )
}

export default App
