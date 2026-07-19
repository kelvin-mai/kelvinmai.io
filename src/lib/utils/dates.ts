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

export const mergeDateRanges = (dateRanges: DateRange[]): DateRange => {
  const startDate = dateRanges.reduce(
    (earliest, r) => (r.startDate < earliest ? r.startDate : earliest),
    dateRanges[0]?.startDate ?? '',
  );
  const endDate = dateRanges.some((r) => !r.endDate)
    ? null
    : dateRanges.reduce<string | null>(
        (latest, r) =>
          !latest || (r.endDate ?? '') > latest ? (r.endDate ?? null) : latest,
        null,
      );
  return { startDate, endDate };
};
