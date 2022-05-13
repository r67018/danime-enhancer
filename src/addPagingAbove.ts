import $ from 'jquery'

export default () => {
    const paging: JQuery<HTMLElement> = $('.paging').clone()
    paging.insertBefore('.itemWrapper')
}
