const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAymj-OCHVdu412TjOKku_jjXTImEXwyd3TPRCPYvRhaMf6Fry0M7Bde_dUV6ng10XktB3_yKXhtKF/pub?output=tsv";
const flags = {
    "Вьетнам (Vietnam)": "https://flagcdn.com/w80/vn.png",
    "Россия (Russia)": "https://flagcdn.com/w80/ru.png",
    "Монголия (Mongolia)": "https://flagcdn.com/w80/mn.png",
    "Мексика (Mexico)": "https://flagcdn.com/w80/mx.png",
    "Узбекистан (Uzbekistan)": "https://flagcdn.com/w80/uz.png",
    "Мадагаскар (Madagascar)": "https://flagcdn.com/w80/mg.png",
    "Казахстан (Kazakhstan)": "https://flagcdn.com/w80/kz.png",
    "Марокко (Morocco)": "https://flagcdn.com/w80/ma.png",
    "Экваториальная Гвинея (Equatorial Guinea)": "https://flagcdn.com/w80/gq.png",
    "Конго (Congo)": "https://flagcdn.com/w80/cg.png",
    "Босния и Герцеговина (Bosnia and Herzegovina)": "https://flagcdn.com/ba.svg",
    "Испания (Spain)": "https://flagcdn.com/w80/es.png",
    "Туркменистан (Turkmenistan)": "https://flagcdn.com/w80/tm.png",
    "Чад (Chad)": "https://flagcdn.com/w80/td.png",
    "Турция (Turkey)": "https://flagcdn.com/w80/tr.png",
    "Республика Конго (Republic of the Congo)": "https://flagcdn.com/w80/cg.png",
    "Ливан (Lebanon)": "https://flagcdn.com/w80/lb.png"
};

const countryIcons = {
    "Казахстан (Kazakhstan)": "icon/kazakhstan-icon.png",
    "Мадагаскар (Madagascar)": "icon/madagascar-icon.png",
    "Мексика (Mexico)": "icon/mexico-icon.png",
    "Монголия (Mongolia)": "icon/mongolia-icon.png",
    "Марокко (Morocco)": "icon/morocco-icon.png",
    "Россия (Russia)": "icon/russia-icon.png",
    "Испания (Spain)": "icon/spain-icon.png",
    "Турция (Turkey)": "icon/turkish-icon.png",
    "Узбекистан (Uzbekistan)": "icon/uzbekistan-icon.png",
    "Вьетнам (Vietnam)": "icon/vietnam-icon.png"
};
const countryIconClasses = {
    "Турция (Turkey)": "country-icon--turkey",
    "Узбекистан (Uzbekistan)": "country-icon--uzbekistan",
    "Монголия (Mongolia)": "country-icon--mongolia",
    "Вьетнам (Vietnam)": "country-icon--vietnam",
    "Испания (Spain)": "country-icon--spain"
};

const countryColors = {
    "Вьетнам (Vietnam)": "#f8dada",
    "Россия (Russia)": "#dce7f6",
    "Монголия (Mongolia)": "#f5dfe3",
    "Мексика (Mexico)": "#dfeee0",
    "Узбекистан (Uzbekistan)": "#dff1f4",
    "Мадагаскар (Madagascar)": "#edf3e8",
    "Казахстан (Kazakhstan)": "#dff2f8",
    "Марокко (Morocco)": "#e5f0e3",
    "Экваториальная Гвинея (Equatorial Guinea)": "#dff0e5",
    "Конго (Congo)": "#e7efd9",
    "Босния и Герцеговина (Bosnia and Herzegovina)": "#ece6c9",
    "Испания (Spain)": "#f7e7d2",
    "Туркменистан (Turkmenistan)": "#e6efe3",
    "Чад (Chad)": "#dfe5f4",
    "Турция (Turkey)": "#f2d8d8",
"Республика Конго (Republic of the Congo)": "#e7efd9",
"Ливан (Lebanon)": "#e8f0df"
};

function makeStampRing(countryName) {
    const base = `${countryName} ★ RUDN ★ 2026 ★ `;
    let result = "";

    while (result.length < 90) {
        result += base;
    }

    return result.trim();
}

function makeLongStampRing(countryName) {
    const base = `${countryName} ★ RUDN ★ 2026 ★ `;
    let result = base;

    while (result.length < 90) {
        result += "RUDN ★ 2026 ★ ";
    }

    return result.trim();
}
const countryStamps = {
    "Вьетнам (Vietnam)": { center: "VIETNAM", ring: makeStampRing("VIETNAM"), centerSize: 15, ringSize: 7.2 },
    "Россия (Russia)": { center: "RUSSIA", ring: makeStampRing("RUSSIA"), centerSize: 16, ringSize: 7.2 },
    "Монголия (Mongolia)": {
        centerLine1: "MON",
        centerLine2: "GOLIA",
        ring: makeStampRing("MONGOLIA"),
        centerSize: 14,
        ringSize: 6.5
    },
    "Мексика (Mexico)": { center: "MEXICO", ring: makeStampRing("MEXICO"), centerSize: 16, ringSize: 7.2 },
    "Узбекистан (Uzbekistan)": {
        centerLine1: "UZBEK",
        centerLine2: "ISTAN",
        ring: makeStampRing("UZBEKISTAN"),
        centerSize: 13,
        ringSize: 6.2
    },
    "Мадагаскар (Madagascar)": {
        centerLine1: "MADA",
        centerLine2: "GASCAR",
        ring: makeStampRing("MADAGASCAR"),
        centerSize: 13,
        ringSize: 6.2
    },
    "Казахстан (Kazakhstan)": {
        centerLine1: "KAZAKH",
        centerLine2: "STAN",
        ring: makeStampRing("KAZAKHSTAN"),
        centerSize: 13,
        ringSize: 6.2
    },
    "Марокко (Morocco)": {
        centerLine1: "MO",
        centerLine2: "ROCCO",
        ring: makeStampRing("MOROCCO"),
        centerSize: 14,
        ringSize: 6.5
    },
    "Экваториальная Гвинея (Equatorial Guinea)": {
        center: "GNQ",
        ring: makeLongStampRing("EQUATORIAL GUINEA"),
        centerSize: 22,
        ringSize: 6
    },
    "Конго (Congo)": { center: "CONGO", ring: makeStampRing("CONGO"), centerSize: 16, ringSize: 7.2 },
    "Босния и Герцеговина (Bosnia and Herzegovina)": {
        center: "BIH",
        ring: makeLongStampRing("BOSNIA AND HERZEGOVINA"),
        centerSize: 22,
        ringSize: 5.8
    },
    "Испания (Spain)": { center: "SPAIN", ring: makeStampRing("SPAIN"), centerSize: 17, ringSize: 7.2 },
    "Туркменистан (Turkmenistan)": {
        centerLine1: "TURKMEN",
        centerLine2: "ISTAN",
        ring: makeStampRing("TURKMENISTAN"),
        centerSize: 12,
        ringSize: 6.1
    },
    "Чад (Chad)": { center: "CHAD", ring: makeStampRing("CHAD"), centerSize: 18, ringSize: 7.2 },
    "Турция (Turkey)": { center: "TURKEY", ring: makeStampRing("TURKEY"), centerSize: 16, ringSize: 7.2 },
    "Республика Конго (Republic of the Congo)": { center: "CONGO", ring: makeStampRing("REPUBLIC OF THE CONGO"), centerSize: 14, ringSize: 6.2 },
"Ливан (Lebanon)": { center: "LEBANON", ring: makeStampRing("LEBANON"), centerSize: 13, ringSize: 6.8 },
    "Mục khác": { center: "RUDN", ring: makeStampRing("FROM RUDN TO THE WORLD"), centerSize: 20, ringSize: 5.8 }
};

const countryMaps = {
    "Вьетнам (Vietnam)": { src: "map/vietnam.svg" },
    "Россия (Russia)": { src: "map/russia.svg" },
    "Mục khác": { src: "rudn-logo.png" },
    "Монголия (Mongolia)": { src: "map/mongolia.svg" },
    "Мексика (Mexico)": { src: "map/mexico.svg" },
    "Узбекистан (Uzbekistan)": { src: "map/uzbekistan.svg" },
    "Марокко (Morocco)": { src: "map/morocco.svg" },
    "Экваториальная Гвинея (Equatorial Guinea)": { src: "map/guinea.svg" },
    "Конго (Congo)": { src: "map/congo.svg" },
    "Казахстан (Kazakhstan)": { src: "map/kazakhstan.svg" },
    "Босния и Герцеговина (Bosnia and Herzegovina)": { src: "map/bosnia.svg" },
    "Испания (Spain)": { src: "map/spain.svg" },
    "Мадагаскар (Madagascar)": { src: "map/madagascar.svg" },
    "Туркменистан (Turkmenistan)": { src: "map/turkmenistan.svg" },
    "Чад (Chad)": { src: "map/chad.svg" },
    "Турция (Turkey)": { src: "map/turkey.svg" },
    "Республика Конго (Republic of the Congo)": { src: "map/congo.svg" }
"Ливан (Lebanon)": { src: "map/lebanon.svg" }
};
let people = [];

function driveImage(url) {
    if (!url) return "";

    let match = url.match(/id=([^&]+)/);

    if (!match) {
        match = url.match(/\/d\/([^/]+)/);
    }

    if (match && match[1]) {
        return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
    }

    return url;
}

function splitLinks(text) {
    if (!text) return [];

    return text
        .split(/,|\n/)
        .map(link => link.trim())
        .filter(Boolean);
}

function parseTSV(tsv) {
    const rows = tsv
        .trim()
        .split(/\r?\n/)
        .map(row => row.split("\t"));

    const headers = rows[0].map(header => header.trim());

    return rows.slice(1).map(row => {
        const obj = {};

        headers.forEach((header, index) => {
            obj[header] = row[index] ? row[index].trim() : "";
        });

        return obj;
    });
}
const countryAliases = {
    "Việt Nam": "Вьетнам (Vietnam)",
    "Nga": "Россия (Russia)",
    "Mông Cổ": "Монголия (Mongolia)",
    "Mexico": "Мексика (Mexico)",
    "Uzbekistan": "Узбекистан (Uzbekistan)",
    "Madagascar": "Мадагаскар (Madagascar)",
    "Kazakhstan": "Казахстан (Kazakhstan)",
    "Maroc": "Марокко (Morocco)",
    "Guinea Xích Đạo": "Экваториальная Гвинея (Equatorial Guinea)",
    "Congo": "Конго (Congo)",
    "Bosnia và Herzegovina": "Босния и Герцеговина (Bosnia and Herzegovina)",
    "Tây Ban Nha": "Испания (Spain)",
    "Turkmenistan": "Туркменистан (Turkmenistan)",
    "Chad": "Чад (Chad)",
    "Thổ Nhĩ Kỳ": "Турция (Turkey)",
    "Cộng hoà Congo": "Республика Конго (Republic of the Congo)",
"Lebanon": "Ливан (Lebanon)",
"Li-băng": "Ливан (Lebanon)",
    "Mục khác": "Mục khác"
};
function normalizePerson(row) {
console.log(Object.keys(row));
  const rawCountry = (
    row["Гражданство (Nationality)"] ||
    row["Quốc tịch"] ||
    ""
).trim();

const country = countryAliases[rawCountry] || rawCountry;

const defaultStamp =
    countryStamps["Mục khác"] ||
    countryStamps["Другое"] ||
    countryStamps["Other"];

const defaultMap =
    countryMaps["Mục khác"] ||
    countryMaps["Другое"] ||
    countryMaps["Other"];

return {
    time:
        row["Отметка времени"] ||
        row["Timestamp"] ||
        row["Dấu thời gian"] ||
        "",

    stamp: countryStamps[country] || defaultStamp,
        name: row["ФИО (Full name)"],

        avatar:
            driveImage(row["Фотография профиля (Profile photo)"]) ||
            "https://placehold.co/600x800/f7f1e3/1f5f6e?text=GMObd-07-22",

        country: country,
mapClass:
    [
        "Россия (Russia)",
        "Мексика (Mexico)",
        "Монголия (Mongolia)",
        "Турция (Turkey)",
        "Казахстан (Kazakhstan)",
        "Туркменистан (Turkmenistan)",
        "Узбекистан (Uzbekistan)"
    ].includes(country)
        ? "country-watermark--wide"
        : "country-watermark--tall",
        flag: flags[country] || "rudn-logo.png",

        map:
    countryMaps[country] ||
    defaultMap ||
    {
        src: "rudn-logo.png",
        top: "420px",
        right: "60px",
        width: "45%"
    },

        shortMessage:
            row["Напишите короткое пожелание или сообщение, которым вы хотели бы поделиться со своими одногруппниками. Вы можете использовать любой язык. (Write a short greeting or message you would like to share with your classmates. You may use any language.)"] || "",

        explanation:
            row["Если вы хотите поделиться значением или историей, стоящей за вашим сообщением, пожалуйста, напишите её на русском или английском языке. (If you would like to share the meaning or story behind your message, please write it in Russian or English.)"] || "",

        publicMessage:
            row["Чем бы вы хотели поделиться со своими одногруппниками? (What would you like to share with your classmates?)"] || "",

        privateMessage:
            row["Спасибо, что нашли время заполнить эту анкету. Если вы хотите поделиться воспоминанием, впечатлением или просто оставить несколько слов лично человеку, который подготовил этот выпускной альбом, вы можете сделать это здесь. Это сообщение не будет опубликовано на сайте."] || "",

        facebook: row["Facebook"] || "",
        instagram: row["Instagram"] || "",
        gmail: row["Gmail"] || "",

        otherContact:
            row["Другой способ связи (Other contact method)"] || "",

        rudnPhotos: splitLinks(
            row["Есть ли у вас фотографии, которыми вы хотели бы поделиться, вспоминая время, проведённое в РУДН? (До 5 фотографий)"]
        ).map(driveImage)
    };
}
function flagMarkup(person, className) {
    const flag = person.flag || "🌍";

    if (
        typeof flag === "string" &&
        (
            flag.startsWith("http") ||
            flag.endsWith(".png") ||
            flag.endsWith(".jpg") ||
            flag.endsWith(".svg")
        )
    ) {
        return `<img class="${className}" src="${flag}" alt="${person.country || "Flag"}">`;
    }

    return `<span class="${className} ${className}--emoji"
        role="img"
        aria-label="${person.country || "Country"}">
        ${flag}
    </span>`;
}

function countryStampMarkup(person) {
    const stamp = person.stamp || {
        center: "RUDN",
        ring: "FROM RUDN TO THE WORLD",
        centerSize: 20,
        ringSize: 6
    };

    const id = `stampPath-${Math.random().toString(36).slice(2)}`;

    return `
        <svg class="country-stamp" viewBox="0 0 120 120" aria-hidden="true">
            <defs>
                <path id="${id}" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
            </defs>

            <circle class="country-stamp-outer" cx="60" cy="60" r="55"></circle>
            <circle class="country-stamp-inner" cx="60" cy="60" r="39"></circle>

            <text class="country-stamp-ring" style="font-size:${stamp.ringSize}px;">
                <textPath href="#${id}" startOffset="50%" text-anchor="middle">
                    ★ ${stamp.ring} ★
                </textPath>
            </text>

            ${
                stamp.centerLine1
                    ? `
                        <text class="country-stamp-center"
                              text-anchor="middle"
                              style="font-size:${stamp.centerSize}px;">
                            <tspan x="60" y="55">${stamp.centerLine1}</tspan>
                            <tspan x="60" y="69">${stamp.centerLine2}</tspan>
                        </text>
                    `
                    : `
                        <text class="country-stamp-center"
                              x="60"
                              y="64"
                              text-anchor="middle"
                              style="font-size:${stamp.centerSize}px;">
                            ${stamp.center}
                        </text>
                    `
            }           
       </svg>
    `;
}
    
function getItemsPerPage() {
    const width = window.innerWidth;

    if (width >= 1600) return 4;
    if (width >= 1200) return 3;
    if (width >= 850) return 2;

    return 1;
}
let currentPage = 1;
let viewMode = "read";

function renderCards() {
    const container = document.getElementById("cards-container");
    const left = document.getElementById("pagination-left");
    const right = document.getElementById("pagination-right");

    container.innerHTML = "";

    if (viewMode === "overview") {
        document.body.classList.add("overview-mode");
        document.body.classList.remove("gallery-mode");
        document.body.classList.remove("wishwall-mode");

        left.innerHTML = "";
        right.innerHTML = "";

        people.forEach((person, realIndex) => {
            const card = document.createElement("article");

            card.className = "card overview-card";
            card.setAttribute("tabindex", "0");
            card.setAttribute("role", "button");
            card.setAttribute("aria-label", `Open ${person.name}'s page`);

            card.innerHTML = `
                ${flagMarkup(person, "overview-flag")}

                <div class="overview-avatar-frame">
                    <img class="overview-avatar" src="${person.avatar}" alt="${person.name}" loading="lazy">
                </div>

                <div class="overview-name">
                    ${person.name}
                </div>
            `;

            card.addEventListener("click", () => {
                showDetail(realIndex);
            });

            card.addEventListener("keydown", event => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    showDetail(realIndex);
                }
            });

            container.appendChild(card);
        });

        return;
    }
    if (viewMode === "gallery") {
    document.body.classList.remove("overview-mode");
    document.body.classList.add("gallery-mode");
    document.body.classList.remove("wishwall-mode");

    left.innerHTML = "";
    right.innerHTML = "";

    const allPhotos = [];

    people.forEach(person => {
        person.rudnPhotos.forEach(photo => {
            allPhotos.push({
                photo,
                name: person.name,
                country: person.country
            });
        });
    });

    container.innerHTML = `
        <div class="all-gallery">
            ${
                allPhotos.length
                    ? allPhotos.map(item => `
                        <div class="all-gallery-item">
                            <img class="gallery-photo"
                                 src="${item.photo}"
                                 alt="RUDN photo of ${item.name}"
                                 loading="lazy"
                                 data-full="${item.photo}">

                            <p>${item.name}</p>

                            <span>${item.country || ""}</span>
                        </div>
                    `).join("")
                    : `<p class="loading-text">No photos yet.</p>`
            }
        </div>
    `;

    enableGalleryLightbox();

    return;
}
if (viewMode === "wishwall") {
    document.body.classList.remove("overview-mode");
    document.body.classList.remove("gallery-mode");
    document.body.classList.add("wishwall-mode");

    left.innerHTML = "";
    right.innerHTML = "";

    container.innerHTML = `
        <div class="wish-wall">
            ${people.map((person, index) => `
                <article class="wish-wall-item ${index % 2 === 0 ? "from-left" : "from-right"}">
                    <div class="wish-avatar-wrap">
                        <img class="wish-avatar" src="${person.avatar}" alt="${person.name}" loading="lazy">
                    </div>

                    <div class="wish-bubble"
     style="
        --wish-color: ${countryColors[person.country] || "#ececec"};
     ">
                        <div class="wish-meta">
<img class="wish-flag"
     src="${person.flag}"
     alt="${person.country}"
     loading="lazy">
                            <strong>
    ${person.name || "GMObd-07-22"}
    ${person.country ? ` - ${person.country}` : ""}
</strong>
                        </div>

                        <p>
                            ${person.shortMessage || "..."}
                        </p>
                    </div>
                </article>
            `).join("")}
        </div>
    `;

    return;
}
   document.body.classList.remove("overview-mode");
document.body.classList.remove("gallery-mode");
document.body.classList.remove("wishwall-mode");

const itemsPerPage = getItemsPerPage();

const start = (currentPage - 1) * itemsPerPage;
const end = start + itemsPerPage;

const pagePeople = people.slice(start, end);

pagePeople.forEach((person, pageIndex) => {
    const realIndex = start + pageIndex;
    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `
        ${flagMarkup(person, "flag")}
        ${countryStampMarkup(person)}

        <div class="avatar-frame">
            <img class="avatar" src="${person.avatar}" alt="${person.name}" loading="lazy">
        </div>

        <h2>${person.name}</h2>

        <p class="short-message">
            “${
                person.shortMessage && person.shortMessage.length > 50
                    ? person.shortMessage.slice(0, 50) + "..."
                    : person.shortMessage || "..."
            }”
        </p>

        <p class="preview">
            ${
                person.publicMessage && person.publicMessage.length > 120
                    ? person.publicMessage.slice(0, 120) + "..."
                    : person.publicMessage || ""
            }
        </p>

        <button class="more-button" data-index="${realIndex}">
            Read More →
        </button>
    `;

    container.appendChild(card);
});

document.querySelectorAll(".more-button").forEach(button => {
    button.addEventListener("click", () => {
        showDetail(Number(button.dataset.index));
    });
});

renderPagination();
adjustPreviewLines();
}
function renderPagination() {
    const left = document.getElementById("pagination-left");
    const right = document.getElementById("pagination-right");

    const itemsPerPage = getItemsPerPage();
    const totalPages = Math.ceil(people.length / itemsPerPage);

    left.innerHTML = "";
    right.innerHTML = "";

    if (totalPages <= 1) return;

    left.innerHTML = `
        <button class="side-pagination" id="prevPage" ${currentPage === 1 ? "disabled" : ""}>
            ←
        </button>
    `;

    right.innerHTML = `
        <button class="side-pagination" id="nextPage" ${currentPage === totalPages ? "disabled" : ""}>
            →
        </button>
    `;

    document.getElementById("prevPage").addEventListener("click", () => {
        if (currentPage > 1) {
            const currentScroll = window.scrollY;
            currentPage--;
            renderCards();

            requestAnimationFrame(() => {
                window.scrollTo(0, currentScroll);
            });
        }

    });

    document.getElementById("nextPage").addEventListener("click", () => {
        if (currentPage < totalPages) {
            const currentScroll = window.scrollY;
            currentPage++;
            renderCards();

            requestAnimationFrame(() => {
                window.scrollTo(0, currentScroll);
            });
        }
    });
}
function adjustPreviewLines() {
    document.querySelectorAll(".card").forEach(card => {
        const preview = card.querySelector(".preview");
        const button = card.querySelector(".more-button");

        if (!preview || !button) return;

        const previewStyle = window.getComputedStyle(preview);
        const lineHeight = parseFloat(previewStyle.lineHeight);

        const cardBottom = card.getBoundingClientRect().bottom;
        const buttonTop = button.getBoundingClientRect().top;

        const availableHeight = buttonTop - preview.getBoundingClientRect().top - 12;

        const lines = Math.max(1, Math.floor(availableHeight / lineHeight));

        preview.style.webkitLineClamp = lines;
    });
}

function setupViewButtons() {
    const readButton = document.getElementById("read-view-button");
    const overviewButton = document.getElementById("class-view-button");
    const galleryButton = document.getElementById("gallery-view-button");
const wishWallButton = document.getElementById("wish-wall-view-button");
    const sidebar = document.getElementById("view-sidebar");
    const sidebarToggle = document.getElementById("view-sidebar-toggle");
   if (!readButton || !overviewButton || !galleryButton || !wishWallButton) return;

    if (sidebar && sidebarToggle) {
        sidebarToggle.onclick = (e) => {
    e.stopPropagation();

    sidebar.classList.toggle("is-open");
};
const panel = sidebar.querySelector(".view-sidebar-panel");

panel.addEventListener("click", (e) => {
    e.stopPropagation();
});
document.addEventListener("click", () => {
    sidebar.classList.remove("is-open");
});
    }

    readButton.onclick = () => {
    viewMode = "read";

    readButton.classList.add("active");
    overviewButton.classList.remove("active");
    galleryButton.classList.remove("active");
    wishWallButton.classList.remove("active");

    renderCards();
};

overviewButton.onclick = () => {
    viewMode = "overview";

    overviewButton.classList.add("active");
    readButton.classList.remove("active");
    galleryButton.classList.remove("active");
    wishWallButton.classList.remove("active");

    renderCards();
};

galleryButton.onclick = () => {
    viewMode = "gallery";

    galleryButton.classList.add("active");
    readButton.classList.remove("active");
    overviewButton.classList.remove("active");
    wishWallButton.classList.remove("active");

    renderCards();
};

wishWallButton.onclick = () => {
    viewMode = "wishwall";

    wishWallButton.classList.add("active");
    readButton.classList.remove("active");
    overviewButton.classList.remove("active");
    galleryButton.classList.remove("active");

    renderCards();
};
}

function showDetail(index) {
    const person = people[index];

    document.getElementById("home-page").classList.add("hidden");
    document.getElementById("detail-page").classList.remove("hidden");

    const galleryHtml =
        person.rudnPhotos.length > 0
            ? `
                <div class="gallery">
                    ${person.rudnPhotos
                        .map(photo =>
                            `<img class="gallery-photo" src="${photo}" alt="RUDN photo" loading="lazy" data-full="${photo}">`
                        )
                        .join("")}
                </div>
            `
            : "<p class=\"empty-note\">No moments shared yet.</p>";

    const contactHtml = `
        ${person.facebook ? `<p><strong>Facebook:</strong> ${person.facebook}</p>` : ""}
        ${person.instagram ? `<p><strong>Instagram:</strong> ${person.instagram}</p>` : ""}
        ${person.gmail ? `<p><strong>Email:</strong> ${person.gmail}</p>` : ""}
        ${person.otherContact ? `<p><strong>Other:</strong> ${person.otherContact}</p>` : ""}
    `;

    document.getElementById("detail-container").innerHTML = `
    <article class="detail-card">

        <span class="postmark" aria-hidden="true">РУДН<br>ГМОБд<br>07-22</span>

<img
    class="country-watermark"
    src="${person.map.src}"
    alt=""
>

        <div class="detail-header">

            <div class="detail-avatar-frame">
                <img class="detail-avatar" src="${person.avatar}" alt="${person.name}">
            </div>

            <div class="detail-title">

                <h2>${person.name}</h2>

                <p class="detail-country">
                    ${flagMarkup(person, "detail-flag")}
                    <span>${person.country || ""}</span>
                </p>

            </div>

        </div>

        <section class="detail-section">

<h3>Послание / Message</h3>
            <p class="detail-quote">
                “${person.shortMessage || "..."}”
            </p>

            ${person.explanation ? `<p>${person.explanation}</p>` : ""}

        </section>

        <section class="detail-section">

           <h3>Размышления / Reflections</h3>

            <p>${person.publicMessage || ""}</p>

        </section>

        <section class="detail-section">

            <h3>Контакты / Contacts</h3>

            ${
                contactHtml.trim()
                    ? contactHtml
                    : "<p class=\"empty-note\">No public contact information provided.</p>"
            }

        </section>

        <section class="detail-section rudn-photos-section">

    <h3>Моменты в РУДН / Moments at RUDN</h3>

    ${galleryHtml}

</section>

        ${
    countryIcons[person.country]
        ? `
            <img
    class="country-icon ${countryIconClasses[person.country] || ""}"
    src="${countryIcons[person.country]}"
    alt="${person.country}"
>
        `
        : ""
}

        </article>
    `;
function positionWatermark() {
    const card = document.querySelector(".detail-card");
    const watermark = document.querySelector(".country-watermark");
    const country = document.querySelector(".detail-country");
    const photos = document.querySelector(".detail-section:last-of-type");

    if (!card || !watermark || !country || !photos) return;

    const cardRect = card.getBoundingClientRect();
    const countryRect = country.getBoundingClientRect();
    const photosRect = photos.getBoundingClientRect();

    const start = countryRect.bottom - cardRect.top + 40;
    const end = photosRect.top - cardRect.top - 20;
    const availableHeight = Math.max(220, end - start);

    watermark.style.top = `${start}px`;
    watermark.style.height = `${availableHeight}px`;
    watermark.style.width = `82%`;
}
    enableGalleryLightbox();
positionWatermark();
    window.scrollTo(0, 0);
}

function enableGalleryLightbox() {
    const lightbox = document.getElementById("image-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeButton = document.getElementById("lightbox-close");
lightbox.classList.remove("is-open");
lightboxImg.src = "";
    document.querySelectorAll(".gallery-photo").forEach(photo => {
        photo.onclick = () => {
            lightboxImg.src = photo.src;
            lightbox.classList.add("is-open");
        };
    });

    closeButton.onclick = () => {
        lightbox.classList.remove("is-open");
        lightboxImg.src = "";
    };

    lightbox.onclick = event => {
        if (event.target === lightbox) {
            lightbox.classList.remove("is-open");
            lightboxImg.src = "";
        }
    };
}

document
    .getElementById("back-button")
    .addEventListener("click", () => {
        document.getElementById("detail-page").classList.add("hidden");
        document.getElementById("home-page").classList.remove("hidden");

        window.scrollTo(0, 0);
    });

fetch(SHEET_URL)
    .then(response => response.text())
    .then(tsv => {
        people = parseTSV(tsv).map(normalizePerson).reverse();
        setupViewButtons();
        renderCards();
    })
    .catch(error => {
        document.getElementById("cards-container").innerHTML =
            "<p class=\"loading-text\">Failed to load data.</p>";

        console.error(error);
    });

let lastItemsPerPage = getItemsPerPage();

window.addEventListener("resize", () => {
    const newItemsPerPage = getItemsPerPage();

    if (viewMode === "read" && newItemsPerPage !== lastItemsPerPage) {
        lastItemsPerPage = newItemsPerPage;
        renderCards();
        return;
    }

    adjustPreviewLines();
});
