const animeData = [
    {id:1,title:"Sword Art Online",titleTl:"Sword Art Online",year:"2009",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.8,totalVotes:2156,
    desc:"In the year 2022, gamers rejoice as Sword Art Online—a VRMMORPG—debuts. But soon they learn that they cannot log out. To escape, they must reach the 100th floor of the floating castle Aincrad.",
    descTl:"Sa taong 2022, tuwang-tuwa ang mga manlalaro nang ilunsad ang Sword Art Online. Ngunit nalaman nilang hindi sila maka-logout. Upang makalaya, kailangan nilang maabot ang ika-100 palapag ng kastilyong Aincrad.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Sword_Art_Online_light_novel_vol_1.jpg/250px-Sword_Art_Online_light_novel_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:2,title:"Re:Zero",titleTl:"Re:Zero",year:"2014",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.9,totalVotes:1987,
    desc:"Natsuki Subaru is suddenly transported to another world. When he dies, he returns to a previous point in time.",
    descTl:"Biglang napunta si Natsuki Subaru sa ibang mundo. Kapag siya ay namamatay, bumabalik siya sa nakaraan.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Re-Zero_kara_Hajimeru_Isekai_Seikatsu_light_novel_vol_1.jpg/250px-Re-Zero_kara_Hajimeru_Isekai_Seikatsu_light_novel_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:3,title:"Konosuba",titleTl:"Konosuba",year:"2013",type:"Light Novel",lang:"EN / TL",category:["new","all"],rating:4.7,totalVotes:1654,
    desc:"Kazuma Satou dies and is reborn in a fantasy world with a useless goddess.",
    descTl:"Namatay si Kazuma at isinilang muli sa mundong pantasya kasama ang isang walang kwentang diyosa.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Kono_Subarashiki_Sekai_ni_Shukufuku_wo!_light_novel_vol_1.jpg/250px-Kono_Subarashiki_Sekai_ni_Shukufuku_wo!_light_novel_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:4,title:"Overlord",titleTl:"Overlord",year:"2012",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.8,totalVotes:1843,
    desc:"When a popular MMORPG is scheduled to be shut down, the main character decides to stay logged in.",
    descTl:"Nang ipatigil ang isang sikat na laro, nagpasyang manatili ang bida.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Overlord_light_novel_vol_1.jpg/250px-Overlord_light_novel_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:5,title:"No Game No Life",titleTl:"No Game No Life",year:"2012",type:"Light Novel",lang:"EN / TL",category:["new","all"],rating:4.8,totalVotes:1521,
    desc:"Siblings Sora and Shiro are unbeatable gamers. They are summoned to a world where everything is decided by games.",
    descTl:"Magkapatid na Sora at Shiro ay walang tatalo sa paglalaro. Dinala sila sa mundong kung saan sa laro napagdedesisyunan ang lahat.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/8/89/No_Game_No_Life_light_novel_vol_1.jpg/250px-No_Game_No_Life_light_novel_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:6,title:"That Time I Got Reincarnated as a Slime",titleTl:"Yung Naging Slime Ako",year:"2014",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.8,totalVotes:1789,
    desc:"An ordinary man is reborn as a slime with unique powers in a fantasy world, building his own nation of monsters.",
    descTl:"Isang karaniwang lalaki ang muling isinilang bilang isang slime na may kakaibang kapangyarihan, at itinatag ang sariling kaharian ng mga halimaw.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/That_Time_I_Got_Reincarnated_as_a_Slime_light_novel_vol_1.jpg/250px-That_Time_I_Got_Reincarnated_as_a_Slime_light_novel_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:7,title:"The Rising of the Shield Hero",titleTl:"Ang Pagbangon ng Bayaning Kalasag",year:"2013",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.7,totalVotes:1698,
    desc:"Naofumi Iwatani is summoned as one of four legendary heroes. Betrayed and alone, he must survive and protect the world with only a shield.",
    descTl:"Si Naofumi ay isa sa apat na bayani. Ipinagkanulo at nag-iisa, kailangan niyang mabuhay at ipagtanggol ang mundo gamit lamang ang kalasag.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/The_Rising_of_the_Shield_Hero_light_novel_vol_1.jpg/250px-The_Rising_of_the_Shield_Hero_light_novel_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:8,title:"Toradora!",titleTl:"Toradora!",year:"2006",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.9,totalVotes:2210,
    desc:"Ryuji and Taiga are feared for their appearances but are actually gentle souls. They agree to help each other pursue their crushes, only to grow closer themselves.",
    descTl:"Kinakatakutan sina Ryuji at Taiga sa panlabas ngunit mababait sa loob. Nagtulungan sila para makuha ang gusto nila, ngunit sa huli ay sila pala ang magkakasundo.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Toradora%21_light_novel_vol_1.jpg/250px-Toradora%21_light_novel_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:9,title:"A Silent Voice",titleTl:"Tinig ng Puso",year:"2009",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.9,totalVotes:1876,
    desc:"A former bully seeks redemption by reconnecting with the deaf girl he once tormented.",
    descTl:"Isang dating mapanlait ang naghahanap ng kapatawaran sa pamamagitan ng pakikipagkaibigan sa babaeng bingi na kanyang inapi noon.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/A_Silent_Voice_manga_vol_1.jpg/250px-A_Silent_Voice_manga_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:10,title:"Horimiya",titleTl:"Horimiya",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.9,totalVotes:1543,
    desc:"A sweet and realistic story about two students who discover each other’s hidden sides outside of school.",
    descTl:"Isang magandang kwento ng dalawang mag-aaral na nalaman ang tunay na pagkatao ng isa’t isa sa labas ng paaralan.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Horimiya_manga_volume_1.jpg/250px-Horimiya_manga_volume_1.jpg",linkEn:"#",linkTl:"#"}
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

// TAMA NA ANG EMAIL VALIDATION
function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

// ABISO SA BAGONG UPLOAD
function notifyAllUsersNewUpload(title, linkEn, linkTl) {
    console.log(`📢 BAGONG UPLOAD: ${title}\nEnglish: ${linkEn}\nTagalog: ${linkTl}`);
    alert(`✅ Naka-record na ang paalala!\nKapag naka-server na, awtomatiko itong ipapadala sa lahat ng rehistradong email.`);
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

    // PROTEKSYON SA DOWNLOAD
    document.getElementById('downloadEn').onclick = () => {
        if(!currentUser) return alert("🔒 Kailangan mag-Sign In muna!");
        window.open(anime.linkEn, '_blank');
    };
    document.getElementById('downloadTl').onclick = () => {
        if(!currentUser) return alert("🔒 Kailangan mag-Sign In muna!");
        window.open(anime.linkTl, '_blank');
    };

    // PROTEKSYON SA BOTO
    document.querySelectorAll('.vote-star').forEach(star => {
        star.onclick = () => {
            if(!currentUser) return alert("🔒 Kailangan mag-Sign In muna!");
            const vote = parseInt(star.dataset.vote);
            anime.totalVotes++;
            anime.rating = parseFloat(((anime.rating*(anime.totalVotes-1)+vote)/anime.totalVotes).toFixed(1));
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

document.addEventListener('DOMContentLoaded', () => {
    const auth = window.firebaseAuth;
    const { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } = window.firebaseMethods;
    const provider = window.firebaseProvider;

    // PAG-DETECT KUNG NAKA-LOGIN NA
    onAuthStateChanged(auth, user => {
        updateLoginUI(user);
    });

    // GOOGLE SIGN IN
    document.getElementById('googleSignInBtn').onclick = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                updateLoginUI(res.user);
                document.getElementById('signinModal').style.display = 'none';
                alert(`✅ Kumusta, ${res.user.email}! Maaari ka nang mag-download.`);
            })
            .catch(err => alert(`❌ Mali: ${err.message}`));
    };

    // GOOGLE SIGN UP
    document.getElementById('googleSignUpBtn').onclick = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                updateLoginUI(res.user);
                document.getElementById('signupModal').style.display = 'none';
                alert(`✅ Naka-rehistro at naka-login na, ${res.user.email}!`);
            })
            .catch(err => alert(`❌ Mali: ${err.message}`));
    };

    // EMAIL SIGN UP
    document.getElementById('doSignUp').onclick = () => {
        const email = document.getElementById('suEmail').value.trim();
        const pass = document.getElementById('suPass').value;
        const confirm = document.getElementById('suConfirmPass').value;

        if(!email || !pass || !confirm) return alert('⚠️ Punan lahat ng patlang!');
        if(!isValidEmail(email)) return alert('❌ Ilagay ang tamang format ng email!');
        if(pass !== confirm) return alert('❌ Hindi tugma ang password!');

        createUserWithEmailAndPassword(auth, email, pass)
            .then(res => {
                updateLoginUI(res.user);
                document.getElementById('signupModal').style.display = 'none';
                alert(`✅ Matagumpay na nakarehistro, ${email}!`);
            })
            .catch(err => alert(`❌ Mali: ${err.message}`));
    };

    // EMAIL SIGN IN
    document.getElementById('doSignIn').onclick = () => {
        const email = document.getElementById('siUser').value.trim();
        const pass = document.getElementById('siPass').value;

        if(!email || !pass) return alert('⚠️ Ilagay ang email at password!');
        if(!isValidEmail(email)) return alert('❌ Ilagay ang tamang format ng email!');

        signInWithEmailAndPassword(auth, email, pass)
            .then(res => {
                updateLoginUI(res.user);
                document.getElementById('signinModal').style.display = 'none';
                alert(`✅ Maligayang pagbabalik, ${res.user.email}!`);
            })
            .catch(err => alert(`❌ Maling email o password!`));
    };

    // LOGOUT
    document.getElementById('logoutBtn').onclick = () => {
        signOut(auth).then(() => {
            updateLoginUI(null);
            alert('👋 Naka-logout na.');
        });
    };

    // IPakita/Itago Password
    document.querySelectorAll('.eye-btn').forEach(btn => {
        btn.onclick = () => {
            const inp = btn.previousElementSibling;
            inp.type = inp.type === 'password' ? 'text' : 'password';
            btn.innerText = inp.type === 'password' ? '👁' : '🙈';
        };
    });

    // MODAL CONTROLS
    document.getElementById('signinBtn').onclick = () => document.getElementById('signinModal').style.display='block';
    document.getElementById('signupBtn').onclick = () => document.getElementById('signupModal').style.display='block';
    document.querySelector('.close-sign').onclick = () => document.getElementById('signinModal').style.display='none';
    document.querySelector('.close-su').onclick = () => document.getElementById('signupModal').style.display='none';
    document.getElementById('goSignup').onclick = () => { document.getElementById('signinModal').style.display='none'; document.getElementById('signupModal').style.display='block'; };
    document.getElementById('goSignin').onclick = () => { document.getElementById('signupModal').style.display='none'; document.getElementById('signinModal').style.display='block'; };
    document.querySelector('.close-btn').onclick = () => { document.getElementById('infoModal').classList.remove('active'); document.body.style.overflow='auto'; };
    window.onclick = e => { if(e.target === document.getElementById('infoModal')) { document.getElementById('infoModal').classList.remove('active'); document.body.style.overflow='auto'; }};

    // IBA PANG FUNCTIONS
    document.getElementById('langSelect').onchange = e => { currentLang = e.target.value; updateLanguage(); renderCards(); };
    document.getElementById('searchInput').oninput = e => {
        const kw = e.target.value.toLowerCase().trim();
        renderCards(kw ? animeData.filter(a => 
            a.title.toLowerCase().includes(kw) || a.titleTl.toLowerCase().includes(kw)
        ) : animeData);
    };
    window.addEventListener('scroll', () => {
        document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
    });

    updateLanguage(); renderCards();
});
