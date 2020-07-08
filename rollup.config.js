import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const plugins = [
  peerDepsExternal(),
  nodeResolve(),
  commonjs(),
  typescript({
    typescript: require('typescript')
  }),
  terser()
];

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];

export default [
  // {
  //   input: [
  //     'src/index.ts',
  //     'src/components/index.ts',
  //     'src/hooks/index.ts',
  //     'src/styles/index.ts',
  //     'src/utils/index.ts',
  //     'src/icons/index.ts'
  //   ],
  //   output: [
  //     {
  //       dir: 'dist',
  //       format: 'esm',
  //       sourcemap: true
  //     }
  //   ],
  //   preserveModules: true,
  //   plugins,
  //   external
  // }
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: 'dist/components/index.esm.js',
        format: 'esm',
        sourcemap: true
      },
      {
        file: 'dist/components/index.cjs.js',
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins,
    external
  },
  {
    input: 'src/styles/index.ts',
    output: [
      {
        file: 'dist/styles/index.esm.js',
        format: 'esm',
        sourcemap: true
      },
      {
        file: 'dist/styles/index.cjs.js',
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins,
    external
  }
  // {
  //   input: 'src/index.ts',
  //   output: {
  //     file: pkg.module,
  //     format: 'esm',
  //     sourcemap: true
  //   },
  //   plugins,
  //   external
  // },
  // {
  //   input: 'src/index.ts',
  //   output: {
  //     file: pkg.main,
  //     format: 'cjs',
  //     sourcemap: true
  //   },
  //   plugins,
  //   external
  // }
];
