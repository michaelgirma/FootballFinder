export default async function getTeamByID(id: string) {
    const team = await fetch(`https://football-finder-backend.vercel.app/team/${id}`).then((res) => res.json())
    return team;
} 