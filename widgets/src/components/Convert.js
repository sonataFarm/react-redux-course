import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [ translated, setTranslated ] = useState('');

  const translate = async () => {
    const response = await axios.post(
      'https://translation.googleapis.com/language/translate/v2',
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      }
    );
    // console.log(response);
    setTranslated(response.data.data.translations[0].translatedText);
  };

  useEffect(translate, [ language ]);

  useEffect(() => {
    const timeoutId = setTimeout(translate, 500);
    return () => clearTimeout(timeoutId);
  }, [ text ]);

  return (
    <div className="ui header">{translated}</div>
  )
};

export default Convert;
