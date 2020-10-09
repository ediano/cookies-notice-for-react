import React, { useState, useCallback } from 'react';

import { Container } from './styles'

interface TemplateWithStyledComponentProps {
  message?: string;
  textButton?: string;
}

const TemplateWithStyledComponent: React.FC<TemplateWithStyledComponentProps> =
  ({ message, textButton}) => {
  const [cookies, setCookies] = useState(() => {
    return !!localStorage.getItem('@CookiesTemplateWithStyledComponent:ReactJS');
  });

  const handleAcceptCookies = useCallback(() => {
    localStorage.setItem('@CookiesTemplateWithStyledComponent:ReactJS', 'accept');

    setCookies(true);
  }, []);

  return (
    <>
      {!cookies && (
        <Container>
          <p>{message ? message : 'Este site usa cookies para garantir que você obtenha a melhor experiência.'}</p>
          <button onClick={handleAcceptCookies}>{textButton ? textButton : 'Aceitar!'}</button>
        </Container>
      )}
    </>
  );
}

export default TemplateWithStyledComponent;