console.log("Play the Remix Music" )
// variables Iitializaton
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgress = document.getElementById('myProgress');
let gif = document.getElementById('gif');

let songItems = Array.from(document.getElementsByClassName("song-items"));

let songs = [
  {songsName: "Closer1", filePath: "Songs/1.mp3", coverPath: "images/pic_1.jpg"},
  {songsName: "Closer2", filePath: "Songs/2.mp3", coverPath: "images/pic_2.jpg"},
  {songsName: "Closer3", filePath: "Songs/3.mp3", coverPath: "images/pic_3.jpg"},
  {songsName: "Closer4", filePath: "Songs/4.mp3", coverPath: "images/pic_4.jpg"},
  {songsName: "Closer5", filePath: "Songs/5.mp3", coverPath: "images/pic_5.jpg"},
  {songsName: "Closer6", filePath: "Songs/6.mp3", coverPath: "images/pic_6.jpg"},
  {songsName: "Closer7", filePath: "Songs/7.mp3", coverPath: "images/pic_7.jpg"},
  {songsName: "Closer8", filePath: "Songs/8.mp3", coverPath: "images/pic_8.jpg"},
  {songsName: "Closer9", filePath: "Songs/9.mp3", coverPath: "images/pic_9.jpg"},
  {songsName: "Closer10", filePath: "Songs/10.mp3", coverPath: "images/pic_10.jpg"},
]

songItems.forEach((element, i )=>{
  element.getElementsByTagName('img')[0].src = songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText = songs[i].songsName;
})
// audioElement.play();

// handle play/pause
masterplay.addEventListener( 'click',() =>{
  if(audioElement.paused ){
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    
   
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterplay.classList.remove('fa-pause');
    masterplay.classList.remove('fa-pause');
    masterplay.classList.add( 'fa-play');
  
      
  
    gif.style.opacity = 0;
  }
})
// listen to events 

audioElement.addEventListener('timeupdate', ()=>{
  console.log('timeupdate');
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100); 
  myProgress.value = progress;
})

myProgress.addEventListener('change', ()=> {
   audioElement.currentTime = myProgress.value*audioElement.duration/100 ;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause')
    element.classList.add('fa-play')
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    makeAllPlays();
    
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    audioElement.src = songs[songIndex].filePath;
    songname.innerText = songs[songIndex-1].songsName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    gif.style.opacity = 1;
    console.log(songname)
  })
})
document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){songIndex=0}
  else{songIndex+=1}
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  audioElement.play();
  
  masterplay.classList.remove('fa-play');
  masterplay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){songIndex=0}
  else{songIndex-=1}
 
  audioElement.src = songs[songIndex].filePath;;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-play');
  masterplay.classList.add('fa-pause');
})
