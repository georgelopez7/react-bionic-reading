<h1 style="font-weight: 400;">⚪⚫ <b style="font-weight: 700;">Rea</b>ct <b style="font-weight: 700;">Bio</b>nic <b style="font-weight: 700;">Read</b>ing</h1>

A React component library for applying <b>bio</b>nic <b>read</b>ing to text. Effortlessly integrate bionic reading into your React applications to enhance readability and reading speed.

<h2 style="font-weight: 400;">📷 <b style="font-weight: 700;">De</b>mo</h2>

https://github.com/user-attachments/assets/abd491c3-762e-44a1-ad49-ec80970f522f


<h2 style="font-weight: 400;">🚀 <b style="font-weight: 700;">Instal</b>lation</h2>

Install the package in your project directory with:

```bash
npm install react-bionic-reading
```

or if you prefer yarn:

```bash
yarn add react-bionic-reading
```

<h2 style="font-weight: 400;">✨ <b style="font-weight: 700;">Usa</b>ge</h2>

We provide two main components to apply bionic reading: `BionicText` for single strings and `BionicBlock` for larger blocks of content with nested elements.

### `BionicText`

Use the `BionicText` component to apply bionic reading to a string.

```jsx
import { BionicText } from "react-bionic-reading";

function MyComponent() {
  return (
    <BionicText text="This is some text that will be displayed with bionic reading." />
  );
}
```

### `BionicBlock`

Use the `BionicBlock` component to apply bionic reading to a block of content, including nested HTML elements.

```jsx
import { BionicBlock } from "react-bionic-reading";

function MyArticle() {
  return (
    <BionicBlock>
      <h2>This is a heading</h2>
      <p>
        This is a paragraph inside a bionic block. It will be converted to
        bionic text.
      </p>
      <p>
        Another paragraph with some <strong>strongly emphasized</strong> text.
      </p>
    </BionicBlock>
  );
}
```

### `useBionic` Hook

We expose a `useBionic` hook that allows you to globally control the bionic reading state. This is useful for creating a toggle button to enable or disable bionic reading for the entire application.

```jsx
import { useBionic } from "react-bionic-reading";

function BionicModeToggle() {
  const { bionicMode, setBionicMode } = useBionic();

  return (
    <button onClick={() => setBionicMode(!bionicMode)}>
      {bionicMode ? "Disable" : "Enable"} Bionic Reading
    </button>
  );
}
```

<h2 style="font-weight: 400;">🧵 <b style="font-weight: 700;">Pro</b>ps</h2>

### `BionicText` Props

| Prop              | Type            | Description                                                                                                              |
| ----------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `text`            | `string`        | The text string to apply bionic reading to.                                                                              |
| `as`              | `ElementType`   | The HTML element to render the component as. Defaults to `span`.                                                         |
| `style`           | `CSSProperties` | Inline styles to apply to the component.                                                                                 |
| `className`       | `string`        | CSS classes to apply to the component.                                                                                   |
| `forceBionicMode` | `boolean`       | If `true`, bionic reading will be applied regardless of the global state from the `useBionic` hook. Defaults to `false`. |

### `BionicBlock` Props

| Prop              | Type        | Description                                                                                                                               |
| ----------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `children`        | `ReactNode` | The content to be rendered within the block. The component will recursively traverse the children and apply bionic reading to text nodes. |
| `forceBionicMode` | `boolean`   | If `true`, bionic reading will be applied regardless of the global state from the `useBionic` hook. Defaults to `false`.                  |

### `useBionic` Hook

The `useBionic` hook returns an object with the following properties:

| Property        | Type                 | Description                                             |
| --------------- | -------------------- | ------------------------------------------------------- |
| `bionicMode`    | `boolean`            | The current state of bionic reading (enabled/disabled). |
| `setBionicMode` | `(isBionic) => void` | A function to update the `bionicMode` state.            |
