const dataBase = () => {
     const List = [
        { id: 1, name: 'yanto' },
        { id: 2, name: 'yanti' },
        { id: 3, name: 'rio' },
        { id: 4, name: 'tejo' }
    ]

    return(
        <>
            <MapList List={List} />
        </>
    )
}

function MapList({List}) {
    

    return (
        <>
            <div className="m-5">
                <h1>Daftar Name</h1>
                <ul className=" list-disc list-inside space-y-1">
                    {List.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}


export default dataBase;