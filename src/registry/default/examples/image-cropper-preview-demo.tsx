'use client';

import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  ImageCropper,
  ImageCropperArea,
  ImageCropperImage,
  type Area,
} from '@/registry/default/ui/image-cropper';

const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

const getCroppedImg = async (
  imageSrc: string,
  pixelCrop: Area,
  outputWidth: number = pixelCrop.width,
  outputHeight: number = pixelCrop.height,
): Promise<Blob | null> => {
  try {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return null;
    }

    canvas.width = outputWidth;
    canvas.height = outputHeight;

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      outputWidth,
      outputHeight,
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/jpeg');
    });
  } catch (error) {
    console.error('Error in getCroppedImg:', error);
    return null;
  }
};

const ORIGINAL_IMAGE_URL =
  'https://images.unsplash.com/photo-1747134392453-751dfaed2aa3';

export default function Component() {
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);

  const handleCropChange = useCallback((pixels: Area | null) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const handleCrop = async () => {
    if (!croppedAreaPixels) {
      console.error('No crop area selected.');
      return;
    }

    try {
      const croppedBlob = await getCroppedImg(
        ORIGINAL_IMAGE_URL,
        croppedAreaPixels,
      );
      if (!croppedBlob) {
        throw new Error('Failed to generate cropped image blob.');
      }

      const newCroppedUrl = URL.createObjectURL(croppedBlob);

      if (croppedImageUrl) {
        URL.revokeObjectURL(croppedImageUrl);
      }

      setCroppedImageUrl(newCroppedUrl);
    } catch (error) {
      console.error('Error during cropping:', error);
      if (croppedImageUrl) {
        URL.revokeObjectURL(croppedImageUrl);
      }
      setCroppedImageUrl(null);
    }
  };

  useEffect(() => {
    const currentUrl = croppedImageUrl;
    return () => {
      if (currentUrl && currentUrl.startsWith('blob:')) {
        URL.revokeObjectURL(currentUrl);
        console.log('Revoked URL:', currentUrl);
      }
    };
  }, [croppedImageUrl]);

  return (
    <div className='flex w-full items-center gap-4'>
      <ImageCropper
        className='h-64 rounded-lg md:flex-1'
        image={ORIGINAL_IMAGE_URL}
        onCropChange={handleCropChange}
      >
        <ImageCropperImage />
        <ImageCropperArea />
      </ImageCropper>
      <div className='flex w-64 flex-col gap-4'>
        <Button onClick={handleCrop} disabled={!croppedAreaPixels}>
          Crop preview
        </Button>
        <div className='aspect-square w-full shrink-0 overflow-hidden rounded-lg border'>
          {croppedImageUrl ? (
            <img
              src={croppedImageUrl}
              alt='Cropped result'
              className='h-full w-full object-cover'
            />
          ) : (
            <div className='bg-muted text-muted-foreground/80 flex h-full w-full items-center justify-center p-2 text-center text-xs'>
              Image preview
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
