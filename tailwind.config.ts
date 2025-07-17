import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	corePlugins: {
		// disable some core plugins as they are included in the css, even when unused
		borderOpacity: false,
		fontVariantNumeric: false,
		ringOffsetColor: false,
		ringOffsetWidth: false,
		scrollSnapType: false,
		textOpacity: false,
		touchAction: false,
	},
	darkMode: ["class", '[data-theme="dark"]'],
	plugins: [
		require("@tailwindcss/typography"),
		plugin(({ addComponents }) => {
			addComponents({
				".cactus-link": {
					"&:hover": {
						"@apply decoration-link decoration-2": {},
					},
					"@apply underline underline-offset-2": {},
				},
				".title": {
					"@apply text-2xl font-semibold text-accent": {},
				},
			});
		}),
	],
	theme: {
		extend: {
			colors: {
				accent: "hsl(var(--theme-accent) / <alpha-value>)",
				bgColor: "hsl(var(--theme-bg) / <alpha-value>)",
				link: "hsl(var(--theme-link) / <alpha-value>)",
				quote: "hsl(var(--theme-quote) / <alpha-value>)",
				textColor: "hsl(var(--theme-text) / <alpha-value>)",
				header: "hsl(var(--header-bg) / <alpha-value>)",
			},
			fontFamily: {
				// Add any custom fonts here
				sans: ["Sahel", ...fontFamily.sans],
				serif: ["Sahel", ...fontFamily.serif],
			},
			transitionProperty: {
				height: "height",
			},
			// @ts-expect-error
			// Remove above once tailwindcss exposes theme type
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							"@apply cactus-link": "",
						},
						blockquote: {
							borderLeftWidth: "0",
						},
						code: {
							border: "1px dotted #666",
							borderRadius: "2px",
						},
						kbd: {
							"@apply dark:bg-textColor": "",
						},
						hr: {
							borderTopStyle: "dashed",
						},
						strong: {
							fontWeight: "700",
						},
						sup: {
							"@apply ms-0.5": "",
							a: {
								"&:after": {
									content: "']'",
								},
								"&:before": {
									content: "'['",
								},
								"&:hover": {
									"@apply text-link no-underline bg-none": "",
								},
								"@apply bg-none": "",
							},
						},
						/* Table */
						"tbody tr": {
							borderBottomWidth: "none",
						},
						tfoot: {
							borderTop: "1px dashed #666",
						},
						thead: {
							borderBottomWidth: "none",
						},
						"thead th": {
							borderBottom: "1px dashed #666",
							fontWeight: "700",
						},
						'th[align="center"], td[align="center"]': {
							"text-align": "center",
						},
						'th[align="right"], td[align="right"]': {
							"text-align": "right",
						},
						'th[align="left"], td[align="left"]': {
							"text-align": "left",
						},
					},
				},
				cactus: {
					css: {
						"--tw-prose-body": theme("colors.textColor / 1"),
						"--tw-prose-bold": theme("colors.textColor / 1"),
						"--tw-prose-bullets": theme("colors.textColor / 1"),
						"--tw-prose-headings": theme("colors.accent / 1"),
						"--tw-prose-hr": "0.5px dashed #666",
						"--tw-prose-links": theme("colors.textColor / 1"),
						"--tw-prose-quotes": theme("colors.quote / 1"),
						"--tw-prose-th-borders": "#666",

						blockquote: {
							marginTop: "2rem",
							marginBottom: "2rem",
							paddingRight: "1.25rem",
							borderRight: "3px solid hsl(var(--theme-quote))",
							fontStyle: "italic",
							color: "hsl(var(--theme-quote))",
							textAlign: "right",
						},
						"blockquote p:first-of-type::before": {
							content: '"“"',
							marginLeft: "0.25rem",
						},
						"blockquote p:last-of-type::after": {
							content: '"”"',
							marginRight: "0.25rem",
						},

						p: {
							textAlign: "justify",
						},
						li: {
							textAlign: "justify",
						},
					},
				},
				sm: {
					css: {
						code: {
							fontSize: theme("fontSize.sm")[0],
							fontWeight: "400",
						},
					},
				},
			}),
		},
	},
} satisfies Config;
