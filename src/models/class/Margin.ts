interface MarginOptions {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    x?: number; // Horizontal axis: left and right
    y?: number; // Vertical axis: top and bottom
}

class Margin {
    top: number;
    bottom: number;
    left: number;
    right: number;

    constructor(options: MarginOptions = {}) {
        this.top = options.top ?? options.y ?? 0;
        this.bottom = options.bottom ?? options.y ?? 0;
        this.left = options.left ?? options.x ?? 0;
        this.right = options.right ?? options.x ?? 0;
    }
}

