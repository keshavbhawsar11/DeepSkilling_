function ListofIndianPlayers({ IndianPlayers }) {

    return (

        <ul>

            {
                IndianPlayers.map(player => (

                    <li key={player}>
                        Mr. {player}
                    </li>

                ))
            }

        </ul>

    );
}

export default ListofIndianPlayers;