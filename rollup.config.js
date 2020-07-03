import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
    output: {
      name: "applied-med-ui",
      file: "dist/main.js",
      format: "cjs",
    },
    external: ["react"],
    plugins: [typescript()],
  },
];
