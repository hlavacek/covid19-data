import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import translationsEn from './i18n/en';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: translationsEn,
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
