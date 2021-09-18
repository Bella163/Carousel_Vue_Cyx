## 数组扁平化，将多维数组变成一维数组

```js
var multiArr = [
  {
    id: "1",
    level: 1,
    children: [
      {
        id: "1-1",
        pid: "1",
        level: 2,
        children: [
          {
            id: "1-1-1",
            pid: "1-1",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    level: 2,
    children: [
      {
        id: "2-1",
        pid: "2",
        level: 2,
        children: [
          {
            id: "2-1-1",
            pid: "2-1",
            level: 3,
          },
        ],
      },
    ],
  },
];

var arr = [
  {
    id: "1",
    level: 1,
  },
  {
    id: "1-1",
    pid: "1",
    level: 2,
  },
  {
    id: "1-1-1",
    pid: "1-1",
    level: 3,
  },
  {
    id: "2",
    level: 2,
  },
  {
    id: "2-1",
    pid: "2",
    level: 2,
  },
  {
    id: "2-1-1",
    pid: "2-1",
    level: 3,
  },
];
```
