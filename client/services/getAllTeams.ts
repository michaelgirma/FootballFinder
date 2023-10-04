export default async function getAllTeams() {
    const allTeams = await fetch('https://football-finder-backend.vercel.app').then((res) => res.json())
    return allTeams;
}