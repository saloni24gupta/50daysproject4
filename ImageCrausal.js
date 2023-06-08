const PrevBtn = document.getElementById('left')
const NextBtn = document.getElementById('right')
const Imags = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length -1){
     idx = 0
    } else if(idx < 0) {
        idx = img.length -1
    }

    Imags.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

NextBtn.addEventListener('click', () => {
    idx++

    changeImage()
    resetInterval()
})
PrevBtn.addEventListener('click', () => {
    idx--

    changeImage()
    resetInterval()
})


