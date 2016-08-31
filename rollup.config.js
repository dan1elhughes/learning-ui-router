import uglify from 'rollup-plugin-uglify';

export default {
	entry: 'app/main.js',
	dest: 'dist/main.js',
	sourceMap: 'inline',
	plugins: [
		uglify()
	]
};
