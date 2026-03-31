import fs from "node:fs/promises";
import path from "node:path";
import type { TerminalColors } from "@opentui/core";

export const WEZTERM_THEME_SNAPSHOT_FILENAME = "wezterm-theme.json";

export function resolveWeztermThemeSnapshotPath(configHomeDir: string): string {
  return path.join(configHomeDir, WEZTERM_THEME_SNAPSHOT_FILENAME);
}

function isHexColor(value: unknown): value is string {
  return typeof value === "string" && /^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/.test(value);
}

export async function readWeztermThemeSnapshot(
  configHomeDir: string,
): Promise<TerminalColors | null> {
  const snapshotPath = resolveWeztermThemeSnapshotPath(configHomeDir);

  try {
    const raw = await fs.readFile(snapshotPath, "utf8");
    const parsed = JSON.parse(raw) as {
      palette?: unknown;
      defaultForeground?: unknown;
      defaultBackground?: unknown;
    };

    if (!Array.isArray(parsed.palette)) {
      return null;
    }

    const snapshotPalette = parsed.palette as readonly unknown[];
    const palette = Array.from({ length: 16 }, (_, index) => {
      const value = snapshotPalette[index];
      return isHexColor(value) ? value : null;
    });

    if (!palette[0]) {
      return null;
    }

    return {
      palette,
      defaultForeground: isHexColor(parsed.defaultForeground) ? parsed.defaultForeground : null,
      defaultBackground: isHexColor(parsed.defaultBackground) ? parsed.defaultBackground : null,
      cursorColor: null,
      mouseForeground: null,
      mouseBackground: null,
      tekForeground: null,
      tekBackground: null,
      highlightBackground: null,
      highlightForeground: null,
    };
  } catch {
    return null;
  }
}
