import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

esbuild
  .build({
    entryPoints: ['src/js/main.js'],
    bundle: true,
    outfile: 'dist/bundle.js',
    loader: {
      '.js': 'jsx',
    },
    plugins: [sassPlugin()],
  })
  .catch((err) => {
    // eslint-disable-next-line no-undef
    console.error(err);
  });
