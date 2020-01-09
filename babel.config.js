module.exports = {
  presets: [
    [
      '@vue/app',
      {
        polyfills: ['es6.promise', 'es6.array.iterator', 'es7.array.includes']
      }
    ]
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'iview',
        libraryDirectory: 'src/components'
      }
    ],
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
