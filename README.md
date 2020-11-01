# Cookies Notice for React

Este é um pequeno repositório, que foi criado a partir de um comentário de um dos usuários do insideblock.com, no comentário ele solicitou ajuda para adicionar aviso de cookies em páginas construídas com ReactJS. Então vamos lá, esta documentação é bem simples.

1. [Template Default](https://cookies-notice-for-react.vercel.app)

2. [Template Top Screen](https://cookies-notice-for-react.vercel.app/top-screen)

3. [Template Floating Screen](https://cookies-notice-for-react.vercel.app/floating-screen)

![default](/.github/default.png)
![top-screen](/.github/top-screen.png)
![floating screen](/.github/floating-screen.png)

## Local Storage

O template de aviso de cookies funciona diretamente com o `localStorage` do navegador do usuário, uma vez aceito, o aviso só será exibido novamente se o `localStorage` do navegador for limpo, ou se por algum motivos a chave armazenada for diferente da anterior.

## Usando componente

O uso dos componentes funciona como qualquer outro componente React, este projeto é formado por alguns modelos, ambos foram desenvolvido com styled-components.

OBS: Use apenas um dos modelos de cada vez por página, jamais use o os dois ao mesmo tempo.

### Exemplo

```tsx
import React from 'react';

import { Default } from './components/Default';

const App: React.FC = () => (
 <>
   <h1>Aviso de cookies para ReactJS com TypeScript</h1>

   <Default />
 </>
);

export default App;
```

Também é possível passar propriedades não obrigatórios para o componente.

```tsx
import React from 'react';

import { Default } from './components/Default';

const App: React.FC = () => (
 <>
   <h1>Aviso de cookies para ReactJS com TypeScript</h1>

   <Default
      message='Mensagem para o usuário'
      textButton='Texto do botão que aceita o clique (Aceitar!)'
    />
 </>
);

export default App;
```

Por enquanto é isso.

Este repositório está aberto a contribuições.
