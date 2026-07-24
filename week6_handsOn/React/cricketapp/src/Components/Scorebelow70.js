function Scorebelow70({ players }) {

    const players70 = players.filter(
        player => player.score <= 70
    );

    return (
        <>
            {players70.map((item) => (
                <li key={item.name}>
                    Mr. {item.name} <span>{item.score}</span>
                </li>
            ))}
        </>
    );
}

export default Scorebelow70;