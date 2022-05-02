import { useState } from "react";
import {
  ClockIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  MailIcon,
  MenuIcon,
} from "@heroicons/react/outline";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="text-gray-600 font-body">
      <div className="grid md:grid-cols-3">
        <div className="md:cols-span-1 md:flex md:justify-end">
          <nav className="text-right">
            <div className="flex justify-between items-center">
              <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                <a
                  href="/"
                  className="text-green-500 md:text-blue-500 hover:text-gray-600"
                >
                  Foof Ninja
                </a>
              </h1>
              <div className="md:hidden px-4 cursor-pointer">
                <MenuIcon
                  className="w-5"
                  id="burger"
                  onClick={handleNav}
                ></MenuIcon>
              </div>
            </div>
            <ul
              id="menu"
              className={nav ? "sm:block" : "hidden text-sm mt-6 md:block"}
            >
              <li>
                <a
                  href="/"
                  className="px-4 flex justify-end border-r-4 border-primary"
                >
                  <span>Home</span>
                  <HomeIcon className="w-5 ml-2"></HomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="px-4 flex justify-end border-r-4 border-white"
                >
                  <span>About</span>
                  <QuestionMarkCircleIcon className="w-5 ml-2"></QuestionMarkCircleIcon>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="px-4 flex justify-end border-r-4 border-white"
                >
                  <span>Contact</span>
                  <MailIcon className="w-5 ml-2"></MailIcon>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className="px-16 py-6 bg-gray-100 md:col-span-2">
          <div className="flex justify-center md:justify-end">
            <a
              href="/"
              className="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
            >
              Login
            </a>
            <a
              href="/"
              className="text-primary ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
            >
              Sign up
            </a>
          </div>

          <header>
            <h2 className="text-6xl">Recipe</h2>
            <h3 className="text-3xl">For Ninjas</h3>
          </header>

          <div>
            <h4 className="font-semibold mt-12 pb-2 border-b border-gray-200">
              Lateest Recipes
            </h4>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="card hover:shadow-xl">
                <img
                  src="stew.jpg"
                  alt=""
                  className="w-full h-32 sm:h-48 object-cover"
                />

                <div className="m-4">
                  <span className="font-bold">5 Cooked Okpa</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe By Sally ecore
                  </span>
                </div>

                <div className="badge">
                  <ClockIcon className="w-5 inline-block"></ClockIcon>
                  <span>25 mins</span>
                </div>
              </div>

              <div className="card hover:shadow-lg">
                <img
                  src="noodles.jpg"
                  alt=""
                  className="w-full h-32 sm:h-48 object-cover"
                />

                <div className="m-4">
                  <span className="font-bold">Noodles</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe By Sally ecore
                  </span>
                </div>

                <div className="badge">
                  <ClockIcon className="w-5 inline-block"></ClockIcon>
                  <span>25 mins</span>
                </div>
              </div>

              <div className="card hover:shadow-lg">
                <img
                  src="curry.jpg"
                  alt=""
                  className="w-full h-32 sm:h-48 object-cover"
                />

                <div className="m-4">
                  <span className="font-bold">5 Tofu</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe By Sally ecore
                  </span>
                </div>

                <div className="badge">
                  <ClockIcon className="w-5 inline-block"></ClockIcon>
                  <span>25 mins</span>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mt-12 pb-2 border-b border-gray-200">
              Most Popular Recipes
            </h4>

            <div className="mt-8"></div>

            <div className="flex justify-center">
              <div
                className="bg-secondary-100 text-secondary-200 btn 
              hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition hover:ease-out duration-300"
              >
                Load More
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar;
