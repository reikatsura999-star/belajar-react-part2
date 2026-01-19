import { useState,useEffect } from "react";
function SimulasiFetch({idPlayer}){

    const [player, setPlayer] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(data => {
            setPlayer(data)
            setLoading(false)
        })
        .catch(err => {
            console.log('eror: ',err.message);
            setLoading(false)
        })
    },[idPlayer])

    if(loading) return <p>lagi ngambil data palyer...</p>
    if(!player) return <p>playernya gak ada bro!</p>

    return(
        <>
            <div>
                <h2>Profile Palyer</h2>
                <p>Name : {player.name}</p>
                <p>Username : {player.username}</p>
                <p>Email : {player.email}</p>
                <p>Alamt : {player.address.city}</p>
            </div>
        </>
    )
}

export default SimulasiFetch;