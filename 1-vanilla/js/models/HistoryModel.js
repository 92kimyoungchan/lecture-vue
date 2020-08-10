export default {
  data: [
    { keyword: '검색기록2', date: '12.03' },
    { keyword: '검색기록1', date: '12.02' },
    { keyword: '검색기록0', date: '12.01' },
  ],

  /** 데이터를 return 한다. 서버에서 비동기로 데이터를 가져올수 있음, 쿠키로 데이터를 얻을 수 있음 */
  list() {
    return Promise.resolve(this.data)
  },

  /** 키워드가 존재하면 기존데이터 삭제 후 날짜를 주입하여 키워드를 다시 세팅한다. */
  add(keyword = '') {
    keyword = keyword.trim()
    if (!keyword) return
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }

    const date = '12.31'
    this.data = [{ keyword, date }, ...this.data]
  },

  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}