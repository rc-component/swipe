import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Swipe from '../index';

const boxStyles = {
  width: 300,
  height: 100,
  position: 'relative'
}

const itemStyles = {
  textAlign: 'center',
  lineHeight: '100px',
  height: 100,
  ['float']: 'left'
}

storiesOf('Swipe', module)
  .add('single swipe', () => {
    return (
    <Swipe style={boxStyles}>
      <div style={{...itemStyles, backgroundColor: 'lightgreen'}}>one</div>
      <div style={{...itemStyles, backgroundColor: 'deepskyblue'}}>two</div>
      <div style={{...itemStyles, backgroundColor: 'gold'}}>three</div>
    </Swipe>
  )})
  .add('set active', () => {
    let Foo = React.createClass({
      getInitialState: function () {
        return {
          active: 0
        }
      },
      prev: function () {
        this.refs.swipe.prev()
      },
      next: function () {
        this.refs.swipe.next()
      },
      onShow: function (n) {
        this.setState({
          active: n
        })
      },
      render: function () {
        return (
          <div>
            <span>Current index: {this.state.active}</span>
            <button onClick={this.prev}>prev</button>
            <button onClick={this.next}>next</button>
            <Swipe ref="swipe"
              style={boxStyles}
              onShow={this.onShow}
              active={this.state.active}>
              <div style={{...itemStyles, backgroundColor: 'lightgreen'}}></div>
              <div style={{...itemStyles, backgroundColor: 'deepskyblue'}}></div>
              <div style={{...itemStyles, backgroundColor: 'gold'}}></div>
            </Swipe>
          </div>
        )
      }
    })
    return <Foo />
  })
