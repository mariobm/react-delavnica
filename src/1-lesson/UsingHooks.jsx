import { useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";

export default function UsingHooks() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }) // useState smo spoznali, {x: 0, y: 0} je privzeto stanje

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.pageX, y: e.pageY });
    };
    
    /**
     * useEffect je funkcija, hook, tako kot useState.
     * Ne vrača nič, prejme 2 parametra:
     * - Funkcijo
     * - Dependency array
     * V funkcijo se napiše kaj naj se izvede,
     * v array pa kdaj. Če je array prazen, se funk. izvede le prvič, ko se komponenta naloži,
     * torej za inicializacijo stvari.
     * Če vsebuje vrednosti, jih "gleda" in ob vsaki spremebi izvede funkcijo.
     * Ponavadi so te vrednosti propsi, ki prihajajo iz vrhnje starševske komponente in bi radi
     * iz njih nekaj izračunali ob spremembi.
     * V useEffect hooku se ponavadi tudi uporablja logika za fetchanje podatkov.
     */
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove); // nastavimo poslušalca, ki "posluša" na premike miške

        return () => window.removeEventListener("mouseMove", handleMouseMove);
        // Return je ponavadi clean-up funkcija, ki se izvede, ko se komponento odstrani iz DOM-a
        // Kdaj se komponenta odstrani? Npr. imamo stanje show in na podlagi tega prikazujemo komponento oz. odstranjujemo
        // show ? <Komponenta> : null; In ko te komponente ne prikažemo, ko jo skrijemo, se izvede ta return stavek v useEffect
        // Z njim počistimo stvari, ki smo jih naredili v useEffectu
        // Če komponento skrijemo, ne potrebujemo več event listenerja, kaj nam bo :)
    }, []);

    const { x, y } = mousePosition;

    return (
        <div className="mt-10">
                <h1 className="text-3xl text-left font-medium">
                3. Hooks
                </h1>
            <p>
                (1-lesson/UsingHooks.jsx)
            </p>
            <p className="mt-10">
                Pozicija miške, x: {x}, y: {y}
            </p>
            <CustomHook />
        </div>
    )
}

function CustomHook() {
    /**
     * Seveda lahko ustvarimo svoje lastne hooke.
     * Vsa prejšnja logika, torej vse, razen returna smo spravili v novo funkcijo: useMousePosition.
     * Nova funkcija nam samo vrne stanje. V stanju sta pa koordianti.
     * Razlika med komponento in hookom je to, da je hook funkcija, ki nima propsov in otrok in ne vrača JSX sintakse.
     * Lahko pa v hook funkcijah, uporabljamo stanja (torej ostale hook funkcije)
     */
    const customHook = useMousePosition(); // ali const {x, y} = useMousePosition
    return (
        <p>
            Pozicija miške custom hook: x: {customHook.x}, y: {customHook.y}
        </p>
    )
}