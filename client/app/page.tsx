import React from 'react';
import { Metadata } from 'next';
import getAllTeams from '@/services/getAllTeams';
import Hero from './components/Hero';

export const metadata: Metadata = {
  title: 'Explore Teams',
  description: 'Football Games',
};

export default async function Home() {

  const teams = await getAllTeams();

  return (
    <html>
      <body>
        <Hero teams={teams} />
      </body>
    </html>
  )  
}