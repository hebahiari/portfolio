'use client'

import kaboom from "kaboom"
import * as React from "react"

const FLOOR_HEIGHT = 48;
const JUMP_FORCE = 800;
const SPEED = 480;
const MOVE_SPEED = 350; // Speed at which the sprite moves up and down

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
        k.loadSprite("bean", "/img/coin.png");

        k.scene("game", () => {

            // add a game object to screen
            const player = k.add([
                // list of components
                k.sprite("bean"),
                k.pos(80, 40),
                k.area(),
                k.body(),
                k.scale(.2)
            ]);

            // Move the player up
            k.onKeyDown("up", () => {
                player.move(0, -MOVE_SPEED);
            });

            // Move the player down
            k.onKeyDown("down", () => {
                player.move(0, MOVE_SPEED);
            });

            function spawnTree() {

                // add tree obj at random height
                k.add([
                    k.rect(48, 48),
                    k.area(),
                    k.outline(4),
                    k.pos(k.width(), k.rand(0, k.height() - FLOOR_HEIGHT)),
                    k.anchor("botleft"),
                    k.color(255, 180, 255),
                    k.move(k.LEFT, SPEED),
                    "tree",
                ]);

                // wait a random amount of time to spawn next tree
                k.wait(k.rand(0.5, 1.5), spawnTree);

            }

            // start spawning trees
            spawnTree();

            // lose if player collides with any game obj with tag "tree"
            player.onCollide("tree", () => {
                // go to "lose" scene and pass the score
                k.go("lose", score);
                k.burp();
                k.addKaboom(player.pos);
            });

            // keep track of score
            let score = 0;

            const scoreLabel = k.add([
                k.text(score),
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
                k.sprite("bean"),
                k.pos(k.width() / 2, k.height() / 2 - 80),
                k.scale(2),
                k.anchor("center"),
            ]);

            // display score
            k.add([
                k.text(score),
                k.pos(k.width() / 2, k.height() / 2 + 80),
                k.scale(2),
                k.anchor("center"),
            ]);

            // go back to game with space is pressed
            k.onKeyPress("space", () => k.go("game"));
            k.onClick(() => k.go("game"));

        });

        k.go("game");

    }, [])

    return <canvas ref={canvasRef} style={{ background: 'transparent' }}></canvas>

}

export default Game
