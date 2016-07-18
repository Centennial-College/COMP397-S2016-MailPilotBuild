var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        function Ocean(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        Ocean.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this._reset();
            }
        };
        Ocean.prototype._reset = function () {
            this.y = -960;
        };
        Ocean.prototype.start = function () {
            this._reset();
            this._dy = 5; // 5px per frame down
        };
        Ocean.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        return Ocean;
    }(createjs.Bitmap));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map