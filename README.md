## Melting Pot

<p align="center">
  <img src="https://badgen.net/npm/v/@withvoid/melting-pot" alt="">
  <img src="https://badgen.net/badge/license/MIT/blue" alt="">
  <img src="https://badgen.net/npm/dt/@withvoid/melting-pot" alt="">
</p>

The `@withvoid/melting-pot` package contains utilities, helper methods - your typical daily use functions (mostly in hooks).

## Demo

Hosted at 2 great platforms together.

* Netlify: [melting-pot.netlify.com](https://melting-pot.netlify.com)
* Zeits NOW: [melting-pot.now.sh](https://melting-pot.now.sh/)

## Getting Started

Install the package via npm or yarn:

```js
npm install @withvoid/melting-pot --save
```

Or if you prefer <b>yarn</b>

```js
yarn add @withvoid/melting-pot
```

Create your first application like so:

```
import React from "react"
import { useWindowSize } from "@withvoid/melting-pot"

const App = () => (
  const {width, height} = useWindowSize();
  <div>
    <p>The current height of screen is {height}px</p>
    <button type="button">
      {width <= 340 ? 'Click': 'Click Me!'}
    </button>
  </div>
)
```