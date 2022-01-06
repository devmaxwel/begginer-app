import React,{FC} from 'react';
import './App.css';
import { Person } from './components/Person';


const  App: FC =() => {

  return (
    <div className="App">

        <Person name="Maxwel" age={21} email="max@gmail.com" />

    </div>
  );
}

export default App;
