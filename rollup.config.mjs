import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife', // Immediately Invoked Function Expression for browser compatibility
    name: 'bundle'
  },
  plugins: [
    resolve(),
    commonjs(),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist' },
        { src: 'src/styles.css', dest: 'dist' }
      ]
    })
  ]
};
