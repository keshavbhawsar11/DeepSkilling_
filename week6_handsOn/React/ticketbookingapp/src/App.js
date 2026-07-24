import { useState } from "react";

import Greeting from "./Components/Greeting";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    let button;

    if (isLoggedIn) {

        button = (
            <LogoutButton
                onClick={handleLogout}
            />
        );

    } else {

        button = (
            <LoginButton
                onClick={handleLogin}
            />
        );

    }

    return (

        <div style={{ margin: "40px" }}>

            <Greeting
                isLoggedIn={isLoggedIn}
            />

            <br />

            {button}

        </div>

    );

}

export default App;