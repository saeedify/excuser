import './App.css';
import {useState} from 'react';
import Axios from "axios";

function App() {

  const [excuse,setExcuse]=useState("");

  const getExcuse = (type) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}/`).then(
      (response)=>{
        setExcuse(response.data[0].excuse);
      }
    );
  }

  return (
    <div className="App">
      <h1>Excuser</h1>
      <button onClick={() => getExcuse("family")}> Family </button>
      <button onClick={() => getExcuse("office")}> Office </button>
      <button onClick={() => getExcuse("children")}> Children </button>
      <button onClick={() => getExcuse("college")}> College </button>
      <button onClick={() => getExcuse("party")}> Party </button>
      <button onClick={() => getExcuse("funny")}> Funny </button>
      <button onClick={() => getExcuse("unbelievable")}> Unbelievable </button>

      <p>{excuse}</p>
      
    </div>
  );
}

export default App;
