# React Bionic Reading

A React component library for applying bionic reading to text.

## Installation

```bash
npm install react-bionic-reading
# or
yarn add react-bionic-reading
```

## Usage

```jsx
import { BionicText, BionicBlock, BionicToggleButton, Icon, useBionic } from 'react-bionic-reading';

function App() {
  return (
    <div>
      <BionicToggleButton />
      <BionicText text="This is some text to be bionic-read." />
      <BionicBlock>
        <p>This is a paragraph inside a bionic block.</p>
        <p>Another paragraph.</p>
      </BionicBlock>
    </div>
  );
}

export default App;
```

## Development

To run the Storybook development server:

```bash
npm run storybook
```

To run tests:

```bash
npm test
```

To build the project:

```bash
npm run build
```
