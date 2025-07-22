// eslint-disable-next-line no-undef
const fragment = document.createDocumentFragment();
// eslint-disable-next-line no-undef
const section = document.createElement('section');

export const login = () => {
  section.classList.remove('register', 'toDo', 'toDoAgregar', 'toDoMostrar');
  section.classList.add('login');
  section.innerHTML = `
    <div class="login__welcome">
      <h2>Welcome!</h2>
      <div class="login__welcome-img">
        <img src="../..//public/assets/Icono.svg" alt="icono">
        <h3>ToDo App</h3>
      </div>
      <p id="btnRegister">Don't have an account yet?<a href="#" >Register Now</a></p>
    </div>
    <div class="login__form">
      <h2>Log In</h2>
      <form id="formLogin" class="formLogin">
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input type="email" placeholder="JVb7d@example.com" id="inputEmail" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="inputPass">Password</label>
          <input type="password" placeholder="Password" id="inputPass" class="form-control" required>
        </div>
          <input type="checkbox" id="inputCheck">
          <label for="inputCheck">Keep me logged in</label>
        <div class="form-group">
          <button type="submit" class="btn">Log In Now</button>
        </div>
        <div class="forgot">
          <a href="#">Forgot your password?</a>
        </div>
      </form>
      <p>Or sign in with</p>
      <div class="form-group">  
        <button type="submit" class="btn"><i class="bi bi-facebook"></i> Facebook</button>
        <button type="submit" class="btn"><i class="bi bi-google"></i> Google</button>
        <button type="submit" class="btn"><i class="bi bi-twitter"></i> Twitter</button>
      </div>  
    </div>`;

  fragment.appendChild(section);
  return fragment;
};

export const register = () => {
  section.classList.remove('login', 'toDo', 'toDoAgregar', 'toDoMostrar');
  section.classList.add('register');
  section.innerHTML = `
    <div class="register__form">
      <h2>Register</h2>
      <form id="formRegister" class="formRegister">
        <div class="form-group">
          <label for="inputText">Username</label>
          <input type="text" placeholder="John Doe" id="inputText" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input type="email" placeholder="JVb7d@example.com" id="inputEmail" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="inputPass">Password</label>
          <input type="password" placeholder="Password" id="inputPass" class="form-control" required>
        </div>
        <div class="form-group">
          <button type="submit" class="btn">Register Now</button>
        </div>
      </form>  
    </div>
    <div class="register__welcome">
      <h2>Welcome!</h2>
      <div class="register__welcome-img">
        <img src="../..//public/assets/Icono.svg" alt="icono">
        <h3>ToDo App</h3>
      </div>
      <p id="btnLogin">Already have an account? <a href="#">Log In</a></p>
    </div>`;

  fragment.appendChild(section);
  return fragment;
};

export const toDo = () => {
  section.classList.remove('register', 'login', 'toDoAgregar', 'toDoMostrar');
  section.classList.add('toDo');
  section.innerHTML = `
    <!-- Header -->
    <header id="header" class="header">
      <!-- NavBar -->
      <nav class="header__navbar">
          <a href="#">
            <img src="../../public/assets/Icono.svg" alt="Logo ToDo App" />
            <h2>ToDo App</h2>
          </a>
      </nav>
    </header>

    <!-- Main -->
    <main id="main" class="main">
      <!-- Inicio -->
      <section class="main__inicio">
        <div>
          <button type="button" id="btnAgregar">
            Add Client
            <i><i class="bi bi-person-plus-fill"></i></i>
          </button>
        </div>
        <div>
          <button type="button" id="btnMostrar">
            Show Clients
            <i><i class="bi bi-people-fill"></i></i>
          </button>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer id="footer" class="footer">
      <div class="footer__mailto">
        <h2>Hablemos!</h2>
        <p>"Programa no para resolver un problema, sino para crear soluciones".</p>
        <a href="mailto:14bryansaenz@gmail.com">Envíame un correo</a>
      </div>
      <div class="footer__info">
        <p>B14S</p>
        <p>
          Aprendo y creo todos los días.
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/14BryanSaenz" target="_blank">
              <i class="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/14BryanSaenz" target="_blank">
              <i class="bi bi-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/14bryansaenz/" target="_blank">
              <i class="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Bryan14Saenz" target="_blank">
              <i class="bi bi-github"></i>
            </a>
          </li>
        </ul>
        <p>Desarrollado por Bryan Saenz ©(2025)</p>
      </div>
    </footer>`;

  fragment.appendChild(section);
  return fragment;
};

export const toDoAgregar = () => {
  section.classList.remove('register', 'login', 'toDo', 'toDoMostrar');
  section.classList.add('toDoAgregar');
  section.innerHTML = `
    <!-- Header -->
    <header id="header" class="header">
      <!-- NavBar -->
      <nav class="header__navbar">
          <a href="#">
            <img src="../../public/assets/Icono.svg" alt="Logo ToDo App" />
            <h2>ToDo App</h2>
          </a>
      </nav>
      <button id="btnBack"><i class="bi bi-arrow-left-circle-fill"></i></button>
    </header>

    <!-- Main -->
    <main id="main" class="main">
      <section class="main__agregar">
        <h2>Add a new client.</h2>
        <!-- Form -->
        <form id="formAgregar">
          <div>
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label for="lastName">Lastname:</label>
            <input
              type="text"
              id="lastName"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label for="address">Address:</label>
            <input
              type="text"
              id="address"
              placeholder="Avenida 1, Argentina"
              required
            />
          </div>
          <div>
            <label for="phone">Phone:</label>
            <input
              type="number"
              id="phone"
              placeholder="8557-6896"
              maxlength="8"
              required
            />
          </div>
          <div>
            <label for="id">ID:</label>
            <input
              type="text"
              id="id"
              placeholder="123-456-7890A"
              required
            />
          </div>
          <button type="submit" id="btnSavePerson">
            Save
          </button>
        </form>
      </section>
    </main>
  `;

  fragment.appendChild(section);
  return fragment;
};

export const toDoMostrar = () => {
  section.classList.remove('register', 'login', 'toDo', 'toDoAgregar');
  section.classList.add('toDoAgregar');
  section.innerHTML = `
    <!-- Header -->
    <header id="header" class="header">
      <!-- NavBar -->
      <nav class="header__navbar">
          <a href="#">
            <img src="../../public/assets/Icono.svg" alt="Logo ToDo App" />
            <h2>ToDo App</h2>
          </a>
      </nav>
      <button id="btnBack"><i class="bi bi-arrow-left-circle-fill"></i></button>
    </header>

    <!-- Main -->
    <main id="main" class="main">
      <section class="main__ver">
        <h2>Select a client.</h2>
        <!-- Form -->
        <form id="formSearch">
          <input
            id="inputSearchPerson"
            type="search"
            placeholder="Search for name..."
          />
          <button id="btnSearchPerson" type="submit">
            Search
          </button>
        </form>
        <!-- Tabla -->
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Lastname</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody id="tbody"></tbody>
        </table>
      </section>
    </main>
  `;

  fragment.appendChild(section);
  return fragment;
};
