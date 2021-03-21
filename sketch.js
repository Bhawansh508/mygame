
var ground, groundImg;
var player, playerImg, runAnime, jumpAnime;
var foreground;
var enemy, enemy1Img, enemy2Img;
var randomval, randomvalb;
var gameState = 1;
var enemyGroup, groundGroup;
var groundx;
var score = 0;
function preload() {
    enemy1Img = loadImage("img/bomb1.png");
    enemy2Img = loadImage("img/skies.png");
    // enemy3Img=loadImage("");

    groundImg = loadImage("img/ground.png");
    playerImg = loadImage("img/player/Idle (1).png");
    foreground = loadImage("img/Free vector grass tileset/Background/PNG/background.png");
    jumpAnime = loadAnimation("img/player/Jump (1).png",
        "img/player/Jump (2).png",
        "img/player/Jump (3).png",
        "img/player/Jump (4).png",
        " img/player/Jump (5).png",
        "img/player/Jump (6).png",
        "img/player/Jump (7).png",
        "img/player/Jump (8).png",
        " img/player/Jump (9).png",
        "img/player/Jump (10).png",
        " img/player/Jump (11).png",
        " img/player/Jump (12).png",
        "img/player/Jump (13).png",
        " img/player/Jump (14).png",
        "img/player/Jump (15).png")
    runAnime = loadAnimation(
        "img/player/Run(1).png",
        "img/player/Run(2).png",
        "img/player/Run(3).png",
        "img/player/Run(4).png",
        "img/player/Run(5).png",
        "img/player/Run(6).png",
        "img/player/Run(7).png",
        "img/player/Run(8).png",
        "img/player/Run(9).png",
        "img/player/Run(10).png",
        "img/player/Run(11).png",
        "img/player/Run(12).png",
        "img/player/Run(13).png",
        "img/player/Run(14).png",
        "img/player/Run(15).png");
}
function setup() {
    createCanvas(displayWidth, displayHeight);
    player = createSprite(displayWidth / 2 - 530, displayHeight - 230, 80, 20);
    player.addImage(playerImg);
    player.addAnimation("run", runAnime);
    player.changeAnimation("run");
    player.scale = 0.5

    fill("green");
    ground = createSprite(200, displayHeight - 60, 4000, 120);
    ground.addImage(groundImg);
    ground.scale = 2;

    enemyGroup = new Group();
    groundGroup = new Group();
    debug = true
    groundGroup.add(ground)
}
function draw() {
    background("skyblue");
    textSize(20);
    text("Score" + score, -500, 50);
    groundx = displayHeight / 2 - 400;
    // image(foreground, groundx, displayWidth / 2 - 900)

    player.setDefaultCollider();
    player.collide(groundGroup);
    // if (ground.x === -600) (
    //     ground.x = 200
    // )
    if (frameCount % 40 === 0) {
        score += 1;
    }
    if (player.isTouching(enemyGroup)) {
        gameState = 2;
    }
    if (gameState === 2) {
        ground.visible = false;
        enemy.visible = false;
        player.visible = false;
        randomval = 0;
        randomvalb = 0;
        background("red");
        textSize(100);
        fill("green")
        text("GameOver", 200, 500)
        textSize(20);

    }
    gravity = 20;
    player.velocityY = gravity
    if (keyDown("space")) {
        player.velocityY = -50

    }
    if (keyDown("w")) {
        player.x += 10;
        ground.x += 12;
        groundx += 10;


    }
    // ground.x += -10
    camera.position.x = player.x
    // player.x += 10;
    console.log(randomval
    );
    if (player.isTouching(ground)) {
        gravity = 0;

    }
    // console.log(displayWidth);

    enemydisplay();
    drawSprites();
}
function enemydisplay() {
    // for (var b = displayHeight - 230; b > 1000; b += 30) {

    // }
    ran = Math.round(random(1, 2));
    randomval = Math.round(random(400, 600));
    randomvalb = Math.round(random(200, 600));
    if (frameCount % 50 === 0) {
        enemy = createSprite(player.x + randomvalb, randomval, 80, 20);
        enemy.velocityX = -30;
        switch (ran) {
            case 1: enemy.addImage(enemy1Img);
                enemy.scale = 0.5
                break;
            case 2: enemy.addImage(enemy2Img);
                enemy.scale = 0.5
                break;


            default: break;
        }
        enemyGroup.add(enemy);
    }

}