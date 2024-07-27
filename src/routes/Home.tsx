import { useState } from "react"
import { UserProps } from "../types/user";

// imports components 
import Search from "../components/Search"
import User from "../components/User"
import Error from "../components/Error";


const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false);

    const loadUser = async (userName: string) => {

        setError(false); // zerando error se procurar outro user após o error
        setUser(null); // zerando user 

        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json();

        if (res.status === 404) {
            setError(true);
            return;
        }

        const { avatar_url, login, location, followers, following } = data  //destructing de objeto do type vindo dos dados

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        };

        setUser(userData)
    };

    return (
        <div>
            <Search loadUser={loadUser} />
            {user && <User {...user} />}
            {error && <Error />}

        </div>
    )
}

export default Home