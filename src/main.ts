import $ from 'jquery'

$(() => {
    const paging: JQuery<HTMLElement> = $('.paging').clone()
    paging.insertBefore('.itemWrapper')
})