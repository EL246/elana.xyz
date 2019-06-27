function setup() {
    canvas = createCanvas(innerWidth, innerHeight)
    canvas.parent("canvas")
    
    frameRate(40)

    looping = true

    colorMode(HSB, 100, 100, 100)
    confetti = []
    for (let i = 0; i < 150; i++) {
        confetti.push(new Confetti(random(width), random(height), color(random(100), 50, 90), random(TWO_PI)))
    }
}

function draw() {
    background(0) 
    for (let c of confetti) {
        c.draw()
        c.move()
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
    constructor(x, y, color, angle=0, dx=0.1, dy=0.1) {
        this.x = x
        this.y = y
        this.color = color
        this.angle = angle
        this.angle_delta = random(-0.006, 0.006)
        this.dx = random(-dx, dx)
        this.dy = random(-dy, dy)
    }

    draw() {
        push()
        translate(this.x, this.y)
        this.rotate()

        fill(color(this.color))
        scale(0.5)
        quad(38, 31, 86, 20, 69, 63, 30, 76)
        pop()
    }

    move() {
        this.x += this.dx
        this.y += this.dy
    }

    rotate() {
        this.angle += this.angle_delta
        rotate(this.angle)
    }

}