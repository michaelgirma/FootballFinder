import React from 'react';
import getAllEvents from '@/services/getAllEvents';
import Hero from './components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Game Time',
  description: 'Football Games',
};

export default async function Events() {
  
  const events = await getAllEvents();

  return (
    <html>
      <body>
        <Hero events={events} />
      </body>
    </html>
  )
}