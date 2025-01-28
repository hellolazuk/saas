import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {
      fontFamily: {
        bengali: ['Hind Siliguri', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#1a365d', // Dark Blue/Navy
          hover: '#2d4a7c',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#ff6b35', // Soft Orange
          hover: '#ff8659',
          foreground: '#ffffff'
        },
        success: {
          DEFAULT: '#22c55e', // Bright Green
          foreground: '#ffffff'
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff'
        },
        muted: {
          DEFAULT: '#6b7280', // Neutral Gray
          foreground: '#9ca3af'
        },
        accent: {
          DEFAULT: '#ff6b35', // Soft Orange
          foreground: '#ffffff'
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#1f2937'
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#1f2937'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'auth-gradient': 'linear-gradient(to right bottom, #1a365d, #2d4a7c)'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;