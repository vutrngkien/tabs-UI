const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var tabs = $$('.tab-item')
var panes = $$('.tab-pane')
var tabActive = $('.tab-item.active')
var line = $('.tabs .line')
line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

tabs.forEach(function(tab, index){
    var pane = panes[index]
    tab.onclick = function(){
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        pane.classList.add('active')
        this.classList.add('active')
    }
})