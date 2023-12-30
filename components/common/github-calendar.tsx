'use client';
import { ThemeInput } from 'react-activity-calendar';
import Calendar from 'react-github-calendar';
import { useTheme } from 'next-themes';

const theme: ThemeInput = {
  light: ['#f9f5ff', '#d2b6fc', '#bd93f9', '#7027c9', '#4f1f84'],
  dark: ['#f9f5ff', '#d2b6fc', '#bd93f9', '#7027c9', '#4f1f84'],
};

export const GithubCalendar = () => {
  const { theme: colorScheme } = useTheme();
  return (
    <Calendar
      username='kelvin-mai'
      colorScheme={colorScheme as 'light' | 'dark'}
      theme={theme}
      eventHandlers={
        {
          // onMouseEnter: (e) => {
          //   return console.log;
          // },
        }
      }
    />
  );
};
