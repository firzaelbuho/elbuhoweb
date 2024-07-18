// models/Product.ts

export class Product {
    size: string;
    style: string;
    color: string;

    constructor(size: string, style: string, color: string) {
        this.size = size;
        this.style = style;
        this.color = color;
    }
}

