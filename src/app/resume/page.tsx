import { PDFViewer, ResumeDocument } from '@/components/pdf';

export default function ResumePage() {
  return (
    <PDFViewer className='min-h-screen w-full'>
      <ResumeDocument title='old title' />
    </PDFViewer>
  );
}
