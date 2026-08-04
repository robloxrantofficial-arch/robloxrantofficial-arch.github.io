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

// SISTEMA NG NOTIPIKASYON SA BAGONG UPLOAD
function notifyAllUsersNewUpload(animeName) {
    const allUsers = JSON.parse(localStorage.getItem('animeUsers')) || [];
    if(allUsers.length === 0) return;
    const emailList = allUsers.map(u => u.email).join(', ');
    console.log(`📧 MGA MAKAKATANGGAP: ${emailList}`);
    console.log(`📌 BAGONG UPLOAD: "${animeName}"`);
    alert(`✅ NAI-REKORD ANG PAALALA!\n\nKapag naka-server na ang site, awtomatiko na itong magpapadala sa:\n${emailList}\nTungkol sa: ${animeName}`);
}

function updateLanguage() {
    const ht = document.getElementById('heroTitle'); if(ht) ht.innerText = langText[currentLang].heroTitle;
    const hd = document.getElementById('heroDesc'); if(hd) hd.innerText = langText[currentLang].heroDesc;
    const tt = document.getElementById('trendingTitle'); if(tt) tt.innerText = langText[currentLang].trendingTitle;
    const nt = document.getElementById('newTitle'); if(nt) nt.innerText = langText[currentLang].newTitle;
    const at = document.getElementById('allTitle'); if(at) at.innerText = langText[currentLang].allTitle;
    const si = document.getElementById('searchInput'); if(si) si.placeholder = langText[currentLang].searchPlaceholder;
}

function getRatingPercent(rating) { return Math.round((rating / 5) * 100); }
function renderStars(rating) {
    let stars = '';
    for(let i=1; i<=5; i++) stars += `<span class="star ${i <= Math.round(rating) ? 'active' : ''}">★</span>`;
    return stars;
}

function renderCards(data = animeData) {
    const tr = document.getElementById('trendingRow'); const nr = document.getElementById('newRow'); const ar = document.getElementById('allRow');
    if(!tr || !nr || !ar) return;
    tr.innerHTML = ''; nr.innerHTML = ''; ar.innerHTML = '';
    data.forEach(anime => {
        const p = getRatingPercent(anime.rating);
        const cardHTML = `
            <div class="anime-card">
                <img src="${anime.img}" alt="${currentLang==='en'?anime.title:anime.titleTl}" loading="lazy">
                <div class="card-info">
                    <h3>${currentLang==='en'?anime.title:anime.titleTl}</h3>
                    <p>${anime.year} • ${anime.type}</p>
                    <div class="card-rating">${renderStars(anime.rating)} ${p}% (${anime.totalVotes})</div>
                </div>
            </div>`;
        if(anime.category.includes('trending')) { tr.insertAdjacentHTML('beforeend', cardHTML); tr.lastElementChild.onclick = () => { selectedAnime = anime; openModal(anime); }; }
        if(anime.category.includes('new')) { nr.insertAdjacentHTML('beforeend', cardHTML); nr.lastElementChild.onclick = () => { selectedAnime = anime; openModal(anime); }; }
        if(anime.category.includes('all')) { ar.insertAdjacentHTML('beforeend', cardHTML); ar.lastElementChild.onclick = () => { selectedAnime = anime; openModal(anime); }; }
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

    // PROTEKSYON SA DOWNLOAD
    document.getElementById('downloadEn').onclick = () => {
        if(!JSON.parse(localStorage.getItem('activeUser'))) {
            alert("🔒 Kailangan mag-Sign In muna para makapag-download!");
            im.classList.remove('active'); document.body.style.overflow='auto';
            document.getElementById('signinModal').style.display='block'; return;
        }
        window.open(anime.linkEn, '_blank');
    };
    document.getElementById('downloadTl').onclick = () => {
        if(!JSON.parse(localStorage.getItem('activeUser'))) {
            alert("🔒 Kailangan mag-Sign In muna para makapag-download!");
            im.classList.remove('active'); document.body.style.overflow='auto';
            document.getElementById('signinModal').style.display='block'; return;
        }
        window.open(anime.linkTl, '_blank');
    };

    // PROTEKSYON SA BOTO
    document.querySelectorAll('.vote-star').forEach(star => {
        star.onclick = () => {
            if(!JSON.parse(localStorage.getItem('activeUser'))) {
                alert("🔒 Kailangan mag-Sign In muna para makapag-boto!");
                im.classList.remove('active'); document.body.style.overflow='auto';
                document.getElementById('signinModal').style.display='block'; return;
            }
            const v = parseInt(star.dataset.vote);
            anime.totalVotes++;
            anime.rating = parseFloat(((anime.rating*(anime.totalVotes-1)+v)/anime.totalVotes).toFixed(1));
            openModal(anime); renderCards();
        };
    });
    im.classList.add('active'); document.body.style.overflow='hidden';
}

function updateLoginUI() {
    const u = JSON.parse(localStorage.getItem('activeUser'));
    const sb = document.getElementById('signinBtn'), su = document.getElementById('signupBtn'), lo = document.getElementById('logoutBtn'), ud = document.getElementById('userDisplay');
    if(u){sb.style.display='none';su.style.display='none';lo.style.display='inline-block';ud.style.display='inline-block';ud.innerText=`👤 ${u.username}`;}
    else{sb.style.display='inline-block';su.style.display='inline-block';lo.style.display='none';ud.style.display='none';}
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.navbar').onscroll = () => document.querySelector('.navbar').classList.toggle('scrolled', scrollY>50);
    document.getElementById('langSelect').onchange = e => { currentLang=e.target.value; updateLanguage(); renderCards(); };
    document.getElementById('searchInput').oninput = e => {
        const kw = e.target.value.toLowerCase().trim();
        renderCards(kw ? animeData.filter(a => a.title.toLowerCase().includes(kw)||a.titleTl.toLowerCase().includes(kw)) : animeData);
    };
    document.querySelector('.close-btn').onclick = () => { document.getElementById('infoModal').classList.remove('active'); document.body.style.overflow='auto'; };
    window.onclick = e => { if(e.target===document.getElementById('infoModal')){ document.getElementById('infoModal').classList.remove('active'); document.body.style.overflow='auto'; }};

    const allUsers = JSON.parse(localStorage.getItem('animeUsers')) || [];
    document.getElementById('forgotPassLink').onclick = () => alert("📧 Mag-email sa support@animebookshub.com kasama ang Username at Email mo.");
    document.getElementById('signinBtn').onclick = () => document.getElementById('signinModal').style.display='block';
    document.getElementById('signupBtn').onclick = () => document.getElementById('signupModal').style.display='block';
    document.querySelector('.close-sign').onclick = () => document.getElementById('signinModal').style.display='none';
    document.querySelector('.close-su').onclick = () => document.getElementById('signupModal').style.display='none';
    document.getElementById('goSignup').onclick = () => { document.getElementById('signinModal').style.display='none'; document.getElementById('signupModal').style.display='block'; };
    document.getElementById('goSignin').onclick = () => { document.getElementById('signupModal').style.display='none'; document.getElementById('signinModal').style.display='block'; };

    // IPakita/Itago Password
    document.querySelectorAll('.eye-btn').forEach(btn => {
        btn.onclick = () => {
            const inp = btn.previousElementSibling;
            inp.type = inp.type==='password'?'text':'password';
            btn.innerText = inp.type==='password'?'👁':'🙈';
        };
    });

    // SIGN UP
    document.getElementById('doSignUp').onclick = () => {
        const us = document.getElementById('suUser').value.trim();
        const em = document.getElementById('suEmail').value.trim();
        const pw = document.getElementById('suPass').value;
        const cp = document.getElementById('suConfirmPass').value;
        if(!us||!em||!pw||!cp) return alert('⚠️ Punan lahat ng patlang!');
        if(pw!==cp) return alert('❌ Hindi tugma ang password!');
        if(allUsers.find(x=>x.username===us)) return alert('❌ May gumagamit na ng username!');
        if(allUsers.find(x=>x.email===em)) return alert('❌ May gumagamit na ng email!');
        allUsers.push({username:us,email:em,password:pw});
        localStorage.setItem('animeUsers',JSON.stringify(allUsers));
        alert(`✅ Naka-rehistro na, ${us}!\nMakakatanggap ka ng abiso sa email kapag may bagong upload (kapag naka-server na).`);
        document.getElementById('signupModal').style.display='none'; document.getElementById('signinModal').style.display='block';
    };

    // SIGN IN
    document.getElementById('doSignIn').onclick = () => {
        const us = document.getElementById('siUser').value.trim();
        const pw = document.getElementById('siPass').value;
        const f = allUsers.find(x=>(x.username===us||x.email===us)&&x.password===pw);
        if(!f) return alert('❌ Maling username o password!');
        localStorage.setItem('activeUser',JSON.stringify(f));
        updateLoginUI(); document.getElementById('signinModal').style.display='none';
        alert(`✅ Kumusta, ${f.username}!`);
    };

    document.getElementById('logoutBtn').onclick = () => { localStorage.removeItem('activeUser'); updateLoginUI(); alert('👋 Naka-logout na.'); };

    updateLanguage(); updateLoginUI(); renderCards();
    console.log("✅ LAHAT AY TAPOS NA!");
});
