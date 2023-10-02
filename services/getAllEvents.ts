export default async function getAllEvents() {
    const allEvents = await fetch('http://localhost:3205/events').then((res) => res.json())
    return allEvents;
}