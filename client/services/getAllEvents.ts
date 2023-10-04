export default async function getAllEvents() {
    const allEvents = await fetch('https://football-finder-backend.vercel.app/events').then((res) => res.json())
    return allEvents;
}