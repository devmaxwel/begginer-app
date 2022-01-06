import React,{FC} from 'react';
import './App.css';
import { Person, hairColor } from './components/Person';

interface appContextInterface{
  name:String;
  age:Number;
  country: String;
}

const appContext = React.createContext<appContextInterface| null>(null);

const AppcontextProvilder=(props:any): any=> {

     const contextValue:appContextInterface = {
       name:"Maxwel",
       age:30,
       country:"Ghana"
     }

     return  <appContext.Provider value={{}}>
              {props.children}
       </appContext.Provider>
     
}

const useAppContext=()=> {

  return React.useContext(appContext);
}

const  App: FC =() => {

  return (
    <div className="App">

          <AppcontextProvilder>
              <Person name="Maxwel" age={21} 
              email="max@gmail.com" 
              hairColor={hairColor.Pink} />
         </AppcontextProvilder>

    </div>
  );
}

export default App;
