const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          '2xl': '1440px'
        }
      },
      backgroundImage: {
        waves: "url('assets/images/waves-bg.svg')",
        city: "url('assets/images/city-wp.jpg')"
      },
      backgroundSize: {
        '2/1-auto': '200% auto'
      },
      colors: {
        black: '#000000'
      },
      height: {
        140: '35rem'
      },
      minWidth: {
        '1/2': '50%',
        24: '24px',
        200: '200px'
      },
      minHeight: {
        '1/2': '50%',
        screen: '100vh'
      }
    }
  },
  plugins: []
};
