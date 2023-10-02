import React from 'react';
import getTeamByID from '@/services/getTeamByID';
import Hero from './components/Hero';

export default async function Team({ params }: { params: { id: string } }) {

  const team = await getTeamByID(params.id);

  return (
    <html>
      <body>
        <Hero team={team} />
      </body>
    </html>
  )
}