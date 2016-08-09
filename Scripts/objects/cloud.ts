module objects {
    /**
     * This is the Cloud object used in the game
     * 
     * @export
     * @class Cloud
     * @extends {objects.GameObject}
     */
    export class Cloud extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++
        private _dy: number;
        private _dx: number;

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++

        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Cloud.
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
        public Reset(): void {
            this._dy = Math.floor(Math.random() * 5 + 5); // vertical speed b/t 5 and 10
            this._dx = Math.floor(Math.random() * 4 - 2); // -2 to 2, horizontal drift 

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
                this.Reset();
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
            this.Reset();
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
            this.x += this._dx;
            this.position = new Vector2(this.x, this.y);
            this._checkBounds();
        }
    }
}