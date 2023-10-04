export default async function getAllEvents() {
    const allEvents = await fetch('https://football-finder-backend.vercel.app').then((res) => res.json())
    return allEvents;
}