import { useEffect, useState } from "react";
import User from "../Components/User";

export default function UsingFetch() {
    const [userData, setUserData] = useState({loading: true, data: []})

    useEffect(() => {
        let controller = new AbortController();  // Signal, ki ga bomo uporabili za preklic fetch klica v izvajanju
        let signal = controller.signal;
        
        fetch('https://randomuser.me/api/', { signal }) // Glej https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
            .then(response => response.json())
            .then(json => setUserData({ loading: false, data: json.results }));
        
        return () => controller.abort();
        /* Kot že prej omenjemo, ko se komponenta skrije/odstrani počistimo stvari
           V tem primeru prekličemo, trenutno še aktivne requeste.
        */
    }, []);

    // TODO: Naloga: Trenutno nam klic vrne samo en rezultat. Naredi, da se fetch kliče večkrat npr. 5x, shrani v state in izpiše 
    // Namig: Fetch je promise, lahko si pomagaš s Promise.all()


    const { loading, data } = userData;
    return (
        <div className="mt-10">
            <h1 className="text-3xl text-left font-medium">
                3. Fetch
            </h1>
            <p>
                (1-lesson/UsingFetch.jsx)
            </p>
            <div>
                {loading ? 'loading ...' : 
                    data.map((obj, idx) => <User key={idx} name={obj.name} image={obj.picture} />)}
                {/* Za iteriranje skozi array uporabljamo .map funkcijo, premapiramo json oz. objekt v komponento
                    To nam vrne [<User/>, <User/>, <User/>], ki jih React zaporedno izpiše.
                    Ko uporabljamo map, moramo zmeraj elementu, ki sledi dodati property key.
                */}
            </div>
        </div>
    )
};