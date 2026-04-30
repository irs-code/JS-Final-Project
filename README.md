# Dog vs Cats (Sprite Game)

A simple arcade-style sprite game: move the dog (player) to avoid cats, protect the kibble, and score points.

## Gameplay
- **Goal (Win):** Reach **10 points**.
- **Lose condition:** If **lives reach 0**, you lose.
- **Scoring:** A falling **dog** sprite reaching the **kibble** gives **+1 point**.
- **Damage:**
  - If **either cat touches the kibble** → **-1 life** (cat resets).
  - If the **falling dog touches the player** → **-1 life** (dog resets).
- **Background change:** When **points > 10**, the background becomes **pink**; otherwise it’s blue.

## Controls
Use arrow keys to move the player:
- **Right Arrow:** move right (also sets animation to `dogRight`)
- **Left Arrow:** move left (also sets animation to `dogLeft`)
- **Up Arrow:** move up
- **Down Arrow:** move down

## Sprites / Animations Used
Your project should include these animations (names must match):
- `cake` (used for **kibble**)
- `dogRight` (used for **player**)
- `dogLeft` (used for **player**)
- `cat1` (used for **cat1**)
- `cat2` (used for **cat2**)
- `dog` (used for the **falling dog** that gives points / can hurt you)


## Notes / Ideas to Improve
- Stop the game when you win/lose (right now sprites still update, but the screen is covered by the end screen).
- Clamp the player inside the play area (between x=100 and x=300).
- Increase difficulty as points increase (faster cats, more enemies, etc.).
