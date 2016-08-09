module objects {
    /**
     * This is the Playe object used in the game 
     * 
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    export class Player extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++

        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Player.
         *
         * @constructor 
         * @param {string} imageString
         */
        constructor(imageString: string) {
            super(imageString);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++        
        /**
        * This method checks if the object has reached its boundaries
        * 
        * @private
        * @method _checkBounds
        * @returns {void}
        */
        private _checkBounds(): void {
            // checkbound sto stop player from going outside

            // check right bounds
            if (this.x >= (640 - (this.width * 0.5))) {
                this.x = (640 - (this.width * 0.5));
            }

            // check left bounds
            if (this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
            }
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++        
        /**
         * This method is used to initialize public properties
         * and private instance variables 
         *
         * @public
         * @method start
         * @returns {void} 
         */
        public start(): void {
            // when we do createjs.Sound.play() we are creating a sound object
            // -1 means loop forever, negative values loop infinitely
            this.sound = createjs.Sound.play("engine");
            this.sound.loop = -1;
            this.sound.volume = 0.7;
            this.y = 430;
            this.x = 320;
            this.position.x = this.x;
            this.position.y = this.y;
        }

        /**
         * This method updates the object's properties 
         * everytime it is called
         *
         * @public
         * @method update
         * @returns {void} 
         */
        public update(): void {
            // player to follow mouse
            this.x = core.stage.mouseX;
            this._checkBounds();
            this.position = new Vector2(this.x, this.y);
        }
    }
}