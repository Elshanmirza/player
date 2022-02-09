const title = document.getElementById('title')
const artist = document.getElementById('artist')
//getelementbyid() - elementi sadece id-sine gore tapir 
//queryselector metodu ne iwe yarayir - hem id sine , hem class adina hem de teqe sece bilirsiz
const music = document.querySelector('audio')

//DOM vasitesile elementleri secirem

//awagidaki camelCase
const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')

//biz iki cur zamanlama deyiweni istifade edeceyimiz ucun deyiwen adlandirmasina fikir vermeliyik
//THIRD PARTY API ile iwlemeyi oyrenirik! audio

const currentTimeEl = document.getElementById('current-time')
const durationEl = document.getElementById('duration')

//buttonlarin secilmesi 
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

//OBJECT

// [] matrisler- obyektler
// {} obyektler

const songs = [
    {
        name:'cagiris',
        displayName: 'Cagiris',
        artist: 'Cagiriw oxuyan mugenni'
    },
    {
        name:'can-can',
        displayName: 'Can can',
        artist: 'Can can oxuyan mugenni'
    },
    {
        name:'leyli',
        displayName: 'Leyli',
        artist: 'Leyli oxuyan mugenni'
    },
    {
        name:'opum',
        displayName: 'Opum',
        artist: 'Opum oxuyan mugenni'
    }
]

//true false
let isPlaying = false

function playSong() {
    isPlaying = true
    playBtn.classList.replace('fa-play', 'fa-pause')
    music.play()
}

function pauseSong() {
    isPlaying = false
    playBtn.classList.replace('fa-pause', 'fa-play')
    music.play()
}

playBtn.addEventListener('click', ()=>(isPlaying?pauseSong():playSong()))