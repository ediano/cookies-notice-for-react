# Cookies Notice for React

Este é um pequeno repositório, que foi criado a partir de um comentário de um dos usuários do insideblock.com, no comentário ele solicitou ajuda para adicionar aviso de cookies em páginas construídas com ReactJS. Então vamos lá, esta documentação é bem simples.

[Template Default](https://cookies-notice-for-react.vercel.app)
[Template Top Screen](https://cookies-notice-for-react.vercel.app/top-screen)
[Template Floating Screen](https://cookies-notice-for-react.vercel.app/floating-screen)

![default](/.github/default.png)
![top-screen](/.github/top-screen.png)
![floating screen](/.github/floating-screen.png)

## Local Storage

O template de aviso de cookies funciona diretamente com o `localStorage` do navegador do usuário, uma vez aceito, o aviso só será exibido novamente se o `localStorage` do navegador for limpo, ou se por algum motivos a chave armazenada for diferente da anterior.

## Usando componente

O uso do componente funciona como qualquer outro componente React, este projeto é formado por dois componentes com mesmo layout de aparência, porém a forma como funciona por baixo dos panos são diferentes, um está escrito com CSS puro e outro com styled-components.

**Nome de componentes:**

**CSS puro:** TemplateWithPureCSS

**styled-components:** TemplateWithStyledComponent

OBS: Use apenas um dos modelos de cada vez por página, jamais use o os dois ao mesmo tempo.

### Exemplo: Componente com CSS puro

```tsx
import React from 'react';

import { TemplateWithPureCSS } from './components/TemplateWithPureCSS';

const App: React.FC = () => (
 <>
   <h1>Aviso de cookies para ReactJS com TypeScript</h1>

   <TemplateWithPureCSS />
 </>
);

export default App;
```

Também é possível passar propriedades não obrigatórios para o componente.

```tsx
import React from 'react';

import { TemplateWithPureCSS } from './components/TemplateWithPureCSS';

const App: React.FC = () => (
 <>
   <h1>Aviso de cookies para ReactJS com TypeScript</h1>

   <TemplateWithPureCSS
      message='Mensagem para o usuário'
      textButton='Texto do botão que aceita o clique (Aceitar!)'
    />
 </>
);

export default App;
```

### Exemplo: Componente com styled-components

```tsx
import React from 'react';

import { TemplateWithStyledComponent } from './components/TemplateWithStyledComponent';

const App: React.FC = () => (
 <>
   <h1>Aviso de cookies para ReactJS com TypeScript</h1>

   <TemplateWithStyledComponent />
 </>
);

export default App;
```

Da mesmo forma que os componentes com CSS puro, também pode ser passado propriedades não obrigatórias para o componente com styled-components.

```tsx
import React from 'react';

import { TemplateWithStyledComponent } from './components/TemplateWithStyledComponent';

const App: React.FC = () => (
 <>
  <h1>Aviso de cookies para ReactJS com TypeScript</h1>

  <TemplateWithStyledComponent
    message='Mensagem para o usuário'
    textButton='Texto do botão que aceita o clique (Aceitar!)'
  />
 </>
);

export default App;
```

Por enquanto é isso.

Este repositório está aberto a contribuições.
