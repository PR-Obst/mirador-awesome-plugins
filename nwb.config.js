module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'AwesomeDemo',
      externals: {
        react: 'React'
      }
    }
  }
}
