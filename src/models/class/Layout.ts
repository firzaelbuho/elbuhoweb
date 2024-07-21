interface MarginOptions {
    all?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    x?: number; // Horizontal axis: left and right
    y?: number; // Vertical axis: top and bottom
}

export class Margin {
    top: number | undefined;
    bottom: number | undefined;
    left: number | undefined;
    right: number | undefined;

    constructor(options: MarginOptions = {}) {
        const all = options.all ?? undefined;
        this.top = options.top ?? options.y ?? all;
        this.bottom = options.bottom ?? options.y ?? all;
        this.left = options.left ?? options.x ?? all;
        this.right = options.right ?? options.x ?? all;
    }
}

interface PaddingOptions {
    all?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    x?: number; // Horizontal axis: left and right
    y?: number; // Vertical axis: top and bottom
}

export class Padding {
    top: number | undefined;
    bottom: number | undefined;
    left: number | undefined;
    right: number | undefined;

    constructor(options: PaddingOptions = {}) {
        const all = options.all ?? undefined;
        this.top = options.top ?? options.y ?? all;
        this.bottom = options.bottom ?? options.y ?? all;
        this.left = options.left ?? options.x ?? all;
        this.right = options.right ?? options.x ?? all;
    }
}