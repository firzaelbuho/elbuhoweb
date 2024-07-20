interface PaddingOptions {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    x?: number; // Horizontal axis: left and right
    y?: number; // Vertical axis: top and bottom
}

class Padding {
    top: number;
    bottom: number;
    left: number;
    right: number;

    constructor(options: PaddingOptions = {}) {
        this.top = options.top ?? options.y ?? 0;
        this.bottom = options.bottom ?? options.y ?? 0;
        this.left = options.left ?? options.x ?? 0;
        this.right = options.right ?? options.x ?? 0;
    }
}
