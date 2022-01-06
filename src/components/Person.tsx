import * as React from 'react';

// We use interfaces to define type props

interface AppProps {
  name:String;
  age:Number;
  email:String;

}

export const Person:React.FC<AppProps> =({name, age,email})  => {
  const [country, setCountry] = React.useState<String>("");

  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setCountry(event.target.value)
       
  }

  return (
        <div>
          <h1>{name}</h1>
          <h1>{age}</h1>
          <h1>{email}</h1>
          <input type="text" placeholder="Enter Country" onChange={handleChange} />
          {country}
          
            
        </div>
  );
}
