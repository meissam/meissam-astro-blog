import type { SiteConfig } from "@/types";

export enum Categories {
	Leadership = "leadership",
	Code = "code",
	Life = "life",
}

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Meissam Rasouli",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Used as the default description meta property and webmanifest description
	description: "Meissam Rasouli's Personal Blog",
	// HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_GB",
	// Option to sort posts by updatedDate if set to true (if property exists). Default (false) will sort by publishDate
	sortPostsByUpdatedDate: false,
	// Used to construct the meta title property found in src/components/BaseHead.astro L:11, and webmanifest name found in astro.config.ts L:42
	title: "Meissam Rasouli's Personal blog",
};

// Used to generate links in both the Header & Footer.
export const menuLinks: { path: string; title: string }[] = [
	{
		title: Categories.Leadership,
		path: "/categories/leadership/",
	},
	{
		title: Categories.Code,
		path: "/categories/code/",
	},
	{
		title: Categories.Life,
		path: "/categories/life/",
	},
];

// Used to generate links in both the Header & Footer.
export const footerLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/about/",
		title: "About",
	},
	{
		path: "/posts/",
		title: "Archive",
	},
	{
		title: "Tags",
		path: "/tags/",
	},
	{
		title: "RSS",
		path: "/rss.xml",
	},
];
