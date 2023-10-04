import React from 'react';
import getEventByLocation from '@/services/getEventByLocation';
import Hero from './components/Hero';
import { Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Your Fav Location',
  description: 'Football Games',
};

export default async function Event({ params }: { params: { location: string } }) {

  const events = await getEventByLocation(params.location);

  return (
    <html>
      <body>
        <Hero events={events} />
      </body>
    </html>
  )
}