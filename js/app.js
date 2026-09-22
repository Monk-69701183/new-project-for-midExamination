/*
    ============================================
    GAME FINDER
    app.js
    ============================================

    ระบบภายในไฟล์นี้

    - Recommended Games
    - Game Cards
    - Search
    - Filter
    - Game Finder
    - Favorites
    - LocalStorage
*/


// ============================================
// START
// ============================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof games === "undefined" ||
            !Array.isArray(games)
        ) {

            console.error(
                "games.js was not loaded."
            );

            return;

        }


        // Home

        renderRecommendedGames();


        // Games page

        setupGamesPage();


        // Finder page

        setupFinderPage();


        // Favorites page

        renderFavorites();


        // Theme

        setupThemeToggle();

    }
);



// ============================================
// RECOMMENDED GAMES
// ============================================

function renderRecommendedGames() {

    const container =
        document.getElementById(
            "recommendedGames"
        );


    if (!container) {
        return;
    }


    const recommendedGames =
        games.slice(0, 4);


    container.innerHTML = "";


    recommendedGames.forEach(
        function (game) {

            container.innerHTML +=
                createGameCard(game);

        }
    );

}



// ============================================
// CREATE GAME CARD
// ============================================

function createGameCard(game) {

    const favorite =
        isGameFavorite(game.id);


    const favoriteIcon =
        favorite
            ? "bi-heart-fill"
            : "bi-heart";


    const favoriteClass =
        favorite
            ? "active"
            : "";


    return `

        <div class="col-6 col-sm-6 col-lg-3">


            <div
                class="game-card"
                onclick="openGameWithProgress(${game.id})"
                tabindex="0"
                role="button"
                aria-label="View ${game.title}"
            >


                <!-- GAME IMAGE -->

                <div class="game-image">


                    <img
                        src="${game.image}"
                        alt="${game.title}"
                        loading="lazy"
                    >


                    <!-- RATING -->

                    <div class="game-rating">

                        <i class="bi bi-star-fill"></i>

                        ${game.rating}

                    </div>

                    <!-- FAVORITE BUTTON -->

                    <!--<button
                        type="button"
                        class="game-favorite-btn ${favoriteClass}"
                        onclick="event.stopPropagation(); toggleFavorite(${game.id})"
                        aria-label="Add ${game.title} to favorites"
                        title="Add to Favorites"
                    >

                        <i class="bi ${favoriteIcon}"></i>

                    </button>-->


                </div>



                <!-- GAME CONTENT -->

                <div class="game-card-body">


                    <!-- GENRE -->

                    <span class="game-genre">

                        ${game.genre}

                    </span>


                    <!-- TITLE -->

                    <h3>

                        ${game.title}

                    </h3>


                    <!-- DESCRIPTION -->

                    <p>

                        ${game.description}

                    </p>


                    <!-- META -->

                    <div class="game-meta">


                        <span>

                            <i class="bi bi-people"></i>

                            ${game.mode}

                        </span>


                        <span>

                            <i class="bi bi-clock"></i>

                            ${game.playTime}

                        </span>


                    </div>


                    <!-- VIEW DETAILS -->

                    <!--<div class="game-card-action">

                        <span>
                            View Details
                        </span>

                        <i class="bi bi-arrow-right"></i>

                    </div>-->


                </div>


            </div>


        </div>

    `;

}



// ============================================
// FAVORITES
// ============================================

function getFavorites() {

    const saved =
        localStorage.getItem(
            "favorites"
        );


    if (!saved) {
        return [];
    }


    try {

        const favorites =
            JSON.parse(saved);


        if (!Array.isArray(favorites)) {
            return [];
        }


        return favorites.map(
            function (id) {

                return Number(id);

            }
        );

    }
    catch (error) {

        console.error(
            "Cannot read favorites:",
            error
        );

        return [];

    }

}



// ============================================
// CHECK FAVORITE
// ============================================

function isGameFavorite(gameId) {

    const favorites =
        getFavorites();


    return favorites.includes(
        Number(gameId)
    );

}



// ============================================
// TOGGLE FAVORITE
// ============================================

function toggleFavorite(gameId) {

    gameId =
        Number(gameId);


    let favorites =
        getFavorites();


    if (
        favorites.includes(gameId)
    ) {

        favorites =
            favorites.filter(
                function (id) {

                    return id !== gameId;

                }
            );

    }
    else {

        favorites.push(gameId);

    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );


    // Refresh Home

    renderRecommendedGames();


    // Refresh Games

    if (
        typeof renderFilteredGames ===
        "function"
    ) {

        renderFilteredGames();

    }


    // Refresh Favorites

    renderFavorites();

}



// ============================================
// GAMES PAGE
// ============================================

function setupGamesPage() {

    const container =
        document.getElementById(
            "gamesContainer"
        );


    if (!container) {
        return;
    }


    const searchInput =
        document.getElementById(
            "searchInput"
        );


    const genreFilter =
        document.getElementById(
            "genreFilter"
        );


    const modeFilter =
        document.getElementById(
            "modeFilter"
        );


    const timeFilter =
        document.getElementById(
            "timeFilter"
        );


    const resetButton =
        document.getElementById(
            "resetFilters"
        );


    // Store globally for Favorite update

    window.gameFilterState = {
        search: "",
        genre: "all",
        mode: "all",
        time: "all"
    };


    // Search

    searchInput.addEventListener(
        "input",
        function () {

            window.gameFilterState.search =
                searchInput.value;

            renderFilteredGames();

        }
    );


    // Genre

    genreFilter.addEventListener(
        "change",
        function () {

            window.gameFilterState.genre =
                genreFilter.value;

            renderFilteredGames();

        }
    );


    // Mode

    modeFilter.addEventListener(
        "change",
        function () {

            window.gameFilterState.mode =
                modeFilter.value;

            renderFilteredGames();

        }
    );


    // Time

    timeFilter.addEventListener(
        "change",
        function () {

            window.gameFilterState.time =
                timeFilter.value;

            renderFilteredGames();

        }
    );


    // Reset

    resetButton.addEventListener(
        "click",
        function () {

            searchInput.value = "";

            genreFilter.value = "all";

            modeFilter.value = "all";

            timeFilter.value = "all";


            window.gameFilterState = {
                search: "",
                genre: "all",
                mode: "all",
                time: "all"
            };


            renderFilteredGames();

        }
    );


    // Initial render

    renderFilteredGames();

}



// ============================================
// FILTER GAMES
// ============================================

function renderFilteredGames() {

    const container =
        document.getElementById(
            "gamesContainer"
        );


    if (!container) {
        return;
    }


    const state =
        window.gameFilterState || {

            search: "",
            genre: "all",
            mode: "all",
            time: "all"

        };


    const searchText =
        state.search
            .toLowerCase()
            .trim();


    const filteredGames =
        games.filter(
            function (game) {


                const matchSearch =
                    game.title
                        .toLowerCase()
                        .includes(searchText);


                const matchGenre =
                    state.genre === "all" ||
                    game.genre === state.genre;


                const matchMode =
                    state.mode === "all" ||
                    game.mode === state.mode;


                const matchTime =
                    state.time === "all" ||
                    game.time === state.time;


                return (
                    matchSearch &&
                    matchGenre &&
                    matchMode &&
                    matchTime
                );

            }
        );


    // Clear

    container.innerHTML = "";


    // Count

    const resultCount =
        document.getElementById(
            "resultCount"
        );


    if (resultCount) {

        resultCount.textContent =
            filteredGames.length + " games";

    }


    // No result

    const noResults =
        document.getElementById(
            "noResults"
        );


    if (
        filteredGames.length === 0
    ) {

        if (noResults) {

            noResults.classList.remove(
                "d-none"
            );

        }

        return;

    }


    if (noResults) {

        noResults.classList.add(
            "d-none"
        );

    }


    // Render

    filteredGames.forEach(
        function (game) {

            container.innerHTML +=
                createGameCard(game);

        }
    );

}



// ============================================
// FINDER PAGE
// ============================================

function setupFinderPage() {

    const findButton =
        document.getElementById(
            "findGameButton"
        );


    if (!findButton) {
        return;
    }


    const modeSelect =
        document.getElementById(
            "modeSelect"
        );


    const genreSelect =
        document.getElementById(
            "genreSelect"
        );


    const timeSelect =
        document.getElementById(
            "timeSelect"
        );


    const results =
        document.getElementById(
            "finderResults"
        );


    const message =
        document.getElementById(
            "finderMessage"
        );


    findButton.addEventListener(
        "click",
        function () {


            const selectedMode =
                modeSelect.value;


            const selectedGenre =
                genreSelect.value;


            const selectedTime =
                timeSelect.value;


            let matchedGames =
                games.filter(
                    function (game) {


                        const matchMode =
                            selectedMode === "all" ||
                            game.mode === selectedMode;


                        const matchGenre =
                            selectedGenre === "all" ||
                            game.genre === selectedGenre;


                        const matchTime =
                            selectedTime === "all" ||
                            game.time === selectedTime;


                        return (
                            matchMode &&
                            matchGenre &&
                            matchTime
                        );

                    }
                );


            // No result

            if (
                matchedGames.length === 0
            ) {

                results.innerHTML = `

                    <div class="col-12 text-center py-5">

                        <i class="bi bi-emoji-frown display-4"></i>

                        <h3 class="mt-3">
                            We Couldn't Find a Match
                        </h3>

                        <p class="text-secondary">
                            ลองเปลี่ยนคำตอบบางข้อ
                            แล้วค้นหาอีกครั้ง
                        </p>

                    </div>

                `;


                message.style.display =
                    "none";


                return;

            }


            // Sort by rating

            matchedGames.sort(
                function (a, b) {

                    return b.rating - a.rating;

                }
            );


            // Clear

            results.innerHTML = "";


            // Render

            matchedGames.forEach(
                function (game) {

                    results.innerHTML +=
                        createGameCard(game);

                }
            );


            message.style.display =
                "none";


            // Scroll

            results.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}



// ============================================
// FAVORITES PAGE
// ============================================

function renderFavorites() {

    const container =
        document.getElementById(
            "favoritesContainer"
        );


    if (!container) {
        return;
    }


    const empty =
        document.getElementById(
            "emptyFavorites"
        );


    const count =
        document.getElementById(
            "favoriteCount"
        );


    const favoriteIds =
        getFavorites();


    const favoriteGames =
        games.filter(
            function (game) {

                return favoriteIds.includes(
                    game.id
                );

            }
        );


    // Count

    if (count) {

        count.textContent =
            favoriteGames.length + " games";

    }


    // Empty

    if (
        favoriteGames.length === 0
    ) {

        container.innerHTML = "";


        if (empty) {

            empty.classList.remove(
                "d-none"
            );

        }


        return;

    }


    // Has favorites

    if (empty) {

        empty.classList.add(
            "d-none"
        );

    }


    container.innerHTML = "";


    favoriteGames.forEach(
        function (game) {

            container.innerHTML +=
                createGameCard(game);

        }
    );

}



// ============================================
// THEME TOGGLE
// ============================================

function setupThemeToggle() {

    const themeToggle =
        document.getElementById(
            "themeToggle"
        );


    if (!themeToggle) {
        return;
    }


    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "light-mode"
            );


            if (
                document.body.classList.contains(
                    "light-mode"
                )
            ) {

                themeToggle.innerHTML =
                    "☀️";

            }
            else {

                themeToggle.innerHTML =
                    "🌙";

            }

        }
    );

}

function openMap() {

    const mapUrl =
        "https://www.google.com/maps/search/?api=1&query=AAE+Engineering+Thailand";

    window.open(
        mapUrl,
        "_blank",
        "noopener,noreferrer"
    );

}