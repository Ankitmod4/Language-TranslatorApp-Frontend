import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AfterTranslate from './AfterTranslate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Response = () => {
  const [correct, setCorrect] = useState('');
  const [language, setLanguage] = useState('');
  const [response, setResponse] = useState('');

  const dataSend = async (e) => {
    e.preventDefault();
    const data = `Translate the following text to ${language} in one line only: '${correct}'`;
    toast.success("Wait for Response Generated");

    try {
      if (correct === '') {
        return;
      }
      const res = await axios.post('https://backend-translator.vercel.app/generate', {
        prompt: data,
      });
      setResponse(res.data.data);
    } catch (error) {
      toast.error("Error Due to Some Reasons");
      console.log(error.message);
    }
  };

  const languages = [
    'ENGLISH', 'SPANISH', 'FRENCH', 'ITALIAN', 'RUSSIAN', 'HINDI', 'CHINESE', 'JAPANESE',
    'PORTUGUESE', 'ARABIC', 'URDU', 'MALAY', 'BENGALI', 'TELUGU', 'TAMIL',
    'MARATHI', 'GUJARATI', 'INDONESIAN', 'GERMAN', 'TURKISH', 'KOREAN', 'VIETNAMESE',
    'POLISH', 'UKRAINIAN', 'DUTCH', 'PERSIAN', 'ROMANIAN', 'GREEK', 'HUNGARIAN',
    'RAJASTHANI'
  ];

  const clear = (e) => {
    e.preventDefault();
    setCorrect('');
    setLanguage('');
    setResponse('');
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={dataSend}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="ENTER THE DATA"
                value={correct}
                className="form-control form-control-lg border border-4 border-black"
                style={{ height: "100px", padding: '50px' }}
                onChange={(e) => setCorrect(e.target.value)}
              />
              <center>
                <button className='btn btn-primary p-3 m-2' onClick={clear}>CLEAR INPUT FIELD</button>
              </center>
            </div>
            <div className="mb-4">
              <label htmlFor="exampleSelect" className="form-label">Select Language</label>
              <select
                className="form-select border border-4 border-black p-3"
                id="exampleSelect"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="">Select a language</option>
                {languages.map((lang, i) => (
                  <option key={i} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg custom-hover p-3">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      <AfterTranslate getting={response} language={language} />
    </div>
  );
};

export default Response;
