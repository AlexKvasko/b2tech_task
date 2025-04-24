export const TabNames = {
  UPCOMING: "Upcoming",
} as const;
export type TabName = typeof TabNames[keyof typeof TabNames];