module objects {
    export class Bullet extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++
        private _defaultPosition: objects.Vector2;
        private _speed: number;
        private _inFlight: boolean;


        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++
        get Speed(): number {
            return this._speed;
        }

        set Speed(newSpeed: number) {
            this._speed = newSpeed;
        }

        get InFlight(): boolean {
            return this._inFlight;
        }

        set InFlight(newState: boolean) {
            this._inFlight = newState;
        }

        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Bullet.
         * 
         * @constructor 
         * @param {string} imageString
         */
        constructor(imageString: string) {
            super(imageString);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method resets the bullet object
         * 
         * @public
         * @method Reset
         * @returns {void}
         */
        public Reset(): void {
            this.position = this._defaultPosition;
            this.x = this.position.x;
            this.y = this.position.y;
            this._inFlight = false;
        }

        /**
         * Evaluates if the bullet has left the screen and calls reset
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds(): void {
            if (this.position.y <= -this.height) {
                this.Reset();
            }
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         *This method triggers the bullet being fired 
         * 
         * @public
         * @method Fire
         * @param {Vector2} newPosition
         * @returns {void}
         */
        public Fire(newPosition: Vector2): void {
            this.x = newPosition.x;
            this.y = newPosition.y;
            // position is simply used to help us with collisions
            this.position = newPosition;
            this.InFlight = true;
            createjs.Sound.play("bulletFire")
        }

        public start(): void {
            // some position we can never get to in game
            this._defaultPosition = new Vector2(1000, 1000);
            this.Speed = 10;
            this.Reset();
        }

        public update(): void {

            if (this.InFlight) {
                this.y -= this.Speed;
            }
            this.position = new Vector2(this.x, this.y);
            this._checkBounds();
        }
    }
}