# MWUI

## Getting Started

Install component library

```bash
npm i @fuasmattn/mwui
```

Import and use MWUI Components

```javascript
import { Button, Card } from "@fuasmattn/mwui";
```

Add the following lines to the index file of your React App. This ensures global styles and utility classes to be present.

```javascript
import { injectGlobalStyles } from "@fuasmattn/mwui";
import "@fuasmattn/mwui/index.css";

injectGlobalStyles();
```
