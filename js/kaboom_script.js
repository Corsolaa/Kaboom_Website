import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("carc", "img/sprites/caracter.png");
loadSprite("ghost", "img/sprites/enemy.png");
loadSprite("stone", "img/sprites/stone.png");

const SPEED= 320;
const player = add([
    sprite("carc"),
    pos(80, 40),
    color(),
    area(),
    solid(),
])

onKeyDown("left", () =>{
    player.move(-SPEED, 0);
})
onKeyDown("right", () => {
    player.move(SPEED, 0);
})
onKeyDown("up", () => {
    player.move(0, -SPEED);
})
onKeyDown("down", () => {
    player.move(0, SPEED);
})

for(let i=0; i<3;i++){
    const x = rand(0, width());
    const y = rand(0, height());
    add([
        sprite("ghost"),
        pos(x, y),
        area(),
        "enemy",
    ])
}

add([
    sprite("stone"),
    pos(center()),
    area(),
    solid(),
])

player.onCollide("enemy", (enemy) => {
    destroy(enemy);
})