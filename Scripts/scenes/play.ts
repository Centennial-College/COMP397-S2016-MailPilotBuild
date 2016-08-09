module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _player: objects.Player;
        private _clouds: objects.Cloud[];
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _bullets: objects.Bullet[];

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        /**
         * 
         */
        public Start(): void {
            // ocean object
            this._ocean = new objects.Ocean("ocean");
            this.addChild(this._ocean);

            // island object
            this._island = new objects.Island("island");
            this.addChild(this._island);

            // bullet array
            this._bullets = new Array<objects.Bullet>();
            for (let bullet: number = 0; bullet < 10; bullet++) {
                this._bullets.push(new objects.Bullet("bullet"))
                this.addChild(this._bullets[bullet])
            }

            // player object
            this._player = new objects.Player("plane");
            this.addChild(this._player);

            // TEST TEST TEST
            this._bullets[0].Fire(this._player.position);

            // include a collision manager 
            this._collision = new managers.Collision();

            // clouds array
            this._clouds = new Array<objects.Cloud>();
            for (let count: number = 0; count < 3; count++) {
                // this._clouds[count] = new objects.Cloud("cloud");
                this._clouds.push(new objects.Cloud("cloud")); // same as above; diff notation
                this.addChild(this._clouds[count]);
            }

            // add lives and score label
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Dock51", "#FF0", 10, 5, false);
            this.addChild(this._livesLabel);

            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Dock51", "#FF0", 350, 5, false);
            this.addChild(this._scoreLabel);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        private _updateScoreBoard(): void {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        }

        public Update(): void {
            // scene updates happen here...
            this._ocean.update();
            this._island.update();
            this._player.update();
            this._collision.check(this._player, this._island);

            this._bullets.forEach(bullet => {
                // update each bullet
                bullet.update();
            })

            this._clouds.forEach(cloud => {
                // update each cloud
                cloud.update();
                // check collision with the player and each cloud
                this._collision.check(this._player, cloud);
            });

            // checks collision with each cloud and each bullet
            this._clouds.forEach(cloud => {
                this._bullets.forEach(bullet => {
                    this._collision.check(cloud, bullet);
                })
            });

            this._updateScoreBoard();

            if (core.lives < 1) {
                this._player.sound.loop = 0;
                this._player.sound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }

        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}