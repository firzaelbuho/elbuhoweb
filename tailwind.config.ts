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
    { pattern: /(bg|text|btn|input|border)-(red|green|blue|yellow|teal|stone|lime)-(100|200|300|400|500)/ },
    { pattern: /(bg|text|btn|input|border)-(sm|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/ },
    { pattern: /(text|bg|btn|input|border|chat-bubble)-(inherit|base|primary|primary-content|secondary|secondary-content|accent|accent-content|neutral|neutral-content|success|success-content|info|info-content|warning|warning-content|error|error-content|dark|dark-content|light|light-content)/ },

    // Layout

    { pattern: /(p|m)-(1|2|3|4|5|6|7|8)/ },
    { pattern: /(w|h)-(0|1|2|3|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|auto|full|screen|min|max|fit|px)/ },
    { pattern: /(w|h)-(1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|1\/5|2\/5|3\/5|4\/5|1\/6|2\/6|3\/6|4\/6|5\/6|1\/12|2\/12|3\/12|4\/12|5\/12|6\/12|7\/12|8\/12|9\/12|10\/12|11\/12)/ },
   
    // Alignment

    { pattern: /(content|flex)-(normal|center|start|end|between|around|evenly|baseline|stretch)/ },

    // Button
    { pattern: /btn-(ghost|link|outline)/ },
    'glass',
    { pattern: /btn-(square|circle|block|wide)/ },
    
    // Border
    { pattern: /border-(2|4|8|16)/ },

    // Grid
    { pattern: /gap-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/ },
    { pattern: /grid-(cols|rows)-(1|2|3|4|5|6|7|8|9|10|11|12)/ },

    // input
    // { pattern: /input-(text|number|password|email|tel|url|search|date|time|datetime-local|month|week|file|checkbox|radio|range|color|hidden|image|reset|submit|button)/ },

    // object
    { pattern: /object-(none|cover|fill|contain|scale-down)/ },

    // chat
    { pattern: /chat-(start|end)/ },

    // Safelist using regular expressions for col-span classes
    { pattern: /(col|row)-span-(1|2|3|4|5|6|7|8|9|10|11|12)/ },

   
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
