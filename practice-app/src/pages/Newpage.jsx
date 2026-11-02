import React from 'react'
import { useState } from 'react';
import Button1 from '../components/Button1'

function Newpage() {

    const [showSecondButton, setshowSecondButton] = useState([]);

    console.log("Current State:", showSecondButton);
  return (
    <div>

        
   <Button1

   text="Button"
   onClick={() => setshowSecondButton([...showSecondButton, showSecondButton.length+1]) 
    
   }
   
   
   />

   {showSecondButton.map( (Button,index) =>( 
    <Button1
    key={index}
    text={`Button ${index+1}`}
    color='green'

    />
   )) 
    
   }
     
    </div>
  )
}

export default Newpage
