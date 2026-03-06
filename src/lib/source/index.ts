export type { TOCItemType } from './utils';
export type { PageData, Page, NavItem } from './docs';
export type { BlogPostData, BlogPost } from './blogs';

export { docs } from './docs';
export { blogs } from './blogs';

import { docs } from './docs';
import { blogs } from './blogs';

export const source = { docs, blogs };
