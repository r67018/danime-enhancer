import $ from 'jquery'

const pagingSelector: string = '.paging'
const mypageHeaderSelector: string = '.mypageHeader'

export default () => {
  const paging: JQuery<HTMLElement> = $(pagingSelector).clone()
  paging.insertAfter(mypageHeaderSelector)
}
