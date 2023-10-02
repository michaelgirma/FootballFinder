export default async function getTeamByID(id: string) {
    const team = await fetch(`http://localhost:3205/team/${id}`).then((res) => res.json())
    return team;
} 