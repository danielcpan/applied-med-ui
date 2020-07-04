import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
    output: {
      name: "@danielcpan/applied-med-ui",
      file: "dist/main.js",
      format: "cjs",
      name: "ReactUi",
    },
    external: ["react"],
    plugins: [typescript()],
  },
];
