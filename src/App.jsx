import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import Footer from './components/Footer';
// import './App.css'

// function App() {

  
  // const [count, setCount] = useState(0)

  // return (
  
      // {/* <div>
        // <a href="https://vite.dev" target="_blank">
        //   {/* <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
// } */}

// export default App */
import React from 'react';

import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import './App.css';


function App() {
  return (
    <div>
      <h1>SmartShopping App</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;




