module objects {
    export class Ocean extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _dy: number;

        constructor(imageString: string) {
            super(core.assets.getResult(imageString));

            this.start();
        }

        private _checkBounds(): void {
            if (this.y >= 0) {
                this._reset();
            }
        }

        private _reset(): void {
            this.y = -960;
        }

        public start(): void {
            this._reset();
            this._dy = 5;   // 5px per frame down
        }

        public update(): void {
            this.y += this._dy;
            this._checkBounds();
        }
    }
}