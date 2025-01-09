# Center a <div>

Remembering the difference between `items-end` and `justify-end` is hard, and even more difficult to visualize in your head. This interactive demo makes it easy to get a grasp on using flex box with tailwind css by allowing you to...

1. Toggle the Flex Direction, Alignment, and Justifyment (Justifying?) of items in a container
2. Override the container Alignment by adding self alignment to any of the boxes
3. Clearly view and toggle the visibility of the main and cross axes
4. View a live updating code output that can easily be copied to the clipboard.

In the future, I may also add a visualization for grid layouts or add more classNames to apply to individual boxes.

## Running Locally

This project is just a static next-js site.

```sh
bun install
bun dev
```

It uses
- [Shiki](https://shiki.matsu.io/) code highlighter
- [js-beautify](https://github.com/beautifier/js-beautify) for syntax formatting
- [Jotai with immer](https://jotai.org/docs/extensions/immer) for state management