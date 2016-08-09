var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Cloud object used in the game
     *
     * @export
     * @class Cloud
     * @extends {objects.GameObject}
     */
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++
        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Cloud.
         *
         * @constructor
         * @param {string} imageString
         */
        function Cloud(imageString) {
            _super.call(this, imageString);
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
        Cloud.prototype.Reset = function () {
            this._dy = Math.floor(Math.random() * 5 + 5); // vertical speed b/t 5 and 10
            this._dx = Math.floor(Math.random() * 4 - 2); // -2 to 2, horizontal drift 
            this.y = -this.height;
            // get a random x location
            this.x = Math.floor((Math.random() * (640 - (this.width * 0.5))) + (this.width * 0.5));
            // math.floor gives us solid integer
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Cloud.prototype._checkBounds = function () {
            if (this.y >= (480 + (this.height * 0.5))) {
                this.Reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++        
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Cloud.prototype.start = function () {
            this.Reset();
        };
        /**
         * This method updates the object's properties
         * everytime it is called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Cloud.prototype.update = function () {
            this.y += this._dy;
            this.x += this._dx;
            this.position = new objects.Vector2(this.x, this.y);
            this._checkBounds();
        };
        return Cloud;
    }(objects.GameObject));
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map