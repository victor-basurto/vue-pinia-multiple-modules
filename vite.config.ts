import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@views': path.resolve(__dirname, 'src/views'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@types': path.resolve(__dirname, 'src/@types'),
			'@styles': path.resolve(__dirname, 'src/assets/scss'),
			'@routes': path.resolve(__dirname, 'src/router'),
			// '@utils': path.resolve(__dirname, 'src/utils'),
			// '@api': path.resolve(__dirname, 'src/api'),
		},
	},

});
