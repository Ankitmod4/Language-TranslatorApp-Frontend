import React, { useState,useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AfterTranslate from './AfterTranslate'

 
import axios from 'axios';
const Response = () => {
  const [correct, setcorrect] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setlanguage] = useState('ENGLISH');
  const [response, setresponse] = useState('')

  const Handleclick = (e) => {
    const selectedLanguage = e.target.value;
    setlanguage(selectedLanguage);
  }; 
  const dataSend = async (e) => {
    e.preventDefault();
    const data = `Translate the following text to ${language} and respond with only the translation: '${correct}'`;

    try {
      
      if (correct === '') {
        return;
      }
      setLoading(true)
      const res = await axios.post('https://backend-translator.vercel.app/generate', {
        prompt: data,
        
      }) 
      console.log(language) 
      setresponse(res.data.data);
    } 
    catch (error) {
      console.log(error.message);
    }
   
    finally {
      setLoading(false);
    }
  }

  const languages = [
    'ENGLISH', 'SPANISH', 'FRENCH', 'ITALIAN', 'RUSSIAN', 'HINDI', 'CHINESE', 'JAPANESE',
    'PORTUGUESE', 'ARABIC', 'URDU', 'MALAY', 'BENGALI', 'TELUGU', 'TAMIL',
    'MARATHI', 'GUJARATI', 'INDONESIAN', 'GERMAN', 'TURKISH', 'KOREAN', 'VIETNAMESE',
    'POLISH', 'UKRAINIAN', 'DUTCH', 'PERSIAN', 'ROMANIAN', 'GREECE', 'HUNGARIAN',
    'RAJASTHANI'
  ];
  const clear = (e) => {
    e.preventDefault();
    setcorrect('');
    setresponse('');
  }
  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={dataSend}>
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
              <select className="form-select border border-4 border-black p-3"   id="exampleSelect" onChange={Handleclick}>
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
            
              <button className="btn btn-danger btn-lg custom-hover p-3" type="submit" disabled={loading}>{ loading? 'Processing':'SUBMIT'}</button>
             
            </div>
          </form>
        </div> 
      </div>
     <AfterTranslate getting={response} language={language} />
      
    </div>
  );
};
 
export default Response;
