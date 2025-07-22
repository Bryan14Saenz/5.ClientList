import { build } from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

build({
  entryPoints: ['src/js/main.js'],
  bundle: true,
  outfile: 'dist/bundle.js',
  minify: true,
  sourcemap: true,
  plugins: [sassPlugin()],
  loader: {
    '.js': 'js',
  },
})
  // eslint-disable-next-line no-undef
  .then(() => console.log('✨ Build completo'))
  // eslint-disable-next-line no-undef
  .catch(() => process.exit(1));
