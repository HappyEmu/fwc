import { useMemo, useState } from "react";
import {
	PAGES_PER_TEAM,
	SLOTS_PER_TEAM,
	TeamPage,
} from "./components/TeamPage";
import { teams } from "./data/teams";

const groups = [...new Set(teams.map((t) => t.group))].sort();

export default function App() {
	const [group, setGroup] = useState<string>("ALL");

	// Each team becomes PAGES_PER_TEAM consecutive A4 sheets.
	const sheets = useMemo(() => {
		const list =
			group === "ALL" ? teams : teams.filter((t) => t.group === group);
		return list.flatMap((team) =>
			Array.from({ length: PAGES_PER_TEAM }, (_, p) => ({
				team,
				pageInTeam: p + 1,
			})),
		);
	}, [group]);

	return (
		<>
			{/* Screen-only toolbar — hidden when printing. */}
			<div className="no-print sticky top-0 z-10 flex flex-wrap items-center gap-3 border-b border-neutral-300 bg-white/90 px-4 py-3 backdrop-blur">
				<strong className="text-sm uppercase tracking-widest">
					FIFA World Cup 2026 · Sticker Sheets
				</strong>
				<span className="text-xs text-neutral-500">
					{sheets.length} A4 {sheets.length === 1 ? "page" : "pages"} ·{" "}
					{PAGES_PER_TEAM} per team · {SLOTS_PER_TEAM} slots/team
				</span>

				<label className="ml-auto flex items-center gap-2 text-xs">
					Group
					<select
						value={group}
						onChange={(e) => setGroup(e.target.value)}
						className="rounded border border-neutral-300 bg-white px-2 py-1 text-xs"
					>
						<option value="ALL">All groups</option>
						{groups.map((g) => (
							<option key={g} value={g}>
								Group {g}
							</option>
						))}
					</select>
				</label>

				<button
					type="button"
					onClick={() => window.print()}
					className="rounded bg-neutral-900 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-neutral-700"
				>
					Print
				</button>
			</div>

			<main>
				{sheets.map((sheet, i) => (
					<TeamPage
						key={`${sheet.team.code}-${sheet.pageInTeam}`}
						team={sheet.team}
						pageInTeam={sheet.pageInTeam}
						bookletIndex={i}
						bookletTotal={sheets.length}
					/>
				))}
			</main>
		</>
	);
}
