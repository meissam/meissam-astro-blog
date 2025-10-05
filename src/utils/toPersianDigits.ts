export function convertToPersianDigits(input: number | string): string {
	const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
	return input.toString().replace(/\d/g, (digit) => {
		const index = parseInt(digit);
		return persianDigits[index] ?? digit; // fallback just in case
	});
}
