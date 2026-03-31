import { RGBA, rgbToHex, type TerminalColors } from "@opentui/core";
import { describe, expect, it } from "vitest";

import {
  DEFAULT_TUI_THEME,
  DEFAULT_TUI_THEME_ID,
  hasUsableTerminalColors,
  type TuiColor,
  resolveTuiTheme,
  resolveTuiThemeMode,
} from "./theme";

const SAMPLE_TERMINAL_COLORS: TerminalColors = {
  palette: [
    "#2e3440",
    "#bf616a",
    "#a3be8c",
    "#ebcb8b",
    "#81a1c1",
    "#b48ead",
    "#88c0d0",
    "#e5e9f0",
    "#4c566a",
    "#d08770",
    "#a3be8c",
    "#ebcb8b",
    "#81a1c1",
    "#b48ead",
    "#8fbcbb",
    "#eceff4",
  ],
  defaultForeground: "#e5e9f0",
  defaultBackground: "#2e3440",
  cursorColor: null,
  mouseForeground: null,
  mouseBackground: null,
  tekForeground: null,
  tekBackground: null,
  highlightBackground: null,
  highlightForeground: null,
};

const EMPTY_TERMINAL_COLORS: TerminalColors = {
  palette: Array.from({ length: 16 }, () => null),
  defaultForeground: null,
  defaultBackground: null,
  cursorColor: null,
  mouseForeground: null,
  mouseBackground: null,
  tekForeground: null,
  tekBackground: null,
  highlightBackground: null,
  highlightForeground: null,
};

function asHex(color: TuiColor): string {
  return color instanceof RGBA ? rgbToHex(color) : color;
}

describe("resolveTuiThemeMode", () => {
  it("falls back to dark and respects detected system mode when provided", () => {
    expect(resolveTuiThemeMode("system")).toBe("dark");
    expect(resolveTuiThemeMode("system", "light")).toBe("light");
    expect(resolveTuiThemeMode("dark")).toBe("dark");
    expect(resolveTuiThemeMode("light")).toBe("light");
    expect(resolveTuiThemeMode(undefined)).toBe("dark");
  });
});

describe("hasUsableTerminalColors", () => {
  it("rejects empty palette responses", () => {
    expect(hasUsableTerminalColors(EMPTY_TERMINAL_COLORS)).toBe(false);
    expect(hasUsableTerminalColors(SAMPLE_TERMINAL_COLORS)).toBe(true);
    expect(hasUsableTerminalColors(null)).toBe(false);
  });
});

describe("resolveTuiTheme", () => {
  it("preserves the existing dark theme values", () => {
    const theme = resolveTuiTheme("dark");

    expect(theme).toBe(DEFAULT_TUI_THEME);
    expect(theme.id).toBe("default");
    expect(theme.palette.canvas).toBe("#171717");
    expect(theme.palette.composerSend).toBe("#2f438e");
    expect(theme.codeBlock.background).toBe("#101010");
    expect(theme.diffViewer.addedBg).toBe("#173124");
    expect(theme.colors.sendDotActive).toBe("#d1d5db");
    expect(theme.attachmentPillTones[0]).toEqual({
      backgroundColor: "#1d2026",
      textColor: "#3b82f6",
    });
  });

  it("preserves the existing light theme values", () => {
    const theme = resolveTuiTheme("light");

    expect(theme.mode).toBe("light");
    expect(theme.id).toBe("default");
    expect(theme.palette.canvas).toBe("#f5f5f5");
    expect(theme.palette.composerSend).toBe("#60a5fa");
    expect(theme.codeBlock.background).toBe("#101010");
    expect(theme.diffViewer.removedSignColor).toBe("#f87171");
    expect(theme.colors.primaryButtonText).toBe("#f5f5f5");
  });

  it("lets the default preset follow the detected system mode", () => {
    const theme = resolveTuiTheme("system", DEFAULT_TUI_THEME_ID, { systemMode: "light" });

    expect(theme.mode).toBe("light");
    expect(theme.id).toBe("default");
    expect(theme.palette.canvas).toBe("#f5f5f5");
  });

  it("builds the system-true preset from terminal colors", () => {
    const theme = resolveTuiTheme("system", "system-true", {
      systemMode: "dark",
      terminalColors: SAMPLE_TERMINAL_COLORS,
    });

    expect(theme.mode).toBe("dark");
    expect(theme.id).toBe("system-true");
    expect(asHex(theme.palette.canvas)).toBe("#2e3440");
    expect(asHex(theme.palette.text)).toBe("#e5e9f0");
    expect(asHex(theme.palette.accent)).toBe("#88c0d0");
    expect(asHex(theme.palette.composerSend)).toBe("#88c0d0");
    expect(asHex(theme.colors.selectedText)).toBe("#2e3440");
    expect(asHex(theme.status.planReady)).toBe("#b48ead");
    expect(asHex(theme.diffViewer.addedSignColor)).toBe("#a3be8c");
  });

  it("falls back to the default theme for unknown ids", () => {
    expect(resolveTuiTheme("dark", "not-a-theme")).toBe(DEFAULT_TUI_THEME);
  });

  it("falls back to the default preset when system-true colors are unavailable", () => {
    expect(resolveTuiTheme("dark", "system-true")).toBe(DEFAULT_TUI_THEME);
    expect(
      resolveTuiTheme("dark", "system-true", {
        terminalColors: EMPTY_TERMINAL_COLORS,
      }),
    ).toBe(DEFAULT_TUI_THEME);
  });
});
