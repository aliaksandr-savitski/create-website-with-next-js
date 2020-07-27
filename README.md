# Template Repository For Bootstrapping Websites With Next.js and Headless CMS

## Technologies
- [Next.js](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Styled System](https://styled-system.com/)
- [Modernizr](https://modernizr.com/) using [next-plugin-modernizr](https://www.npmjs.com/package/next-plugin-modernizr)
- ESlint which extends airbnb config

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
```
/public
/src
  /assets
  /clients
  /components
  /layouts
  /pages
  /styles
  /utils
  config.js
  next-seo.config.js
```
This project structure extends default Next.js structure with `./src` directory [https://nextjs.org/docs/advanced-features/src-directory](https://nextjs.org/docs/advanced-features/src-directory). If you're not familiar with Next.js - please, read their documentation first.

### Clients
Folder where all clients should be placed. Kendico delivery client is setup as an example use.

### Styles
#### Global Styles
Styles should be written using [Styled Components](https://styled-components.com/). Global styles shall be difened in `./src/styles/GlobalStyels`.

#### Theme
Theme object structure is strongly dependant on [Styled System](https://styled-system.com/getting-started) as it is used to add styles to components in the fly, for instance:
It's better to define component margins in place where it is used, rather than in component itself
```javascript
const HomePage = props => (
  <>
    <Button type="button" marginTop="2rem" />
  <>
);
```

#### Style Utils
For bootstrapped project there is only one util = media queries. Project uses Mobile First approach, so utils will generate media queries with `min-width` by default. So first query will start with `tablet` screen sizes.
Usage:
```javascript
import styled from 'styled-components';

import { media } from '@styles/style-utils';

const MainLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;

  ${media.desktop`
    grid-template-columns: auto;
  `}
`;
```

### Module Resolver
This project uses [Babel Plugin Module Resolver](https://github.com/tleunen/babel-plugin-module-resolver), which creates aliases to root elements in `/src` folder. If you add any new folder it is advised to create new alias and use it in imports. Aliases that ara available out of the box: 
```
"@assets": "./src/assets",
"@clients": "./src/clients",
"@components": "./src/components",
"@constants": "./src/constants",
"@hooks": "./src/hooks",
"@layouts": "./src/layouts",
"@pages": "./src/pages",
"@styles": "./src/styles",
"@utils": "./src/utils",
"@config": "./src/config.js"
```

### Environment Variables
Please refer to Next.js documentation: [https://nextjs.org/docs/basic-features/environment-variables](https://nextjs.org/docs/basic-features/environment-variables)
