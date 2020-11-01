import React, { useState, useCallback } from 'react';

import { Container } from './styles'

interface FloatingScreenProps {
  message?: string;
  textButton?: string;
}

export const FloatingScreen: React.FC<FloatingScreenProps> =
  ({ message, textButton}) => {
  const [cookies, setCookies] = useState(() => {
    return !!localStorage.getItem('@CookiesFloatingScreen:ReactJS');
  });

  const handleAcceptCookies = useCallback(() => {
    localStorage.setItem('@CookiesFloatingScreen:ReactJS', 'accept');

    setCookies(true);
  }, []);

  return (
    <>
      {!cookies && (
        <Container className="box-cookies">
          <p>{message ? message : 'Este site usa cookies para garantir que você obtenha a melhor experiência.'}</p>
          <button onClick={handleAcceptCookies}>{textButton ? textButton : 'Aceitar!'}</button>
        </Container>
      )}
    </>
  );
}