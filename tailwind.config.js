/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('@iconify/tailwind').addDynamicIconSelectors()
  ],
  daisyui: {
    themes: [
      {
        czqmTheme: {
          primary: '#226dad',
          secondary: '#DDA01D',
          accent: '#008072',
          neutral: '#2a323c',
          'base-100': '#1d232a',
          info: '#08d0ff',
          success: '#22c55e',
          warning: '#fbbf24',
          error: '#ef5465'
        }
      }
    ]
  }
};
