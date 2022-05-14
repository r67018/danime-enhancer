import $ from 'jquery'

const pagingSelector: string = '.paging'
const pagingAddPosSelector: string = '.mypageHeader'

export default () => {
  const paging: JQuery<HTMLElement> = $(pagingSelector).clone()
  paging.insertAfter(pagingAddPosSelector)
}
