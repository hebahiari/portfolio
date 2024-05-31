'use client'

import kaboom from "kaboom"
import * as React from "react"
import Head from 'next/head';

const FLOOR_HEIGHT = 48;
const SPEED = 480;
const MOVE_SPEED = 350; // Speed at which the sprite moves up and down
const BULLET_SPEED = 600; // Speed of the bullets
const INITIAL_LIVES = 3; // Initial number of lives
const SHOOT_DURATION = 0.3; // Duration for the shoot animation in seconds
const HIT_DURATION = 0.5; // Duration for the hit animation in seconds

const Game = () => {

    const canvasRef = React.useRef(null)

    // just make sure this is only run once on mount so your game state is not messed up
    React.useEffect(() => {

        const k = kaboom({
            // if you don't want to import to the global namespace
            // global: false,
            // if you don't want kaboom to create a canvas and insert under document.body
            canvas: canvasRef.current,
            background: true, // This ensures the background is rendered as transparent
            clearColor: [0, 0, 0, 0], // Set clearColor to transparent
        })

        // load assets
        k.loadSprite("normal", "/game/sprite_normal.png");
        k.loadSprite("shooting", "/game/sprite_wink.png");
        k.loadSprite("hit", "/game/sprite_hurt.png");
        k.loadSprite("bug", "/game/bug.png");
        k.loadSprite("heart", "/game/heart.png");
        k.loadFont('pixels', '/game/PixelifySans-Regular.ttf')

        k.scene("game", () => {

            // add a game object to screen
            const player = k.add([
                // list of components
                k.sprite("normal"),
                k.pos(80, 40),
                k.area(),
                k.body(),
                k.scale(.4)
            ]);

            let lives = INITIAL_LIVES;

            // Move the player up
            k.onKeyDown("up", () => {
                player.move(0, -MOVE_SPEED);
            });

            // Move the player down
            k.onKeyDown("down", () => {
                player.move(0, MOVE_SPEED);
            });

            // Function to spawn bullets
            function shoot() {
                // Change to shooting sprite
                player.use(k.sprite("shooting"));
                k.wait(SHOOT_DURATION, () => {
                    player.use(k.sprite("normal"));
                });

                // Add the bullet
                k.add([
                    k.rect(12, 6),
                    k.pos(player.pos.x + player.width * 0.1, player.pos.y + player.height * 0.1),
                    k.area(),
                    k.color(255, 255, 0),
                    k.move(k.RIGHT, BULLET_SPEED),
                    "bullet",
                ]);
            }

            // Shoot bullets when pressing the space key
            k.onKeyPress("space", shoot);

            function spawnTree() {

                // add tree obj at random height
                k.add([
                    k.sprite("bug"),
                    k.area(),
                    k.outline(4),
                    k.pos(k.width(), k.rand(0, k.height() - FLOOR_HEIGHT)),
                    k.anchor("botleft"),
                    k.move(k.LEFT, SPEED),
                    scale(.07),
                    rotate(270),
                    "tree",
                ]);

                // wait a random amount of time to spawn next tree
                k.wait(k.rand(0.5, 1.5), spawnTree);

            }

            // start spawning trees
            spawnTree();


            // Inside the "game" scene function
            const heartSprites = []; // Array to store references to heart sprites

            // Function to update hearts display
            function updateHearts() {
                // Clear existing heart sprites
                heartSprites.forEach(sprite => sprite.destroy());

                // Create heart sprites based on the number of lives
                for (let i = 0; i < lives; i++) {
                    const heartSprite = k.add([
                        k.sprite("heart"),
                        k.pos(k.width() - 40 - i * 30, 24), // Adjust position based on index
                        k.scale(0.06),
                    ]);
                    heartSprites.push(heartSprite); // Store reference to heart sprite
                }
            }

            updateHearts();

            // Collision detection between bullets and trees
            k.onCollide("bullet", "tree", (bullet, tree) => {
                k.destroy(bullet);
                k.destroy(tree);
                // Optionally, you could add some explosion effect here
            });

            // lose if player collides with any game obj with tag "tree"
            player.onCollide("tree", () => {
                // Change to hit sprite
                player.use(k.sprite("hit"));
                updateHearts();
                k.wait(HIT_DURATION, () => {
                    player.use(k.sprite("normal"));
                });

                lives--;

                if (lives <= 0) {
                    // go to "lose" scene and pass the score
                    k.go("lose", score);
                    k.burp();
                    k.addKaboom(player.pos);
                }
            });

            // keep track of score
            let score = 0;

            const scoreLabel = k.add([
                k.text(score, {
                    font: "pixels", // Use the pixel font
                    size: 35, // Adjust the font size as needed
                }),
                k.pos(24, 24),
            ]);

            // increment score every frame
            k.onUpdate(() => {
                score++;
                scoreLabel.text = score;
            });

        });

        k.scene("lose", (score) => {

            k.add([
                k.sprite("hit"),
                k.pos(k.width() / 2, k.height() / 2 - 80),
                k.scale(1),
                k.anchor("center"),
            ]);

            // display score
            k.add([
                k.text(score, {
                    font: "pixels", // Use the pixel font
                    size: 24, // Adjust the font size as needed
                }), k.pos(k.width() / 2, k.height() / 2 + 80),
                k.scale(2),
                k.anchor("center"),
            ]);

            // go back to game with space is pressed
            k.onKeyPress("space", () => k.go("game"));
            k.onClick(() => k.go("game"));

        });

        k.go("game");

    }, [])

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"
                />
            </Head>
            <canvas ref={canvasRef} style={{ background: 'transparent' }} />
        </>
    );
}

export default Game
