import type { Config } from "tailwindcss";
import daisyui from 'daisyui'
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
 
  safelist: [
    'btn-primary',
    'btn-secondary',
    'btn-accent',
    'btn-neutral',
    'btn-info',
    'btn-warning',
    'btn-success',
    'btn-error',

    'btn-ghost',
    'btn-link',
    'btn-outline',
    'glass',

    'btn-square',
    'btn-circle',
    'btn-block',
    'btn-wide',


    'btn-xs',
    'btn-sm',
    'btn-md',
    'btn-lg',

  
    'input-primary',
    'input-secondary',
    'input-accent',
    'input-warning',
    'input-info',
    'input-success',
    'input-error',

    'input-xs',
    'input-sm',
    'input-md',
    'input-lg',

    'text-left',
    'text-right',
    'text-center',
    'text-justify',

    'text-primary',
    'text-secondary',
    'text-warning',
    'text-error',
    'text-success',
    'text-info',
    'text-accent',

    'text-base-content',
    'text-primary-content',
    'text-secondary-content',
    'text-accent-content',

    'text-base',
    'text-inherit',
    'text-xs',
    'text-sm',
    'text-md',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl',
    'text-7xl',
    'text-8xl',
    'text-9xl',
  ],

  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  }
};
export default config;
