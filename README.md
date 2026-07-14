# Ironfield Dynasty

![Ironfield Dynasty cover](./assets/ui/cover.svg)

Ironfield Dynasty is an original, offline-ready American-football arcade and franchise game built with HTML5, CSS3, vanilla JavaScript modules, Canvas and Web Audio. It uses a completely fictional 24-team league and procedural player generation.

## Included features

- 24 fictional franchises with two conferences and four geographic divisions
- 53-player rosters (1,272 active players) generated with ratings and potential from 40–99
- Position-weighted overall calculations
- Playable Canvas matches: running, passing, receiver targeting, tackles, field goals and punts
- Playable defense with user movement and tackle input
- Four-quarter games, downs, distance, possession, scoring and match statistics
- 12-week regular season, standings, simulated AI games, playoffs and championship
- Draft class, scouting, free agency, contracts, releases, salary cap and player development
- Training focus, staff, sponsors, finances and facility upgrades
- Five independent local save slots with autosave, import/export, duplication and validation
- Responsive desktop and touch controls
- Procedural pixel-style players, stadium crowd, field texture, shadows, particles and camera shake
- PWA manifest and service worker for offline play after the first successful load
- Accessibility settings and three graphics presets
- Explicit debug field protected against accidental access by `Debug4Retro`

## Important scope note

This repository is a large, playable browser-game foundation rather than a claim that every production-scale item in the original master specification is simulated at commercial depth. Systems such as detailed contract clauses, 100 visually unique route diagrams, replay editing, commentator audio, every penalty, robust gamepad remapping and long-form narrative events are represented by extensible architecture or simplified working versions. There are no empty menu buttons or hidden cheat backdoors.

The debug password is included in client-side JavaScript. On a static site, it can be found by anyone inspecting the source and is therefore not a security mechanism. It only prevents accidental use of development tools.

## Run locally

ES modules and the service worker require an HTTP server. Do not open `index.html` directly with `file://`.

Using Python:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

Using VS Code, the Live Server extension also works.

## GitHub Pages

1. Create a new GitHub repository.
2. Upload the complete contents of this folder to the repository root.
3. Commit and push to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select `main` and `/ (root)`, then save.
7. Open the generated Pages URL.
8. Open the browser console and verify that no module path returns 404.
9. After updates, change the cache name in `service-worker.js`.
10. If an old version remains cached, unregister the service worker or clear site data once.

All runtime paths are relative and no build process is required.

## Controls

### Desktop

- Move: `WASD` or arrow keys
- Throw: `1`, `2`, or `3`
- Tackle on defense: `Space`
- Play selection: sidebar buttons

### Touch

- Virtual joystick: movement
- Receiver buttons `1–3`: pass target
- Tackle button: defensive tackle

## Ratings and potential

Visible ratings are clamped to 40–99. Overall is calculated with position-specific weights in `js/players/ratingCalculator.js`. Potential is a development estimate; internal ceilings and development types can produce busts, sleepers, early peaks and late bloomers.

## Saves

Saves use LocalStorage and are versioned. Each slot can be loaded, deleted, duplicated, exported to JSON or restored from JSON. Imported data is validated before use.

## Debug mode

The default compile-time switch is:

```js
export const DEBUG_MODE = false;
```

In **Settings → Debug Field**, enter `Debug4Retro`. Available tools include adding cash, healing the roster, maximizing morale, setting leading players to 99, adding a win and jumping toward the end of the season.

## Tests

Open `tests/test.html` through the same local server. It checks rating bounds, roster size, league size, unique IDs, schedule validity, save validation and core simulation logic.

## Architecture

- `js/data`: fictional teams, names, plays, events, injuries and sponsors
- `js/players`: generation, weighted ratings and development
- `js/league`: league creation, schedule, standings and season lifecycle
- `js/management`: cap, contracts, free agency, draft, training and facilities
- `js/gameplay`: input, rendering and real-time match engine
- `js/ai`: franchise and match simulation
- `js/state`: settings and save persistence
- `js/ui`: router, screens and reusable components

## Fictional world and legal note

All league names, teams, colors, players and presentation elements are fictional and original. No real professional league data, logos, player identities, source code, layouts or copyrighted game assets are included.
