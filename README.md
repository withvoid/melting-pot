# Melting Pot

The `@withvoid/melting-pot` package contains utilities, helper methods - your typical daily use funcs and so on. See [demo and docs](https://melting-pot.now.sh/).

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