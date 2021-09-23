// import { storybookPlugin } from '@web/dev-server-storybook';

export default {
    open: false,
    nodeResolve: true,
    watch: true,
    // appIndex: 'index.html',
    // plugins: [storybookPlugin({ type: "web-components" })]
    // in a monorepo you need to set set the root dir to resolve modules
    // rootDir: '.',
    port: 8001,
    debug: true
  };