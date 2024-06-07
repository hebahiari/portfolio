'use client'

import kaboom from "kaboom"
import * as React from "react"
import Head from 'next/head';

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
            focus: false
        })

        // load assets
        k.loadSprite("normal", "/game/sprite_normal.png");
        k.loadSprite("shooting", "/game/sprite_wink.png");
        k.loadSprite("hit", "/game/sprite_hurt.png");
        k.loadSprite("vanish", "/game/vanish.png");
        k.loadSprite("bug", "/game/bug.png");
        k.loadSprite("heart", "/game/heart.png");


        k.loadFont('pixels', '/game/PixelifySans-Regular.ttf')
        k.loadSound("start", "/game/sound/start.mp3");
        k.loadSound("lose", "/game/sound/lose.mp3"); // Load shoot sound
        k.loadSound("shoot", "/game/sound/shoot.mp3");
        k.loadSound("destroy", "/game/sound/destroy.mp3");
        k.loadSound("hit", "/game/sound/hit.mp3");

        k.scene("game", () => {
            // add a game object to screen
            const player = k.add([
                // list of components
                k.sprite("normal"),
                k.pos(40, 50),
                k.area(),
                k.body(),
                k.scale(.4)
            ]);

            let lives = INITIAL_LIVES;

            // Move the player up
            k.onKeyDown("up", () => {
                if (player.pos.y > 0) { // Ensure the player doesn't move above the top of the screen
                    player.move(0, -MOVE_SPEED);
                }
            });

            // Move the player down
            k.onKeyDown("down", () => {
                if (player.pos.y < k.height() - 70) { // Ensure the player doesn't move below the bottom of the screen
                    player.move(0, MOVE_SPEED);
                }
            });

            // Function to spawn bullets
            function shoot() {
                // Change to shooting sprite
                player.use(k.sprite("shooting"));
                k.wait(SHOOT_DURATION, () => {
                    player.use(k.sprite("normal"));
                });
                k.play("shoot");


                // Add the bullet
                k.add([
                    k.rect(12, 6),
                    k.pos(player.pos.x + (player.width * 0.2), player.pos.y + (player.height * .2)),
                    k.area(),
                    k.color(255, 255, 0),
                    k.move(k.RIGHT, BULLET_SPEED),
                    "bullet",
                ]);
            }

            // Shoot bullets when pressing the space key
            k.onKeyPress("space", shoot);



            function spawnBug() {

                // add tree obj at random height
                k.add([
                    k.sprite("bug"),
                    k.area(),
                    k.outline(4),
                    k.pos(k.width(), k.rand(80, k.height() - 20)),
                    k.anchor("botleft"),
                    k.move(k.LEFT, SPEED),
                    scale(.07),
                    rotate(270),
                    "bug",
                ]);

                // wait a random amount of time to spawn next tree
                k.wait(k.rand(0.5, 1.5), spawnBug);

            }

            // start spawning trees
            k.wait(1, spawnBug);


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
            k.onCollide("bullet", "bug", (bullet, bug) => {
                k.destroy(bullet);
                k.destroy(bug);
                k.play("destroy");

                // Optionally, you could add some explosion effect here
            });


            // Function to flash the player sprite
            function flashSprite() {
                let count = 0;

                // Define the flashing function
                function flash() {
                    if (count >= 3 * 2) {
                        // Reset player sprite to normal after flashing
                        player.use(k.sprite("normal"));
                        return;
                    }

                    // Toggle between normal and hit sprites
                    if (count % 2 === 0) {
                        player.use(k.sprite("hit"));
                    } else {
                        player.use(k.sprite('vanish'));
                    }

                    count++;

                    // Schedule the next flash
                    k.wait(0.1, flash);
                }

                // Start the flashing process
                flash();

            }


            // lose if player collides with any game obj with tag "bug"
            player.onCollide("bug", (bug) => {
                // Change to hit sprite
                k.destroy(bug);
                k.play("hit");
                flashSprite();

                // Decrement lives first
                lives--;


                // Then update hearts display
                updateHearts();

                k.wait(HIT_DURATION, () => {
                    player.use(k.sprite("normal"));
                });

                if (lives <= 0) {
                    // go to "lose" scene and pass the score
                    k.go("lose", score);
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

            k.play("lose");
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
                }),
                k.pos(k.width() / 2, k.height() / 2 + 60),
                k.scale(2),
                k.anchor("center"),
            ]);

            k.add([
                k.text('click to restart', {
                    font: "pixels", // Use the pixel font
                    size: 24, // Adjust the font size as needed
                }),
                k.pos(k.width() / 2, k.height() / 2 + 110),
                k.scale(1.4),
                k.anchor("center"),
            ]);

            k.wait(1, () => {
                // go back to game with space is pressed
                k.onKeyPress("space", () => k.go("game"));
                k.onClick(() => k.go("game"));

            })
        });

        k.scene("start", () => {

            onUpdate(() => setCursor("default"))

            k.add([
                k.sprite("shooting"),
                k.pos((k.width() / 2) - 60, k.height() / 2 - 80),
                k.scale(.4),
                k.anchor("center"),
            ]);

            k.add([
                k.rect(12, 6),
                k.pos((k.width() / 2), k.height() / 2 - 80),
                k.area(),
                k.color(255, 255, 0),
                "bullet",
            ]);


            k.add([
                k.sprite("bug"),
                k.pos((k.width() / 2) + 60, k.height() / 2 - 80),
                scale(.07),
                rotate(270),
                k.anchor("center"),
            ]);

            k.add([
                k.text('help heba destroy bugs!', {
                    font: "pixels", // Use the pixel font
                    size: 24, // Adjust the font size as needed
                }),
                k.pos(k.width() / 2, (k.height() / 2)),
                k.anchor("center"),
            ]);

            k.add([
                k.text('keys:', {
                    font: "pixels", // Use the pixel font
                    size: 24, // Adjust the font size as needed
                }),
                k.pos((k.width() / 2) - 95, (k.height() / 2) + 175),
                k.anchor("center"),
            ]);

            k.add([
                k.rect(30, 30),
                k.pos((k.width() / 2) + 1, k.height() / 2 + 175),
                k.area(),
                k.color(0, 0, 0),
                k.outline(2, k.rgb(255, 255, 255)), // Set the outline color to red
                k.anchor('center')
            ]);

            k.add([
                k.text('>', {
                    font: "pixels", // Use the pixel font
                    size: 20, // Adjust the font size as needed
                }),
                k.rotate(90),
                k.pos((k.width() / 2) + 1, (k.height() / 2) + 175),
                k.anchor("center"),
            ]);

            k.add([
                k.rect(30, 30),
                k.pos((k.width() / 2) - 40, k.height() / 2 + 175),
                k.area(),
                k.color(0, 0, 0),
                k.outline(2, k.rgb(255, 255, 255)), // Set the outline color to red
                k.anchor('center')
            ]);

            k.add([
                k.text('>', {
                    font: "pixels", // Use the pixel font
                    size: 20, // Adjust the font size as needed
                }),
                k.rotate(270),
                k.pos((k.width() / 2) - 40, (k.height() / 2) + 175),
                k.anchor("center"),
            ]);


            k.add([
                k.rect(75, 30),
                k.pos((k.width() / 2) + 65, k.height() / 2 + 175),
                k.area(),
                k.color(0, 0, 0),
                k.outline(2, k.rgb(255, 255, 255)), // Set the outline color to red
                k.anchor('center')
            ]);

            k.add([
                k.text('space', {
                    font: "pixels", // Use the pixel font
                    size: 20, // Adjust the font size as needed
                }),
                k.pos((k.width() / 2) + 65, (k.height() / 2) + 175),
                k.anchor("center"),
            ]);


            function addButton(txt, p, f) {

                // add a parent background object
                const btn = add([
                    rect(150, 80),
                    pos((k.width() / 2), (k.height() / 2) + 80),
                    area(),
                    scale(1),
                    anchor("center"),
                    outline(4),
                ])

                // add a child object that displays the text
                btn.add([
                    k.text(txt, {
                        font: "pixels", // Use the pixel font
                        size: 24, // Adjust the font size as needed
                    }), anchor("center"),
                    color(0, 0, 0),
                ])

                // onHoverUpdate() comes from area() component
                // it runs every frame when the object is being hovered
                btn.onHoverUpdate(() => {
                    const t = time() * 10
                    btn.color = hsl2rgb((t / 10) % 1, 0.6, 0.7)
                    btn.scale = vec2(1.2)
                    setCursor("pointer")
                })

                // onHoverEnd() comes from area() component
                // it runs once when the object stopped being hovered
                btn.onHoverEnd(() => {
                    btn.scale = vec2(1)
                    btn.color = rgb()
                })

                // onClick() comes from area() component
                // it runs once when the object is clicked
                btn.onClick(f)

                return btn

            }


            const startButton = addButton("start", vec2(200, 100), () => {
                startButton.destroy();
                k.play("start");
                k.go("game");
            })

        })
        k.go('start')

    }, [])

    return (
        <canvas ref={canvasRef} style={{ background: 'transparent' }} tabIndex="-1" />
    );
}

export default Game
