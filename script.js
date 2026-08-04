const animeData = [
    {id:1,title:"Demon Slayer: The Flower of Happiness",titleTl:"Demon Slayer: Bulaklak ng Kaligayahan",year:"2019",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.8,totalVotes:1247,
    desc:"An official side-story light novel set during the main series journey. Follow Tanjiro, Nezuko, Zenitsu, and Inosuke as they arrive at a peaceful mountain village plagued by a mysterious demon that preys on happy memories. Filled with heartwarming moments, intense battles, and deeper insight into each character’s resolve, this story shows what it truly means to protect the people you love.",
    descTl:"Isang opisyal na karagdagang kwento na naganap habang naglalakbay pa ang mga bida. Samahan sina Tanjiro, Nezuko, Zenitsu, at Inosuke sa isang payapang nayon sa bundok na pinamumugaran ng demonyong kumukuha ng masasayang alaala. Puno ito ng magagandang tagpo, matitinding labanan, at mas malalim na pagkilala sa layunin ng bawat tauhan — na nagpapakita kung ano talaga ang kahulugan ng pagprotekta sa mga mahal mo sa buhay.",
    img:"https://upload.wikimedia.org/wikipedia/en/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg",linkEn:"#",linkTl:"#"},
];

let currentLang = 'en';
let selectedAnime = null;
let currentUser = null;

const langText = {
    en: {
        heroTitle:"Your Favorite Anime Light Novels & Ebooks", heroDesc:"Download thousands of anime light novels and ebooks for free",
        trendingTitle:"🔥 Trending Now", newTitle:"✨ New Released", allTitle:"📚 All Anime Ebooks",
        searchPlaceholder:"Search anime ebooks...", downloadEn:"Download English", downloadTl:"Download Tagalog",
        ratingLabel:"Rating:", voteLabel:"Vote this ebook:"
    },
    tl: {
        heroTitle:"Ang Iyong Mga Paboritong Nobela at Ebook", heroDesc:"Mag-download ng libo-libong anime nobela at ebook nang libre",
        trendingTitle:"🔥 Pinakasikat Ngayon", newTitle:"✨ Mga Bagong Labas", allTitle:"📚 Lahat ng Anime Ebook",
        searchPlaceholder:"Maghanap ng anime ebook...", downloadEn:"I-download sa Ingles", downloadTl:"I-download sa Tagalog",
        ratingLabel:"Marka:", voteLabel:"Bigyan ng marka ang nobelang ito:"
    }
};

function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function updateLanguage() {
    Object.keys(langText[currentLang]).forEach(key => {
        const el = document.getElementById(key);
        if(el) el.innerText = langText[currentLang][key];
    });
}

function getRatingPercent(rating) { return Math.round((rating / 5) * 100); }
function renderStars(rating) {
    return Array.from({length:5}, (_,i) => `<span class="star ${i < Math.round(rating) ? 'active' : ''}">★</span>`).join('');
}

// LOAD SAVED RATINGS/VOTES
function loadSavedStats() {
    const savedStats = JSON.parse(localStorage.getItem('animeStats') || '{}');
    animeData.forEach(anime => {
        if(savedStats[anime.id]) {
            anime.totalVotes = savedStats[anime.id].totalVotes;
            anime.rating = savedStats[anime.id].rating;
        }
    });
}

function renderCards(data = animeData) {
    ['trending','new','all'].forEach(cat => {
        const row = document.getElementById(`${cat}Row`);
        row.innerHTML = '';
        data.filter(a => a.category.includes(cat)).forEach(anime => {
            const card = document.createElement('div');
            card.className = 'anime-card';
            card.innerHTML = `
                <img src="${anime.img}" alt="${currentLang==='en'?anime.title:anime.titleTl}" loading="lazy">
                <div class="card-info">
                    <h3>${currentLang==='en'?anime.title:anime.titleTl}</h3>
                    <p>${anime.year} • ${anime.type}</p>
                    <div class="card-rating">${renderStars(anime.rating)} ${getRatingPercent(anime.rating)}% (${anime.totalVotes})</div>
                </div>
            `;
            card.onclick = () => { selectedAnime = anime; openModal(anime); };
            row.appendChild(card);
        });
    });
}

function openModal(anime) {
    const modal = document.getElementById('infoModal');
    document.getElementById('modalImg').src = anime.img;
    document.getElementById('modalTitle').innerText = currentLang==='en'?anime.title:anime.titleTl;
    document.getElementById('modalYear').innerText = anime.year;
    document.getElementById('modalType').innerText = anime.type;
    document.getElementById('modalLang').innerText = anime.lang;
    document.getElementById('modalDesc').innerText = currentLang==='en'?anime.desc:anime.descTl;
    document.getElementById('modalRatingPercent').innerText = `${getRatingPercent(anime.rating)}%`;
    document.getElementById('modalRatingStars').innerHTML = renderStars(anime.rating);
    document.getElementById('modalVotes').innerText = `${anime.totalVotes} votes`;
    document.getElementById('downloadEn').innerText = langText[currentLang].downloadEn;
    document.getElementById('downloadTl').innerText = langText[currentLang].downloadTl;

    document.getElementById('downloadEn').onclick = () => {
        if(!currentUser) {
            document.getElementById('infoModal').classList.remove('active');
            document.getElementById('signinModal').style.display = 'block';
            document.body.style.overflow = 'auto';
            return;
        }
        window.open(anime.linkEn, '_blank');
    };
    document.getElementById('downloadTl').onclick = () => {
        if(!currentUser) {
            document.getElementById('infoModal').classList.remove('active');
            document.getElementById('signinModal').style.display = 'block';
            document.body.style.overflow = 'auto';
            return;
        }
        window.open(anime.linkTl, '_blank');
    };

    // VOTING SYSTEM
    const userId = currentUser ? currentUser.uid : null;
    const savedVotes = JSON.parse(localStorage.getItem('userVotes') || '{}');
    const savedStats = JSON.parse(localStorage.getItem('animeStats') || '{}');
    const userVote = userId && savedVotes[userId] ? savedVotes[userId][anime.id] : null;

    document.querySelectorAll('.vote-star').forEach((star, idx) => {
        if(userVote) {
            star.style.pointerEvents = 'none';
            star.style.color = idx < userVote ? '#ffc107' : '#444';
        } else {
            star.style.pointerEvents = 'auto';
            star.style.color = '#444';
        }

        star.onclick = () => {
            if(!currentUser) {
                document.getElementById('infoModal').classList.remove('active');
                document.getElementById('signinModal').style.display = 'block';
                document.body.style.overflow = 'auto';
                return;
            }
            if(savedVotes[userId] && savedVotes[userId][anime.id]) {
                showError("You have already voted for this ebook!");
                return;
            }
            const vote = parseInt(star.dataset.vote);
            anime.totalVotes++;
            anime.rating = parseFloat(((anime.rating*(anime.totalVotes-1)+vote)/anime.totalVotes).toFixed(1));

            if(!savedVotes[userId]) savedVotes[userId] = {};
            savedVotes[userId][anime.id] = vote;
            localStorage.setItem('userVotes', JSON.stringify(savedVotes));

            savedStats[anime.id] = { totalVotes: anime.totalVotes, rating: anime.rating };
            localStorage.setItem('animeStats', JSON.stringify(savedStats));

            openModal(anime); renderCards();
        };
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateLoginUI(user) {
    currentUser = user;
    document.getElementById('signinBtn').style.display = user ? 'none' : 'inline-block';
    document.getElementById('signupBtn').style.display = user ? 'none' : 'inline-block';
    document.getElementById('logoutBtn').style.display = user ? 'inline-block' : 'none';
    document.getElementById('userDisplay').style.display = user ? 'inline-block' : 'none';
    document.getElementById('userDisplay').innerText = user ? `👤 ${user.email}` : '';
}

function showError(message) {
    const suErr = document.getElementById('suError');
    if(suErr) { suErr.innerText = message; suErr.style.display = 'block'; }
    const siErr = document.getElementById('siError');
    if(siErr) { siErr.innerText = message; siErr.style.display = 'block'; }
    setTimeout(() => { if(suErr) suErr.style.display = 'none'; if(siErr) siErr.style.display = 'none'; }, 5000);
}

// RANDOM ONLINE USERS SYSTEM
let baseOnline = parseInt(localStorage.getItem('baseOnlineUsers') || 0);
function getNewRandomOnline() { return Math.floor(Math.random() * 501) + 300; }

function updateOnlineCount() {
    const lastUpdate = parseInt(localStorage.getItem('lastOnlineUpdate') || 0);
    const now = Date.now();
    const tenMinutes = 10 * 60 * 1000;
    if (!baseOnline || (now - lastUpdate) > tenMinutes) {
        baseOnline = getNewRandomOnline();
        localStorage.setItem('baseOnlineUsers', baseOnline);
        localStorage.setItem('lastOnlineUpdate', now);
    }
    const total = currentUser ? baseOnline + 1 : baseOnline;
    document.getElementById('onlineCount').innerText = total;
}

const originalUpdateUI = updateLoginUI;
updateLoginUI = function(user) { originalUpdateUI(user); updateOnlineCount(); };

// RANDOM HERO BACKGROUND SYSTEM
const heroBackgrounds = [
    'https://images3.alphacoders.com/130/thumb-1920-1302159.jpg',
    'https://images6.alphacoders.com/510/thumb-1920-510155.png',
    'https://images4.alphacoders.com/139/thumb-1920-1396583.jpg',
    'https://images3.alphacoders.com/119/thumb-1920-1195019.png',
    'https://images2.alphacoders.com/135/thumb-1920-1356991.jpeg',
    'https://images3.alphacoders.com/936/thumb-1920-936371.jpg',
    'https://images8.alphacoders.com/140/1409912.png'
];

function setRandomHeroBackground() {
    const randomImg = heroBackgrounds[Math.floor(Math.random() * heroBackgrounds.length)];
    document.querySelector('.hero').style.backgroundImage = `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%), url('${randomImg}')`;
}

document.addEventListener('DOMContentLoaded', () => {
    loadSavedStats();
    setRandomHeroBackground();
    updateOnlineCount();
    renderCards(); // ✅ Ipinapakita lahat ng kard
    setInterval(updateOnlineCount, 600000); // Bawat 10 minuto

    // Firebase setup
    const auth = window.firebaseAuth;
    const { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } = window.firebaseMethods;
    const provider = window.firebaseProvider;

    onAuthStateChanged(auth, user => { updateLoginUI(user); });

    // Google Sign In
    document.getElementById('googleSignInBtn').onclick = () => {
        signInWithPopup(auth, provider).then(res => { 
            updateLoginUI(res.user); 
            document.getElementById('signinModal').style.display = 'none'; 
        }).catch(err => showError(err.message));
    };

    // Google Sign Up
    document.getElementById('googleSignUpBtn').onclick = () => {
        signInWithPopup(auth, provider).then(res => { 
            updateLoginUI(res.user); 
            document.getElementById('signupModal').style.display = 'none'; 
        }).catch(err => showError(err.message));
    };

    // Email Sign Up
    document.getElementById('doSignUp').onclick = () => {
        const email = document.getElementById('suEmail').value.trim();
        const pass = document.getElementById('suPass').value;
        const confirm = document.getElementById('suConfirmPass').value;
        if(!email || !pass || !confirm) return showError("Please fill in all fields!");
        if(!isValidEmail(email)) return showError("Please enter a valid email address!");
        if(pass !== confirm) return showError("Passwords do not match!");
        createUserWithEmailAndPassword(auth, email, pass).then(res => { 
            updateLoginUI(res.user); 
            document.getElementById('signupModal').style.display = 'none'; 
        }).catch(err => showError(err.message));
    };

    // Email Sign In
    document.getElementById('doSignIn').onclick = () => {
        const email = document.getElementById('siUser').value.trim();
        const pass = document.getElementById('siPass').value;
        if(!email || !pass) return showError("Please enter your email and password!");
        if(!isValidEmail(email)) return showError("Please enter a valid email address!");
        signInWithEmailAndPassword(auth, email, pass).then(res => { 
            updateLoginUI(res.user); 
            document.getElementById('signinModal').style.display = 'none'; 
        }).catch(err => showError("Invalid email or password!"));
    };

    // ✅ DAGDAG DITO — Paglipat ng Sign In ↔ Sign Up
    document.getElementById('goSignup').onclick = () => {
        document.getElementById('signinModal').style.display = 'none';
        document.getElementById('signupModal').style.display = 'block';
    };
    document.getElementById('goSignin').onclick = () => {
        document.getElementById('signupModal').style.display = 'none';
        document.getElementById('signinModal').style.display = 'block';
    };

    // ✅ DAGDAG DITO — Learn More Button
    document.getElementById('learnMoreBtn').onclick = () => {
        alert("Dito mo ilalagay ang detalye tungkol sa Anime Ebooks Hub:\n\n✅ Libre mag-download\n✅ Tagalog at English ang mga kwento\n✅ Maaaring magbigay ng marka at boto\n✅ Ligtas at mabilis gamitin!");
    };

    // ✅ DAGDAG DITO — Pagsara ng mga Modal
    document.querySelector('.close-btn').onclick = () => { 
        document.getElementById('infoModal').classList.remove('active'); 
        document.body.style.overflow='auto'; 
    };

    window.onclick = e => { 
        if(e.target === document.getElementById('infoModal')) { 
            document.getElementById('infoModal').classList.remove('active'); 
            document.body.style.overflow='auto'; 
        }
    };

    document.querySelector('.close-sign').onclick = () => {
        document.getElementById('signinModal').style.display='none';
        document.body.style.overflow='auto';
    };
    document.querySelector('.close-su').onclick = () => {
        document.getElementById('signupModal').style.display='none';
        document.body.style.overflow='auto';
    };

}); // ✅ DITO NAGTATAPOS ANG DOMContentLoaded — WALA NG DAGDAG SA LABAS!
