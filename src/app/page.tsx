import { resume } from '@/lib/constants';
import { PDFDownloadLink, ResumeDocument } from '@/components/pdf';
import { Button } from '@/components/common/button';

export default function Home() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <main className='row-start-2 flex flex-col items-center gap-[32px] sm:items-start'>
        <Button asChild>
          <PDFDownloadLink document={<ResumeDocument resume={resume} />}>
            Download Resume
          </PDFDownloadLink>
        </Button>
      </main>
    </div>
  );
}
