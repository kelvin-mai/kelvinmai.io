'use client';

import * as React from 'react';
import * as culori from 'culori';
import { HexColorPicker } from 'react-colorful';
import { Minus, Paintbrush, Plus } from 'lucide-react';

import {
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Slider,
  Button,
  Input,
} from '../ui';
import { DynamicCode } from '../mdx/code';

const gradientTypes = ['linear', 'radial', 'conic'] as const;

type GradientType = (typeof gradientTypes)[number];

type ColorStop = {
  color: string;
  position: number;
};

type GradientState = {
  type: GradientType;
  angle: number;
  blur: number;
  opacity: number;
};

type GradientControlsProps = {
  state: GradientState;
  setState: React.Dispatch<React.SetStateAction<GradientState>>;
};

const GradientControls: React.FC<GradientControlsProps> = ({
  state,
  setState,
}) => {
  return (
    <div className='grow space-y-2'>
      <div className='space-y-1'>
        <Label>Gradient Type</Label>
        <Select
          value={state.type}
          onValueChange={(v: GradientType) => setState({ ...state, type: v })}
        >
          <SelectTrigger className='w-full capitalize'>
            <SelectValue placeholder='Choose a color format' />
          </SelectTrigger>
          <SelectContent>
            {gradientTypes.map((t) => (
              <SelectItem className='capitalize' key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {state.type !== 'radial' && (
        <div className='space-y-1'>
          <Label>Angle</Label>
          <div className='flex items-center gap-4'>
            <Slider
              value={[state.angle]}
              min={0}
              max={360}
              step={1}
              onValueChange={(value: [number]) =>
                setState({ ...state, angle: value[0] })
              }
            />
            <span>{state.angle}°</span>
          </div>
        </div>
      )}
      <div className='space-y-1'>
        <Label>Blur Amount</Label>
        <div className='flex items-center gap-4'>
          <Slider
            value={[state.blur]}
            min={0}
            max={100}
            step={1}
            onValueChange={(value: [number]) =>
              setState({ ...state, blur: value[0] })
            }
          />
          <span>{state.blur}px</span>
        </div>
      </div>
      <div className='space-y-1'>
        <Label>Opacity</Label>
        <div className='flex items-center gap-4'>
          <Slider
            value={[state.opacity]}
            min={0}
            max={100}
            step={1}
            onValueChange={(value: [number]) =>
              setState({ ...state, opacity: value[0] })
            }
          />
          <span>{state.opacity}%</span>
        </div>
      </div>
    </div>
  );
};

type ColorStopControlProps = {
  color: string;
  position: number;
  onRemove: () => void;
  onChange: (next: ColorStop) => void;
};

const ColorStopControl: React.FC<ColorStopControlProps> = ({
  color,
  position,
  onRemove,
  onChange,
}) => {
  return (
    <div className='flex gap-2'>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline'>
            {color ? (
              <div
                className='size-4 rounded border !bg-cover !bg-center transition-all'
                style={{ background: color }}
              />
            ) : (
              <Paintbrush className='size-4' />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <HexColorPicker
            color={color}
            onChange={(color) => onChange({ color, position })}
          />
        </PopoverContent>
      </Popover>
      <Input
        value={position}
        type='number'
        min={0}
        max={100}
        onChange={(e) =>
          onChange({ color, position: parseInt(e.target.value) })
        }
      />
      <Button variant='outline' onClick={onRemove}>
        <Minus className='size-4' />
      </Button>
    </div>
  );
};

export const GradientGenerator = () => {
  const [stops, setStops] = React.useState<ColorStop[]>([
    { color: '#ff5f6d', position: 0 },
    { color: '#ffc371', position: 100 },
  ]);
  const [state, setState] = React.useState<GradientState>({
    type: 'linear',
    angle: 90,
    blur: 10,
    opacity: 70,
  });

  const addColorStop = () => {
    const color = culori.formatHex(culori.random());
    setStops([...stops, { color, position: 50 }]);
  };

  const getBackgroundImage = () => {
    const s = stops
      .sort((a, b) => a.position - b.position)
      .map((s) => `${s.color} ${s.position}%`)
      .join(', ');
    switch (state.type) {
      case 'linear':
        return `linear-gradient(${state.angle}deg, ${s})`;
      case 'radial':
        return `radial-gradient(circle, ${s})`;
      case 'conic':
        return `conic-gradient(from ${state.angle}deg, ${s})`;
    }
  };

  const getCssStyles = () => `.custom-gradient {
  backgroundImage: ${getBackgroundImage()};
  filter: blur(${state.blur}px);
  opacity: ${state.opacity / 100};
}`;

  return (
    <div className='space-y-2 pb-4'>
      <div className='flex flex-wrap gap-2'>
        {stops.map((stop, i) => (
          <ColorStopControl
            key={i}
            {...stop}
            onRemove={() => setStops(stops.filter((_, id) => id !== i))}
            onChange={(next) =>
              setStops(stops.map((s, id) => (id === i ? next : s)))
            }
          />
        ))}
        <Button variant='outline' onClick={addColorStop}>
          <Plus className='size-4' />
        </Button>
      </div>
      <div className='flex flex-col-reverse gap-4 md:flex-row'>
        <div className='relative h-64 grow overflow-hidden rounded-lg border shadow'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: getBackgroundImage(),
              filter: `blur(${state.blur}px)`,
              opacity: state.opacity / 100,
            }}
          />
        </div>
        <GradientControls state={state} setState={setState} />
      </div>
      <DynamicCode
        className='my-0'
        codeblock={{
          lang: 'css',
          meta: 'styles.css',
          value: getCssStyles(),
        }}
      />
    </div>
  );
};
