import type { SiteConfig } from "@/types";

export enum Categories {
	Photo = "عکس",
	Note = "یادداشت",
}

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49)
	author: "وبلاگ شخصی میثم رسولی",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "fa-IR",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Used as the default description meta property and webmanifest description
	description: "وبلاگ شخصی میثم رسولی",
	// HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
	lang: "fa",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "fa_IR",
	// Option to sort posts by updatedDate if set to true (if property exists). Default (false) will sort by publishDate
	sortPostsByUpdatedDate: false,
	// Used to construct the meta title property found in src/components/BaseHead.astro L:11, and webmanifest name found in astro.config.ts L:42
	title: "وبلاگ شخصی میثم رسولی",
};

// Used to generate links in both the Header & Footer.
export const menuLinks: { path: string; title: string }[] = [
	{
		title: Categories.Note,
		path: "/categories/notes/",
	},
	{
		title: Categories.Photo,
		path: "/categories/photos/",
	},
];

// Used to generate links in both the Header & Footer.
export const footerLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "خانه",
	},
	{
		path: "/about/",
		title: "درباره من",
	},
	{
		path: "/posts/",
		title: "بایگانی",
	},
	{
		path: "/tags/",
		title: "برچسب‌ها",
	},
	{
		title: "RSS",
		path: "/rss.xml",
	},
];
