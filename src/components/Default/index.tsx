import React, { useState, useCallback } from 'react';

import { Container } from './styles'

interface DefaultProps {
  message?: string;
  textButton?: string;
}

export const Default: React.FC<DefaultProps> = 
  ({ message, textButton }) => {
  const [cookies, setCookies] = useState(() => {
    return !!localStorage.getItem('@CookiesDefault:ReactJS');
  });

  const handleAcceptCookies = useCallback(() => {
    localStorage.setItem('@CookiesDefault:ReactJS', 'accept');

    setCookies(true);
  }, []);

  return (
    <>
      {!cookies && (
        <Container className="box-cookies">
          <p className="msg-cookies">
            {message ? message : 'Este site usa cookies para garantir que você obtenha a melhor experiência.'}
          </p>
          <button className="btn-cookies" onClick={handleAcceptCookies}>{textButton ? textButton : 'Entendi!'}</button>
        </Container>
      )}
    </>
  );
}