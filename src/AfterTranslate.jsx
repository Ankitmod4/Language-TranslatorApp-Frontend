import React, { useRef, useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AfterTranslate = ({ getting, language }) => {
  const RefElement = useRef(null);
  const [loading, setLoading] = useState(false);

  const languageMap = {
    JAPANESE: 'ja',
    CHINESE: 'zh',
    RUSSIAN: 'ru',
    ITALIAN: 'it',
    HINDI: 'hi',
    SPANISH: 'es',
    FRENCH: 'fr',
    PORTUGUESE: 'pt',
    ARABIC: 'ar',
    URDU: 'ur',
    MALAY: 'ms',
    BENGALI: 'bn',
    PUNJABI: 'pa',
    TELUGU: 'te',
    TAMIL: 'ta',
    MARATHI: 'mr',
    GUJARATI: 'gu',
    INDONESIAN: 'id',
    GERMAN: 'de',
    TURKISH: 'tr',
    KOREAN: 'ko',
    VIETNAMESE: 'vi',
    POLISH: 'pl',
    UKRAINIAN: 'uk',
    DUTCH: 'nl',
    PERSIAN: 'fa',
    ROMANIAN: 'ro',
    GREECE: 'el',
    HUNGARIAN: 'hu',
    RAJASTHANI: 'raj',
  };
  
  const Speak = (e) => {
    e.preventDefault();
    setLoading(true);
  
    const data = RefElement.current.textContent;
    const utterance = new SpeechSynthesisUtterance(data);
    utterance.lang = languageMap[language] || 'en-US'; 
  
    utterance.rate = 0.8;
  
    utterance.onend = () => {
      setLoading(false);
    };
  
    speechSynthesis.speak(utterance);
  };
  useEffect(() => {
    speechSynthesis.onvoiceschanged = () => {
      speechSynthesis.getVoices();
    };
  }, []);
  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="p-4 bg-light border rounded shadow-sm">
            <h4 className="mb-3 text-center text-black" ref={RefElement}>{getting}</h4>
          </div>
        </div>
      </div>
      <center>
        <button 
          type="button" 
          onClick={Speak}  
          className='m-4 btn btn-success p-3'
          disabled={loading}>
          {loading ? 'Processing...' : 'Translate to Voice'}
        </button>
      </center>
    </div>
  );
};

export default AfterTranslate;
