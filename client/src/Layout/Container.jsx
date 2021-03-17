import NavigationBar from "./NavigationBar";

export default function Container({children}) {
    return (
        <>
        <NavigationBar />
        <section className="bg-white">
            <div className="container py-4 pl-8 mx-auto bg-gray-100 rounded mt-12 text-black shadow-lg">
                {children}
            </div>
        </section>
        </>
    )
};