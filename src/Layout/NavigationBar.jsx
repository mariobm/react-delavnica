import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";

/**
 * Samo navigacijska vrstica 
 * Je preprosto komponenta, ki vrača JSX (podobno kot HTML).
 * Uporabimo jo lahko kjerkoli z <NavigationBar />
*/
export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { mode } = useContext(ThemeContext);

  const isDarkMode = mode === 'dark';

  const classes = isDarkMode ? ['bg-gray-600 text-white'] : ['bg-white'];

  const classNamesString = classes.join(' ');

  const toggle = () => {
    setIsOpen(!isOpen);
  };

    return (
        <section className={"aw-header border-b border-gray-200 shadow-md " + classNamesString}>
    <header className="container mx-auto flex items-center justify-between flex-wrap px-2 py-4 lg:p-6 ">
      <div id="mobile-menu__toggler" className="block lg:hidden">
            <button
              id="mobile-menu__open"
              className="px-3 py-1 w-20 border rounded text-white bg-blue-700 border-transparent hover:bg-blue-900 transition"
              onClick={toggle}
            >
              {isOpen ? 'Zapri' : 'Menu'}
            </button>
      </div>

      <div className="aw-header__logo flex items-center flex-shrink-0 text-blue-700 hover:text-blue-900 mx-2 lg:mr-6 order-1 transition">
        <svg className="fill-current h-8 w-8 mr-2" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                />
            </svg>
        <span className="font-semibold text-lg tracking-tight">Delavnica</span>
      </div>

      <NavigationBar.Collapse isOpen={isOpen}>
        <ol className="text-lg lg:flex-grow lg:flex lg:justify-around">
          <NavigationBar.Item>
            <NavigationBar.Link href="/1-Lesson">1. vaja - prečiščeno</NavigationBar.Link>
          </NavigationBar.Item>
          <NavigationBar.Item>
            <NavigationBar.Link href="/">Original</NavigationBar.Link>
          </NavigationBar.Item>
          <NavigationBar.Item>
            <NavigationBar.Link href="/Login">Login</NavigationBar.Link>
          </NavigationBar.Item>
        </ol>
      </NavigationBar.Collapse>

      <NavigationBar.Icons />
    </header>
  </section>
    )
}

NavigationBar.Collapse = ({ children, isOpen }) => {
  const className = isOpen
    ? 'visible opacity-1 transition-all ease-out duration-500 md:transition-none'
    : 'invisible h-0 opacity-0 md:visible md:opacity-100 md:h-auto ';
  return (
    <nav id="mobile-menu__items" className={className + 'aw-header__nav w-full block flex-grow lg:flex lg:items-center lg:w-auto order-3 lg:order-2'}>
      {children}
    </nav>
  );
};

NavigationBar.Item = ({children}) => (
  <li className="block mb-4 mt-3 lg:inline-block lg:mb-0 lg:mt-0 mr-4">
    {children}
  </li>
);

NavigationBar.Link = ({href, children }) => (
  <a href={href} className="text-gray-700 hover:text-gray-900 transition">{children}</a>
);

NavigationBar.Icons = () => (
  <div className="flex order-2">

    <div className="hidden sm:block mr-2">
      <a href="mailto:mariob@vivaldi.net" className="text-gray-700 hover:text-blue-900 transition" title="Pošlji mi mail">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="envelope"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="fill-current h-6 w-6"
        >
          <path
            fill="currentColor"
            d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"
            className=""
          ></path>
        </svg>
      </a>
    </div>
  </div>
);