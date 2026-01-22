import './App.css'
import MorningAthkar from "./components/MorningAthkar";
import EveningAthkar from "./components/EveningAthkar";
import { useState } from 'react';



function App() {
  const [activePage, setActivePage] = useState('morning');

  return (
    <>
      <nav className='navbar'>
        <button
          className={`nav-item ${activePage === 'morning' ? 'active-morning' : 'inactive'}`}
          onClick={() => setActivePage('morning')}
          disabled={activePage === 'morning'}
        >
          Morning
        </button>
        <button
          className={`nav-item ${activePage === 'evening' ? 'active-evening' : 'inactive'}`}
          onClick={() => setActivePage('evening')}
          disabled={activePage === 'evening'}
        >
          Evening
        </button>
      </nav>
      <main className='main'>
        {activePage === 'morning'
          ? <MorningAthkar />
          : <EveningAthkar />}
      </main>
    </>
  )
}

export default App
