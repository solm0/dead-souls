document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.mistimg').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth / 35 - e.pageX * speed * 0.01)
        const y = (window.innerHeight / 170 - e.pageY * speed * 0.01)

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`

    })

    this.querySelectorAll('.container').forEach(layer => {
        const speed = layer.getAttribute('data-speed')
    
        const x = (window.innerWidth / 35 - e.pageX * speed * 0.02)
        const y = (window.innerHeight / 170 - e.pageY * speed * 0.02)
    
        layer.style.transform = `translateX(${-x}px) translateY(${-y}px)`
        
    })
}