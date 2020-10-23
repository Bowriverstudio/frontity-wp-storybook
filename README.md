# Frontity Wordpress Storybook POC

Download the repository.

## Getting Started

### Storybook

```bash
npm install
npm run storybook
```

### Frontity

```bash
cd frontity
npm install
npm run dev
```

## Storybook current issues

### Pagination Component

I get the error: Uncaught TypeError: state.source.get is not a function

These two lines fail in storybook. The workarounds I found are hacks and not real soutions.

```js
const { next, previous } = state.source.get(state.router.link);

// Pre-fetch the the next page if it hasn't been fetched yet.
useEffect(() => {
  if (next) actions.source.fetch(next);
}, []);
```

### Post

This is not working in storybook.

```js
const Html2React = libraries.html2react.Component;
```
