let dino = document.getElementById('dino')

let cactus = document.getElementById('cactus')

let jumP = new Audio()
jumP.src = 'Images/jump.mp3'


document.addEventListener('keydown' , function(event){
jump()
})

function jump(){
   if(dino.classList!= 'jump'){
    dino.classList.add('jump')
    jumP.play()
   }
   setTimeout(function(){
    dino.classList.remove('jump')
   } , 301 )
}
let alive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
    if(dinoTop >= 140 && cactusLeft > 0 && cactusLeft < 50){
        alert('GAME OVER')
    }
} , 10 )

