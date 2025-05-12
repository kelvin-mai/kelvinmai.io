import { docs } from '.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/registry',
  source: docs.toFumadocsSource(),
});
