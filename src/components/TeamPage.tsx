import type { Team } from "../data/teams";

/**
 * Physical sticker dimensions. A normal Panini is 50 × 65 mm (portrait); the
 * landscape "double" (card 13) is the same sticker rotated → 65 × 50 mm, which
 * is why it spans two columns. Each slot reserves a strip on top for its number.
 */
const STICKER_W = 50; // mm
const STICKER_H = 65; // mm
const NUMBER_STRIP = 8; // mm reserved above the sticker for its number
const ROW_H = NUMBER_STRIP + STICKER_H; // 73mm — fixed grid row height
const COL_GAP = 1; // mm — kept tiny; 4×50mm already ~fills A4 width
const ROW_GAP = 7; // mm

const COLS = 4;
const ROWS = 3;
export const PAGES_PER_TEAM = 2;
export const SLOTS_PER_TEAM = 20;

/**
 * Layout (portrait A4, 4 cols × 3 rows):
 *
 *  Page 1                         Page 2
 *  [ HEADER (2-wide) ][01][02]    [11][12][   13 (landscape) ]
 *  [03][04][05][06]               [14][15][16][17]
 *  [07][08][09][10]               [ -- ][18][19][20]
 */
type Cell =
	| { kind: "header"; col: number; colSpan: number; row: number }
	| {
			kind: "slot";
			n: number;
			col: number;
			row: number;
			colSpan?: number;
			landscape?: boolean;
	  };

function pageCells(pageInTeam: number): Cell[] {
	if (pageInTeam === 1) {
		return [
			{ kind: "header", col: 1, colSpan: 2, row: 1 },
			{ kind: "slot", n: 1, col: 3, row: 1 },
			{ kind: "slot", n: 2, col: 4, row: 1 },
			{ kind: "slot", n: 3, col: 1, row: 2 },
			{ kind: "slot", n: 4, col: 2, row: 2 },
			{ kind: "slot", n: 5, col: 3, row: 2 },
			{ kind: "slot", n: 6, col: 4, row: 2 },
			{ kind: "slot", n: 7, col: 1, row: 3 },
			{ kind: "slot", n: 8, col: 2, row: 3 },
			{ kind: "slot", n: 9, col: 3, row: 3 },
			{ kind: "slot", n: 10, col: 4, row: 3 },
		];
	}
	return [
		{ kind: "slot", n: 11, col: 1, row: 1 },
		{ kind: "slot", n: 12, col: 2, row: 1 },
		{ kind: "slot", n: 13, col: 3, row: 1, colSpan: 2, landscape: true },
		{ kind: "slot", n: 14, col: 1, row: 2 },
		{ kind: "slot", n: 15, col: 2, row: 2 },
		{ kind: "slot", n: 16, col: 3, row: 2 },
		{ kind: "slot", n: 17, col: 4, row: 2 },
		{ kind: "slot", n: 18, col: 2, row: 3 },
		{ kind: "slot", n: 19, col: 3, row: 3 },
		{ kind: "slot", n: 20, col: 4, row: 3 },
	];
}

interface TeamPageProps {
	team: Team;
	/** Which sheet of this team's set this is (1-based). */
	pageInTeam: number;
	/** Position of this sheet within the whole printed booklet. */
	bookletIndex: number;
	bookletTotal: number;
}

/**
 * One portrait A4 sheet for a team. Sticker slots are sized to the real
 * 50 × 65 mm Panini, with a number strip on top. Ink is kept light: white
 * fills, with the team colors used only as thin accents.
 */
export function TeamPage({
	team,
	pageInTeam,
	bookletIndex,
	bookletTotal,
}: TeamPageProps) {
	const [primary, secondary] = team.colors;
	const accent = secondary === "#ffffff" ? primary : secondary;
	const cells = pageCells(pageInTeam);

	return (
		<section className="sheet flex flex-col py-[8mm]">
			<div
				className="mx-auto grid"
				style={{
					gridTemplateColumns: `repeat(${COLS}, ${STICKER_W}mm)`,
					gridTemplateRows: `repeat(${ROWS}, ${ROW_H}mm)`,
					columnGap: `${COL_GAP}mm`,
					rowGap: `${ROW_GAP}mm`,
				}}
			>
				{cells.map((cell) => {
					const place = {
						gridColumn: `${cell.col} / span ${cell.kind === "slot" ? (cell.colSpan ?? 1) : cell.colSpan}`,
						gridRow: `${cell.row}`,
					};

					if (cell.kind === "header") {
						return (
							<header
								key="header"
								className="flex flex-col justify-between rounded-md border-l-[6mm] p-[5mm]"
								style={{
									...place,
									borderColor: primary,
									background: `${primary}10`,
								}}
							>
								<div className="flex items-start justify-between gap-[3mm]">
									<span className="text-[20mm] leading-none" aria-hidden>
										{team.flag}
									</span>
									<div
										className="rounded-sm px-[2.5mm] py-[1.5mm] text-[3.2mm] font-bold text-white"
										style={{ background: primary }}
									>
										FWC 2026
									</div>
								</div>
								<div>
									<h1
										className="text-[8mm] font-bold uppercase leading-[0.95] tracking-tight"
										style={{ color: primary }}
									>
										{team.name}
									</h1>
									<p className="mt-[2mm] text-[3.4mm] font-medium uppercase tracking-[0.18em] text-neutral-500">
										{team.code} · Group {team.group}
										<br />
										{team.confederation}
										{team.host ? " · ★ Host" : ""}
									</p>
								</div>
								<div
									className="text-[3.2mm] font-bold uppercase tracking-widest"
									style={{ color: accent }}
								>
									Sheet {pageInTeam}/{PAGES_PER_TEAM}
								</div>
							</header>
						);
					}

					const w = cell.landscape ? STICKER_H : STICKER_W;
					const h = cell.landscape ? STICKER_W : STICKER_H;

					return (
						<div
							key={cell.n}
							className="flex flex-col items-center justify-start"
							style={place}
						>
							{/* fixed-width column so the number strip lines up with the sticker */}
							<div style={{ width: `${w}mm` }}>
								{/* number strip — reserved space on top */}
								<div className="flex h-[8mm] items-end justify-between px-[0.5mm] pb-[1.5mm]">
									<span
										className="text-[5mm] font-bold leading-none"
										style={{ color: primary }}
									>
										{String(cell.n).padStart(2, "0")}
									</span>
									<span className="text-[2.8mm] uppercase tracking-widest text-neutral-400">
										{team.code}
									</span>
								</div>
								{/* 50 × 65 mm (or 65 × 50 mm) sticker placement zone */}
								<div
									className="relative flex items-center justify-center rounded-md border-2 border-dashed bg-white"
									style={{
										width: `${w}mm`,
										height: `${h}mm`,
										borderColor: `${primary}66`,
									}}
								>
									<span className="text-[7mm] text-neutral-200">
										{team.code}
									</span>
									{cell.landscape && (
										<span className="absolute top-[2mm] text-[2.8mm] uppercase tracking-widest text-neutral-300">
											double · landscape
										</span>
									)}
									<span
										className="absolute right-[2mm] bottom-[2mm] text-[3.5mm]"
										style={{ color: accent }}
									>
										●
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<footer className="mt-auto flex items-center justify-between px-[8mm] pt-[5mm] text-[3.2mm] uppercase tracking-widest text-neutral-400">
				<span>Panini duplicates · 50 × 65 mm · stick &amp; trade</span>
				<span>
					{bookletIndex + 1} / {bookletTotal}
				</span>
			</footer>
		</section>
	);
}
