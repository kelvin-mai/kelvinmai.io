export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

export type DateRange = { startDate: string; endDate?: string | null };

export const renderDates = (start: string, end?: string | null) =>
  `${formatDate(start)} - ${end ? formatDate(end) : 'Present'}`;

export const renderDateRanges = (dateRanges: DateRange[]) =>
  dateRanges.map((r) => renderDates(r.startDate, r.endDate)).join(' | ');
