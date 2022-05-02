import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <h1>
            <a href="/">Foof Ninja</a>
          </h1>
        </div>
        <ul>
          <li>
            <a href="/">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      <main>
        <div>
          <a href="/">Login</a>
          <a href="/">Sign up</a>
        </div>

        <header>
          <h2>Recipe</h2>
          <h3>For Ninjas</h3>
        </header>

        <div>
          <h4>Lateest Recipes</h4>

          <div>
            <div>
              <img src="" alt="" />

              <div>
                <span>5 Cooked Okpa</span>
                <span>Recipe By Sally ecore</span>
              </div>
            </div>
          </div>

          <h4>Most Popular Recipes</h4>

          <div>
            <div>
              <img src="" alt="" />

              <div>
                <span>5 Cooked Okpa</span>
                <span>Recipe By Sally ecore</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
