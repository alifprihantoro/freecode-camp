const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

mix
  .sass('simple-editor/src/style/main.scss', 'simple-editor/public/style.css', {}, [
    tailwindcss('./simple-editor/config/tailwind.config.js'),
  ])
  .options({
    processCssUrls: false,
  })
  .ts('simple-editor/src/app.tsx', 'simple-editor/public')
  .react()
  .webpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
      extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
    },
  })
