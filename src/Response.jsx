import React, { useState,useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AfterTranslate from './AfterTranslate'

import axios from 'axios';
const Response = () => {
  const [correct, setcorrect] = useState('');

  const [language,setlanguage]=useState('')
  const [response, setresponse] = useState('')
  const dataSend = async (e) => {
    e.preventDefault();
    const data = `Translate the following text to ${language} in one line only: '${correct}'`;
    
    try {
      if (correct == '') {
        return;
      }
      const res = await axios.post('https://backend-translator.vercel.app/generate', {
        prompt: data,
        
      })
      
      
      setresponse(res.data.data);
    } 
    catch (error) {
      console.log(error.message);
    }
  }

  const languages = [
    'ENGLISH', 'SPANISH', 'FRENCH', 'ITALIAN', 'RUSSIAN', 'HINDI', 'CHINESE', 'JAPANESE',
    'PORTUGUESE', 'ARABIC', 'URDU', 'MALAY', 'BENGALI', 'PUNJABI', 'TELUGU', 'TAMIL',
    'MARATHI', 'GUJARATI', 'INDONESIAN', 'GERMAN', 'TURKISH', 'KOREAN', 'VIETNAMESE',
    'POLISH', 'UKRAINIAN', 'DUTCH', 'PERSIAN', 'ROMANIAN', 'GREECE', 'HUNGARIAN',
    'RAJASTHANI'
  ];
  const clear = (e) => {
    e.preventDefault();
    setcorrect('');
  }
  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-4  ">
              <input
                type="text"
                placeholder="ENTER THE DATA"
                value={correct}
                className="form-control form-control-lg border border-4 border-black"
                style={{ height: "100px", padding: '50px' }} onChange={(e)=>setcorrect(e.target.value)}
              />
              <center><button className='btn btn-primary p-3 m-2' onClick={clear}>CLEAR INPUT FIELD </button></center>
            </div>
        
            <div className="mb-4">
              <label htmlFor="exampleSelect" className="form-label ">Select Language</label>
              <select className="form-select border border-4 border-black p-3"   id="exampleSelect" onChange={(e)=>setlanguage(e.target.value) }>
                {
                  languages.map((e, i) => ( 
                    <>
                      <option key={i} >{e}</option>
                    </>
                  ))
               }
              </select>
            </div>
            <div className="text-center">
              <button className="btn btn-primary btn-lg custom-hover p-3" onClick={dataSend}>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      <AfterTranslate getting={response} language={language} />
      
    </div>
  );
};
 
export default Response;
