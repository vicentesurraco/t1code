import { createTerminalPalette, RGBA, rgbToHex, type TerminalColors } from "@opentui/core";
import type { AppTheme } from "@t3tools/client-core";

export type TuiColor = string | RGBA;

export interface TuiPalette {
  canvas: TuiColor;
  sidebar: TuiColor;
  main: TuiColor;
  surface: TuiColor;
  surfaceAlt: TuiColor;
  input: TuiColor;
  surfaceUser: TuiColor;
  surfacePlan: TuiColor;
  surfaceWarn: TuiColor;
  surfaceInfo: TuiColor;
  footer: TuiColor;
  diff: TuiColor;
  popup: TuiColor;
  scrim: TuiColor;
  border: TuiColor;
  divider: TuiColor;
  control: TuiColor;
  controlHover: TuiColor;
  controlActive: TuiColor;
  controlActiveStrong: TuiColor;
  controlInset: TuiColor;
  controlInsetHover: TuiColor;
  composerPanel: TuiColor;
  composerBorder: TuiColor;
  composerBorderMuted: TuiColor;
  composerSend: TuiColor;
  composerSendHover: TuiColor;
  composerStop: TuiColor;
  composerStopHover: TuiColor;
  accent: TuiColor;
  cursor: TuiColor;
  selection: TuiColor;
  selectionActive: TuiColor;
  text: TuiColor;
  muted: TuiColor;
  subtle: TuiColor;
  success: TuiColor;
  info: TuiColor;
  warning: TuiColor;
  claude: TuiColor;
  macRed: TuiColor;
  macYellow: TuiColor;
  macGreen: TuiColor;
}

export interface TuiAttachmentPillTone {
  backgroundColor: TuiColor;
  textColor: TuiColor;
}

export interface TuiCodeBlockColors {
  background: TuiColor;
  language: TuiColor;
  copyIcon: TuiColor;
}

export interface TuiStatusColors {
  awaitingInput: TuiColor;
  working: TuiColor;
  planReady: TuiColor;
  pulse: TuiColor;
}

export interface TuiDiffViewerColors {
  addedBg: TuiColor;
  removedBg: TuiColor;
  addedContentBg: TuiColor;
  removedContentBg: TuiColor;
  addedSignColor: TuiColor;
  removedSignColor: TuiColor;
}

export interface TuiThemeColors {
  workEntryErrorAccent: TuiColor;
  destructiveIcon: TuiColor;
  controlKnob: TuiColor;
  primaryButtonText: TuiColor;
  sendDotIdle: TuiColor;
  sendDotActive: TuiColor;
  selectedText: TuiColor;
}

export interface TuiTheme {
  id: TuiThemeId;
  mode: TuiThemeMode;
  palette: TuiPalette;
  attachmentPillTones: readonly TuiAttachmentPillTone[];
  codeBlock: TuiCodeBlockColors;
  status: TuiStatusColors;
  diffViewer: TuiDiffViewerColors;
  colors: TuiThemeColors;
}

export const TUI_THEME_IDS = ["default", "system-true"] as const;
export type TuiThemeId = (typeof TUI_THEME_IDS)[number];
export const DEFAULT_TUI_THEME_ID = "default" as const;
export const TUI_THEME_LABELS: Record<TuiThemeId, string> = {
  default: "Default",
  "system-true": "System true",
};

export type TuiThemeMode = "light" | "dark";

export interface ResolveTuiThemeOptions {
  systemMode?: TuiThemeMode | null;
  terminalColors?: TerminalColors | null;
}

export interface TuiDetectedTerminalTheme {
  colors: TerminalColors;
  mode: TuiThemeMode;
}

const DEFAULT_DARK_THEME: TuiTheme = {
  id: "default",
  mode: "dark",
  palette: {
    canvas: "#171717",
    sidebar: "#151515",
    main: "#171717",
    surface: "#1b1b1b",
    surfaceAlt: "#1f1f1f",
    input: "#111111",
    surfaceUser: "#202020",
    surfacePlan: "#1f221c",
    surfaceWarn: "#262016",
    surfaceInfo: "#1d2026",
    footer: "#171717",
    diff: "#1b1b1b",
    popup: "#1c1c1c",
    scrim: "#00000099",
    border: "#252525",
    divider: "#2d2d2d",
    control: "transparent",
    controlHover: "#202020",
    controlActive: "#292929",
    controlActiveStrong: "#1e1e1e",
    controlInset: "#141414",
    controlInsetHover: "#1a1a1a",
    composerPanel: "#1a1a1a",
    composerBorder: "#2a3f95",
    composerBorderMuted: "#313131",
    composerSend: "#2f438e",
    composerSendHover: "#3c57ba",
    composerStop: "#dc2626",
    composerStopHover: "#ef4444",
    accent: "#7c87ff",
    cursor: "#d4d4d4",
    selection: "#1f4f95",
    selectionActive: "#2b61b0",
    text: "#f5f5f5",
    muted: "#a3a3a3",
    subtle: "#737373",
    success: "#10b981",
    info: "#3b82f6",
    warning: "#f59e0b",
    claude: "#d97757",
    macRed: "#ff5f57",
    macYellow: "#febc2e",
    macGreen: "#28c840",
  },
  attachmentPillTones: [
    { backgroundColor: "#1d2026", textColor: "#3b82f6" },
    { backgroundColor: "#241b2f", textColor: "#a78bfa" },
    { backgroundColor: "#2a2417", textColor: "#facc15" },
    { backgroundColor: "#2a1b1b", textColor: "#f87171" },
    { backgroundColor: "#1c2721", textColor: "#34d399" },
    { backgroundColor: "#272019", textColor: "#fb923c" },
  ],
  codeBlock: {
    background: "#101010",
    language: "#8a8a8a",
    copyIcon: "#9a9a9a",
  },
  status: {
    awaitingInput: "#818cf8",
    working: "#7dd3fc",
    planReady: "#a78bfa",
    pulse: "#3b82f6",
  },
  diffViewer: {
    addedBg: "#173124",
    removedBg: "#3a1f1f",
    addedContentBg: "#1d3a2b",
    removedContentBg: "#442525",
    addedSignColor: "#4ade80",
    removedSignColor: "#f87171",
  },
  colors: {
    workEntryErrorAccent: "#fda4af",
    destructiveIcon: "#fda4af",
    controlKnob: "#f5f5f5",
    primaryButtonText: "#f5f5f5",
    sendDotIdle: "#6b7280",
    sendDotActive: "#d1d5db",
    selectedText: "#f5f5f5",
  },
};

const DEFAULT_LIGHT_THEME: TuiTheme = {
  ...DEFAULT_DARK_THEME,
  id: "default",
  mode: "light",
  palette: {
    canvas: "#f5f5f5",
    sidebar: "#eeeeee",
    main: "#f7f7f7",
    surface: "#ffffff",
    surfaceAlt: "#f1f1f1",
    input: "#ffffff",
    surfaceUser: "#ececec",
    surfacePlan: "#eef6ec",
    surfaceWarn: "#fff5e6",
    surfaceInfo: "#eef4ff",
    footer: "#f7f7f7",
    diff: "#fafafa",
    popup: "#ffffff",
    scrim: "#00000022",
    border: "#dddddd",
    divider: "#d8d8d8",
    control: "transparent",
    controlHover: "#ebebeb",
    controlActive: "#e2e2e2",
    controlActiveStrong: "#cdcdcd",
    controlInset: "#e7e7e7",
    controlInsetHover: "#dddddd",
    composerPanel: "#ffffff",
    composerBorder: "#0891b2",
    composerBorderMuted: "#d0d0d0",
    composerSend: "#60a5fa",
    composerSendHover: "#3b82f6",
    composerStop: "#dc2626",
    composerStopHover: "#ef4444",
    accent: "#0891b2",
    cursor: "#a3a3a3",
    selection: "#dbeafe",
    selectionActive: "#bfdbfe",
    text: "#171717",
    muted: "#666666",
    subtle: "#8a8a8a",
    success: "#059669",
    info: "#2563eb",
    warning: "#d97706",
    claude: "#c96d4d",
    macRed: "#ff5f57",
    macYellow: "#febc2e",
    macGreen: "#28c840",
  },
  colors: {
    ...DEFAULT_DARK_THEME.colors,
    selectedText: "#171717",
  },
};

export const DEFAULT_TUI_THEME = DEFAULT_DARK_THEME;

function defaultThemeForMode(mode: TuiThemeMode): TuiTheme {
  return mode === "light" ? DEFAULT_LIGHT_THEME : DEFAULT_DARK_THEME;
}

interface SystemThemeCurrent {
  readonly primary: RGBA;
  readonly secondary: RGBA;
  readonly accent: RGBA;
  readonly error: RGBA;
  readonly warning: RGBA;
  readonly success: RGBA;
  readonly info: RGBA;
  readonly text: RGBA;
  readonly textMuted: RGBA;
  readonly selectedListItemText: RGBA;
  readonly background: RGBA;
  readonly backgroundPanel: RGBA;
  readonly backgroundElement: RGBA;
  readonly backgroundMenu: RGBA;
  readonly border: RGBA;
  readonly borderActive: RGBA;
  readonly borderSubtle: RGBA;
  readonly diffHighlightAdded: RGBA;
  readonly diffHighlightRemoved: RGBA;
  readonly diffAddedBg: RGBA;
  readonly diffRemovedBg: RGBA;
  readonly diffAddedLineNumberBg: RGBA;
  readonly diffRemovedLineNumberBg: RGBA;
}

type SystemTheme = SystemThemeCurrent & {
  _hasSelectedListItemText: boolean;
};

type SystemThemeColor = keyof SystemThemeCurrent;
type HexColor = `#${string}`;
type RefName = string;
type Variant = {
  dark: HexColor | RefName;
  light: HexColor | RefName;
};
type ColorValue = HexColor | RefName | Variant | RGBA | number;

type ThemeJson = {
  defs?: Record<string, HexColor | RefName>;
  theme: Omit<Record<SystemThemeColor, ColorValue>, "selectedListItemText" | "backgroundMenu"> & {
    selectedListItemText?: ColorValue;
    backgroundMenu?: ColorValue;
  };
};

const ANSI_COLOR_FALLBACKS = [
  "#000000",
  "#800000",
  "#008000",
  "#808000",
  "#000080",
  "#800080",
  "#008080",
  "#c0c0c0",
  "#808080",
  "#ff0000",
  "#00ff00",
  "#ffff00",
  "#0000ff",
  "#ff00ff",
  "#00ffff",
  "#ffffff",
] as const;

export function isTuiThemeId(value: unknown): value is TuiThemeId {
  return typeof value === "string" && (TUI_THEME_IDS as readonly string[]).includes(value);
}

export function hasUsableTerminalColors(
  colors: TerminalColors | null | undefined,
): colors is TerminalColors {
  return Boolean(colors?.palette[0]);
}

export function toRgbaColor(color: TuiColor): RGBA {
  return color instanceof RGBA ? color : RGBA.fromHex(color);
}

function systemBackgroundHex(colors: TerminalColors): string | null {
  return colors.defaultBackground ?? colors.palette[0] ?? null;
}

function luminanceFromHex(hex: string): number {
  const [r, g, b] = RGBA.fromHex(hex).toInts();
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function ansiToRgba(code: number): RGBA {
  if (code < 16) {
    return RGBA.fromHex(ANSI_COLOR_FALLBACKS[code] ?? "#000000");
  }
  if (code < 232) {
    const index = code - 16;
    const b = index % 6;
    const g = Math.floor(index / 6) % 6;
    const r = Math.floor(index / 36);
    const value = (x: number) => (x === 0 ? 0 : x * 40 + 55);
    return RGBA.fromInts(value(r), value(g), value(b));
  }
  if (code < 256) {
    return RGBA.fromInts((code - 232) * 10 + 8, (code - 232) * 10 + 8, (code - 232) * 10 + 8);
  }
  return RGBA.fromInts(0, 0, 0);
}

function resolveSystemTheme(theme: ThemeJson, mode: TuiThemeMode): SystemTheme {
  const defs = theme.defs ?? {};

  function resolveColor(color: ColorValue, chain: string[] = []): RGBA {
    if (color instanceof RGBA) return color;
    if (typeof color === "string") {
      if (color === "transparent" || color === "none") return RGBA.fromInts(0, 0, 0, 0);
      if (color.startsWith("#")) return RGBA.fromHex(color);
      if (chain.includes(color)) {
        throw new Error(`Circular color reference: ${[...chain, color].join(" -> ")}`);
      }
      const next = defs[color] ?? theme.theme[color as SystemThemeColor];
      if (next === undefined) {
        throw new Error(`Color reference "${color}" not found in defs or theme`);
      }
      return resolveColor(next, [...chain, color]);
    }
    if (typeof color === "number") {
      return ansiToRgba(color);
    }
    return resolveColor(color[mode], chain);
  }

  const resolved = Object.fromEntries(
    Object.entries(theme.theme)
      .filter(([key]) => key !== "selectedListItemText" && key !== "backgroundMenu")
      .map(([key, value]) => [key, resolveColor(value as ColorValue)]),
  ) as Partial<Record<SystemThemeColor, RGBA>>;

  const hasSelectedListItemText = theme.theme.selectedListItemText !== undefined;
  if (hasSelectedListItemText) {
    resolved.selectedListItemText = resolveColor(theme.theme.selectedListItemText!);
  } else {
    resolved.selectedListItemText = resolved.background!;
  }

  if (theme.theme.backgroundMenu !== undefined) {
    resolved.backgroundMenu = resolveColor(theme.theme.backgroundMenu);
  } else {
    resolved.backgroundMenu = resolved.backgroundElement!;
  }

  return {
    ...(resolved as SystemThemeCurrent),
    _hasSelectedListItemText: hasSelectedListItemText,
  };
}

function selectedForeground(theme: SystemTheme, bg?: RGBA): RGBA {
  if (theme._hasSelectedListItemText) {
    return theme.selectedListItemText;
  }
  if (theme.background.a === 0) {
    const targetColor = bg ?? theme.primary;
    const luminance = 0.299 * targetColor.r + 0.587 * targetColor.g + 0.114 * targetColor.b;
    return luminance > 0.5 ? RGBA.fromInts(0, 0, 0) : RGBA.fromInts(255, 255, 255);
  }
  return theme.background;
}

function tint(base: RGBA, overlay: RGBA, alpha: number): RGBA {
  const r = base.r + (overlay.r - base.r) * alpha;
  const g = base.g + (overlay.g - base.g) * alpha;
  const b = base.b + (overlay.b - base.b) * alpha;
  return RGBA.fromInts(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
}

function generateGrayScale(bg: RGBA, isDark: boolean): Record<number, RGBA> {
  const grays: Record<number, RGBA> = {};
  const bgR = bg.r * 255;
  const bgG = bg.g * 255;
  const bgB = bg.b * 255;
  const luminance = 0.299 * bgR + 0.587 * bgG + 0.114 * bgB;

  for (let index = 1; index <= 12; index++) {
    const factor = index / 12;
    let nextR: number;
    let nextG: number;
    let nextB: number;

    if (isDark) {
      if (luminance < 10) {
        const gray = Math.floor(factor * 0.4 * 255);
        nextR = gray;
        nextG = gray;
        nextB = gray;
      } else {
        const nextLum = luminance + (255 - luminance) * factor * 0.4;
        const ratio = nextLum / luminance;
        nextR = Math.min(bgR * ratio, 255);
        nextG = Math.min(bgG * ratio, 255);
        nextB = Math.min(bgB * ratio, 255);
      }
    } else if (luminance > 245) {
      const gray = Math.floor(255 - factor * 0.4 * 255);
      nextR = gray;
      nextG = gray;
      nextB = gray;
    } else {
      const nextLum = luminance * (1 - factor * 0.4);
      const ratio = nextLum / luminance;
      nextR = Math.max(bgR * ratio, 0);
      nextG = Math.max(bgG * ratio, 0);
      nextB = Math.max(bgB * ratio, 0);
    }

    grays[index] = RGBA.fromInts(Math.floor(nextR), Math.floor(nextG), Math.floor(nextB));
  }

  return grays;
}

function generateMutedTextColor(bg: RGBA, isDark: boolean): RGBA {
  const bgR = bg.r * 255;
  const bgG = bg.g * 255;
  const bgB = bg.b * 255;
  const luminance = 0.299 * bgR + 0.587 * bgG + 0.114 * bgB;
  const gray = isDark
    ? luminance < 10
      ? 180
      : Math.min(Math.floor(160 + luminance * 0.3), 200)
    : luminance > 245
      ? 75
      : Math.max(Math.floor(100 - (255 - luminance) * 0.2), 60);
  return RGBA.fromInts(gray, gray, gray);
}

function generateSystem(colors: TerminalColors, mode: TuiThemeMode): ThemeJson {
  const backgroundHex = systemBackgroundHex(colors);
  const foregroundHex = colors.defaultForeground ?? colors.palette[7] ?? null;
  if (!backgroundHex || !foregroundHex) {
    throw new Error("Terminal palette is incomplete");
  }

  const bg = RGBA.fromHex(backgroundHex);
  const fg = RGBA.fromHex(foregroundHex);
  const transparent = RGBA.fromValues(bg.r, bg.g, bg.b, 0);
  const isDark = mode === "dark";
  const grays = generateGrayScale(bg, isDark);
  const textMuted = generateMutedTextColor(bg, isDark);
  const gray = (index: number) => grays[index] ?? bg;
  const colorAt = (index: number) => {
    const value = colors.palette[index];
    return value ? RGBA.fromHex(value) : ansiToRgba(index);
  };

  const ansi = {
    red: colorAt(1),
    green: colorAt(2),
    yellow: colorAt(3),
    blue: colorAt(4),
    magenta: colorAt(5),
    cyan: colorAt(6),
    redBright: colorAt(9),
    greenBright: colorAt(10),
  };

  const diffAlpha = isDark ? 0.22 : 0.14;
  return {
    theme: {
      primary: ansi.cyan,
      secondary: ansi.magenta,
      accent: ansi.cyan,
      error: ansi.red,
      warning: ansi.yellow,
      success: ansi.green,
      info: ansi.cyan,
      text: fg,
      textMuted,
      selectedListItemText: bg,
      background: transparent,
      backgroundPanel: gray(2),
      backgroundElement: gray(3),
      backgroundMenu: gray(3),
      borderSubtle: gray(6),
      border: gray(7),
      borderActive: gray(8),
      diffHighlightAdded: ansi.greenBright,
      diffHighlightRemoved: ansi.redBright,
      diffAddedBg: tint(bg, ansi.green, diffAlpha),
      diffRemovedBg: tint(bg, ansi.red, diffAlpha),
      diffAddedLineNumberBg: tint(gray(3), ansi.green, diffAlpha),
      diffRemovedLineNumberBg: tint(gray(3), ansi.red, diffAlpha),
    },
  };
}

export function resolveTerminalThemeMode(
  colors: TerminalColors | null | undefined,
): TuiThemeMode | null {
  if (!hasUsableTerminalColors(colors)) return null;
  const backgroundHex = systemBackgroundHex(colors);
  if (!backgroundHex) return null;
  return luminanceFromHex(backgroundHex) > 0.5 ? "light" : "dark";
}

export async function detectTerminalTheme(
  stdin: NodeJS.ReadStream = process.stdin,
  stdout: NodeJS.WriteStream = process.stdout,
): Promise<TuiDetectedTerminalTheme | null> {
  if (!stdin.isTTY) return null;
  const detector = createTerminalPalette(stdin, stdout);
  try {
    const colors = await detector.detect({ size: 16, timeout: 1_000 });
    const mode = resolveTerminalThemeMode(colors);
    if (!mode) return null;
    return { colors, mode };
  } catch {
    return null;
  } finally {
    detector.cleanup();
  }
}

function createSystemTrueTheme(colors: TerminalColors, mode: TuiThemeMode): TuiTheme | null {
  const backgroundHex = systemBackgroundHex(colors);
  if (!backgroundHex) return null;

  const resolved = resolveSystemTheme(generateSystem(colors, mode), mode);
  const solidBackground = RGBA.fromHex(backgroundHex);
  const isDark = mode === "dark";
  const toneAlpha = isDark ? 0.18 : 0.12;
  const selectedText = selectedForeground(resolved, resolved.primary);

  return {
    id: "system-true",
    mode,
    palette: {
      canvas: solidBackground,
      sidebar: resolved.backgroundPanel,
      main: solidBackground,
      surface: resolved.backgroundPanel,
      surfaceAlt: resolved.backgroundElement,
      input: resolved.backgroundElement,
      surfaceUser: resolved.backgroundPanel,
      surfacePlan: tint(resolved.backgroundPanel, resolved.secondary, isDark ? 0.14 : 0.1),
      surfaceWarn: tint(resolved.backgroundPanel, resolved.warning, isDark ? 0.16 : 0.1),
      surfaceInfo: tint(resolved.backgroundPanel, resolved.info, isDark ? 0.14 : 0.1),
      footer: solidBackground,
      diff: resolved.backgroundPanel,
      popup: resolved.backgroundMenu,
      scrim: isDark ? "#00000099" : "#00000022",
      border: resolved.border,
      divider: resolved.borderSubtle,
      control: "transparent",
      controlHover: resolved.backgroundElement,
      controlActive: resolved.backgroundElement,
      controlActiveStrong: resolved.backgroundMenu,
      controlInset: resolved.backgroundPanel,
      controlInsetHover: resolved.backgroundElement,
      composerPanel: resolved.backgroundElement,
      composerBorder: resolved.primary,
      composerBorderMuted: resolved.borderSubtle,
      composerSend: resolved.primary,
      composerSendHover: resolved.accent,
      composerStop: resolved.error,
      composerStopHover: resolved.diffHighlightRemoved,
      accent: resolved.accent,
      cursor: resolved.text,
      selection: resolved.primary,
      selectionActive: resolved.accent,
      text: resolved.text,
      muted: resolved.textMuted,
      subtle: resolved.borderActive,
      success: resolved.success,
      info: resolved.info,
      warning: resolved.warning,
      claude: resolved.secondary,
      macRed: "#ff5f57",
      macYellow: "#febc2e",
      macGreen: "#28c840",
    },
    attachmentPillTones: [
      {
        backgroundColor: tint(resolved.backgroundElement, resolved.primary, toneAlpha),
        textColor: resolved.primary,
      },
      {
        backgroundColor: tint(resolved.backgroundElement, resolved.secondary, toneAlpha),
        textColor: resolved.secondary,
      },
      {
        backgroundColor: tint(resolved.backgroundElement, resolved.warning, toneAlpha),
        textColor: resolved.warning,
      },
      {
        backgroundColor: tint(resolved.backgroundElement, resolved.error, toneAlpha),
        textColor: resolved.error,
      },
      {
        backgroundColor: tint(resolved.backgroundElement, resolved.success, toneAlpha),
        textColor: resolved.success,
      },
      {
        backgroundColor: tint(resolved.backgroundElement, resolved.info, toneAlpha),
        textColor: resolved.info,
      },
    ],
    codeBlock: {
      background: resolved.backgroundElement,
      language: resolved.textMuted,
      copyIcon: resolved.textMuted,
    },
    status: {
      awaitingInput: resolved.primary,
      working: resolved.info,
      planReady: resolved.secondary,
      pulse: resolved.accent,
    },
    diffViewer: {
      addedBg: resolved.diffAddedLineNumberBg,
      removedBg: resolved.diffRemovedLineNumberBg,
      addedContentBg: resolved.diffAddedBg,
      removedContentBg: resolved.diffRemovedBg,
      addedSignColor: resolved.diffHighlightAdded,
      removedSignColor: resolved.diffHighlightRemoved,
    },
    colors: {
      workEntryErrorAccent: resolved.diffHighlightRemoved,
      destructiveIcon: resolved.error,
      controlKnob: selectedText,
      primaryButtonText: selectedText,
      sendDotIdle: resolved.textMuted,
      sendDotActive: selectedText,
      selectedText,
    },
  };
}

function terminalColorsSignature(colors: TerminalColors | null | undefined): string {
  if (!hasUsableTerminalColors(colors)) return "none";
  return [
    colors.defaultBackground ?? "",
    colors.defaultForeground ?? "",
    ...colors.palette.map((value) => value ?? ""),
  ].join("|");
}

export function resolveTuiThemeMode(
  theme: AppTheme | undefined,
  systemMode: TuiThemeMode | null = null,
): TuiThemeMode {
  if (theme === "light") return "light";
  if (theme === "dark") return "dark";
  return systemMode ?? "dark";
}

const THEME_CACHE = new Map<string, TuiTheme>([
  [`${DEFAULT_TUI_THEME_ID}:dark`, DEFAULT_DARK_THEME],
  [`${DEFAULT_TUI_THEME_ID}:light`, DEFAULT_LIGHT_THEME],
]);

export function resolveTuiTheme(
  theme: AppTheme | undefined,
  themeId: string | null | undefined = DEFAULT_TUI_THEME_ID,
  options: ResolveTuiThemeOptions = {},
): TuiTheme {
  const resolvedThemeId = isTuiThemeId(themeId) ? themeId : DEFAULT_TUI_THEME_ID;
  const mode = resolveTuiThemeMode(theme, options.systemMode ?? null);
  const cacheKey =
    resolvedThemeId === "system-true"
      ? `${resolvedThemeId}:${mode}:${terminalColorsSignature(options.terminalColors)}`
      : `${resolvedThemeId}:${mode}`;
  const cached = THEME_CACHE.get(cacheKey);
  if (cached) {
    return cached;
  }

  if (resolvedThemeId === "system-true") {
    if (!hasUsableTerminalColors(options.terminalColors)) {
      return defaultThemeForMode(mode);
    }
    const resolved = createSystemTrueTheme(options.terminalColors, mode) ?? defaultThemeForMode(mode);
    THEME_CACHE.set(cacheKey, resolved);
    return resolved;
  }

  return defaultThemeForMode(mode);
}

export function colorToHex(color: TuiColor): string {
  return color instanceof RGBA ? rgbToHex(color) : color;
}
