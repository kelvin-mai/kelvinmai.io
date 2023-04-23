import { NextApiHandler } from 'next';
import ReactPDF from '@react-pdf/renderer';

import { Resume } from '@app/components/resume';

const handler: NextApiHandler = async (_, res) => {
  const stream = await ReactPDF.renderToStream(Resume());
  res.setHeader('Content-Type', 'application/pdf');
  stream.pipe(res);
  stream.on('end', () => {});
};

export default handler;
