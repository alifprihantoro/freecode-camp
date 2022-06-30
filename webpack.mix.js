const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

mix
  .sass('./src/style/main.scss', 'public/main.css', {}, [
    tailwindcss('./tailwind.config.js'),
  ])
  .options({
    processCssUrls: false,
  })
  .ts('src/app.tsx', 'public')
  .react()
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
      extensions: ['.ts', '.js'],
      extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
    },
  })
