import { performance } from "node:perf_hooks";
import type { AppTheme } from "@t3tools/client-core";
import {
  TERMINAL_MATCH_THEME_ID,
  hasUsableTerminalColors,
  resolveTerminalThemeMode,
  type TerminalColors,
  type TuiThemeMode,
} from "./theme";

export interface ThemeAwareRenderer {
  readonly themeMode?: unknown;
  getPalette?: (options?: { size?: number; timeout?: number }) => Promise<TerminalColors>;
  clearPaletteCache?: () => void;
}

export interface ResolvedRendererTheme {
  readonly colors: TerminalColors | null;
  readonly mode: TuiThemeMode | null;
  readonly durationMs: number;
}

export function shouldResolveRendererTheme(
  theme: AppTheme | undefined,
  themeId: string | null | undefined,
): boolean {
  return theme === "system" || themeId === TERMINAL_MATCH_THEME_ID;
}

export function normalizeRendererThemeMode(value: unknown): TuiThemeMode | null {
  return value === "light" || value === "dark" ? value : null;
}

export async function resolveRendererTheme(
  renderer: ThemeAwareRenderer,
  options: { clearCache?: boolean } = {},
): Promise<ResolvedRendererTheme> {
  const fallbackMode = normalizeRendererThemeMode(renderer.themeMode);

  if (!renderer.getPalette) {
    return { colors: null, mode: fallbackMode, durationMs: 0 };
  }

  const startedAt = performance.now();
  try {
    if (options.clearCache) {
      renderer.clearPaletteCache?.();
    }

    const colors = await renderer.getPalette({ size: 16 });
    const durationMs = performance.now() - startedAt;
    const mode = resolveTerminalThemeMode(colors) ?? fallbackMode;
    return hasUsableTerminalColors(colors)
      ? { colors, mode, durationMs }
      : { colors: null, mode: fallbackMode, durationMs };
  } catch {
    return {
      colors: null,
      mode: fallbackMode,
      durationMs: performance.now() - startedAt,
    };
  }
}
