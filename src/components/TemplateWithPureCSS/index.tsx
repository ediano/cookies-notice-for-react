import React, { useState, useCallback } from 'react';

import './styles.css'

interface TemplateWithPureCSSProps {
  message?: string;
  textButton?: string;
}

export const TemplateWithPureCSS: React.FC<TemplateWithPureCSSProps> = 
  ({ message, textButton }) => {
  const [cookies, setCookies] = useState(() => {
    return !!localStorage.getItem('@CookiesTemplateWithPureCSS:ReactJS');
  });

  const handleAcceptCookies = useCallback(() => {
    localStorage.setItem('@CookiesTemplateWithPureCSS:ReactJS', 'accept');

    setCookies(true);
  }, []);

  return (
    <>
      {!cookies && (
        <div className="box-cookies">
          <p className="msg-cookies">
            {message ? message : 'Este site usa cookies para garantir que você obtenha a melhor experiência.'}
          </p>
          <button className="btn-cookies" onClick={handleAcceptCookies}>{textButton ? textButton : 'Aceitar!'}</button>
        </div>
      )}
    </>
  );
}