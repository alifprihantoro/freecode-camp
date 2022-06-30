const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

mix
  .sass('quotes/src/style/main.scss', 'quotes/public/main.css', {}, [
    tailwindcss('./quotes/config/tailwind.config.js'),
  ])
  .options({
    processCssUrls: false,
  })
  .ts('quotes/src/app.tsx', 'quotes/public')
  .react()
  .webpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
      extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
    },
  })
