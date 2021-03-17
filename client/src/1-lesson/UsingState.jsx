import { useState } from "react";

export default function UsingState(props) {
    // Stanje je "immutable", nespremenljiva vrednost
    // V tem primeru je stanje counter s privzeto vrednostjo 1
    // privzeto vrednost nastavimo tako da jo podamo kot prvi parameter v useState()
    // setCounter je funkcija, s katero lahko nastavljamo vrednost counter
    // Ko nastavimo stanje, se celotna komponenta reloada.
    // To pomeni da se ponovno reloadajo tudi njeni otroci
    const [counter, setCounter] = useState(1);

    /* V return stavek pišemo JSX sintakso
       JSX sintaksa je podobna HTML-ju, le da uporabljamo "camelCase" pri atributih značk
       Primer:
       HTML: <div class="container"></div>
       JSX: <div className="container"></div>
    */
    return (
            <div>
                <h1 className="text-3xl text-left font-medium">
                    1. Stanja
                </h1>
                <p>(1-lesson/UsingState.jsx)</p>
                <h2 className="text-2xl m-4">Števec: {counter}</h2>
                {/* na klik povečamo stanje za ena. Možna sta dva načina:
                    - setCounter(counter + 1);
                    - setCounter(prevState => prevState + 1) oz. setCounter(prevState => ++prevState)
                    Ker je nastavljanje stanja asinhrona operacija, uporabimo drug način.
                    Če bi napisali na prvi način in hitro klikali, bi lahko incrementali prejšnjo vrednost.
                */}
                <button
                    className="px-6 py-3 bg-blue-600 text-white rounded"
                    onClick={() => setCounter(prevState => ++prevState)} 
                >
                        +
                </button>
                <button
                    className="px-6 py-3 mx-3 bg-blue-600 text-white rounded"
                    onClick={() => setCounter(prevState => --prevState)} 
                >
                    -
                </button>
            </div>
    )

};