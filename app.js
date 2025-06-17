const nextButton = document.querySelector('.next-btn')
const video = document.querySelector('.hero-video')

const videoList = [ 'videos/hero_02.mp4', 'videos/hero_03.mp4', 'videos/hero_04.mp4', 'videos/hero_05.mp4',]

let i = 0
nextButton.addEventListener('click', () => {

    i += 1
    video.src = videoList[i]

    if(i === 3){
        i = -1
    }
})