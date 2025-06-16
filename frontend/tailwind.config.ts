import { join } from 'path';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

import { datsTheme } from './dats-theme';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Lato', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				'lato': ['Lato', 'sans-serif']
			},
			colors: {
				'dats-cyan': '#00d4ff',
				'dats-blue': '#0ea5e9',
				'dats-dark': '#0a0a0a',
				'dats-gray': '#1a1a1a'
			},
			animation: {
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out',
			},
			keyframes: {
				'pulse-glow': {
					'0%, 100%': { 
						'box-shadow': '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff',
						'transform': 'scale(1)' 
					},
					'50%': { 
						'box-shadow': '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff',
						'transform': 'scale(1.02)' 
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			}
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		skeleton({
			themes: {
				custom: [datsTheme]
			}
		}),
		// Courtesy of bholmesdev: https://gist.github.com/bholmesdev/f326094e2097068c5de8f818f9aa8713
		plugin(function spicyGradients({ addUtilities }) {
			addUtilities({
				'.bg-none': { 'background-image': 'none' },
				'.bg-gradient-to-t': {
					'background-image': 'linear-gradient(to top, var(--tw-gradient-stops))',
					'@supports (background: linear-gradient(in oklch to top, black, white))': {
						'background-image': 'linear-gradient(in oklch to top, var(--tw-gradient-stops))'
					}
				},
				'.bg-gradient-to-b': {
					'background-image': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
					'@supports (background: linear-gradient(in oklch to bottom, black, white))': {
						'background-image': 'linear-gradient(in oklch to bottom, var(--tw-gradient-stops))'
					}
				},
				'.bg-gradient-to-l': {
					'background-image': 'linear-gradient(to left, var(--tw-gradient-stops))',
					'@supports (background: linear-gradient(in oklch to left, black, white))': {
						'background-image': 'linear-gradient(in oklch to left, var(--tw-gradient-stops))'
					}
				},
				'.bg-gradient-to-r': {
					'background-image': 'linear-gradient(to right, var(--tw-gradient-stops))',
					'@supports (background: linear-gradient(in oklch to right, black, white))': {
						'background-image': 'linear-gradient(in oklch to right, var(--tw-gradient-stops))'
					}
				},
				'.bg-gradient-to-tl': {
					'background-image': 'linear-gradient(to top left, var(--tw-gradient-stops))',
					'@supports (background: linear-gradient(in oklch to top left, black, white))': {
						'background-image': 'linear-gradient(in oklch to top left, var(--tw-gradient-stops))'
					}
				},
				'.bg-gradient-to-tr': {
					'background-image': 'linear-gradient(to top right, var(--tw-gradient-stops))',
					'@supports (background: linear-gradient(in oklch to top right, black, white))': {
						'background-image': 'linear-gradient(in oklch to top right, var(--tw-gradient-stops))'
					}
				},
				'.bg-gradient-to-bl': {
					'background-image': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
					'@supports (background: linear-gradient(in oklch to bottom left, black, white))': {
						'background-image': 'linear-gradient(in oklch to bottom left, var(--tw-gradient-stops))'
					}
				},
				'.bg-gradient-to-br': {
					'background-image': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
					'@supports (background: linear-gradient(in oklch to bottom right, black, white))': {
						'background-image':
							'linear-gradient(in oklch to bottom right, var(--tw-gradient-stops))'
					}
				}
			});
		})
	]
} satisfies Config;

export default config;
