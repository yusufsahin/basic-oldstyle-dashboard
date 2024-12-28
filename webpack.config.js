const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Geliştirme modu
  entry: './src/index.tsx', // Giriş dosyası
  output: {
    path: path.resolve(__dirname, 'dist'), // Çıktı klasörü
    filename: 'bundle.js', // Çıktı dosyası
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // Uzantıları çözümleme
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // TypeScript dosyaları için kural
        use: 'ts-loader', // TypeScript'i derlemek için ts-loader kullanılıyor
        exclude: /node_modules/, // node_modules dışarıda tutulur
      },
      {
        test: /\.css$/, // CSS dosyaları için kural
        use: ['style-loader', 'css-loader'], // CSS işleme
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML şablonu
    }),
  ],
  devServer: {
    static: './dist', // Statik dosyaların servisi
    port: 3000, // Geliştirme sunucusu portu
    open: true, // Sunucu çalıştırıldığında tarayıcıyı otomatik aç
  },
};
