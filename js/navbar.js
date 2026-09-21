document.addEventListener("DOMContentLoaded", function () {

    const navbarContainer = document.getElementById("navbar");

    if (!navbarContainer) {
        return;
    }

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    navbarContainer.innerHTML = `

        <nav class="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">

            <div class="container">

                <!-- Logo -->

                <button
                    type="button"
                    class="navbar-brand btn btn-link p-0 border-0 text-decoration-none"
                    onclick="goToPage('index.html')"
                    aria-label="Go to Home"
                >
                    🎮 GAME<span>PLAYING</span>
                </button>


                <!-- Mobile Menu Button -->

                <button
                    type="button"
                    class="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >

                    <span class="navbar-toggler-icon"></span>

                </button>


                <!-- Navbar Menu -->

                <div
                    class="collapse navbar-collapse"
                    id="mainNavbar"
                >

                    <ul class="navbar-nav ms-auto align-items-lg-center">


                        <!-- HOME -->

                        <li class="nav-item">

                            <button
                                type="button"
                                class="nav-link nav-js-link"
                                data-page="index.html"
                                onclick="goToPage('index.html')"
                            >

                                <i class="bi bi-house"></i>

                                Home

                            </button>

                        </li>

                        <!-- ABOUT -->

                        <li class="nav-item">

                            <button
                                type="button"
                                class="nav-link nav-js-link"
                                data-page="about.html"
                                onclick="goToPage('about.html')"
                            >

                                <i class="bi bi-info-circle"></i>

                                About

                            </button>

                        </li>


                        <!-- GAMES DROPDOWN -->

                        <li class="nav-item dropdown">

                            <button
                                type="button"
                                class="nav-link dropdown-toggle nav-js-link games-menu-button"
                                data-bs-toggle="dropdown"
                                data-page="games.html"
                                aria-expanded="false"
                            >

                                <i class="bi bi-controller"></i>

                                Games

                            </button>


                            <ul class="dropdown-menu dropdown-menu-dark">


                                <li>

                                    <button
                                        type="button"
                                        class="dropdown-item"
                                        onclick="goToPage('games.html')"
                                    >

                                        <i class="bi bi-grid"></i>

                                        All Games

                                    </button>

                                </li>


                                <li>
                                    <hr class="dropdown-divider">
                                </li>


                                <li>

                                    <button
                                        type="button"
                                        class="dropdown-item"
                                        onclick="filterGamesFromNavbar('Action RPG')"
                                    >

                                        <i class="bi bi-lightning"></i>

                                        Action RPG

                                    </button>

                                </li>


                                <li>

                                    <button
                                        type="button"
                                        class="dropdown-item"
                                        onclick="filterGamesFromNavbar('Shooter')"
                                    >

                                        <i class="bi bi-crosshair"></i>

                                        Shooter

                                    </button>

                                </li>


                                <li>

                                    <button
                                        type="button"
                                        class="dropdown-item"
                                        onclick="filterGamesFromNavbar('Simulation')"
                                    >

                                        <i class="bi bi-tree"></i>

                                        Simulation

                                    </button>

                                </li>


                                <li>

                                    <button
                                        type="button"
                                        class="dropdown-item"
                                        onclick="filterGamesFromNavbar('Roguelike')"
                                    >

                                        <i class="bi bi-fire"></i>

                                        Roguelike

                                    </button>

                                </li>

                            </ul>

                        </li>


                        <!-- FIND MY GAME -->

                        <!--<li class="nav-item">

                            <button
                                type="button"
                                class="nav-link nav-js-link"
                                data-page="finder.html"
                                onclick="goToPage('finder.html')"
                            >

                                <i class="bi bi-search"></i>

                                Find My Game

                            </button>

                        </li>-->


                        <!-- FAVORITES -->

                        <!--<li class="nav-item">

                            <button
                                type="button"
                                class="nav-link nav-js-link"
                                data-page="favorites.html"
                                onclick="goToPage('favorites.html')"
                            >

                                <i class="bi bi-heart"></i>

                                Favorites

                            </button>

                        </li>-->


                        <!-- CONTACT -->

                        <li class="nav-item">

                            <button
                                type="button"
                                class="nav-link nav-js-link"
                                data-page="contact.html"
                                onclick="goToPage('contact.html')"
                            >

                                <i class="bi bi-envelope"></i>

                                Contact

                            </button>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    `;


    // =====================================
    // Highlight Current Page
    // =====================================

    const navLinks =
        document.querySelectorAll(".nav-js-link");

    navLinks.forEach(function (link) {

        const page =
            link.getAttribute("data-page");

        if (page === currentPage) {

            link.classList.add("active");

        }

    });

});


// =====================================
// JavaScript Page Navigation
// =====================================

function goToPage(page) {

    window.location.href = page;

}

// =====================================
// GAME FILTER FROM NAVBAR
// =====================================

function filterGamesFromNavbar(genre) {

    window.location.href =
        "games.html?genre=" +
        encodeURIComponent(genre);

}

// โหลด footer.js
fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;

        // ✅ re-bind toggle หลังจากเมนูถูก inject
        const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', event => {
                event.preventDefault();
                document.body.classList.toggle('sb-sidenav-toggled');
            });
        }
    });
