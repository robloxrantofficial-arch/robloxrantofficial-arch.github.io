// ANIME DATABASE
const animeData = [
    {
        id: 1,
        title: "Demon Slayer",
        titleTl: "Pamatay-Demonyo",
        year: "2016",
        type: "Light Novel / Manga",
        lang: "EN / TL",
        category: ["trending", "all"],
        desc: "Tanjiro Kamado sets out to become a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon.",
        descTl: "Naglakbay si Tanjiro Kamado upang maging tagapatay ng demonyo matapos patayin ang kanyang pamilya at gawing demonyo ang kanyang kapatid na si Nezuko.",
        img: "https://images.unsplash.com/photo-1635805737730-4d59a94e5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "#"
    },
    {
        id: 2,
        title: "Jujutsu Kaisen",
        titleTl: "Jujutsu Kaisen",
        year: "2018",
        type: "Manga",
        lang: "EN / TL",
        category: ["trending", "new", "all"],
        desc: "A boy swallows a cursed talisman and becomes host to a powerful curse, joining a secret school of jujutsu sorcerers.",
        descTl: "Isang binata ang nakakain ng sumpa at naging tahanan ng malakas na sumpa, kaya sumali siya sa lihim na paaralan ng mga manggagamot ng sumpa.",
        img: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "#"
    },
    {
        id: 3,
        title: "One Piece",
        titleTl: "Isang Piraso",
        year: "1997",
        type: "Manga",
        lang: "EN / TL",
        category: ["trending", "all"],
        desc: "Monkey D. Luffy sets off on an adventure to find the ultimate treasure 'One Piece' and become King of the Pirates.",
        descTl: "Nagsimula si Monkey D. Luffy sa paghahanap ng kayamanang 'One Piece' upang maging Hari ng mga Pirata.",
        img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "#"
    },
    {
        id: 4,
        title: "Solo Leveling",
        titleTl: "Nag-iisang Pag-angat",
        year: "2016",
        type: "Light Novel / Manhwa",
        lang: "EN / TL",
        category: ["new", "all"],
        desc: "The weakest hunter in the world gets a unique ability to level up infinitely without any limits.",
        descTl: "Ang pinakamahinang mangangaso ay nakakuha ng kakaibang kakayahan na lumakas nang walang hangganan.",
        img: "https://images.unsplash.com/photo-1560972550-aba3455b5564?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "#"
    },
    {
        id: 5,
        title: "Attack on Titan",
        titleTl: "Pag-atake ng Higante",
        year: "2009",
        type: "Manga",
        lang: "EN / TL",
        category: ["all"],
        desc: "Humanity lives inside cities surrounded by enormous walls to protect themselves from giant man-eating Titans.",
        descTl: "Nakatira ang mga tao sa loob ng mga pader upang protektahan ang sarili mula sa mga higanteng kumakain ng tao.",
        img: "https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "#"
    },
    {
        id: 6,
        title: "Spy x Family",
        titleTl: "Espiya at Pamilya",
        year: "2019",
        type: "Manga",
        lang: "EN / TL",
        category: ["trending", "new", "all"],
        desc: "A spy builds a fake family for his mission, not knowing his wife is an assassin and daughter can read minds.",
        descTl: "Gumawa ng pekeng pamilya ang isang espiya para sa misyon, ngunit hindi niya alam na ang asawa niya ay mamamatay-tao at ang anak ay nakakabasa ng isip.",
        img: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "#"
    }
];

// LANGUAGE SETTINGS
let currentLang = 'en';
const langText = {
    en: {
        heroTitle: "Your Favorite Anime Novels & Manga",
        heroDesc: "Download thousands of anime light novels, manga, and ebooks for free",
        trendingTitle: "🔥 Trending Now",
        newTitle: "✨ New Released",
        allTitle: "📚 All Anime Ebooks",
        searchPlaceholder: "Search anime ebooks..."
    },
    tl: {
        heroTitle: "Ang Iyong Mga Paboritong Nobela at Manga",
        heroDesc: "Mag-download ng libo-libong anime light novel, manga, at ebook nang libre",
        trendingTitle: "🔥 Pinakasikat Ngayon",
        newTitle: "✨ Mga Bagong Labas",
        allTitle: "📚 Lahat ng Anime Ebook",
        searchPlaceholder: "Maghanap ng anime ebook..."
    }
};

// ELEMENTS
const navbar = document.querySelector('.navbar');
const langSelect = document.getElementById('langSelect');
const searchInput = document.getElementById('searchInput');
const infoModal = document.getElementById('infoModal');
const closeBtn = document.querySelector('.close-btn');
const downloadBtn = document.getElementById('downloadBtn');

// SCROLL EFFECT
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// LANGUAGE SWITCH
langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateLanguage();
    renderCards();
});

function updateLanguage() {
    document.getElementById('heroTitle').innerText = langText[currentLang].heroTitle;
    document.getElementById('heroDesc').innerText = langText[currentLang].heroDesc;
    document.getElementById('trendingTitle').innerText = langText[currentLang].trendingTitle;
    document.getElementById('newTitle').innerText = langText[currentLang].newTitle;
    document.getElementById('allTitle').innerText = langText[currentLang].allTitle;
    searchInput.placeholder = langText[currentLang].searchPlaceholder;
}

// RENDER ANIME CARDS
function renderCards(data = animeData) {
    document.getElementById('trendingRow').innerHTML = '';
    document.getElementById('newRow').innerHTML = '';
    document.getElementById('allRow').innerHTML = '';

    data.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.dataset.id = anime.id;
        card.innerHTML = `
            <img src="${anime.img}" alt="${currentLang === 'en' ? anime.title : anime.titleTl}" loading="lazy">
            <div class="card-info">
                <h3>${currentLang === 'en' ? anime.title : anime.titleTl}</h3>
                <p>${anime.year} • ${anime.type}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(anime));

        if (anime.category.includes('trending')) document.getElementById('trendingRow').appendChild(card);
        if (anime.category.includes('new')) document.getElementById('newRow').appendChild(card);
        if (anime.category.includes('all')) document.getElementById('allRow').appendChild(card);
    });
}

// OPEN MODAL
function openModal(anime) {
    document.getElementById('modalImg').src = anime.img;
    document.getElementById('modalTitle').innerText = currentLang === 'en' ? anime.title : anime.titleTl;
    document.getElementById('modalYear').innerText = anime.year;
    document.getElementById('modalType').innerText = anime.type;
    document.getElementById('modalLang').innerText = anime.lang;
    document.getElementById('modalDesc').innerText = currentLang === 'en' ? anime.desc : anime.descTl;
    downloadBtn.onclick = () => window.open(anime.link, '_blank');
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// CLOSE MODAL
closeBtn.addEventListener('click', () => {
    infoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});
window.addEventListener('click', (e) => {
    if (e.target === infoModal) {
        infoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// SEARCH FUNCTION
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    if (!keyword) return renderCards();
    
    const filtered = animeData.filter(anime => {
        const titleEn = anime.title.toLowerCase();
        const titleTl = anime.titleTl.toLowerCase();
        return titleEn.includes(keyword) || titleTl.includes(keyword);
    });
    renderCards(filtered);
});

// INITIALIZE
renderCards();
updateLanguage();