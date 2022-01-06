import { type } from 'os';
import * as React from 'react';

// We use interfaces to define type props
export enum hairColor{
  Blonde ="wow, You're a blode",
  Brown = "Nice hair",
  Pink = "Good for you"

};

interface AppProps {
  name:String;
  age:Number;
  email:String;
  hairColor: hairColor

}
// enumas are used if you have many options to choose from 


export const Person:React.FC<AppProps> =({name, age,email, hairColor})  => {
  const [country, setCountry] = React.useState<String>("");

  // Type is used to restrict a certain const to specific values

  type NameType = "Maxwel" | "Ochieng" | "Okeyo" | "Bildad"
  const nameForType: NameType =  "Bildad"

  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setCountry(event.target.value)
       
  }

  return (
        <div>
          <h1>{name}</h1>
          <h1>{age}</h1>
          <h1>{email}</h1>
          {hairColor}    
          <br />
          <input type="text" placeholder="Enter Country" onChange={handleChange} />
          {country} 
        
            
        </div>
  );
}
