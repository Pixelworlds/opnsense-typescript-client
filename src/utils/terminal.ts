const colors = {
  red: (str: string): string => `\x1b[31m${str}\x1b[0m`,
  green: (str: string): string => `\x1b[32m${str}\x1b[0m`,
  yellow: (str: string): string => `\x1b[33m${str}\x1b[0m`,
  blue: (str: string): string => `\x1b[34m${str}\x1b[0m`,
  magenta: (str: string): string => `\x1b[35m${str}\x1b[0m`,
  cyan: (str: string): string => `\x1b[36m${str}\x1b[0m`,
  orange: (str: string): string => `\x1b[38;5;208m${str}\x1b[0m`,
  purple: (str: string): string => `\x1b[38;5;129m${str}\x1b[0m`,
  pink: (str: string): string => `\x1b[38;5;213m${str}\x1b[0m`,
  teal: (str: string): string => `\x1b[38;5;45m${str}\x1b[0m`,
  gold: (str: string): string => `\x1b[38;5;220m${str}\x1b[0m`,
  gray: (str: string): string => `\x1b[38;5;245m${str}\x1b[0m`,
};

const styles = {
  bold: (str: string): string => `\x1b[1m${str}\x1b[0m`,
  dim: (str: string): string => `\x1b[2m${str}\x1b[0m`,
  underline: (str: string): string => `\x1b[4m${str}\x1b[0m`,
  blink: (str: string): string => `\x1b[5m${str}\x1b[0m`,
  hidden: (str: string): string => `\x1b[8m${str}\x1b[0m`,
};

export const terminal = {
  colors,
  styles,
};
