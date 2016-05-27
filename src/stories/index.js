import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Swipe from '../index';
import styles from './style.css'
import cx from 'classnames'

const boxStyles = {
  width: 300,
  position: 'relative'
}

const itemStyles = {
  textAlign: 'center',
  lineHeight: '100px',
  height: 100,
  ['float']: 'left'
}

const imgStyles = {
  width: '100%',
  display: 'block',
  height: 'auto'
}

storiesOf('Swipe', module)
  .add('carousel', () => {
    let Foo = React.createClass({
      getInitialState: function () {
        return {
          play: true,
          curr: 0
        }
      },
      play: function () {
        this.setState({
          play: true
        })
      },
      stop: function () {
        this.setState({
          play: false
        })
      },
      prev: function () {
        this.refs.swipe.prev()
      },
      next: function () {
        this.refs.swipe.next()
      },
      onShow: function (n) {
        if (this.isMounted()) {
          if (n !== this.state.curr) {
            this.setState({ curr: n })
          }
        }
      },
      render: function () {
        return (
        <div>
          <button ref="btn" onClick={this.play}>play</button>
          <button onClick={this.stop}>stop</button>
          <span>{this.state.curr}</span>
          <div style={{position: 'relative', width: 300}}>
            <Swipe ref="swipe"
              className={styles.noSelect}
              play={this.state.play}
              active={this.state.curr}
              onShow={this.onShow}>
              <a href="#" style={{display:'block', ['float']:'left'}}><img style={imgStyles} src="http://placehold.it/350x150" alt="one"/></a>
              <a href="#" style={{display:'block', ['float']:'left'}}><img style={imgStyles} src="http://placehold.it/350x150" alt="two"/></a>
              <a href="#" style={{display:'block', ['float']:'left'}}><img style={imgStyles} src="http://placehold.it/350x150" alt="three"/></a>
            </Swipe>
            <div className={styles.indicator}>
              <ul>
              {[0, 1, 2].map(n => {
                let clz = cx({
                  [styles.active]: n == this.state.curr
                })
                return <li key={n} className={clz}></li>
              })}
              </ul>
            </div>
            <div onClick={this.prev} className={cx(styles.slick, styles.slickPrev)} />
            <div onClick={this.next} className={cx(styles.slick, styles.slickNext)} />
          </div>
        </div>
        )
      }
    })
    return <Foo />
  })
  .add('simple swipe', () => {
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
