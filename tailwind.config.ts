
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "../components/github-profile-tailwind.tsx",
    "../components/navbar.tsx",
    "../pages/tailwind.page.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
