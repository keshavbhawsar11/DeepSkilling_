function ListofPlayers({ players }) {
    return (
        <>
            {players.map((item) => (
                <li key={item.name}>
                    Mr. {item.name} <span>{item.score}</span>
                </li>
            ))}
        </>
    );
}

export default ListofPlayers;