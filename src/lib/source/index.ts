export type { TOCItemType } from './utils';
export type { PageData, Page, NavItem } from './docs';
export type { BlogPostData, BlogPost } from './blogs';
export type { MdxPageData, MdxPage } from './pages';

export { docs } from './docs';
export { blogs } from './blogs';
export { pages } from './pages';

import { docs } from './docs';
import { blogs } from './blogs';
import { pages } from './pages';

export const source = { docs, blogs, pages };
