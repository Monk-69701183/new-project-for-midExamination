// =========================================
// GAME FINDER
// games.js
// =========================================


// =========================================
// GAME DATA
// =========================================

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
            "ออกล่าเหล่ามอนสเตอร์ในโลกอันกว้างใหญ่ พร้อมสำรวจพื้นที่ต่าง ๆ และร่วมมือกับเพื่อนของคุณ"
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
            "เกม Looter Shooter แบบ Third-Person Shooting ที่มาพร้อมตัวละครหลากหลายและระบบการต่อสู้ที่รวดเร็ว"
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
            "ผจญภัยในโลกเปิดขนาดใหญ่ พบกับศัตรูมากมาย การต่อสู้ที่ท้าทาย และเรื่องราวที่รอให้คุณค้นพบ"
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
            "สร้างฟาร์ม ใช้ชีวิตในชนบท ทำความรู้จักผู้คน และค้นพบเรื่องราวต่าง ๆ ภายในเมือง"
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
            "ต่อสู้ฝ่าด่านใต้พิภพด้วยรูปแบบการเล่นที่รวดเร็ว พร้อมค้นพบเรื่องราวของตัวละครไปพร้อมกับการเล่น"
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
            "ร่วมทีมกับผู้เล่นคนอื่นและต่อสู้เพื่อปกป้อง Super Earth ผ่านภารกิจสุดวุ่นวายแบบ Co-op"
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



// =========================================
// FAVORITES
// =========================================

function getFavorites() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "gameFinderFavorites"
            )
        ) || [];

    } catch (error) {

        return [];

    }

}



function saveFavorites(favorites) {

    localStorage.setItem(
        "gameFinderFavorites",
        JSON.stringify(favorites)
    );

}



// =========================================
// DISPLAY GAME CARDS
// =========================================

function displayGames(gameList = games) {

    const container =
        document.getElementById(
            "gameList"
        );


    if (!container) {

        return;

    }


    // =====================================
    // NO RESULT
    // =====================================

    if (
        !Array.isArray(gameList) ||
        gameList.length === 0
    ) {

        document.getElementById(
            "noResults"
        ).classList.remove("d-none");

        container.innerHTML = ``;

        updateGameCount();

        return;

    } else {
        document.getElementById(
            "noResults"
        ).classList.add("d-none");
    }



    // =====================================
    // GAME CARDS
    // =====================================

    container.innerHTML =
        gameList.map(
            function (game) {

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
        ).join("");


    updateGameCount();

}



// =========================================
// UPDATE GAME COUNT
// =========================================

function updateGameCount() {

    const container =
        document.getElementById(
            "gameList"
        );


    const gameCount =
        document.getElementById(
            "gameCount"
        );


    const filterStatus =
        document.getElementById(
            "filterStatus"
        );


    if (!container) {

        return;

    }


    const cards =
        container.querySelectorAll(
            ".game-card"
        );


    const count =
        cards.length;


    if (gameCount) {

        gameCount.textContent =
            count +
            " Game" +
            (count !== 1 ? "s" : "");

    }


    if (filterStatus) {

        const statusText =
            filterStatus.querySelector(
                "div span"
            );


        if (statusText) {

            if (count === games.length) {

                statusText.textContent =
                    "Showing all games";

            } else {

                statusText.textContent =
                    "Showing filtered games";

            }

        }

    }

}



// =========================================
// FILTER GAMES
// =========================================

function filterGames() {

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


    // =====================================
    // GET VALUES
    // =====================================

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


    const time =
        timeFilter
            ? timeFilter.value
            : "";



    // =====================================
    // FILTER
    // =====================================

    const filteredGames =
        games.filter(
            function (game) {


                const matchSearch =

                    game.title
                        .toLowerCase()
                        .includes(search)

                    ||

                    game.genre
                        .toLowerCase()
                        .includes(search);



                const matchGenre =

                    !genre ||
                    game.genre === genre;



                const matchMode =

                    !mode ||
                    game.mode === mode;



                const matchTime =

                    !time ||
                    game.playTime === time;



                return (

                    matchSearch &&
                    matchGenre &&
                    matchMode &&
                    matchTime

                );

            }
        );



    // =====================================
    // DISPLAY RESULT
    // =====================================

    displayGames(
        filteredGames
    );


}



// =========================================
// RESET FILTERS
// =========================================

function resetFilters() {

    const search =
        document.getElementById(
            "gameSearch"
        );


    const genre =
        document.getElementById(
            "genreFilter"
        );


    const mode =
        document.getElementById(
            "modeFilter"
        );


    const time =
        document.getElementById(
            "timeFilter"
        );


    if (search) {

        search.value = "";

    }


    if (genre) {

        genre.value = "";

    }


    if (mode) {

        mode.value = "";

    }


    if (time) {

        time.value = "";

    }


    // =====================================
    // REMOVE URL PARAMETER
    // =====================================

    if (
        window.location.search
    ) {

        window.history.replaceState(
            {},
            document.title,
            "games.html"
        );

    }


    displayGames(
        games
    );

}



// =========================================
// CHECK GENRE FROM URL
// =========================================

function checkGenreFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const genre =
        params.get(
            "genre"
        );


    // =====================================
    // NO GENRE
    // =====================================

    if (!genre) {

        displayGames(
            games
        );

        return;

    }



    // =====================================
    // SET SELECT VALUE
    // =====================================

    const genreFilter =
        document.getElementById(
            "genreFilter"
        );


    if (genreFilter) {

        genreFilter.value =
            genre;

    }



    // =====================================
    // FILTER
    // =====================================

    const filteredGames =
        games.filter(
            function (game) {

                return game.genre === genre;

            }
        );


    displayGames(
        filteredGames
    );

}



// =========================================
// OPEN GAME
// PROGRESS BAR → MODAL
// =========================================

function openGameWithProgress(
    gameId
) {

    const game =
        games.find(
            function (item) {

                return item.id === gameId;

            }
        );


    if (!game) {

        return;

    }



    const progressContainer =
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



    // =====================================
    // FALLBACK
    // =====================================

    if (
        !progressContainer ||
        !progressBar
    ) {

        showGameModal(
            game
        );

        return;

    }



    // =====================================
    // SHOW LOADING
    // =====================================

    progressContainer.classList.remove(
        "d-none"
    );


    progressBar.style.width =
        "0%";


    progressBar.setAttribute(
        "aria-valuenow",
        "0"
    );


    if (progressText) {

        progressText.textContent =
            "0%";

    }



    // =====================================
    // PROGRESS
    // =====================================

    let progress = 0;


    const interval =
        setInterval(
            function () {

                progress += 10;


                progressBar.style.width =
                    progress + "%";


                progressBar.setAttribute(
                    "aria-valuenow",
                    progress
                );


                if (progressText) {

                    progressText.textContent =
                        progress + "%";

                }



                // =================================
                // COMPLETE
                // =================================

                if (progress >= 100) {

                    clearInterval(
                        interval
                    );


                    setTimeout(
                        function () {

                            progressContainer.classList.add(
                                "d-none"
                            );


                            showGameModal(
                                game
                            );

                        },
                        250
                    );

                }

            },
            50
        );

}



// =========================================
// SHOW GAME MODAL
// =========================================

function showGameModal(
    game
) {

    const modalElement =
        document.getElementById(
            "gameModal"
        );


    if (
        !modalElement ||
        !game
    ) {

        return;

    }



    // =====================================
    // IMAGE
    // =====================================

    const image =
        document.getElementById(
            "modalGameImage"
        );


    if (image) {

        image.src =
            game.image;

        image.alt =
            game.title;

    }



    // =====================================
    // TITLE
    // =====================================

    const title =
        document.getElementById(
            "modalGameTitle"
        );


    if (title) {

        title.textContent =
            game.title;

    }



    // =====================================
    // DESCRIPTION
    // =====================================

    const description =
        document.getElementById(
            "modalGameDescription"
        );


    if (description) {

        description.textContent =
            game.description;

    }



    // =====================================
    // GENRE
    // =====================================

    const genre =
        document.getElementById(
            "modalGameGenre"
        );


    if (genre) {

        genre.textContent =
            game.genre;

    }



    // =====================================
    // MODE
    // =====================================

    const mode =
        document.getElementById(
            "modalGameMode"
        );


    if (mode) {

        mode.textContent =
            game.mode;

    }



    // =====================================
    // PLAY TIME
    // =====================================

    const playTime =
        document.getElementById(
            "modalGameTime"
        );


    if (playTime) {

        playTime.textContent =
            game.playTime;

    }



    // =====================================
    // PLATFORM
    // =====================================

    const platform =
        document.getElementById(
            "modalGamePlatform"
        );


    if (platform) {

        platform.textContent =
            game.platform;

    }



    // =====================================
    // RATING
    // =====================================

    const rating =
        document.getElementById(
            "modalGameRating"
        );


    if (rating) {

        rating.textContent =
            game.rating;

    }


    const ratingInfo =
        document.getElementById(
            "modalGameRatingInfo"
        );


    if (ratingInfo) {

        ratingInfo.textContent =
            game.rating;

    }



    // =====================================
    // FAVORITE BUTTON
    // =====================================

    const favoriteButton =
        document.getElementById(
            "modalFavoriteButton"
        );


    if (favoriteButton) {

        favoriteButton.onclick =
            function () {

                toggleFavorite(
                    game.id
                );

            };


        updateFavoriteButton(
            game.id
        );

    }



    // =====================================
    // SHOW BOOTSTRAP MODAL
    // =====================================

    if (
        typeof bootstrap ===
        "undefined"
    ) {

        return;

    }


    const modal =
        bootstrap.Modal.getOrCreateInstance(
            modalElement
        );


    modal.show();

}



// =========================================
// OPEN MODAL BY GAME TITLE
// Used by Home Carousel
// =========================================

function goToGameModal(
    title
) {

    const game =
        games.find(
            function (item) {

                return item.title === title;

            }
        );


    if (!game) {

        return;

    }


    openGameWithProgress(
        game.id
    );

}



// =========================================
// TOGGLE FAVORITE
// =========================================

function toggleFavorite(
    gameId
) {

    let favorites =
        getFavorites();


    // =====================================
    // ALREADY FAVORITE
    // =====================================

    if (
        favorites.includes(
            gameId
        )
    ) {

        favorites =
            favorites.filter(
                function (id) {

                    return id !== gameId;

                }
            );

    }


    // =====================================
    // ADD FAVORITE
    // =====================================

    else {

        favorites.push(
            gameId
        );

    }



    // =====================================
    // SAVE
    // =====================================

    saveFavorites(
        favorites
    );



    // =====================================
    // UPDATE BUTTON
    // =====================================

    updateFavoriteButton(
        gameId
    );



    // =====================================
    // UPDATE FAVORITES PAGE
    // =====================================

    if (
        typeof displayFavorites ===
        "function"
    ) {

        displayFavorites();

    }

}



// =========================================
// UPDATE FAVORITE BUTTON
// =========================================

function updateFavoriteButton(
    gameId
) {

    const button =
        document.getElementById(
            "modalFavoriteButton"
        );


    if (!button) {

        return;

    }


    const favorites =
        getFavorites();


    if (
        favorites.includes(
            gameId
        )
    ) {

        button.innerHTML = `

            <i class="bi bi-heart-fill"></i>

            Remove Favorite

        `;

        button.classList.add(
            "favorite-active"
        );

    }


    else {

        button.innerHTML = `

            <i class="bi bi-heart"></i>

            Add Favorite

        `;

        button.classList.remove(
            "favorite-active"
        );

    }

}



// =========================================
// KEYBOARD SUPPORT
// =========================================

function setupGameCardKeyboard() {

    const container =
        document.getElementById(
            "gameList"
        );


    if (!container) {

        return;

    }


    container.addEventListener(
        "keydown",
        function (event) {

            const card =
                event.target.closest(
                    ".game-card"
                );


            if (!card) {

                return;

            }


            if (
                event.key === "Enter" ||
                event.key === " "
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


                const gameId =
                    Number(
                        match[1]
                    );


                openGameWithProgress(
                    gameId
                );

            }

        }
    );

}



// =========================================
// INITIALIZE GAMES PAGE
// =========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // =================================
        // GAMES PAGE
        // =================================

        const gameList =
            document.getElementById(
                "gameList"
            );


        if (gameList) {

            checkGenreFromURL();

            setupGameCardKeyboard();

        }


    }
);