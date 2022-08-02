export const getRecentlyPlayed = async (accessToken, data)=>{
    let response = await fetch('https://api.spotify.com/v1/me/player/recently-played',{
        method: 'GET',
        headers:{
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    })
    return response;
}
