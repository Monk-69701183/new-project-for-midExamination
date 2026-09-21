/* =========================================================
   GAME FINDER
   games.js
========================================================= */


/* =========================================================
   GAME DATA
========================================================= */

const games = [

    {
        id: 1,
        title: "Monster Hunter Wilds",
        genre: "Action RPG",
        mode: "Multiplayer",
        playTime: "Long",
        platform: "PC / PS5 / Xbox",
        rating: 9.0,
        image: "images/monster-hunter.jpg",
        description:
            "ออกล่ามอนสเตอร์ในโลกที่เต็มไปด้วยธรรมชาติอันดุเดือด พร้อมระบบต่อสู้และอุปกรณ์ที่หลากหลาย"
    },

    {
        id: 2,
        title: "The First Descendant",
        genre: "Looter Shooter",
        mode: "Multiplayer",
        playTime: "Medium",
        platform: "PC / PS5 / Xbox",
        rating: 8.2,
        image: "images/first-descendant.jpg",
        description:
            "เกม Looter Shooter แบบ Third-Person ที่เน้นการต่อสู้ รวบรวมอุปกรณ์ และร่วมทีมกับผู้เล่นคนอื่น"
    },

    {
        id: 3,
        title: "Elden Ring",
        genre: "Action RPG",
        mode: "Single Player",
        playTime: "Long",
        platform: "PC / PS5 / Xbox",
        rating: 9.5,
        image: "images/elden-ring.jpg",
        description:
            "สำรวจโลกแฟนตาซีขนาดใหญ่ที่เต็มไปด้วยศัตรู บอส และความลับที่รอให้ค้นพบ"
    },

    {
        id: 4,
        title: "Stardew Valley",
        genre: "Simulation",
        mode: "Single Player",
        playTime: "Short",
        platform: "PC / Console / Mobile",
        rating: 9.3,
        image: "images/stardew-valley.jpg",
        description:
            "เริ่มต้นชีวิตใหม่ด้วยการทำฟาร์ม ตกปลา สร้างความสัมพันธ์ และสำรวจเมืองเล็ก ๆ ที่เต็มไปด้วยเรื่องราว"
    },

    {
        id: 5,
        title: "Hades",
        genre: "Roguelike",
        mode: "Single Player",
        playTime: "Short",
        platform: "PC / Console",
        rating: 9.1,
        image: "images/hades.jpg",
        description:
            "ต่อสู้ฝ่าด่านจากโลกใต้พิภพด้วยระบบ Action ที่รวดเร็ว พร้อมเรื่องราวที่เปลี่ยนแปลงไปทุกครั้งที่เล่น"
    },

    {
        id: 6,
        title: "Helldivers 2",
        genre: "Shooter",
        mode: "Multiplayer",
        playTime: "Medium",
        platform: "PC / PS5",
        rating: 8.8,
        image: "images/helldivers-2.jpg",
        description:
            "ร่วมทีมกับเพื่อนเพื่อทำภารกิจต่อสู้กับศัตรูจากต่างดาวในเกมยิงแบบ Co-op ที่เต็มไปด้วยความวุ่นวาย"
    },

    {
        id: 7,
        title: "Cyberpunk 2077",
        genre: "Action RPG",
        mode: "Single Player",
        playTime: "Long",
        platform: "PC / PS5 / Xbox",
        rating: 9.2,
        image: "images/cyberpunk-2077.jpg",
        description:
            "สำรวจ Night City เมืองแห่งอนาคตที่เต็มไปด้วยเทคโนโลยี อาชญากรรม และเรื่องราวที่เปลี่ยนแปลงไปตามการตัดสินใจของคุณ"
    },

    {
        id: 8,
        title: "Baldur's Gate 3",
        genre: "RPG",
        mode: "Single Player",
        playTime: "Long",
        platform: "PC / PS5 / Xbox",
        rating: 9.6,
        image: "images/baldurs-gate-3.jpg",
        description:
            "ผจญภัยในโลกแฟนตาซีพร้อมระบบการต่อสู้แบบ Turn-Based และเรื่องราวที่เปลี่ยนแปลงตามทางเลือกของผู้เล่น"
    },

    {
        id: 9,
        title: "Palworld",
        genre: "Survival",
        mode: "Multiplayer",
        playTime: "Medium",
        platform: "PC / Xbox",
        rating: 8.5,
        image: "images/palworld.jpg",
        description:
            "เอาชีวิตรอด สร้างฐาน และออกสำรวจโลกกว้างพร้อมเหล่าสิ่งมีชีวิตที่เรียกว่า Pals"
    },

    {
        id: 10,
        title: "Valheim",
        genre: "Survival",
        mode: "Multiplayer",
        playTime: "Long",
        platform: "PC / Xbox",
        rating: 8.8,
        image: "images/valheim.jpg",
        description:
            "เกม Survival ในโลกสไตล์ไวกิ้ง สร้างบ้าน คราฟต์อุปกรณ์ สำรวจพื้นที่ และต่อสู้กับเหล่าบอส"
    },

    {
        id: 11,
        title: "Dead Cells",
        genre: "Roguelike",
        mode: "Single Player",
        playTime: "Short",
        platform: "PC / Console / Mobile",
        rating: 9.0,
        image: "images/dead-cells.jpg",
        description:
            "เกม Action Roguelike ที่ผสมการต่อสู้ที่รวดเร็วเข้ากับการสำรวจด่านที่เปลี่ยนแปลงอยู่เสมอ"
    },

    {
        id: 12,
        title: "Hollow Knight",
        genre: "Metroidvania",
        mode: "Single Player",
        playTime: "Medium",
        platform: "PC / Console",
        rating: 9.2,
        image: "images/hollow-knight.jpg",
        description:
            "ออกสำรวจอาณาจักรใต้ดินอันลึกลับ ต่อสู้กับศัตรู และค้นพบความลับที่ซ่อนอยู่ในโลกของ Hallownest"
    },

    {
        id: 13,
        title: "Deep Rock Galactic",
        genre: "Co-op Shooter",
        mode: "Multiplayer",
        playTime: "Medium",
        platform: "PC / PS5 / Xbox",
        rating: 9.0,
        image: "images/deep-rock-galactic.jpg",
        description:
            "ร่วมทีมกับเพื่อนเพื่อขุดเหมือง สำรวจถ้ำ และต่อสู้กับฝูงเอเลี่ยนในภารกิจ Co-op สุดมัน"
    },

    {
        id: 14,
        title: "Risk of Rain 2",
        genre: "Roguelike",
        mode: "Multiplayer",
        playTime: "Medium",
        platform: "PC / Console",
        rating: 8.9,
        image: "images/risk-of-rain-2.jpg",
        description:
            "ต่อสู้กับศัตรูจำนวนมากในโลกต่างดาว พร้อมสะสมไอเทมและพัฒนาตัวละครในแต่ละรอบการเล่น"
    },

    {
        id: 15,
        title: "Terraria",
        genre: "Sandbox",
        mode: "Multiplayer",
        playTime: "Long",
        platform: "PC / Console / Mobile",
        rating: 9.1,
        image: "images/terraria.jpg",
        description:
            "สร้าง ขุด สำรวจ และต่อสู้ในโลก Sandbox ที่เต็มไปด้วยสิ่งของ ศัตรู และพื้นที่ให้ค้นพบมากมาย"
    },

    {
        id: 16,
        title: "Dave the Diver",
        genre: "Simulation",
        mode: "Single Player",
        playTime: "Medium",
        platform: "PC / Switch / PS5",
        rating: 8.9,
        image: "images/dave-the-diver.jpg",
        description:
            "ออกดำน้ำจับปลาในตอนกลางวัน และบริหารร้านซูชิในตอนกลางคืน พร้อมพบกับเรื่องราวและตัวละครสุดแปลก"
    },

    {
        id: 17,
        title: "Lies of P",
        genre: "Action RPG",
        mode: "Single Player",
        playTime: "Long",
        platform: "PC / PS5 / Xbox",
        rating: 8.9,
        image: "images/lies-of-p.jpg",
        description:
            "ผจญภัยในเมือง Krat ที่ได้รับแรงบันดาลใจจากเรื่อง Pinocchio พร้อมการต่อสู้ที่ท้าทายและบรรยากาศสุดเข้มข้น"
    },

    {
        id: 18,
        title: "Remnant II",
        genre: "Action RPG",
        mode: "Multiplayer",
        playTime: "Long",
        platform: "PC / PS5 / Xbox",
        rating: 8.7,
        image: "images/remnant-2.jpg",
        description:
            "ต่อสู้กับศัตรูจากโลกต่าง ๆ พร้อมสำรวจพื้นที่ที่มีการสร้างแบบสุ่ม และร่วมมือกับเพื่อนในรูปแบบ Co-op"
    },

    {
        id: 19,
        title: "No Rest for the Wicked",
        genre: "Action RPG",
        mode: "Single Player",
        playTime: "Long",
        platform: "PC / PS5 / Xbox",
        rating: 8.8,
        image: "images/no-rest-for-the-wicked.jpg",
        description:
            "Action RPG ที่ผสมการต่อสู้แบบเข้มข้นเข้ากับการสำรวจโลกแฟนตาซีอันมืดมน พร้อมระบบสร้างตัวละครและอุปกรณ์ที่หลากหลาย"
    }

];


/* =========================================================
   FAVORITE SYSTEM
========================================================= */

const FAVORITES_KEY =
    "gameFinderFavorites";


function getFavorites() {

    const favorites =
        localStorage.getItem(
            "gameFinderFavorites"
        );

    if (!favorites) {
        return [];
    }

    try {

        return JSON.parse(favorites)
            .map(Number);

    } catch (error) {

        console.error(
            "Cannot read favorites:",
            error
        );

        return [];
    }
}


function saveFavorites(favorites) {

    localStorage.setItem(
        "gameFinderFavorites",
        JSON.stringify(favorites)
    );

}


function isGameFavorite(
    gameId
) {

    return getFavorites().includes(
        Number(gameId)
    );

}


/* =========================================================
   TOGGLE FAVORITE
========================================================= */

function toggleFavorite(gameId) {

    console.log("🔥 toggleFavorite ทำงานแล้ว");
    console.log("Game ID =", gameId);

    gameId = Number(gameId);

    let favorites = getFavorites();

    const button = document.querySelector(
        '.game-favorite-btn[data-game-id="' + gameId + '"]'
    );

    console.log("Game ID:", gameId);
    console.log("Button:", button);
    console.log("Before:", favorites);

    if (favorites.includes(gameId)) {

        // เอาออกจาก Favorite
        favorites = favorites.filter(function (id) {
            return id !== gameId;
        });

    } else {

        // เพิ่ม Favorite
        favorites.push(gameId);

    }

    saveFavorites(favorites);

    console.log("After:", favorites);

    // อัปเดตปุ่มที่ถูกกด
    if (button) {

        if (favorites.includes(gameId)) {

            button.classList.add("active");

            const icon = button.querySelector("i");

            if (icon) {
                icon.classList.remove("bi-heart");
                icon.classList.add("bi-heart-fill");
            }

        } else {

            button.classList.remove("active");

            const icon = button.querySelector("i");

            if (icon) {
                icon.classList.remove("bi-heart-fill");
                icon.classList.add("bi-heart");
            }

        }

    } else {

        console.error(
            "ไม่พบปุ่ม Favorite ของ Game ID:",
            gameId
        );

    }

    // อัปเดต Modal ถ้ามี
    updateFavoriteButton(gameId);

    // ถ้าอยู่หน้า Favorites
    if (document.getElementById("favoriteList")) {
        displayFavorites();
    }

}


/* =========================================================
   UPDATE ALL CARD FAVORITE BUTTONS
========================================================= */

function updateAllFavoriteButtons() {

    const buttons =
        document.querySelectorAll(
            ".game-favorite-btn"
        );


    buttons.forEach(
        function (button) {

            const gameId =
                Number(
                    button.dataset.gameId
                );


            if (!gameId) {

                return;

            }


            const favorite =
                isGameFavorite(
                    gameId
                );


            const icon =
                button.querySelector(
                    "i"
                );


            if (favorite) {

                button.classList.add(
                    "active"
                );


                if (icon) {

                    icon.className =
                        "bi bi-heart-fill";

                }


                button.setAttribute(
                    "aria-label",
                    "Remove " +
                    getGameTitle(gameId) +
                    " from favorites"
                );


                button.setAttribute(
                    "title",
                    "Remove from Favorites"
                );


            } else {

                button.classList.remove(
                    "active"
                );


                if (icon) {

                    icon.className =
                        "bi bi-heart";

                }


                button.setAttribute(
                    "aria-label",
                    "Add " +
                    getGameTitle(gameId) +
                    " to favorites"
                );


                button.setAttribute(
                    "title",
                    "Add to Favorites"
                );

            }

        }
    );

}


/* =========================================================
   GET GAME TITLE
========================================================= */

function getGameTitle(
    gameId
) {

    const game =
        games.find(
            function (item) {

                return item.id ===
                    Number(gameId);

            }
        );


    return game
        ? game.title
        : "game";

}


/* =========================================================
   SHUFFLE GAMES
========================================================= */

function shuffleGames(
    gameList
) {

    const shuffled =
        [...gameList];


    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            shuffled[i],
            shuffled[j]
        ] =
        [
            shuffled[j],
            shuffled[i]
        ];

    }


    return shuffled;

}


/* =========================================================
   CREATE GAME CARD
========================================================= */

function createGameCard(
    game
) {

    const favorite =
        isGameFavorite(
            game.id
        );


    const favoriteIcon =
        favorite
            ? "bi-heart-fill"
            : "bi-heart";


    const favoriteClass =
        favorite
            ? "active"
            : "";


    return `

        <div class="col-sm-6 col-lg-3">

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


                    <!-- FAVORITE BUTTON -->
                    <!--<button
                        type="button"
                        class="game-favorite-btn ${favoriteClass}"
                        data-game-id="${game.id}"
                        onclick="toggleFavorite(${game.id}); return false;"
                    >
                        <i class="bi ${favoriteIcon}"></i>
                    </button>-->


                    <!-- RATING -->
                    <div class="game-rating">

                        <i class="bi bi-star-fill"></i>

                        ${game.rating}

                    </div>


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

                    <div class="game-card-action">

                        <span>
                            View Details
                        </span>

                        <i class="bi bi-arrow-right"></i>

                    </div>


                </div>


            </div>

        </div>

    `;

}


/* =========================================================
   DISPLAY GAMES
========================================================= */

function displayGames(
    gameList = games,
    randomize = true
) {

    const container =
        document.getElementById(
            "gameList"
        );


    if (!container) {

        return;

    }


    const noResults =
        document.getElementById(
            "noResults"
        );


    /*
       NO RESULT
    */

    if (
        !Array.isArray(gameList) ||
        gameList.length === 0
    ) {

        if (noResults) {

            noResults.classList.remove(
                "d-none"
            );

        }


        container.innerHTML =
            "";


        updateGameCount();

        return;

    }


    if (noResults) {

        noResults.classList.add(
            "d-none"
        );

    }


    /*
       RANDOM ORDER
    */

    const gamesToDisplay =
        randomize
            ? shuffleGames(
                gameList
            )
            : [...gameList];


    /*
       CREATE CARDS
    */

    container.innerHTML =
        gamesToDisplay
            .map(
                function (game) {

                    return createGameCard(
                        game
                    );

                }
            )
            .join("");


    updateGameCount();


    setupGameCardKeyboard();

}


/* =========================================================
   GET CURRENT FILTERED GAMES
========================================================= */

function getCurrentFilteredGames() {

    const searchInput =
        document.getElementById(
            "gameSearch"
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


    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    const genre =
        genreFilter
            ? genreFilter.value
            : "";


    const mode =
        modeFilter
            ? modeFilter.value
            : "";


    const playTime =
        timeFilter
            ? timeFilter.value
            : "";


    return games.filter(
        function (game) {

            const matchSearch =
                !search ||
                game.title
                    .toLowerCase()
                    .includes(search) ||
                game.genre
                    .toLowerCase()
                    .includes(search) ||
                game.description
                    .toLowerCase()
                    .includes(search);


            const matchGenre =
                !genre ||
                game.genre === genre;


            const matchMode =
                !mode ||
                game.mode === mode;


            const matchTime =
                !playTime ||
                game.playTime === playTime;


            return (
                matchSearch &&
                matchGenre &&
                matchMode &&
                matchTime
            );

        }
    );

}


/* =========================================================
   FILTER GAMES
========================================================= */

function filterGames() {

    const filteredGames =
        getCurrentFilteredGames();


    displayGames(
        filteredGames
    );


    updateFilterStatus(
        filteredGames
    );

}


/* =========================================================
   UPDATE FILTER STATUS
========================================================= */

function updateFilterStatus(
    filteredGames
) {

    const status =
        document.getElementById(
            "filterStatus"
        );


    if (!status) {

        return;

    }


    const searchInput =
        document.getElementById(
            "gameSearch"
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


    const search =
        searchInput
            ? searchInput.value.trim()
            : "";


    const genre =
        genreFilter
            ? genreFilter.value
            : "";


    const mode =
        modeFilter
            ? modeFilter.value
            : "";


    const playTime =
        timeFilter
            ? timeFilter.value
            : "";


    const filters = [];


    if (search) {

        filters.push(
            `Search: "${search}"`
        );

    }


    if (genre) {

        filters.push(
            `Genre: ${genre}`
        );

    }


    if (mode) {

        filters.push(
            `Mode: ${mode}`
        );

    }


    if (playTime) {

        filters.push(
            `Time: ${playTime}`
        );

    }


    if (filters.length === 0) {

        status.textContent =
            "Showing all games";

        return;

    }


    status.textContent =
        `${filteredGames.length} games found • ` +
        filters.join(" • ");

}


/* =========================================================
   RESET FILTERS
========================================================= */

function resetFilters() {

    const searchInput =
        document.getElementById(
            "gameSearch"
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


    if (searchInput) {

        searchInput.value =
            "";

    }


    if (genreFilter) {

        genreFilter.value =
            "";

    }


    if (modeFilter) {

        modeFilter.value =
            "";

    }


    if (timeFilter) {

        timeFilter.value =
            "";

    }


    displayGames(
        games
    );


    updateFilterStatus(
        games
    );

}


/* =========================================================
   UPDATE GAME COUNT
========================================================= */

function updateGameCount() {

    const countElement =
        document.getElementById(
            "gameCount"
        );


    if (!countElement) {

        return;

    }


    const cards =
        document.querySelectorAll(
            "#gameList .game-card"
        );


    countElement.textContent =
        cards.length;

}


/* =========================================================
   CHECK GENRE FROM URL
========================================================= */

function checkGenreFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const genre =
        params.get(
            "genre"
        );


    const gameId =
        params.get(
            "game"
        );


    /*
       Open specific game
    */

    if (gameId) {

        const game =
            games.find(
                function (item) {

                    return item.id ===
                        Number(gameId);

                }
            );


        if (game) {

            displayGames(
                games
            );


            setTimeout(
                function () {

                    openGameWithProgress(
                        game.id
                    );

                },
                300
            );


            return;

        }

    }


    /*
       No Genre
    */

    if (!genre) {

        displayGames();

        return;

    }


    const genreFilter =
        document.getElementById(
            "genreFilter"
        );


    if (genreFilter) {

        genreFilter.value =
            genre;

    }


    const filteredGames =
        games.filter(
            function (game) {

                return game.genre ===
                    genre;

            }
        );


    displayGames(
        filteredGames
    );


    updateFilterStatus(
        filteredGames
    );

}


/* =========================================================
   OPEN GAME WITH LOADING PROGRESS
========================================================= */

function openGameWithProgress(
    gameId
) {

    const game =
        games.find(
            function (item) {

                return item.id ===
                    Number(gameId);

            }
        );


    if (!game) {

        return;

    }


    const loading =
        document.getElementById(
            "gameLoading"
        );


    const progressBar =
        document.getElementById(
            "gameProgressBar"
        );


    const progressText =
        document.getElementById(
            "gameProgressText"
        );


    /*
       ไม่มี Loading Overlay
    */

    if (!loading) {

        showGameModal(
            game
        );

        return;

    }


    loading.classList.remove(
        "d-none"
    );


    if (progressBar) {

        progressBar.style.width =
            "0%";

    }


    if (progressText) {

        progressText.textContent =
            "0%";

    }


    let progress = 0;


    const interval =
        setInterval(
            function () {

                progress += 10;


                if (progressBar) {

                    progressBar.style.width =
                        progress + "%";

                }


                if (progressText) {

                    progressText.textContent =
                        progress + "%";

                }


                if (progress >= 100) {

                    clearInterval(
                        interval
                    );


                    setTimeout(
                        function () {

                            loading.classList.add(
                                "d-none"
                            );


                            showGameModal(
                                game
                            );

                        },
                        150
                    );

                }

            },
            45
        );

}


/* =========================================================
   SHOW GAME MODAL
========================================================= */

function showGameModal(
    game
) {

    const modalElement =
        document.getElementById(
            "gameModal"
        );


    if (!modalElement) {

        return;

    }


    const image =
        document.getElementById(
            "modalGameImage"
        );


    const title =
        document.getElementById(
            "modalGameTitle"
        );


    const description =
        document.getElementById(
            "modalGameDescription"
        );


    const genre =
        document.getElementById(
            "modalGameGenre"
        );


    const rating =
        document.getElementById(
            "modalGameRating"
        );


    const ratingInfo =
        document.getElementById(
            "modalGameRatingInfo"
        );


    const mode =
        document.getElementById(
            "modalGameMode"
        );


    const time =
        document.getElementById(
            "modalGameTime"
        );


    const platform =
        document.getElementById(
            "modalGamePlatform"
        );


    if (image) {

        image.src =
            game.image;

        image.alt =
            game.title;

    }


    if (title) {

        title.textContent =
            game.title;

    }


    if (description) {

        description.textContent =
            game.description;

    }


    if (genre) {

        genre.textContent =
            game.genre;

    }


    if (rating) {

        rating.textContent =
            game.rating;

    }


    if (ratingInfo) {

        ratingInfo.textContent =
            game.rating +
            " / 10";

    }


    if (mode) {

        mode.textContent =
            game.mode;

    }


    if (time) {

        time.textContent =
            game.playTime;

    }


    if (platform) {

        platform.textContent =
            game.platform;

    }


    /*
       Modal Favorite Button
    */

    const favoriteButton =
        document.getElementById(
            "modalFavoriteButton"
        );


    if (favoriteButton) {

        favoriteButton.dataset.gameId =
            game.id;

    }


    updateFavoriteButton(
        game.id
    );


    /*
       Open Bootstrap Modal
    */

    if (
        typeof bootstrap !==
        "undefined"
    ) {

        const modal =
            bootstrap.Modal.getOrCreateInstance(
                modalElement
            );


        modal.show();

    }

}


/* =========================================================
   UPDATE MODAL FAVORITE BUTTON
========================================================= */

function updateFavoriteButton(gameId) {

    const button =
        document.getElementById(
            "modalFavoriteButton"
        );

    if (!button) {
        return;
    }

    const favorite =
        isGameFavorite(gameId);

    const icon =
        button.querySelector("i");

    if (favorite) {

        button.classList.add(
            "favorite-active"
        );

        button.innerHTML = `
            <i class="bi bi-heart-fill"></i>
            Remove from Favorites
        `;

    } else {

        button.classList.remove(
            "favorite-active"
        );

        button.innerHTML = `
            <i class="bi bi-heart"></i>
            Add to Favorites
        `;
    }
}


/* =========================================================
   DISPLAY FAVORITES
========================================================= */

function displayFavorites() {

    const container =
        document.getElementById(
            "favoriteList"
        );


    if (!container) {

        return;

    }


    const noFavorites =
        document.getElementById(
            "noFavorites"
        );


    const favorites =
        getFavorites();


    const favoriteGames =
        games.filter(
            function (game) {

                return favorites.includes(
                    game.id
                );

            }
        );


    /*
       NO FAVORITES
    */

    if (
        favoriteGames.length === 0
    ) {

        container.innerHTML =
            "";


        if (noFavorites) {

            noFavorites.classList.remove(
                "d-none"
            );

        }


        return;

    }


    if (noFavorites) {

        noFavorites.classList.add(
            "d-none"
        );

    }


    /*
       DISPLAY FAVORITES
    */

    container.innerHTML =
        favoriteGames
            .map(
                function (game) {

                    return createGameCard(
                        game
                    );

                }
            )
            .join("");


    setupGameCardKeyboard();

}


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

function setupGameCardKeyboard() {

    const cards =
        document.querySelectorAll(
            ".game-card"
        );


    cards.forEach(
        function (card) {

            if (
                card.dataset.keyboardReady
            ) {

                return;

            }


            card.addEventListener(
                "keydown",
                function (event) {

                    /*
                       ไม่ทำงานถ้า Focus อยู่
                       ที่ปุ่ม Favorite
                    */

                    if (
                        event.target.closest(
                            ".game-favorite-btn"
                        )
                    ) {

                        return;

                    }


                    if (
                        event.key ===
                        "Enter" ||
                        event.key ===
                        " "
                    ) {

                        event.preventDefault();


                        const onclick =
                            card.getAttribute(
                                "onclick"
                            );


                        if (!onclick) {

                            return;

                        }


                        const match =
                            onclick.match(
                                /openGameWithProgress\((\d+)\)/
                            );


                        if (!match) {

                            return;

                        }


                        openGameWithProgress(
                            Number(
                                match[1]
                            )
                        );

                    }

                }
            );


            card.dataset.keyboardReady =
                "true";

        }
    );

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =====================================
           GAMES PAGE
        ===================================== */

        if (
            document.getElementById(
                "gameList"
            )
        ) {

            checkGenreFromURL();


            /*
               Search
            */

            const searchInput =
                document.getElementById(
                    "gameSearch"
                );


            if (searchInput) {

                searchInput.addEventListener(
                    "input",
                    filterGames
                );

            }


            /*
               Genre Filter
            */

            const genreFilter =
                document.getElementById(
                    "genreFilter"
                );


            if (genreFilter) {

                genreFilter.addEventListener(
                    "change",
                    filterGames
                );

            }


            /*
               Mode Filter
            */

            const modeFilter =
                document.getElementById(
                    "modeFilter"
                );


            if (modeFilter) {

                modeFilter.addEventListener(
                    "change",
                    filterGames
                );

            }


            /*
               Time Filter
            */

            const timeFilter =
                document.getElementById(
                    "timeFilter"
                );


            if (timeFilter) {

                timeFilter.addEventListener(
                    "change",
                    filterGames
                );

            }

        }


        /* =====================================
           FAVORITES PAGE
        ===================================== */

        if (
            document.getElementById(
                "favoriteList"
            )
        ) {

            displayFavorites();

        }


    }
);