export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

export const renderDates = (start: string, end?: string | null) =>
  `${formatDate(start)} - ${end ? formatDate(end) : 'Present'}`;
