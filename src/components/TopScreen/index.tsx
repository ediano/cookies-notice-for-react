import React, { useState, useCallback } from 'react';

import { Container } from './styles'

interface TopScreenProps {
  message?: string;
  textButton?: string;
}

export const TopScreen: React.FC<TopScreenProps> =
  ({ message, textButton}) => {
  const [cookies, setCookies] = useState(() => {
    return !!localStorage.getItem('@CookiesTopScreen:ReactJS');
  });

  const handleAcceptCookies = useCallback(() => {
    localStorage.setItem('@CookiesTopScreen:ReactJS', 'accept');

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