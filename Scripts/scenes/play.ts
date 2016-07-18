module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _ocean: objects.Ocean;

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
            this._ocean = new objects.Ocean("ocean");
            this.addChild(this._ocean);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update(): void {
            // scene updates happen here...
            this._ocean.update();
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}