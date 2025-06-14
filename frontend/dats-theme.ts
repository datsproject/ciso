import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const datsTheme: CustomThemeConfig = {
	name: 'dats-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
		'--theme-font-family-heading': `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
		'--theme-font-color-base': '15 23 42', // Dark text for light backgrounds
		'--theme-font-color-dark': '15 23 42',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '12px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255', // White text on blue backgrounds
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255', 
		'--on-success': '255 255 255',
		'--on-warning': '15 23 42', // Dark text on bright warning
		'--on-error': '255 255 255',
		'--on-surface': '15 23 42', // Dark text on light surfaces
		// =~= Theme Colors  =~=
		// primary | #00d4ff (Bright Cyan) - keeping the DATS blue
		'--color-primary-50': '204 248 255', // #ccf8ff
		'--color-primary-100': '179 245 255', // #b3f5ff
		'--color-primary-200': '154 243 255', // #9af3ff
		'--color-primary-300': '102 236 255', // #66ecff
		'--color-primary-400': '51 222 255', // #33deff
		'--color-primary-500': '0 212 255', // #00d4ff
		'--color-primary-600': '0 191 230', // #00bfe6
		'--color-primary-700': '0 159 191', // #009fbf
		'--color-primary-800': '0 127 153', // #007f99
		'--color-primary-900': '0 104 125', // #00687d
		// secondary | #0ea5e9 (Electric Blue) - keeping the DATS blue
		'--color-secondary-50': '219 242 252', // #dbf2fc
		'--color-secondary-100': '207 237 251', // #cfedfb
		'--color-secondary-200': '195 233 250', // #c3e9fa
		'--color-secondary-300': '159 219 246', // #9fdbf6
		'--color-secondary-400': '87 192 240', // #57c0f0
		'--color-secondary-500': '14 165 233', // #0ea5e9
		'--color-secondary-600': '13 149 210', // #0d95d2
		'--color-secondary-700': '11 124 175', // #0b7caf
		'--color-secondary-800': '8 99 140', // #08638c
		'--color-secondary-900': '7 81 114', // #075172
		// tertiary | #1e40af (Deep Blue - replacing purple)
		'--color-tertiary-50': '239 246 255', // #eff6ff
		'--color-tertiary-100': '219 234 254', // #dbeafe
		'--color-tertiary-200': '191 219 254', // #bfdbfe
		'--color-tertiary-300': '147 197 253', // #93c5fd
		'--color-tertiary-400': '96 165 250', // #60a5fa
		'--color-tertiary-500': '59 130 246', // #3b82f6
		'--color-tertiary-600': '37 99 235', // #2563eb
		'--color-tertiary-700': '29 78 216', // #1d4ed8
		'--color-tertiary-800': '30 64 175', // #1e40af
		'--color-tertiary-900': '30 58 138', // #1e3a8a
		// success | #10b981 (Emerald)
		'--color-success-50': '219 245 236', // #dbf5ec
		'--color-success-100': '207 241 230', // #cff1e6
		'--color-success-200': '195 238 224', // #c3eee0
		'--color-success-300': '159 227 205', // #9fe3cd
		'--color-success-400': '87 206 167', // #57cea7
		'--color-success-500': '16 185 129', // #10b981
		'--color-success-600': '14 167 116', // #0ea774
		'--color-success-700': '12 139 97', // #0c8b61
		'--color-success-800': '10 111 77', // #0a6f4d
		'--color-success-900': '8 91 63', // #085b3f
		// warning | #f59e0b (Amber)
		'--color-warning-50': '254 240 218', // #fef0da
		'--color-warning-100': '253 235 206', // #fdebce
		'--color-warning-200': '253 231 193', // #fde7c1
		'--color-warning-300': '251 216 156', // #fbd89c
		'--color-warning-400': '248 186 82', // #f8ba52
		'--color-warning-500': '245 158 11', // #f59e0b
		'--color-warning-600': '221 142 10', // #dd8e0a
		'--color-warning-700': '184 119 8', // #b87708
		'--color-warning-800': '147 95 7', // #935f07
		'--color-warning-900': '120 77 5', // #784d05
		// error | #ef4444 (Red)
		'--color-error-50': '253 227 227', // #fde3e3
		'--color-error-100': '252 218 218', // #fcdada
		'--color-error-200': '251 208 208', // #fbd0d0
		'--color-error-300': '249 180 180', // #f9b4b4
		'--color-error-400': '244 124 124', // #f47c7c
		'--color-error-500': '239 68 68', // #ef4444
		'--color-error-600': '215 61 61', // #d73d3d
		'--color-error-700': '179 51 51', // #b33333
		'--color-error-800': '143 41 41', // #8f2929
		'--color-error-900': '117 33 33', // #752121
		// surface | Light theme surfaces
		'--color-surface-50': '248 250 252', // #f8fafc - Very light blue-gray
		'--color-surface-100': '241 245 249', // #f1f5f9 - Light blue-gray
		'--color-surface-200': '226 232 240', // #e2e8f0 - Light gray
		'--color-surface-300': '203 213 225', // #cbd5e1 - Medium light gray
		'--color-surface-400': '148 163 184', // #94a3b8 - Medium gray
		'--color-surface-500': '100 116 139', // #64748b - Medium dark gray
		'--color-surface-600': '71 85 105', // #475569 - Dark gray
		'--color-surface-700': '51 65 85', // #334155 - Darker gray
		'--color-surface-800': '30 41 59', // #1e293b - Very dark gray
		'--color-surface-900': '15 23 42' // #0f172a - Darkest gray (for text)
	}
};
