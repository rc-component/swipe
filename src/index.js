import React, { Component, PropTypes, Children } from 'react'
import ReactDom from 'react-dom'
import Hscroll from 'hscroll'

export default class Swipe extends Component {
  static defaultProps = {
    //iterate items
    play: false,
    // current active item index
    active: 0,
    // maximun duration in ms for fast swipe
    threshold: 200,
    // minimum moved distance for fast swipe
    fastThreshold: 15,
    // default animation duration
    duration: 300,
    // play interval in ms
    interval: 2000
  }
  static propTypes = {
    active: PropTypes.number,
    threshold: PropTypes.number,
    fastThreshold: PropTypes.number,
    duration: PropTypes.number,
    onShow: PropTypes.func,
    play: PropTypes.bool,
    interval: PropTypes.number
  }
  componentDidMount() {
    let el = ReactDom.findDOMNode(this)
    let props = this.props
    let n = Children.count(props.children)
    this.refs.wrapper.style.width = (n * el.clientWidth) + 'px'
    let hscroll = this.hscroll = Hscroll(el, {
      type: 'swipe',
      threshold: props.threshold,
      fastThreshold: props.fastThreshold,
      duration: props.duration,
      autoWidth: true,
      interval: props.interval
    })
    if (props.active) hscroll.show(props.active, 0)
    hscroll.on('show', this.onShow.bind(this))
    if (props.play) hscroll.play()
  }
  componentWillUnmount() {
    if (this.hscroll) this.hscroll.unbind()
  }
  onShow(n) {
    if (this.props.onShow) this.props.onShow(n)
  }
  componentWillReceiveProps(props) {
    let duration
    let hscroll = this.hscroll
    if (this.props.children && props.children) {
      let key = Children.toArray(this.props.children)[hscroll.currIndex()].key
      let nkey = Children.toArray(props.children)[props.active].key
      if (key === nkey) duration = 0
    }
    hscroll.show(props.active, duration)
    if (props.play !== this.props.play) {
      if (props.play) {
        hscroll.play()
      } else {
        hscroll.stop()
      }
    }
  }
  componentDidUpdate() {
    this.hscroll.refresh()
  }
  prev() {
    if (this.hscroll.animating) return
    this.hscroll.stop()
    this.hscroll.prev()
  }
  next() {
    if (this.hscroll.animating) return
    this.hscroll.stop()
    this.hscroll.next()
  }
  render() {
    let props = this.props
    return (
      <div style={props.style} className={props.className}>
        <div ref="wrapper" style={{overflow: 'hidden'}}>
          {props.children}
        </div>
      </div>
    )
  }
}
