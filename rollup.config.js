import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
	entry: 'app/main.js',
	dest: 'public/js/dist.js',
	plugins: [
		babel({
			exclude: 'node_modules/**'
		}),
		uglify()
	]
};
