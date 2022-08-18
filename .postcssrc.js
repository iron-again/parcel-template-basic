// ESM(JS지원모듈) : 브라우저 환경에서 사용함 
// CommonJS로 지원함 : Node.js환경에서 사용함
// import대신 require()를 사용함
// export대신에 module.exports를 사용함

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}