// models/Product.ts



export enum BorderStyle {
    NONE = 'none',
    SOLID = 'solid',
    DASHED = 'dashed',
    DOTTED = 'dotted'
}

export enum BorderRadius {
    NONE = 'none',
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
    XL = 'xl',
    "2XL" = '2xl',
    "3XL" = '3xl',
    FULL = 'full'
  }
  
  // Penggunaan contoh:
  let borderRadius: BorderRadius = BorderRadius.MD;
  console.log(borderRadius); // Output: 'md'
  

