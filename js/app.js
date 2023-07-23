const audioelem = document.querySelector('audio')
console.log(audioelem)
const next = document.getElementById('next')
console.log(next)
const play = document.getElementById('play')
console.log(play)
const per = document.getElementById('per')
console.log(per)
const pause = document.getElementById('pause')
console.log(pause)
const pic = document.querySelector('img')
console.log(pic)
var number = 0;
const sub = document.getElementById('title')
console.log(sub)
const bar = document.getElementById('time')
console.log(bar)
const check = document.getElementById('check')
console.log(check)
const box = [
{ 
    name:"Tamomesh kon",
    imgaddres:"../img/Farzad Farzin - Tamoomesh Kon.jpg",
    audioaddres:"../audio/Farzad Farzin - Tamoomesh Kon.mp3"
},
{
    name:"Taghalob",
    imgaddres:"../img/Macan Band - Bi Taghalob.jpg",
    audioaddres:"../audio/Macan Band - Bi Taghalob - 128.mp3"
},
{
    name:"Ghalbami",
    imgaddres:"../img/Majid Razavi - Ghalbami Pas.jpg",
    audioaddres:"../audio/Majid Razavi - Ghalbami Pas.mp3",
}
]

next.addEventListener('click',function()
{
    number++;
    bar.style.width = 0
    if(number == 3)
    {
        number = 0;
        pic.src=box[0].imgaddres
        audioelem.src = box[0].audioaddres
        sub.innerHTML = box[0].name
    }
    else{
        pic.src = box[number].imgaddres
        audioelem.src = box[number].audioaddres
        sub.innerHTML = box[number].name
    }
})
per.addEventListener('click',function()
{
    number--
    bar.style.width =0
    if(number < 0)
    {
        number = 2;
        pic.src=box[2].imgaddres
        audioelem.src = box[2].audioaddres
        sub.innerHTML = box[2].name
        
    }
    else
    {
        pic.src = box[number].imgaddres
        audioelem.src = box[number].audioaddres
        sub.innerHTML = box[number].name
    }
})
console.log(audioelem.duration)




play.addEventListener('click',function(event)
{
    audioelem.play()
    pause.style.display ="block";
    play.style.display ="none";
    console.log()
    setInterval(function(){
        var total = audioelem.duration
        var now = audioelem.currentTime
        bar.style.width = now*100/total
        },1000)
        
})
pause.addEventListener('click',function(event){
    audioelem.pause()
    pause.style.display = 'none';
    play.style.display ="block";
})
check.addEventListener('click',function(event)
{ 
    console.log(event)
    var x = event.clientX
    bar.style.width = Math.floor(x/1000)
    audioelem.currentTime =Math.floor(( x * (audioelem.duration) ) /1000) 
})