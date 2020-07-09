import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const plugins = [peerDepsExternal(), commonjs(), typescript(), terser()];

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];

export default [
  {
    input: [
      'src/index.ts',
      'src/components/index.ts',
      'src/styles/index.ts',
      'src/hooks/index.ts',
      'src/icons/index.ts',
      'src/utils/index.ts'
    ],
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true
      }
    ],
    preserveModules: true,
    plugins,
    external
  }
];
