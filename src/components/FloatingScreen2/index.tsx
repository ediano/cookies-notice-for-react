import React, { useState, useCallback } from 'react';

import { Container } from './styles'

interface FloatingScreen2Props {
  message?: string;
  textButton?: string;
}

export const FloatingScreen2: React.FC<FloatingScreen2Props> =
  ({ message, textButton}) => {
  const [cookies, setCookies] = useState(() => {
    return !!localStorage.getItem('@CookiesFloatingScreen2:ReactJS');
  });

  const handleAcceptCookies = useCallback(() => {
    localStorage.setItem('@CookiesFloatingScreen2:ReactJS', 'accept');

    setCookies(true);
  }, []);

  return (
    <>
      {!cookies && (
        <Container className="box-cookies">
          <p>{message ? message : 'Este site usa cookies para garantir que você obtenha a melhor experiência.'}</p>
          <button onClick={handleAcceptCookies}>{textButton ? textButton : 'Entendi!'}</button>
        </Container>
      )}
    </>
  );
}