import i18n from '../../languages/i18next';
import React, { useState, useEffect } from 'react';
import './LanguageSelector.scss';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => i18n.language || "uz");

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage); 
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage); 
    }
  }, []);

  return (
    <select 
      id="language-selector" 
      value={selectedLanguage} 
      onChange={handleLanguageChange} 
      className={`outline-none language-selector ${selectedLanguage}`}
    >
      <option value="uz" data-flag="uz">UZ</option>
      <option value="ru" data-flag="ru">RU</option>
      <option value="en" data-flag="us">ENG</option>
    </select>
  );
};

export default LanguageSelector;
