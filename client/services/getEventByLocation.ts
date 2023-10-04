export default async function getEventByLocation(location: string) {
    const event = await fetch(`https://football-finder-backend.vercel.app/event/${location}`).then((res) => res.json())
    return event;
} 