'use client';

import * as React from 'react';

import { easings } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
} from '../ui';
import { DynamicCode } from '../mdx/code';

type AnimationType = 'translate' | 'scale' | 'rotate';
type Easing = (typeof easings)[number];

const useAnimationKey = (
  duration: number,
  pauseDuration: number,
  animationType: AnimationType,
) => {
  const [key, setKey] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(
      () => {
        setKey((prev) => prev + 1);
      },
      (duration + pauseDuration) * 1000,
    );
    return () => clearInterval(timer);
  }, [duration, pauseDuration, animationType]);
  return key;
};

type EasingSVGProps = {
  easing: Easing;
  duration: number;
  animationType: AnimationType;
  pauseDuration: number;
};

const EasingSVG: React.FC<EasingSVGProps> = ({
  easing,
  duration,
  animationType,
  pauseDuration,
}) => {
  const config = {
    width: 140,
    height: 140,
    padding: 20,
    plotSize: 100,
  };
  const key = useAnimationKey(duration, pauseDuration, animationType);
  const getAnimationStyle = () => {
    if (!easing.points.length || duration <= 0) return {};
    return {
      ['--bezier-coordinates' as string]: easing.points.join(','),
      ['--animation-duration' as string]: `${duration}s`,
      ['--total-duration' as string]: `${duration + pauseDuration}s`,
      animationName: 'moveCircleVertically',
      animationDuration: `${duration}s`,
      animationTimingFunction: `cubic-bezier(${easing.points.join(',')})`,
      animationIterationCount: '1',
      animationFillMode: 'forwards',
      animationDelay: '0s',
    };
  };
  return (
    <svg
      width={config.width}
      height={config.height}
      viewBox={`0 0 ${config.width} ${config.height}`}
      className='w-full'
    >
      {/* Grid */}
      <rect
        x={config.padding}
        y={config.padding}
        width={config.plotSize}
        height={config.plotSize}
        className='stroke-muted-foreground/20 fill-none'
        strokeWidth='1'
      />

      {/* Diagonal line */}
      <line
        x1={config.padding}
        y1={config.height - config.padding}
        x2={config.width - config.padding}
        y2={config.padding}
        className='stroke-muted-foreground/20'
        strokeWidth='1'
      />

      {/* Bezier curve */}
      <path
        d={`M${config.padding},${config.height - config.padding} C${
          config.padding + easing.points[0]! * config.plotSize
        },${
          config.height - config.padding - easing.points[1]! * config.plotSize
        } ${config.padding + easing.points[2]! * config.plotSize},${
          config.height - config.padding - easing.points[3]! * config.plotSize
        } ${config.padding + config.plotSize},${
          config.height - config.padding - config.plotSize
        }`}
        fill='none'
        className='stroke-muted-foreground'
        strokeWidth='2'
      />

      {/* Start point */}
      <circle
        cx={config.padding}
        cy={config.height - config.padding}
        r='4'
        className='fill-muted-foreground'
      />

      {/* End point */}
      <circle
        cx={config.width - config.padding}
        cy={config.padding}
        r='4'
        className='fill-muted-foreground'
      />

      {/* Animated circle */}
      <g
        className='animated-circle'
        key={`${key}-${duration}-${pauseDuration}-${animationType}`}
        style={getAnimationStyle()}
      >
        <circle
          cx={config.padding}
          cy={config.height - config.padding}
          r='4'
          className='fill-primary'
          style={{
            animationName: 'moveCircleHorizontally',
            animationDuration: `${duration}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: '1',
            animationFillMode: 'forwards',
            animationDelay: '0s',
          }}
        />
      </g>
      <style jsx>{`
        @keyframes moveCircleHorizontally {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(${config.plotSize}px);
          }
        }
        @keyframes moveCircleVertically {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-${config.plotSize}px);
          }
        }
      `}</style>
    </svg>
  );
};

type AnimatedSquareProps = {
  easing: Easing;
  duration: number;
  animationType: AnimationType;
  pauseDuration: number;
};

const AnimatedSquare: React.FC<AnimatedSquareProps> = ({
  easing,
  duration,
  animationType,
  pauseDuration,
}) => {
  const key = useAnimationKey(duration, pauseDuration, animationType);
  const getAnimationStyle = () => {
    const baseStyle = {
      ['--bezier-coordinates' as string]: easing.points.join(','),
      ['--animation-duration' as string]: `${duration}s`,
      ['--total-duration' as string]: `${duration + pauseDuration}s`,
    };

    const animationName = {
      translate: 'translateSquare',
      scale: 'scaleSquare',
      rotate: 'rotateSquare',
    }[animationType];

    return {
      ...baseStyle,
      animationName,
      animationDuration: `${duration}s`,
      animationTimingFunction: `cubic-bezier(${easing.points.join(',')})`,
      animationIterationCount: '1',
      animationFillMode: 'forwards',
      animationDelay: '0s',
    };
  };
  const animationStyle = getAnimationStyle();
  return (
    <div
      key={`${key}-${duration}-${pauseDuration}-${animationType}`}
      className={cn(
        'pointer-events-none flex w-full items-center',
        animationType === 'translate' ? 'justify-start' : 'justify-center',
      )}
      style={animationType === 'translate' ? animationStyle : undefined}
    >
      <div
        className='animated-square from-primary to-primary/80 shadow-primary/10 h-10 w-10 rounded-md bg-linear-to-tr shadow-lg'
        style={animationType !== 'translate' ? animationStyle : undefined}
      />
      <style jsx>{`
        @keyframes translateSquare {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(100% - 2.5rem));
          }
        }
        @keyframes scaleSquare {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes rotateSquare {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export const Easings: React.FC = () => {
  const [duration, setDuration] = React.useState(1000);
  const [tempDuration, setTempDuration] = React.useState(1000);
  const pauseDuration = 1000;
  const [animationType, setAnimationType] =
    React.useState<AnimationType>('translate');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 5000) {
      setTempDuration(value);
    }
  };

  const handleInputBlur = () => {
    if (tempDuration >= 0 && tempDuration <= 5000) {
      setDuration(tempDuration);
    } else {
      setTempDuration(duration);
    }
  };

  return (
    <div className='space-y-6 py-4'>
      <div className='flex flex-col justify-between gap-4 md:flex-row md:items-center'>
        <div className='flex flex-col gap-2'>
          <Label>Duration</Label>
          <div className='flex items-center gap-4'>
            <Slider
              value={[tempDuration]}
              min={0}
              max={5000}
              step={1}
              onValueChange={(value: [number]) => setTempDuration(value[0])}
              onValueCommit={(value: [number]) => setDuration(value[0])}
              className='w-[180px]'
            />
            <Input
              type='number'
              value={tempDuration}
              min={0}
              max={5000}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className='w-[90px]'
            />
            <span className='text-muted-foreground text-sm'>ms</span>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Label>Animation Type</Label>
          <Select
            value={animationType}
            onValueChange={(value: AnimationType) => setAnimationType(value)}
          >
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select animation type' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='translate'>Translate</SelectItem>
              <SelectItem value='scale'>Scale</SelectItem>
              <SelectItem value='rotate'>Rotate</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {easings.map((easing) => (
          <div
            key={easing.name}
            className='group bg-muted/65 relative flex flex-col items-center justify-center rounded-lg py-4'
          >
            <div className='text-center text-sm font-medium'>{easing.name}</div>
            <div className='flex w-full grow flex-col items-start justify-center px-8'>
              <EasingSVG
                easing={easing}
                duration={duration / 1000}
                pauseDuration={pauseDuration / 1000}
                animationType={animationType}
                key={`svg-${easing.name}`}
              />
              <AnimatedSquare
                easing={easing}
                duration={duration / 1000}
                pauseDuration={pauseDuration / 1000}
                animationType={animationType}
                key={`square-${easing.name}`}
              />
            </div>
            <DynamicCode
              className='mx-8'
              codeblock={{
                lang: 'css',
                meta: 'styles.css',
                value: `transition-timing-function: cubic-bezier(${easing.points.join(
                  ', ',
                )});`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
