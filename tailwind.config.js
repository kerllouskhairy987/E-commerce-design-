/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      colors: {
        Blue: "#007bff",
        Indigo: "#6610f2",
        Purple: "#6f42c1",
        Pink: "#e83e8c",
        Red: "#dc3545",
        Orange: "#fd7e14",
        Yellow: "#ffc107",
        Green: "#28a745",
        Teal: "#20c997",
        Cyan: "#17a2b8",
        White: "#fff",
        Gray: "#6c757d",
        GrayDark: "#343a40",
        Primary: "#007bff",
        Secondary: "#6c757d",
        Success: "#28a745",
        Info: "#17a2b8",
        Warning: "#ffc107",
        Danger: "#dc3545",
        Light: "#f8f9fa",
        Dark: "#343a40",
        Main: "#7fad39",
      },
      rotate: {
        360: "360deg",
      },
      // Loading Animation
      animation: {
        loadTop: "moveTop 2s ease-out 1",
        loadBottom: "moveBottom 2s ease-out 1",
        spinner: "spin 2s ease-out 1",
      },
      keyframes: {
        moveTop: {
          "0%": { height: "50%" },
          "100%": { height: "0%" },
        },
        moveBottom: {
          "0%": { height: "50%" },
          "100%": { height: "0%" },
        },
        spin: {
          "0%": { transform: 'rotate(4turn)', borderBottom: '#7fad39', borderWidth: '16px' },
          "100%": { display: 'none', border: 'none' },
        },
      },
    },
  },
  plugins: [],
};
