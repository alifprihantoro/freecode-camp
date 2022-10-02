const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const PATH = 'calculator'
mix
  .sass(PATH + '/src/style/main.scss', PATH + '/public/style.css', {}, [
    tailwindcss(PATH + '/config/tailwind.config.js'),
  ])
  .options({
    processCssUrls: false,
  })
  .ts(PATH + '/src/app.tsx', PATH + '/public')
  .react()
  .webpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
      extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
    },
  })
