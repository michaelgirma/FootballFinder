export default async function getEventByLocation(location: string) {
    const event = await fetch(`http://localhost:3205/event/${location}`).then((res) => res.json())
    return event;
} 