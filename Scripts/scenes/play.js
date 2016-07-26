var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Play() {
            _super.call(this);
        }
        /**
         *
         */
        Play.prototype.Start = function () {
            // ocean object
            this._ocean = new objects.Ocean("ocean");
            this.addChild(this._ocean);
            // island object
            this._island = new objects.Island("island");
            this.addChild(this._island);
            // player object
            this._player = new objects.Player("plane");
            this.addChild(this._player);
            // include a collision manager 
            this._collision = new managers.Collision();
            // clouds array
            this._clouds = new Array();
            for (var count = 0; count < 3; count++) {
                // this._clouds[count] = new objects.Cloud("cloud");
                this._clouds.push(new objects.Cloud("cloud")); // same as above; diff notation
                this.addChild(this._clouds[count]);
            }
            // add lives and score label
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Consolas", "#FF0", 10, 5, false);
            this.addChild(this._livesLabel);
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Consolas", "#FF0", 350, 5, false);
            this.addChild(this._scoreLabel);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Play.prototype._updateScoreBoard = function () {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        };
        Play.prototype.Update = function () {
            var _this = this;
            // scene updates happen here...
            this._ocean.update();
            this._island.update();
            this._player.update();
            this._collision.check(this._player, this._island);
            // update each cloud
            this._clouds.forEach(function (cloud) {
                cloud.update();
                _this._collision.check(_this._player, cloud);
            });
            this._updateScoreBoard();
            if (core.lives < 1) {
                this._player.sound.loop = 0;
                this._player.sound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        };
        // EVENT HANDLERS ++++++++++++++++
        Play.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map