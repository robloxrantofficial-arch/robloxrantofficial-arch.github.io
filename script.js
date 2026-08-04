// ==================================================
// 1. LISTAHAN NG ANIME
// ==================================================
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
    {id:5,title:"Horimiya",titleTl:"Horimiya",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.9,totalVotes:1543,
    desc:"A sweet and realistic story about two students who discover each other’s hidden sides outside of school.",
    descTl:"Isang magandang kwento ng dalawang mag-aaral na nalaman ang tunay na pagkatao ng isa’t isa sa labas ng paaralan.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Horimiya_manga_volume_1.jpg/250px-Horimiya_manga_volume_1.jpg",linkEn:"#",linkTl:"#"}
];

// ==================================================
// 2. MGA SETTINGS
// ==================================================
let currentLang = 'en';
let selectedAnime = null;

const langText = {
    en: {
        heroTitle:"Your Favorite Anime Light Novels & Ebooks",
        heroDesc:"Download thousands of anime light novels and ebooks for free",
        trendingTitle:"🔥 Trending Now",
        newTitle:"✨ New Released",
        allTitle:"📚 All Anime Ebooks",
        searchPlaceholder:"Search anime ebooks...",
        downloadEn:"Download English",
        downloadTl:"Download Tagalog",
        ratingLabel:"Rating:",
        voteLabel:"Vote this ebook:"
    },
    tl: {
        heroTitle:"Ang Iyong Mga Paboritong Nobela at Ebook",
        heroDesc:"Mag-download ng libo-libong anime nobela at ebook nang libre",
        trendingTitle:"🔥 Pinakasikat Ngayon",
        newTitle:"✨ Mga Bagong Labas",
        allTitle:"📚 Lahat ng Anime Ebook",
        searchPlaceholder:"Maghanap ng anime ebook...",
        downloadEn:"I-download sa Ingles",
        downloadTl:"I-download sa Tagalog",
        ratingLabel:"Marka:",
        voteLabel:"Bigyan ng marka ang nobelang ito:"
    }
};

// ==================================================
// 3. MGA FUNCTION
// ==================================================
function updateLanguage() {
    const ht = document.getElementById('heroTitle'); if(ht) ht.innerText = langText[currentLang].heroTitle;
    const hd = document.getElementById('heroDesc'); if(hd) hd.innerText = langText[currentLang].heroDesc;
    const tt = document.getElementById('trendingTitle'); if(tt) tt.innerText = langText[currentLang].trendingTitle;
    const nt = document.getElementById('newTitle'); if(nt) nt.innerText = langText[currentLang].newTitle;
    const at = document.getElementById('allTitle'); if(at) at.innerText = langText[currentLang].allTitle;
    const si = document.getElementById('searchInput'); if(si) si.placeholder = langText[currentLang].searchPlaceholder;
    const ls = document.getElementById('langSelect'); if(ls) ls.value = currentLang;
}

function getRatingPercent(rating) { return Math.round((rating / 5) * 100); }

function renderStars(rating) {
    let stars = '';
    for(let i=1; i<=5; i++) stars += `<span class="star ${i <= Math.round(rating) ? 'active' : ''}">★</span>`;
    return stars;
}

function renderCards(data = animeData) {
    const tr = document.getElementById('trendingRow'); const nr = document.getElementById('newRow'); const ar = document.getElementById('allRow');
    if(!tr || !nr || !ar) return console.error("❌ Kulang ng row sa HTML!");
    tr.innerHTML = ''; nr.innerHTML = ''; ar.innerHTML = '';

    data.forEach(anime => {
        const p = getRatingPercent(anime.rating);
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `<img src="${anime.img}" alt="${anime.title}"><div class="card-info"><h3>${anime.title}</h3><p>${anime.year} • ${anime.type}</p><div class="card-rating">${renderStars(anime.rating)} ${p}% (${anime.totalVotes})</div></div>`;
        card.onclick = () => { selectedAnime = anime; openModal(anime); };
        if(anime.category.includes('trending')) tr.appendChild(card.cloneNode(true));
        if(anime.category.includes('new')) nr.appendChild(card.cloneNode(true));
        if(anime.category.includes('all')) ar.appendChild(card);
    });
}

function openModal(anime) {
    const im = document.getElementById('infoModal'); if(!im) return;
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
    im.classList.add('active'); document.body.style.overflow='hidden';
}

function updateLoginUI() {
    const activeUser = JSON.parse(localStorage.getItem('activeUser')) || null;
    const sb = document.getElementById('signinBtn'); const su = document.getElementById('signupBtn'); const lo = document.getElementById('logoutBtn'); const ud = document.getElementById('userDisplay'); const oc = document.getElementById('onlineCount');
    if(!sb||!su||!lo||!ud||!oc) return;
    if(activeUser){sb.style.display='none';su.style.display='none';lo.style.display='inline-block';ud.style.display='inline-block';ud.innerText=`👤 ${activeUser.username}`;oc.innerText='2';}
    else{sb.style.display='inline-block';su.style.display='inline-block';lo.style.display='none';ud.style.display='none';oc.innerText='1';}
}

// ==================================================
// 4. PAGSIMULA (LIGTAS NA SA ERROR)
// ==================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ Nagsisimula na ang pag-load...");

    // Wika
    document.getElementById('langSelect')?.addEventListener('change', e => { currentLang = e.target.value; updateLanguage(); renderCards(); });

    // Search
    document.getElementById('searchInput')?.addEventListener('input', e => {
        const kw = e.target.value.toLowerCase().trim();
        renderCards(kw ? animeData.filter(a => a.title.toLowerCase().includes(kw) || a.titleTl.toLowerCase().includes(kw)) : animeData);
    });

    // Isara Modal
    document.querySelector('.close-btn')?.addEventListener('click', () => { document.getElementById('infoModal')?.classList.remove('active'); document.body.style.overflow='auto'; });
    window.addEventListener('click', e => { if(e.target===document.getElementById('infoModal')){ document.getElementById('infoModal')?.classList.remove('active'); document.body.style.overflow='auto'; }});

    // Login/Signup
    const allUsers = JSON.parse(localStorage.getItem('animeUsers')) || [];
    document.getElementById('signinBtn')?.addEventListener('click', () => document.getElementById('signinModal').style.display='block');
    document.getElementById('signupBtn')?.addEventListener('click', () => document.getElementById('signupModal').style.display='block');
    document.querySelector('.close-sign')?.addEventListener('click', () => document.getElementById('signinModal').style.display='none');
    document.querySelector('.close-su')?.addEventListener('click', () => document.getElementById('signupModal').style.display='none');
    document.getElementById('goSignup')?.addEventListener('click', () => { document.getElementById('signinModal').style.display='none'; document.getElementById('signupModal').style.display='block'; });
    document.getElementById('goSignin')?.addEventListener('click', () => { document.getElementById('signupModal').style.display='none'; document.getElementById('signinModal').style.display='block'; });

    document.getElementById('doSignUp')?.addEventListener('click', () => {
        const u = document.getElementById('suUser').value.trim(); const p = document.getElementById('suPass').value;
        if(!u||!p) return alert('Punan ang lahat!'); if(allUsers.find(x=>x.username===u)) return alert('Ginagamit na!');
        allUsers.push({username:u,password:p}); localStorage.setItem('animeUsers',JSON.stringify(allUsers)); alert('Success! Mag-login na.');
        document.getElementById('signupModal').style.display='none'; document.getElementById('signinModal').style.display='block';
    });

    document.getElementById('doSignIn')?.addEventListener('click', () => {
        const u = document.getElementById('siUser').value.trim(); const p = document.getElementById('siPass').value;
        if(!allUsers.find(x=>x.username===u&&x.password===p)) return alert('Mali ang username o password!');
        localStorage.setItem('activeUser',JSON.stringify({username:u})); updateLoginUI(); document.getElementById('signinModal').style.display='none'; alert(`Welcome, ${u}!`);
    });

    document.getElementById('logoutBtn')?.addEventListener('click', () => { localStorage.removeItem('activeUser'); updateLoginUI(); alert('Naka-logout na.'); });

    // IPASOK ANG LAHAT
    updateLanguage();
    updateLoginUI();
    renderCards();
    console.log("✅ TAPOS NA! Dapat nakikita mo na ang mga anime.");
});
