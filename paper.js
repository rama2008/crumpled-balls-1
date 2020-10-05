var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        Matter.bodies.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
        Matter.body.circle(x,y,radius,[options],[maxSides])-body
ellipes(56,46,55,55);

    }
}