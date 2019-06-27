function setup() {
    canvas = createCanvas(innerWidth, innerHeight)
    canvas.parent("canvas")
    
    frameRate(5)

    looping = true


    confetti = []
    for (let i = 0; i < 200; i++) {
        confetti.push(new Confetti(random(width), random(height),random(255)))
    }
}

function draw() {
    background(0) 
    for (let c of confetti) {
        c.draw()
    }
}

function mousePressed() {
    if (looping) {
        noLoop()
        looping = false
    } else {
        loop()
        looping = true
    }
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight)
}

class Confetti {
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
    }

    draw() {
        push()
        translate(this.x, this.y)
        rotate(random(TWO_PI))
        fill(color(this.color))
        scale(0.5)
        quad(38, 31, 86, 20, 69, 63, 30, 76)
        pop()
    }


}