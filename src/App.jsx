import './App.css'
import MorningAthkar from "./components/MorningAthkar";
import EveningAthkar from "./components/EveningAthkar";
import { useState } from 'react';



function App() {
  const [activePage, setActivePage] = useState('morning');

  return (
    <>
      <nav >
        <button onClick={() => setActivePage('morning')}>Morning</button>
        <button onClick={() => setActivePage('evening')}>Evening</button>
      </nav>
      <main className='main'>
        {activePage === 'morning' ? <MorningAthkar /> : <EveningAthkar />}
      </main>
    </>
  )
}

export default App
