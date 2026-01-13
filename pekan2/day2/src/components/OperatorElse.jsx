function PlayerActive(){
    return(
        <>
            <h1>Saya user active</h1>
        </>
    )
}

function PlayerPasive(){
    return(
        <>
            <h1>Saya user pasive</h1>
        </>
    )
}

function Login(props){
    const islogged = props.islogged

    if(islogged){
        return <PlayerActive/>
    }
    return <PlayerPasive/>
    
}


function OperatorElse(){
    return(
        <>
            <Login islogged={false}/>
        </>
    )
}

export default OperatorElse;