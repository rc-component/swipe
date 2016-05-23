# Swipe

Swipe Component for [react](https://facebook.github.io/react/).

Built on top of [hscroll](https://github.com/chemzqm/hscroll)

Build with [webpack](https://webpack.github.io/) and [CSS Modules](https://github.com/css-modules/css-modules)

[Story book](https://rc-component.github.io/swipe/)

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
active | number | 0         | Current active
threshold | number | 200 | Maximun duration in ms for fast swipe
fastThreshold: | number | 20 | minimum moved distance for fast swipe
duration | number | 20) | duration for transition
onShow | func | null | callback function after active element changed

# License

MIT
