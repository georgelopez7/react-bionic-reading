# ⚪⚫ 𝗥𝗲𝗮ct 𝗕𝗶𝗼nic 𝗥𝗲𝗮ding

𝗔 𝗥𝗲𝗮ct 𝗰𝗼𝗺𝗽onent 𝗹𝗶𝗯𝗿ary 𝗳𝗼r 𝗮𝗽𝗽𝗹ying 𝗯𝗶𝗼nic 𝗿𝗲𝗮𝗱ing 𝘁𝗼 𝘁𝗲xt. 𝗘𝗳𝗳𝗼𝗿𝘁𝗹essly 𝗶𝗻𝘁𝗲𝗴rate 𝗯𝗶𝗼nic 𝗿𝗲𝗮𝗱ing 𝗶𝗻𝘁𝗼 𝘆𝗼ur 𝗥𝗲𝗮ct 𝗮𝗽𝗽𝗹𝗶𝗰𝗮tions 𝘁𝗼 𝗲𝗻𝗵𝗮nce 𝗿𝗲𝗮𝗱𝗮𝗯ility 𝗮𝗻𝗱 𝗿𝗲𝗮𝗱ing 𝘀𝗽𝗲ed.

## 📷 𝗗𝗲mo

https://github.com/user-attachments/assets/abd491c3-762e-44a1-ad49-ec80970f522f

## 🚀 𝗜𝗻𝘀𝘁𝗮𝗹lation

𝗜𝗻𝘀𝘁𝗮𝗹l 𝘁𝗵𝗲 𝗽𝗮𝗰𝗸age 𝗶𝗻 𝘆𝗼ur 𝗽𝗿𝗼ject 𝗱𝗶𝗿𝗲𝗰tory 𝘄𝗶th:

```bash
npm install react-bionic-reading
```

𝗼𝗿 𝗶𝗳 𝘆𝗼u 𝗽𝗿𝗲𝗳er 𝘆𝗮rn:

```bash
yarn add react-bionic-reading
```

## ✨ 𝗨𝘀𝗮ge

𝗪𝗲 𝗽𝗿𝗼𝘃ide 𝘁𝘄𝗼 𝗺𝗮in 𝗰𝗼𝗺𝗽𝗼nents 𝘁𝗼 𝗮𝗽𝗽ly 𝗯𝗶𝗼nic 𝗿𝗲𝗮𝗱ing: `BionicText` 𝗳𝗼𝗿 𝘀𝗶𝗻𝗴le 𝘀𝘁𝗿𝗶𝗻𝗴s 𝗮𝗻𝗱 `BionicBlock` 𝗳𝗼𝗿 𝗹𝗮𝗿𝗴er 𝗯𝗹𝗼𝗰ks 𝗼𝗳 𝗰𝗼𝗻𝘁ent 𝘄𝗶𝘁h 𝗻𝗲𝘀𝘁ed 𝗲𝗹𝗲𝗺ents.

### `BionicText`

𝗨𝘀𝗲 𝘁𝗵𝗲 `BionicText` 𝗰𝗼𝗺𝗽𝗼nent 𝘁𝗼 𝗮𝗽𝗽ly 𝗯𝗶𝗼nic 𝗿𝗲𝗮𝗱ing 𝘁𝗼 𝗮 𝘀𝘁𝗿𝗶ng.

```jsx
import { BionicText } from "react-bionic-reading";

function MyComponent() {
  return (
    <BionicText text="This is some text that will be displayed with bionic reading." />
  );
}
```

### `BionicBlock`

𝗨𝘀𝗲 𝘁𝗵𝗲 `BionicBlock` 𝗰𝗼𝗺𝗽𝗼nent 𝘁𝗼 𝗮𝗽𝗽ly 𝗯𝗶𝗼nic 𝗿𝗲𝗮𝗱ing 𝘁𝗼 𝗮 𝗯𝗹𝗼ck 𝗼𝗳 𝗰𝗼𝗻𝘁ent, 𝗶𝗻𝗰𝗹𝘂ding 𝗻𝗲𝘀𝘁ed 𝗛𝗧𝗠L 𝗲𝗹𝗲𝗺ents.

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
    </BionicBlock>
  );
}
```

### `useBionic` Hook

𝗪𝗲 𝗲𝘅𝗽𝗼se 𝗮 `useBionic` 𝗵𝗼𝗼k 𝘁𝗵𝗮t 𝗮𝗹𝗹𝗼ws 𝘆𝗼u 𝘁𝗼 𝗴𝗹𝗼𝗯ally 𝗰𝗼𝗻𝘁rol 𝘁𝗵𝗲 𝗯𝗶𝗼nic 𝗿𝗲𝗮𝗱ing 𝘀𝘁𝗮te. 𝗧𝗵𝗶s 𝗶𝘀 𝘂𝘀𝗲𝗳ul 𝗳𝗼𝗿 𝗰𝗿𝗲𝗮ting 𝗮 𝘁𝗼𝗴𝗴le 𝗯𝘂𝘁𝘁on 𝘁𝗼 𝗲𝗻𝗮𝗯le 𝗼𝗿 𝗱𝗶𝘀𝗮ble 𝗯𝗶𝗼nic 𝗿𝗲𝗮𝗱ing 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗲𝗻𝘁𝗶re 𝗮𝗽𝗽𝗹𝗶𝗰𝗮tion.

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

## 🧵 𝗣𝗿𝗼ps

### `BionicText` Props

| Prop              | Type            | Description                                                                                                              |
| ----------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `text`            | `string`        | 𝗧𝗵𝗲 𝘁𝗲xt 𝘀𝘁𝗿𝗶ng 𝘁𝗼 𝗮𝗽𝗽ly 𝗯𝗶𝗼nic 𝗿𝗲𝗮𝗱ing 𝘁𝗼.                                                                              |
| `as`              | `ElementType`   | 𝗧𝗵𝗲 𝗛𝗧𝗠L 𝗲𝗹𝗲𝗺ent 𝘁𝗼 𝗿𝗲𝗻𝗱er 𝘁𝗵𝗲 𝗰𝗼𝗺𝗽𝗼nent 𝗮𝘀. 𝗗𝗲𝗳𝗮ults 𝘁𝗼 `span`.                                                         |
| `style`           | `CSSProperties` | 𝗜𝗻𝗹𝗶ne 𝘀𝘁𝘆𝗹es 𝘁𝗼 𝗮𝗽𝗽ly 𝘁𝗼 𝘁𝗵𝗲 𝗰𝗼𝗺𝗽𝗼nent.                                                                                 |
| `className`       | `string`        | 𝗖𝗦𝗦 𝗰𝗹𝗮𝘀ses 𝘁𝗼 𝗮𝗽𝗽ly 𝘁𝗼 𝘁𝗵𝗲 𝗰𝗼𝗺𝗽𝗼nent.                                                                                   |
| `forceBionicMode` | `boolean`       | 𝗜𝗳 `true`, 𝗯𝗶𝗼nic 𝗿𝗲𝗮𝗱ing 𝘄𝗶𝗹l 𝗯𝗲 𝗮𝗽𝗽𝗹ied 𝗿𝗲𝗴𝗮𝗿dless 𝗼𝗳 𝘁𝗵𝗲 𝗴𝗹𝗼𝗯al 𝘀𝘁𝗮te 𝗳𝗿𝗼m 𝘁𝗵𝗲 `useBionic` 𝗵𝗼𝗼k. 𝗗𝗲𝗳𝗮ults 𝘁𝗼 `false`. |

### `BionicBlock` Props

| Prop              | Type        | Description                                                                                                                               |
| ----------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `children`        | `ReactNode` | 𝗧𝗵𝗲 𝗰𝗼𝗻𝘁ent 𝘁𝗼 𝗯𝗲 𝗿𝗲𝗻𝗱ered 𝘄𝗶𝘁𝗵in 𝘁𝗵𝗲 𝗯𝗹𝗼ck. 𝗧𝗵𝗲 𝗰𝗼𝗺𝗽𝗼nent 𝘄𝗶𝗹l 𝗿𝗲𝗰𝘂𝗿sively 𝘁𝗿𝗮𝘃erse 𝘁𝗵𝗲 𝗰𝗵𝗶𝗹dren 𝗮𝗻𝗱 𝗮𝗽𝗽ly 𝗯𝗶𝗼nic 𝗿𝗲𝗮𝗱ing 𝘁𝗼 𝘁𝗲xt 𝗻𝗼𝗱es. |
| `forceBionicMode` | `boolean`   | 𝗜𝗳 `true`, 𝗯𝗶𝗼nic 𝗿𝗲𝗮𝗱ing 𝘄𝗶𝗹l 𝗯𝗲 𝗮𝗽𝗽𝗹ied 𝗿𝗲𝗴𝗮𝗿dless 𝗼𝗳 𝘁𝗵𝗲 𝗴𝗹𝗼𝗯al 𝘀𝘁𝗮te 𝗳𝗿𝗼m 𝘁𝗵𝗲 `useBionic` 𝗵𝗼𝗼k. 𝗗𝗲𝗳𝗮ults 𝘁𝗼 `false`.                  |

### `useBionic` Hook

𝗧𝗵𝗲 `useBionic` 𝗵𝗼𝗼k 𝗿𝗲𝘁𝘂𝗿ns 𝗮n 𝗼𝗯𝗷𝗲ct 𝘄𝗶𝘁h 𝘁𝗵𝗲 𝗳𝗼𝗹𝗹𝗼wing 𝗽𝗿𝗼𝗽𝗲rties:

| Property        | Type                 | Description                                             |
| --------------- | -------------------- | ------------------------------------------------------- |
| `bionicMode`    | `boolean`            | 𝗧𝗵𝗲 𝗰𝘂𝗿𝗿ent 𝘀𝘁𝗮te 𝗼𝗳 𝗯𝗶𝗼nic 𝗿𝗲𝗮𝗱ing (𝗲𝗻𝗮𝗯led/𝗱𝗶𝘀𝗮bled). |
| `setBionicMode` | `(isBionic) => void` | 𝗔 𝗳𝘂𝗻𝗰tion 𝘁𝗼 𝘂𝗽𝗱𝗮te 𝘁𝗵𝗲 `bionicMode` 𝘀𝘁𝗮te.            |
