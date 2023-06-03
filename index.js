const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
// console.log(panel)
panel.addEventListener('click', () => {
    // console.log(123)
    removeAtiveClasses()
    panel.classList.add('active')
})
})

function removeAtiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    } )
}