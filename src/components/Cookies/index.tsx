import React, { useState, useCallback } from 'react';

import './styles.css'

const Cookies: React.FC = () => {
  const [cookies, setCookies] = useState(() => {
    const cookies = localStorage.getItem('@ReactJSCookies:InsideBlock');

    if (cookies) {
      return true;
    }

    return false;
  });

  console.log(cookies)

  const handleAcceptCookies = useCallback(() => {
    localStorage.setItem('@ReactJSCookies:InsideBlock', 'accept');

    setCookies(true);
  }, []);

  return (
    <>
      {!cookies && (
        <div className="box-cookies">
          <p className="msg-cookies">Este site usa cookies para garantir que você obtenha a melhor experiência.</p>
          <button className="btn-cookies" onClick={handleAcceptCookies}>Aceitar!</button>
        </div>
      )}
    </>
  );
}

export default Cookies;