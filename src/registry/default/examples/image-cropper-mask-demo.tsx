import {
  ImageCropper,
  ImageCropperArea,
  ImageCropperImage,
} from '@/registry/default/ui/image-cropper';

export default function Component() {
  return (
    <ImageCropper
      className='aspect-square size-80 rounded-full'
      cropPadding={0}
      minZoom={2}
      image='https://images.unsplash.com/photo-1747645294647-512969fd2d23?'
    >
      <ImageCropperImage />
      <ImageCropperArea className='rounded-full border-4 border-blue-500/70' />
    </ImageCropper>
  );
}
