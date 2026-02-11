import path from 'path';

export default {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist')
  }
};
