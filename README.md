# Swipe

Swipe Component for [react](https://facebook.github.io/react/).

Built on top of [hscroll](https://github.com/chemzqm/hscroll)

Build with [webpack](https://webpack.github.io/) and [CSS Modules](https://github.com/css-modules/css-modules)

[Story book](https://rc-component.github.io/swipe/)

## Features

* Responsive, children width automatically adjusted.
* Customize style easily, no default styles.
* Support wheel event, mousemove event and touchmove event.
* Driven by props, play/stop support.
* User friendly, buildin fast swipe check.

## Install

    npm i rc-swipe -S

## Usage

```
<Swipe style={boxStyles}>
  <div>one</div>
  <div>two</div>
  <div>three</div>
</Swipe>
```

## Props

name   | type   | default    | description
-------| ------ | ---------- | ------------
play   | bool   | false      | Playing status
interval | number | 1000     | Play interval in miliseconds
active | number | 0          | Current active item index
threshold | number | 200 | Maximun duration in ms for fast swipe
fastThreshold: | number | 20 | minimum moved distance for fast swipe
duration | number | 200 | duration for transition
onShow | func | null | callback function after active element changed

You can also have `className` `style` props for swipe element.

# License

MIT
