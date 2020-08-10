const tag = '[View]'

export default {
  /**  엘리멘트를 주입받아 자신의 프로퍼티로 */
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },

  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  },
  /** 엘리먼트는 이벤트를 방출함 */
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
}