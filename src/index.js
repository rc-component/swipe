import React, { Component, PropTypes, Children } from 'react'
import ReactDom from 'react-dom'
import Hscroll from 'hscroll'


export default class Swipe extends Component {
  static defaultProps = {
    active: 0,
    // maximun duration in ms for fast swipe
    threshold: 200,
    // minimum moved distance for fast swipe
    fastThreshold: 20,
    // default animation duration
    duration: 300
  }
  static propTypes = {
    active: PropTypes.number,
    threshold: PropTypes.number,
    fastThreshold: PropTypes.number,
    duration: PropTypes.number,
    onShow: PropTypes.func
  }
  componentDidMount() {
    let el = ReactDom.findDOMNode(this)
    let props = this.props
    let n = Children.count(props.children)
    this.refs.wrapper.style.width = (n * el.clientWidth) + 'px'
    this.hscroll = Hscroll(el, {
      type: 'swipe',
      threshold: props.threshold,
      fastThreshold: props.fastThreshold,
      duration: props.duration,
      autoWidth: true
    })
    if (props.active) this.hscroll.show(props.active)
    this.hscroll.on('show', this.onShow.bind(this))
  }
  componentWillUnmount() {
    this.hscroll.unbind()
  }
  onShow(n) {
    let fn = this.props.onShow
    if (fn) fn(n)
  }
  componentDidUpdate() {
    let active = this.props.active
    this.hscroll.show(active)
  }
  prev() {
    this.hscroll.prev()
  }
  next() {
    this.hscroll.next()
  }
  render() {
    let props = this.props
    return (
      <div style={props.style} className={props.className}>
        <div ref="wrapper">
          {props.children}
        </div>
      </div>
    )
  }
}
