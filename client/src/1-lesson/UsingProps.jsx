import { useState } from "react";

export default function UsingProps(props) {
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(99);

    return (
            <div className="mt-10">
                <h1 className="text-3xl text-left font-medium">
                2. Props/Properties (Lastnosti)
                </h1>
                <p>(1-lesson/UsingProps.jsx)</p>
            <AnotherComponent name="Mario" nameFromState={name} age={99} ageFromState={age}> {/* Primer komponente s propsi */}
                SEM OTROK
            </AnotherComponent>
            {/* Komponenti, lahko pošljemo tudi ime funkcije, npr. setName */}
            <ChangeName
                updateName={setName}
                currentName={name}
                updateAge={setAge}
            />
            </div>
    )

};

function AnotherComponent(props) {
    /** Znotraj ene datoteke imamo lahko več komponent
     * V kolikor bi radi komponento uporabili drugje moramo pred function napisati "export"
     * "export default" je privzeti export. 
     * V praksi to pomeni, da se importa tako: import Container from "./Container";
     * V kolikor nimamo default opcije: import {Container} from "./Container";
     * Torej zavitih oklepajih {}.
     * Samo ena komponenta v datoteki ima lahko export default. Vse ostale morajo imeti samo export ali brez */
    const { nameFromState, ageFromState, children } = props; // object destructuring, da nam ni treba pisat props.name ...
    return (
        <>{/* Pri JSX sintaksi, moramo imeti vsaj enega starša. Lahko bi zawrapali v <div>koda</div> ali pa tako v prazne <></> */}
            <p className="mt-5 text-lg">Fixed Hello {props.name}, star si {props.age} let</p>
            <p className="mt-5 text-lg">State Hello {nameFromState}, star si {ageFromState} let</p>
            <p className="mt-5 text-lg">Tukaj so moji otroci: {children}</p>
        </>
    )
};

function ChangeName({ updateName, currentName, updateAge }) { // "{updateName, currentName}" ali samo "props" in potem props.updateName()
    
    // Definiramo funk., ki se proži na onChange, ko uporabnik tipka v input
    // Lahko bi pa to funkcijo napisali kar v onChange na input
    // onChange={e => updateName(e.target.value)}
    // Direktno naredimo spodaj pri starosti/letih
    const onChangeName = (e) => {
        updateName(e.target.value);
    }
    
    return (
        <div className="w-1/4">
            <div className="flex mt-5">
                <label htmlFor="name" className="text-right mr-6 w-20 py-2 text-gray-500 font-bold">Ime</label>
                    <input
                        value={currentName}
                        onChange={onChangeName}
                        type="text"
                        id="name"
                        name="name"
                        className="border-b-2 rounded py-2 w-full placeholder-gray-300 leading-4 font-bold outline-none focus:border-blue-400"
                    />
            </div>
            <div className="flex mt-5">
                <label htmlFor="name" className="text-right mr-6 w-20 py-2 text-gray-500 font-bold">Starost: </label>
                {/* updateAge je props, ki je funkcija. Zato jo uporabljamo kot funkcijo.
                    V našem primeru je funk., ki nastavlja stanje komponenti UsingProps,
                    ki se potem ko se stanje nastavi.
                */}
                <button
                    className="px-6 py-3 bg-blue-600 text-white rounded"
                    onClick={() => updateAge(prevState => ++prevState)}
                >
                        +
                </button>
                <button
                    className="px-6 py-3 mx-3 bg-blue-600 text-white rounded"
                    onClick={() => updateAge(prevState => --prevState)} 
                >
                        -
                </button>
            </div>
        </div>
    )
}