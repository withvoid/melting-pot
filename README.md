# Melting Pot

The `@withvoid/melting-pot` package contains utilities, helper methods - your typical daily use funcs and so on. See [demo and docs](https://melting-pot.now.sh/).

## Demo

Hosted at 2 great platforms together.

Zeits NOW: [melting-pot.now.sh](https://melting-pot.now.sh/)
Netlify: [melting-pot.netlify.com](https://melting-pot.netlify.com)

## Getting Started

Install the package via npm or yarn:

`npm install @withvoid/melting-pot`

Create your first application like so:

```js
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