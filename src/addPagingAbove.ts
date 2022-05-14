import $ from 'jquery'

const pagingSelector: string = '.paging'
const pagingAddPosSelector: string = '.mypageHeader'

export default (): void => {
  const paging: JQuery<HTMLElement> = $(pagingSelector).clone()
  paging.insertAfter(pagingAddPosSelector)
}
