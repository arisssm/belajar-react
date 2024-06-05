import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Component } from 'react';
import Hiburan from './components/Hiburan';
import Hitung from './components/Hitung';

/** ========= Component */
function Ucapan() 
{
  return <h1>Halo, selamat siang!.</h1>
}
class Halo extends Component {
  render(){
    return <h3>Nama saya Jhon</h3>
  }
}
/** ========= Props */
function Home(props)
{
  return <h4>Hari ini saya akan berkunjung ke {props.kota} pada hari {props.hari}</h4>
}

/** ========= State */
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
      <div>
        <p>Jhon telah berlari selama {count} putaran</p>
        <button onClick={() => setCount(count + 2 )}>
          hitung!
        </button>
      </div>
  );
}
/** ========= Component Parent */
function App() {
  
    /** ========= Event Handling */
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
      setInputValue(event.target.value);
    }
    /** ========= Event Handling */
  return (
    <>
      <div>
        <Ucapan/>
          <hr className='text-danger'/>
        <Halo/>
          <hr className='text-warning'/>
        <Home kota="palembang" hari="senin"/>
          <hr className='text-primary'/>
        <Hiburan tempat="ampera" jam="10"/>
          <hr className='text-danger'/>
        <Counter/>
          <hr className='text-primary'/>
        <Hitung/>
          <hr className='text-warning'/>
      </div>
      <div>
          <input type="text" value={inputValue} onChange={handleChange} />
          <p>Tulisan yang diketik adalah: "{inputValue}"</p>
      </div>
    </>
  )
}
/** ========= Component Parent */


export default App;
