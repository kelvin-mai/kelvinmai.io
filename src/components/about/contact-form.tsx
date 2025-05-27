'use client';

import * as React from 'react';
import { CheckCircle, Mail, MapPin } from 'lucide-react';

import { Meteors } from '@/components/common';
import { Button, Input, Label, Textarea } from '@/components/ui';
import { sendEmailAction } from '@/actions/email';

export const ContactForm = () => {
  const [state, action] = React.useActionState(sendEmailAction, {
    submitted: false,
  });
  return (
    <div className='grid w-full overflow-hidden rounded-lg bg-gray-900 text-white md:grid-cols-2'>
      <div className='relative flex flex-col space-y-4 p-8'>
        <h2 className='text-3xl font-bold'>Get in Touch</h2>
        <p>
          I&apos;d love to hear from you. Contact me and I will get back to you
          as soon as possible.
        </p>
        <div className='flex flex-col gap-2 text-sm'>
          <a
            href='mailto:me@kelvinmai.io'
            className='inline-flex items-center gap-2 underline underline-offset-4'
          >
            <Mail className='size-4' /> me@kelvinmai.io
          </a>
          <p className='inline-flex items-center gap-2'>
            <MapPin className='size-4' /> Las Vegas, Nevada, United States
          </p>
        </div>
        <Meteors />
      </div>
      <div className='hidden bg-slate-50 p-8 md:block'>
        {state.submitted ? (
          <div className='space-y-4 text-center text-slate-900'>
            <h2 className='text-3xl font-bold'>Thank you</h2>
            <p className='text-lg'>
              Your message has been sent and I will do my best to respond as
              soon as possbile.
            </p>
            <div className='inline-flex justify-center'>
              <CheckCircle className='size-8 text-teal-600' />
            </div>
          </div>
        ) : (
          <form
            className='flex flex-col space-y-4 text-slate-900'
            action={action}
          >
            <h2 className='text-center text-3xl font-bold'>Contact Form</h2>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                className='border border-slate-200'
                placeholder='Enter your email'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                name='name'
                placeholder='Enter your name'
                className='border border-slate-200'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='message'>Message</Label>
              <Textarea
                id='message'
                name='message'
                placeholder='Enter your message'
                className='border border-slate-200'
              />
            </div>
            <Button variant='home' className='text-slate-50'>
              <Mail className='size-4' />
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
