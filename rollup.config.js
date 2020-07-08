import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const input = 'src/index.ts';

const plugins = [
  typescript({
    typescript: require('typescript')
  })
];

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];

// export default [
//   {
//     input,
//     output: {
//       file: pkg.module,
//       format: 'esm',
//       sourcemap: true
//     },
//     plugins,
//     external
//   },
//   {
//     input,
//     output: {
//       file: pkg.main,
//       format: 'cjs',
//       sourcemap: true
//     },
//     plugins,
//     external
//   }
// ];

export default [
  {
    input: ['src/index.ts', 'src/components/index.ts'],
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true
      }
    ],
    preserveModules: true,
    plugins: [
      // peerDepsExternal(),
      // resolve(),
      // commonjs(),
      typescript({
        typescript: require('typescript')
      })
    ]
  }
];
