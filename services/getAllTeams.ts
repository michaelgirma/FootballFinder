export default async function getAllTeams() {
    const allTeams = await fetch('http://localhost:3205/teams').then((res) => res.json())
    return allTeams;
}