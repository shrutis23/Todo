import { useState } from "react";
import React from 'react';
//import { FormControl ,OutlinedInput , Paper , TextField ,Input} from "@mui/material";

function Ls(){
  
    return (
<div className="container-fluid">
    <div className="headd">
            <h4 className="heading">शाळा सोडल्याचे प्रमाणपत्र </h4>
    </div>

    <div className="id">
      <row>
      <label>स्टुडन्ट आय.डी. : </label>
            <input type="text"></input>
      </row>
           
      <row>
      <label>यू . आय . डी .नं . (आधार  कार्ड क्रमांक ) : </label>
            <input type="text"></input>
      </row> 
    </div>



    <div className="name">
      <row>
        <label>विद्यार्थ्याचे पूर्ण नांव : </label>
          <input type="text"></input>

        <label>(वडिलांचे  नांव )</label>
          <input type="text"></input>
      </row>       
       
      <row>
      <label>(आडनांव )</label>
          <input type="text"></input>
      </row>
       
      <row>
      <label>आईचे नांव : </label>
          <input type="text"></input>
      </row>
    </div>

    <div className="nation">
      <row>
           <label>राष्ट्रीयत्व :</label>
                <input type="text"></input>
        
            <label>मातृभाषा :</label>
                <input type="text"></input>
      </row>
    </div>
            
            
    <div className="religion">
    <row>
           <label>धर्म :</label>
                <input type="text"></input>
        
            <label>जात :</label>
                <input type="text"></input>

            <label>पोट जात :</label>
                <input type="text"></input>

      </row>
               
    </div>

    <div className="birthPlace">

    <row>
           <label>जन्म स्थळ (गाव  / शहर  ) :</label>
                <input type="text"></input>
        
            <label>देश :</label>
                <input type="text"></input>
      </row>
    
            
            
    
    <row>
           <label>तालुका :</label>
                <input type="text"></input>
        
            <label>जिल्हा :</label>
                <input type="text"></input>

            <label>राज्य :</label>
                <input type="text"></input>

      </row>
    </div> 

    <div className="DOB">
    <row>
           <label>इसवी  सनाप्रमाणे  जन्म दिनांक  :</label>
                <input type="text"></input>
        
            <label>जन्म दिनांक अक्षरी :</label>
                <input type="text"></input>
      </row>
                
    </div>

</div>

);
}
export default Ls


{/* <label></label>
<input type="text"></input> */}