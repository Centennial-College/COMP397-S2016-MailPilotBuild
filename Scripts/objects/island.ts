module objects {
    /**
     * This is the Island object used in the game
     * 
     * @export
     * @class Island
     * @extends {objects.GameObject}
     */
    export class Island extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++
        private _dy: number;

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++

        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor 
         * @param {string} imageString
         */
        constructor(imageString: string) {
            super(imageString);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++        
        /**
         * Resets the objects outside of the viewport
         * and sets the x and y locations   
         * 
         * @private
         * @method _reset
         * @returns {void}
         */
        private _reset(): void {
            this.y = -this.height;
            // get a random x location
            this.x = Math.floor((Math.random() * (640 - (this.width * 0.5))) + (this.width * 0.5));
            // math.floor gives us solid integer
        }

        /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds(): void {
            if (this.y >= (480 + (this.height * 0.5))) {
                this._reset();
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
            this._reset();
            this._dy = 5;   // 5px per frame down
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
            this.y += this._dy;
            this.position = new Vector2(this.x, this.y);
            this._checkBounds();
        }
    }
}