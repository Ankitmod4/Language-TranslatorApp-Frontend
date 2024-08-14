import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AfterTranslate = ({ getting, language }) => {
  const RefElement = useRef(null);
  const [loading, setLoading] = useState(false);

  const Speak = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = RefElement.current.textContent;
    const utterance = new SpeechSynthesisUtterance(data);

    if (language === 'JAPANESE') {
      utterance.lang = 'ja';
    } else if (language === 'CHINESE') {
      utterance.lang = 'zh';
    } else if (language === 'RUSSIAN') {
      utterance.lang = 'ru';
    } else if (language === 'ITALIAN') {
      utterance.lang = 'it';
    } else if (language === 'HINDI') {
      utterance.lang = 'hi';
    } else if (language === 'SPANISH') {
      utterance.lang = 'es';
    } else if (language === 'FRENCH') {
      utterance.lang = 'fr';
    } else if (language === 'PORTUGUESE') {
      utterance.lang = 'pt';
    } else if (language === 'ARABIC') {
      utterance.lang = 'ar';
    } else if (language === 'URDU') {
      utterance.lang = 'ur';
    } else if (language === 'MALAY') {
      utterance.lang = 'ms';
    } else if (language === 'BENGALI') {
      utterance.lang = 'bn';
    } else if (language === 'PUNJABI') {
      utterance.lang = 'pa';
    } else if (language === 'TELUGU') {
      utterance.lang = 'te';
    } else if (language === 'TAMIL') {
      utterance.lang = 'ta';
    } else if (language === 'MARATHI') {
      utterance.lang = 'mr';
    } else if (language === 'GUJARATI') {
      utterance.lang = 'gu';
    } else if (language === 'INDONESIAN') {
      utterance.lang = 'id';
    } else if (language === 'GERMAN') {
      utterance.lang = 'de';
    } else if (language === 'TURKISH') {
      utterance.lang = 'tr';
    } else if (language === 'KOREAN') {
      utterance.lang = 'ko';
    } else if (language === 'VIETNAMESE') {
      utterance.lang = 'vi';
    } else if (language === 'POLISH') {
      utterance.lang = 'pl';
    } else if (language === 'UKRAINIAN') {
      utterance.lang = 'uk';
    } else if (language === 'DUTCH') {
      utterance.lang = 'nl';
    } else if (language === 'PERSIAN') {
      utterance.lang = 'fa';
    } else if (language === 'ROMANIAN') {
      utterance.lang = 'ro';
    } else if (language === 'GREECE') {
      utterance.lang = 'el';
    } else if (language === 'HUNGARIAN') {
      utterance.lang = 'hu';
    } else if (language === 'RAJASTHANI') {
      utterance.lang = 'raj';
    } else {
      utterance.lang = 'en-US';
    }

    utterance.onend = () => {
      setLoading(false);
    };

    setTimeout(() => {
      speechSynthesis.speak(utterance);

    }, 1000);

    
  
    
  };

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
