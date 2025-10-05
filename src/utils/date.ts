import { siteConfig } from "@/site-config";
import type { CollectionEntry } from "astro:content";
import { toJalaali } from "jalaali-js";

const dateFormat = new Intl.DateTimeFormat(siteConfig.date.locale, siteConfig.date.options);

export function getFormattedDate(
	date: string | number | Date,
	options?: Intl.DateTimeFormatOptions,
) {
	if (typeof options !== "undefined") {
		return new Date(date).toLocaleDateString(siteConfig.date.locale, {
			...(siteConfig.date.options as Intl.DateTimeFormatOptions),
			...options,
		});
	}

	return dateFormat.format(new Date(date));
}

export function groupPostsByJalaliYear(posts: CollectionEntry<"post">[]) {
	return posts.reduce(
		(acc, post) => {
			const date = new Date(post.data.publishDate);
			const { jy } = toJalaali(date.getFullYear(), date.getMonth() + 1, date.getDate());
			acc[jy] ||= [];
			acc[jy].push(post);
			return acc;
		},
		{} as Record<number, CollectionEntry<"post">[]>,
	);
}
