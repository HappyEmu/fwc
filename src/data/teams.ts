export type Confederation =
	| "UEFA"
	| "CONMEBOL"
	| "CAF"
	| "AFC"
	| "CONCACAF"
	| "OFC";

export interface Team {
	/** FIFA 3-letter code, also used as the route/key */
	code: string;
	name: string;
	/** Group A–L for the 48-team / 12-group format */
	group: string;
	confederation: Confederation;
	/** Flag emoji for quick visual reference on the page header */
	flag: string;
	/**
	 * Primary and secondary brand colors, used only as thin accents
	 * (header bar, slot borders) to keep printer ink usage low.
	 */
	colors: [primary: string, secondary: string];
	/** Whether this nation is one of the three host countries */
	host?: boolean;
}

/**
 * The 48 teams of the FIFA World Cup 2026 (USA · Canada · Mexico),
 * in the 12 groups of four produced by the Final Draw
 * (Washington D.C., 5 December 2025). Source: 2026 FIFA World Cup draw.
 *
 * Tweak any entry here and every print page updates automatically.
 */
export const teams: Team[] = [
	// Group A
	{
		code: "MEX",
		name: "Mexico",
		group: "A",
		confederation: "CONCACAF",
		flag: "🇲🇽",
		colors: ["#006847", "#ce1126"],
		host: true,
	},
	{
		code: "RSA",
		name: "South Africa",
		group: "A",
		confederation: "CAF",
		flag: "🇿🇦",
		colors: ["#007a4d", "#ffb915"],
	},
	{
		code: "KOR",
		name: "South Korea",
		group: "A",
		confederation: "AFC",
		flag: "🇰🇷",
		colors: ["#cd2e3a", "#0047a0"],
	},
	{
		code: "CZE",
		name: "Czech Republic",
		group: "A",
		confederation: "UEFA",
		flag: "🇨🇿",
		colors: ["#11457e", "#d7141a"],
	},

	// Group B
	{
		code: "CAN",
		name: "Canada",
		group: "B",
		confederation: "CONCACAF",
		flag: "🇨🇦",
		colors: ["#d52b1e", "#000000"],
		host: true,
	},
	{
		code: "BIH",
		name: "Bosnia and Herzegovina",
		group: "B",
		confederation: "UEFA",
		flag: "🇧🇦",
		colors: ["#002395", "#fecb00"],
	},
	{
		code: "QAT",
		name: "Qatar",
		group: "B",
		confederation: "AFC",
		flag: "🇶🇦",
		colors: ["#8a1538", "#000000"],
	},
	{
		code: "SUI",
		name: "Switzerland",
		group: "B",
		confederation: "UEFA",
		flag: "🇨🇭",
		colors: ["#d52b1e", "#000000"],
	},

	// Group C
	{
		code: "BRA",
		name: "Brazil",
		group: "C",
		confederation: "CONMEBOL",
		flag: "🇧🇷",
		colors: ["#009c3b", "#ffdf00"],
	},
	{
		code: "MAR",
		name: "Morocco",
		group: "C",
		confederation: "CAF",
		flag: "🇲🇦",
		colors: ["#c1272d", "#006233"],
	},
	{
		code: "HAI",
		name: "Haiti",
		group: "C",
		confederation: "CONCACAF",
		flag: "🇭🇹",
		colors: ["#00209f", "#d21034"],
	},
	{
		code: "SCO",
		name: "Scotland",
		group: "C",
		confederation: "UEFA",
		flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
		colors: ["#005eb8", "#000000"],
	},

	// Group D
	{
		code: "USA",
		name: "United States",
		group: "D",
		confederation: "CONCACAF",
		flag: "🇺🇸",
		colors: ["#0a3161", "#b31942"],
		host: true,
	},
	{
		code: "PAR",
		name: "Paraguay",
		group: "D",
		confederation: "CONMEBOL",
		flag: "🇵🇾",
		colors: ["#d52b1e", "#0038a8"],
	},
	{
		code: "AUS",
		name: "Australia",
		group: "D",
		confederation: "AFC",
		flag: "🇦🇺",
		colors: ["#00843d", "#ffcd00"],
	},
	{
		code: "TUR",
		name: "Turkey",
		group: "D",
		confederation: "UEFA",
		flag: "🇹🇷",
		colors: ["#e30a17", "#000000"],
	},

	// Group E
	{
		code: "GER",
		name: "Germany",
		group: "E",
		confederation: "UEFA",
		flag: "🇩🇪",
		colors: ["#000000", "#dd0000"],
	},
	{
		code: "CUW",
		name: "Curaçao",
		group: "E",
		confederation: "CONCACAF",
		flag: "🇨🇼",
		colors: ["#002b7f", "#f9e814"],
	},
	{
		code: "CIV",
		name: "Ivory Coast",
		group: "E",
		confederation: "CAF",
		flag: "🇨🇮",
		colors: ["#f77f00", "#009e60"],
	},
	{
		code: "ECU",
		name: "Ecuador",
		group: "E",
		confederation: "CONMEBOL",
		flag: "🇪🇨",
		colors: ["#ffd100", "#034ea2"],
	},

	// Group F
	{
		code: "NED",
		name: "Netherlands",
		group: "F",
		confederation: "UEFA",
		flag: "🇳🇱",
		colors: ["#f36c21", "#21468b"],
	},
	{
		code: "JPN",
		name: "Japan",
		group: "F",
		confederation: "AFC",
		flag: "🇯🇵",
		colors: ["#002673", "#bc002d"],
	},
	{
		code: "SWE",
		name: "Sweden",
		group: "F",
		confederation: "UEFA",
		flag: "🇸🇪",
		colors: ["#006aa7", "#fecc00"],
	},
	{
		code: "TUN",
		name: "Tunisia",
		group: "F",
		confederation: "CAF",
		flag: "🇹🇳",
		colors: ["#e70013", "#000000"],
	},

	// Group G
	{
		code: "BEL",
		name: "Belgium",
		group: "G",
		confederation: "UEFA",
		flag: "🇧🇪",
		colors: ["#e30613", "#fdda24"],
	},
	{
		code: "EGY",
		name: "Egypt",
		group: "G",
		confederation: "CAF",
		flag: "🇪🇬",
		colors: ["#ce1126", "#000000"],
	},
	{
		code: "IRN",
		name: "Iran",
		group: "G",
		confederation: "AFC",
		flag: "🇮🇷",
		colors: ["#239f40", "#da0000"],
	},
	{
		code: "NZL",
		name: "New Zealand",
		group: "G",
		confederation: "OFC",
		flag: "🇳🇿",
		colors: ["#00247d", "#cc142b"],
	},

	// Group H
	{
		code: "ESP",
		name: "Spain",
		group: "H",
		confederation: "UEFA",
		flag: "🇪🇸",
		colors: ["#c60b1e", "#ffc400"],
	},
	{
		code: "CPV",
		name: "Cape Verde",
		group: "H",
		confederation: "CAF",
		flag: "🇨🇻",
		colors: ["#003893", "#cf2027"],
	},
	{
		code: "KSA",
		name: "Saudi Arabia",
		group: "H",
		confederation: "AFC",
		flag: "🇸🇦",
		colors: ["#006c35", "#000000"],
	},
	{
		code: "URU",
		name: "Uruguay",
		group: "H",
		confederation: "CONMEBOL",
		flag: "🇺🇾",
		colors: ["#7b9fd4", "#001489"],
	},

	// Group I
	{
		code: "FRA",
		name: "France",
		group: "I",
		confederation: "UEFA",
		flag: "🇫🇷",
		colors: ["#002395", "#ed2939"],
	},
	{
		code: "SEN",
		name: "Senegal",
		group: "I",
		confederation: "CAF",
		flag: "🇸🇳",
		colors: ["#00853f", "#e31b23"],
	},
	{
		code: "IRQ",
		name: "Iraq",
		group: "I",
		confederation: "AFC",
		flag: "🇮🇶",
		colors: ["#007a3d", "#ce1126"],
	},
	{
		code: "NOR",
		name: "Norway",
		group: "I",
		confederation: "UEFA",
		flag: "🇳🇴",
		colors: ["#ba0c2f", "#00205b"],
	},

	// Group J
	{
		code: "ARG",
		name: "Argentina",
		group: "J",
		confederation: "CONMEBOL",
		flag: "🇦🇷",
		colors: ["#75aadb", "#caa845"],
	},
	{
		code: "ALG",
		name: "Algeria",
		group: "J",
		confederation: "CAF",
		flag: "🇩🇿",
		colors: ["#006233", "#d21034"],
	},
	{
		code: "AUT",
		name: "Austria",
		group: "J",
		confederation: "UEFA",
		flag: "🇦🇹",
		colors: ["#ed2939", "#000000"],
	},
	{
		code: "JOR",
		name: "Jordan",
		group: "J",
		confederation: "AFC",
		flag: "🇯🇴",
		colors: ["#ce1126", "#007a3d"],
	},

	// Group K
	{
		code: "POR",
		name: "Portugal",
		group: "K",
		confederation: "UEFA",
		flag: "🇵🇹",
		colors: ["#006600", "#ff0000"],
	},
	{
		code: "COD",
		name: "DR Congo",
		group: "K",
		confederation: "CAF",
		flag: "🇨🇩",
		colors: ["#007fff", "#f7d618"],
	},
	{
		code: "UZB",
		name: "Uzbekistan",
		group: "K",
		confederation: "AFC",
		flag: "🇺🇿",
		colors: ["#1eb53a", "#0099b5"],
	},
	{
		code: "COL",
		name: "Colombia",
		group: "K",
		confederation: "CONMEBOL",
		flag: "🇨🇴",
		colors: ["#fcd116", "#003893"],
	},

	// Group L
	{
		code: "ENG",
		name: "England",
		group: "L",
		confederation: "UEFA",
		flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
		colors: ["#cf081f", "#001489"],
	},
	{
		code: "CRO",
		name: "Croatia",
		group: "L",
		confederation: "UEFA",
		flag: "🇭🇷",
		colors: ["#ce1126", "#171796"],
	},
	{
		code: "GHA",
		name: "Ghana",
		group: "L",
		confederation: "CAF",
		flag: "🇬🇭",
		colors: ["#ce1126", "#006b3f"],
	},
	{
		code: "PAN",
		name: "Panama",
		group: "L",
		confederation: "CONCACAF",
		flag: "🇵🇦",
		colors: ["#005293", "#d21034"],
	},
];
