import {
  ImageCropper,
  ImageCropperArea,
  ImageCropperImage,
} from '@/registry/default/ui/image-cropper';

export default function ImageCropperDemo() {
  return (
    <ImageCropper className='mt-2 h-80 rounded-lg' image='/images/me-about.jpg'>
      <ImageCropperImage />
      <ImageCropperArea />
    </ImageCropper>
  );
}
