
export type ThemeName = 'light' | 'dark' | 'dracula' | 'catppuccin' | 'vesper'

export interface Theme {
  name: ThemeName
  background: string
  text: string
  primary: string
  secondary: string
  accent: string
}

export const themes: Record<ThemeName, Theme> = {
  light: {
    name: 'light',
    background: 'bg-white',
    text: 'text-gray-900',
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    accent: 'bg-blue-100',
  },
  dark: {
    name: 'dark',
    background: 'bg-gray-900',
    text: 'text-gray-100',
    primary: 'text-blue-400',
    secondary: 'text-gray-400',
    accent: 'bg-blue-900',
  },
  dracula: {
    name: 'dracula',
    background: 'bg-[#282a36]',
    text: 'text-[#f8f8f2]',
    primary: 'text-[#ff79c6]',
    secondary: 'text-[#6272a4]',
    accent: 'bg-[#44475a]',
  },
  catppuccin: {
    name: 'catppuccin',
    background: 'bg-[#1e1e2e]',
    text: 'text-[#d9e0ee]',
    primary: 'text-[#f5c2e7]',
    secondary: 'text-[#9399b2]',
    accent: 'bg-[#302d41]',
  },
  vesper: {
    name: 'vesper',
    background: 'bg-[#101010]',
    text: 'text-[#e0e0e0]',
    primary: 'text-[#ff3d3d]',
    secondary: 'text-[#808080]',
    accent: 'bg-[#1a1a1a]',
  },
}

export type ThemePreferences = {
  theme: ThemeName
  accentColor: string
}

