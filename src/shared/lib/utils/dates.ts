export const getThreeDays = (): Date[] => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  return [today, yesterday, twoDaysAgo];
};

export const getFormattedDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  });
};
