setInterval(calcPaths, 12000)

function calcPaths(totalDur) {
    document.body.classList.remove('animated')

    const paths = document.querySelectorAll('.autograph__path')

    let len = 0

    let delay = 0

    if (!paths.length) {
        return false
    }

    // set duration in seconds of animation to default if not set
    const totalDuration = totalDur || 5

    paths.forEach((path) => {
        const totalLen = path.getTotalLength()
        len += totalLen
    })

    paths.forEach((path) => {
        const pathElem = path

        const totalLen = path.getTotalLength()

        const duration = totalLen / len * totalDuration

        pathElem.style.animationDuration = `${duration < 0.2 ? 0.2 : duration}s`
        pathElem.style.animationDelay = `${delay}s`

        // set dash array and offset to path length - this is how you hide the line
        pathElem.setAttribute('stroke-dasharray', totalLen)
        pathElem.setAttribute('stroke-dashoffset', totalLen)

        // set delay for the next path - added .2 seconds to make it more realistic
        delay += duration + 0.2
    })

    // set 'animated' class to body which will start the animation
    document.body.classList.add('animated')

    return true
}

calcPaths()