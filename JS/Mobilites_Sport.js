var map = document.querySelector('#map')
var paths = map.querySelectorAll('.map__image a')
var links = map.querySelectorAll('.map__list a')

var activeArea = function (id){
    map.querySelectorAll('.is-active').forEach(function (item) {
        item.classList.remove('is-active')
    })
    if (id !== undefined){
        if(id === '1'){ //id 1,2 === st rose ( 2 === petite ile)
            document.querySelector('#list-'+ '2').classList.add('is-active')
            document.querySelector('#region-'+ '2').classList.add('is-active')
        }else if(id === '2'){
            document.querySelector('#list-'+ '1').classList.add('is-active')
            document.querySelector('#region-'+ '1').classList.add('is-active')
        }
        document.querySelector('#list-' + id).classList.add('is-active')
        document.querySelector('#region-' + id).classList.add('is-active')
    }
}

paths.forEach(function (path){
    path.addEventListener('mouseenter', function (){
        var id = this.id.replace('region-','')
        activeArea(id)
    })
})

links.forEach(function (link){
    link.addEventListener('mouseenter',function(){
        var id = this.id.replace('list-','')
        activeArea(id)
    })
})

map.addEventListener('mouseover',function () {
    activeArea()
})