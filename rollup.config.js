import ts from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import css from 'rollup-plugin-css-only'
const vue = require('rollup-plugin-vue')
import path from 'path'
export default {
  input: './src/index.ts', //入口
  output: {
    file: 'lib/index.esm.js',
    format: 'es'
  },
  plugins: [
    terser(),
    nodeResolve(),
    // commonjs(),
    css(),
    vue({
      target: 'browser',
      css: false,
      exposeFilename: false,
    }),
    ts({
      check: false,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: false,
          declaration: true,
          declarationMap: false
        },
        exclude: ['**/__tests__', 'test-dts']
      }
    })
  ]
}