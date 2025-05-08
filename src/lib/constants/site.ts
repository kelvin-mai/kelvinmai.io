import { getBaseUrl } from '../utils';
import { resume } from './resume';

export const siteConfig = {
  name: resume.basics.name,
  url: getBaseUrl(),
  description: resume.basics.summary,
};

export const SOURCE_CODE_GITHUB_URL =
  'https://github.com/kelvin-mai/kelvinmai.io';

export const UTM_PARAMS = {
  utm_source: 'kelvinmai.io',
  utm_medium: 'portfolio_website',
  utm_campaign: 'referral',
};
