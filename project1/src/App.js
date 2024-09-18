// import logo from './logo.svg';
import './App.css';

import {Routes, Route, Link, RouterProvider} from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Home1 from './Components/dynamic/Home1';
import About1 from './Components/dynamic/About1';
import Contact1 from './Components/dynamic/Contact1';
import ParentProp from './Components/Props/ParentProp';
import UseStateHook from './Components/Hooks/UseStateHook';
import UseContextParent from './Components/Context/UseContextParent';
import UseEffectHook from './Components/Hooks/UseEffectHook';
import UseReducerHook from './Components/Hooks/UseReducerHook';
import UseRefAndUseCallbackHook from './Components/Hooks/UseRefAndUseCallbackHook';
import UseMemoHook from './Components/Hooks/UseMemoHook';
import Register from './Components/crud/Register';
import CustomHooks from './Components/Hooks/CustomHooks';
import CounterApp from './Components/Redux/CounterApp';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="sample">
          <h1>Hello IDM Techpark...!</h1>
        </div>
        <div className='navbar'>
          <a href='/home'>Home</a>
          <a href='/sample'>Sample</a>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}> contact </Link>
          
        </div>
        
      </header>
      {/* <SampleDisplay />
      <Home /> */}

        <Routes>
          <Route path='home' Component={Home}>
            <Route path='home1' Component={Home1} />
            <Route path='about1' Component={About1} />
            <Route path='contact1' Component={Contact1} />

          </Route>
          
          <Route path='sample' element={<SampleDisplay/>} />
          <Route path='about' Component={About}/>
          <Route path='contact' Component={Contact}/>
          <Route path= 'home1' ></Route>
        </Routes>
       
       {/* Props */}
          {/* <ParentProp /> */}

        {/* Hooks */}
        {/* <UseStateHook/> */}
      {/* <UseContextParent/> */}
      {/* <UseEffectHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseRefAndUseCallbackHook /> */}
      {/* <UseMemoHook /> */}
      {/* <Register/> */}
      {/* <CustomHooks/> */}
        <CounterApp />
    </div>
  );
}

export default App;


function SampleDisplay() {
  return (
    <div className="sample">
      <h1>Internal Component</h1>
      <p>
        I am interested in the Frontend Developer position 
        and have attached my resume for your review. 
        I hold a Bachelor of Computer Science from M.G.R College, 
        Hosur (Graduated: 2023, GPA: 7.32/10.0). 
        Thank you for considering my application.
      </p>
    </div>
  )
}
