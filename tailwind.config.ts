import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { forest: "#082c25", gold: "#d8b56d", cream: "#f5f1e8" }, boxShadow: { glow: "0 0 50px rgba(216,181,109,.13)" } } },
  plugins: []
};
export default config;
