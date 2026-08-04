// COMPLETE ANIME DATABASE - READY FOR 1000+ ENTRIES
const animeData = [
    // ==================== TRENDING & NEW RELEASES ====================
    {id:1,title:"Demon Slayer",titleTl:"Pamatay-Demonyo",year:"2016",type:"Light Novel / Manga",lang:"EN / TL",category:["trending","all"],desc:"Tanjiro Kamado sets out to become a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon.",descTl:"Naglakbay si Tanjiro Kamado upang maging tagapatay ng demonyo matapos patayin ang kanyang pamilya at gawing demonyo ang kanyang kapatid na si Nezuko.",img:"https://upload.wikimedia.org/wikipedia/en/0/09/Kimetsu_no_Yaiba_vol_1.jpg",link:"#"},
    {id:2,title:"Jujutsu Kaisen",titleTl:"Jujutsu Kaisen",year:"2018",type:"Manga",lang:"EN / TL",category:["trending","new","all"],desc:"A boy swallows a cursed talisman and becomes host to a powerful curse, joining a secret school of jujutsu sorcerers.",descTl:"Isang binata ang nakakain ng sumpa at naging tahanan ng malakas na sumpa, kaya sumali siya sa lihim na paaralan ng mga manggagamot ng sumpa.",img:"https://upload.wikimedia.org/wikipedia/en/9/91/Jujutsu_Kaisen_vol_1.jpg",link:"#"},
    {id:3,title:"One Piece",titleTl:"Isang Piraso",year:"1997",type:"Manga",lang:"EN / TL",category:["trending","all"],desc:"Monkey D. Luffy sets off on an adventure to find the ultimate treasure 'One Piece' and become King of the Pirates.",descTl:"Nagsimula si Monkey D. Luffy sa paghahanap ng kayamanang 'One Piece' upang maging Hari ng mga Pirata.",img:"https://upload.wikimedia.org/wikipedia/en/6/60/One_Piece_vol_1.jpg",link:"#"},
    {id:4,title:"Solo Leveling",titleTl:"Nag-iisang Pag-angat",year:"2016",type:"Light Novel / Manhwa",lang:"EN / TL",category:["new","all"],desc:"The weakest hunter in the world gets a unique ability to level up infinitely without any limits.",descTl:"Ang pinakamahinang mangangaso ay nakakuha ng kakaibang kakayahan na lumakas nang walang hangganan.",img:"https://upload.wikimedia.org/wikipedia/en/7/7f/Solo_Leveling_vol_1.jpg",link:"#"},
    {id:5,title:"Attack on Titan",titleTl:"Pag-atake ng Higante",year:"2009",type:"Manga",lang:"EN / TL",category:["all"],desc:"Humanity lives inside cities surrounded by enormous walls to protect themselves from giant man-eating Titans.",descTl:"Nakatira ang mga tao sa loob ng mga pader upang protektahan ang sarili mula sa mga higanteng kumakain ng tao.",img:"https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_vol_1.jpg",link:"#"},
    {id:6,title:"Spy x Family",titleTl:"Espiya at Pamilya",year:"2019",type:"Manga",lang:"EN / TL",category:["trending","new","all"],desc:"A spy builds a fake family for his mission, not knowing his wife is an assassin and daughter can read minds.",descTl:"Gumawa ng pekeng pamilya ang isang espiya para sa misyon, ngunit hindi niya alam na ang asawa niya ay mamamatay-tao at ang anak ay nakakabasa ng isip.",img:"https://upload.wikimedia.org/wikipedia/en/1/19/Spy_x_Family_vol_1.jpg",link:"#"},
    {id:7,title:"Naruto",titleTl:"Naruto",year:"1999",type:"Manga",lang:"EN / TL",category:["trending","all"],desc:"Naruto Uzumaki dreams of becoming the Hokage, the leader of his village, and earning the respect of everyone.",descTl:"Nangangarap si Naruto Uzumaki na maging Hokage at makuha ang respeto ng lahat sa kanyang nayon.",img:"https://upload.wikimedia.org/wikipedia/en/9/94/Naruto_vol_1.jpg",link:"#"},
    {id:8,title:"Bleach",titleTl:"Bleach",year:"2001",type:"Manga",lang:"EN / TL",category:["all"],desc:"Ichigo Kurosaki accidentally gains the powers of a Soul Reaper and must defend humans from evil spirits.",descTl:"Hindi sinasadyang nakuha ni Ichigo Kurosaki ang kapangyarihan ng Tagapagligtas ng Kaluluwa at kailangang ipagtanggol ang mga tao.",img:"https://upload.wikimedia.org/wikipedia/en/7/72/Bleach_vol_1.jpg",link:"#"},
    {id:9,title:"My Hero Academia",titleTl:"Ang Aking Bayani Akademiya",year:"2014",type:"Manga",lang:"EN / TL",category:["trending","all"],desc:"A superhero-loving boy without powers enrolls in a prestigious hero academy after inheriting the world's greatest quirk.",descTl:"Isang batang mahilig sa bayani na walang kapangyarihan ay pumasok sa akademya ng mga bayani matapos makuha ang pinakamalakas na kapangyarihan.",img:"https://upload.wikimedia.org/wikipedia/en/6/6a/My_Hero_Academia_vol_1.jpg",link:"#"},
    {id:10,title:"Tokyo Ghoul",titleTl:"Halimaw ng Tokyo",year:"2011",type:"Manga",lang:"EN / TL",category:["all"],desc:"A college student becomes half-human and half-ghoul after a deadly encounter, forced to live a hidden life.",descTl:"Naging kalahating tao at kalahating halimaw ang isang estudyante matapos ang isang nakamamatay na pangyayari.",img:"https://upload.wikimedia.org/wikipedia/en/e/e5/Tokyo_Ghoul_vol_1.jpg",link:"#"},
    {id:11,title:"Death Note",titleTl:"Aklat ng Kamatayan",year:"2003",type:"Manga",lang:"EN / TL",category:["all"],desc:"A high school student discovers a notebook that can kill anyone whose name is written in it.",descTl:"Nakakuha ang isang estudyante ng kuwaderno na nakakapatay ng sinumang isulat ang pangalan dito.",img:"https://upload.wikimedia.org/wikipedia/en/6/64/Death_Note_vol_1.jpg",link:"#"},
    {id:12,title:"Black Clover",titleTl:"Itim na Klaber",year:"2015",type:"Manga",lang:"EN / TL",category:["new","all"],desc:"A boy born without magic strives to become the Wizard King despite all odds.",descTl:"Isang batang walang mahika ay nagsisikap na maging Hari ng mga Salamangkero.",img:"https://upload.wikimedia.org/wikipedia/en/6/69/Black_Clover_vol_1.jpg",link:"#"},
    {id:13,title:"Re:Zero",titleTl:"Re:Zero",year:"2014",type:"Light Novel",lang:"EN / TL",category:["all"],desc:"Subaru Natsuki is transported to another world and discovers he can return from death with a reset.",descTl:"Dinala si Subaru sa ibang mundo at natuklasan na kaya niyang bumalik mula sa kamatayan.",img:"https://upload.wikimedia.org/wikipedia/en/7/7c/Re-Zero_vol_1.jpg",link:"#"},
    {id:14,title:"Overlord",titleTl:"Overlord",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],desc:"A gamer is trapped as his powerful skeleton avatar in a fantasy world where he rules as an overlord.",descTl:"Naipit ang isang manlalaro bilang isang malakas na kalansay sa mundong pantasya at namuno bilang hari.",img:"https://upload.wikimedia.org/wikipedia/en/6/6d/Overlord_vol_1.jpg",link:"#"},
    {id:15,title:"Konosuba",titleTl:"Konosuba",year:"2013",type:"Light Novel",lang:"EN / TL",category:["all"],desc:"A shut-in boy is reborn in a magical world with a useless goddess and chaotic companions.",descTl:"Isang batang laging nasa bahay ay muling isinilang sa mundong mahika kasama ang isang walang silbing diyosa.",img:"https://upload.wikimedia.org/wikipedia/en/e/e7/Konosuba_vol_1.jpg",link:"#"},
    {id:16,title:"Sword Art Online",titleTl:"Sword Art Online",year:"2009",type:"Light Novel",lang:"EN / TL",category:["all"],desc:"Players get trapped inside a virtual reality game where dying in the game means dying in real life.",descTl:"Naipit ang mga manlalaro sa loob ng laro kung saan ang pagkamatay sa laro ay pagkamatay din sa totoong buhay.",img:"https://upload.wikimedia.org/wikipedia/en/6/6b/Sword_Art_Online_vol_1.jpg",link:"#"},
    {id:17,title:"No Game No Life",titleTl:"Walang Laro Walang Buhay",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],desc:"Two genius gamer siblings are transported to a world where everything is decided by games.",descTl:"Dalawang magkapatid na mahusay maglaro ay dinala sa mundo kung saan lahat ay napagdedesisyunan sa pamamagitan ng laro.",img:"https://upload.wikimedia.org/wikipedia/en/6/6e/No_Game_No_Life_vol_1.jpg",link:"#"},
    {id:18,title:"Fate/Stay Night",titleTl:"Fate/Stay Night",year:"2004",type:"Light Novel / Manga",lang:"EN / TL",category:["all"],desc:"Mages fight in a deadly battle royale for the Holy Grail that grants any wish.",descTl:"Naglalaban ang mga salamangkero para sa Banal na Kopa na nagbibigay ng anumang hiling.",img:"https://upload.wikimedia.org/wikipedia/en/9/92/Fate_stay_night_vol_1.jpg",link:"#"},
    {id:19,title:"Chainsaw Man",titleTl:"Tao na Lagari",year:"2018",type:"Manga",lang:"EN / TL",category:["trending","new","all"],desc:"A young man fuses with his pet devil and becomes Chainsaw Man, working for a government devil hunter agency.",descTl:"Isang binata ang nagsama sa kanyang alagang demonyo at naging Chainsaw Man na nagtatrabaho para sa gobyerno.",img:"https://upload.wikimedia.org/wikipedia/en/8/8b/Chainsaw_Man_vol_1.jpg",link:"#"},
    {id:20,title:"Hunter x Hunter",titleTl:"Mangangaso x Mangangaso",year:"1998",type:"Manga",lang:"EN / TL",category:["trending","all"],desc:"Gon Freecss sets out to become a Hunter and find his father, who abandoned him years ago.",descTl:"Naglakbay si Gon Freecss upang maging Mangangaso at hanapin ang kanyang ama na iniwan siya noon.",img:"https://upload.wikimedia.org/wikipedia/en/9/94/Hunter_x_Hunter_vol_1.jpg",link:"#"},
    {id:21,title:"Fullmetal Alchemist",titleTl:"Buong Metal na Alkemista",year:"2001",type:"Manga",lang:"EN / TL",category:["all"],desc:"Two brothers use alchemy to bring their mother back, paying a terrible price and seeking the Philosopher's Stone.",descTl:"Gumamit ng alkemya ang magkapatid para ibalik ang kanilang ina, ngunit nagbayad ng malaking halaga at naghanap ng Bato ng Pilosopo.",img:"https://upload.wikimedia.org/wikipedia/en/9/9d/Fullmetal_Alchemist_vol_1.jpg",link:"#"},
    {id:22,title:"Dragon Ball",titleTl:"Dragon Ball",year:"1984",type:"Manga",lang:"EN / TL",category:["trending","all"],desc:"Goku searches for the Dragon Balls that grant wishes, growing stronger to protect Earth.",descTl:"Naghahanap si Goku ng mga Dragon Ball na nagbibigay ng hiling, at lumalakas upang protektahan ang Mundo.",img:"https://upload.wikimedia.org/wikipedia/en/c/c9/Dragon_Ball_vol_1.jpg",link:"#"},
    {id:23,title:"Dragon Ball Z",titleTl:"Dragon Ball Z",year:"1989",type:"Manga",lang:"EN / TL",category:["trending","all"],desc:"Goku and his friends defend Earth from powerful alien invaders and deadly warriors.",descTl:"Ipinagtatanggol ni Goku at ng kanyang mga kaibigan ang Mundo mula sa mga dayuhang mananakop.",img:"https://upload.wikimedia.org/wikipedia/en/3/38/Dragon_Ball_Z_vol_1.jpg",link:"#"},
    {id:24,title:"Dragon Ball Super",titleTl:"Dragon Ball Super",year:"2015",type:"Manga",lang:"EN / TL",category:["new","all"],desc:"Goku faces gods of destruction and multiverse threats to become the strongest in existence.",descTl:"Hinarap ni Goku ang mga diyos ng pagkawasak at panganib mula sa ibang mundo upang maging pinakamalakas.",img:"https://upload.wikimedia.org/wikipedia/en/1/14/Dragon_Ball_Super_vol_1.jpg",link:"#"},
    {id:25,title:"Tokyo Revengers",titleTl:"Mga Tagapaghiganti ng Tokyo",year:"2017",type:"Manga",lang:"EN / TL",category:["trending","all"],desc:"A boy travels back in time to save his ex-girlfriend and rewrite his tragic past.",descTl:"Bumalik sa nakaraan ang isang binata upang iligtas ang kanyang dating kasintahan at baguhin ang kanyang malungkot na nakaraan.",img:"https://upload.wikimedia.org/wikipedia/en/7/7d/Tokyo_Revengers_vol_1.jpg",link:"#"},
    {id:26,title:"Komi Can't Communicate",titleTl:"Hindi Makapagsalita si Komi",year:"2016",type:"Manga",lang:"EN / TL",category:["all"],desc:"A beautiful girl with extreme social anxiety struggles to make friends, aiming for 100 friends.",descTl:"Isang magandang babae na nahihiyang makipag-usap ay nagsisikap na magkaroon ng 100 kaibigan.",img:"https://upload.wikimedia.org/wikipedia/en/3/3b/Komi_Can%27t_Communicate_vol_1.jpg",link:"#"},
    {id:27,title:"Horimiya",titleTl:"Horimiya",year:"2012",type:"Manga",lang:"EN / TL",category:["all"],desc:"Two high school students discover each other's hidden sides outside of school.",descTl:"Natuklasan ng dalawang mag-aaral ang tunay na pagkatao ng isa't isa sa labas ng paaralan.",img:"https://upload.wikimedia.org/wikipedia/en/8/8b/Horimiya_vol_1.jpg",link:"#"},
    {id:28,title:"Your Lie in April",titleTl:"Ang Iyong Kasinungalingan sa Abril",year:"2011",type:"Manga / Light Novel",lang:"EN / TL",category:["all"],desc:"A former piano prodigy meets a violinist who helps him return to music.",descTl:"Nakilala ng dating mahusay na manunugtog ng piyano ang isang biyolinista na tumulong sa kanya na bumalik sa musika.",img:"https://upload.wikimedia.org/wikipedia/en/d/d5/Your_Lie_in_April_vol_1.jpg",link:"#"},
    {id:29,title:"Violet Evergarden",titleTl:"Violet Evergarden",year:"2015",type:"Light Novel",lang:"EN / TL",category:["all"],desc:"A former child soldier learns to write letters to understand love and emotions.",descTl:"Ang dating batang sundalo ay natutong magsulat ng liham upang maunawaan ang pag-ibig at damdamin.",img:"https://upload.wikimedia.org/wikipedia/en/7/7b/Violet_Evergarden_vol_1.jpg",link:"#"},
    {id:30,title:"Sailor Moon",titleTl:"Sailor Moon",year:"1991",type:"Manga",lang:"EN / TL",category:["all"],desc:"Usagi Tsukino leads a team of magical girls to protect the universe from evil forces.",descTl:"Pinamumunuan ni Usagi Tsukino ang pangkat ng mga mahiwagang babae upang protektahan ang uniberso.",img:"https://upload.wikimedia.org/wikipedia/en/c/c9/Sailor_Moon_vol_1.jpg",link:"#"},
    {id:31,title:"Bungo Stray Dogs",titleTl:"Mga Manunulat na Ligaw na Aso",year:"2013",type:"Manga",lang:"EN / TL",category:["all"],desc:"Detectives with supernatural abilities solve cases and fight dangerous organizations.",descTl:"Ang mga detektib na may kakaibang kapangyarihan ay lumulutas ng mga kaso at nakikipaglaban sa masasamang samahan.",img:"https://upload.wikimedia.org/wikipedia/en/9/9b/Bungo_Stray_Dogs_vol_1.jpg",link:"#"},
    {id:32,title:"Blue Exorcist",titleTl:"Asul na Ekzorista",year:"2009",type:"Manga",lang:"EN / TL",category:["all"],desc:"A boy discovers he is the son of Satan and becomes an exorcist to defeat his father.",descTl:"Nalaman ng isang binata na siya ay anak ni Satanas at naging ekzorista upang talunin ang kanyang ama.",img:"https://upload.wikimedia.org/wikipedia/en/7/7d/Blue_Exorcist_vol_1.jpg",link:"#"},
    {id:33,title:"Noragami",titleTl:"Noragami",year:"2010",type:"Manga",lang:"EN / TL",category:["all"],desc:"A minor god without a shrine helps people for 5 yen to build his own following.",descTl:"Ang maliit na diyos na walang templo ay tumutulong sa mga tao kapalit ng 5 yen upang magkaroon ng sariling tagasunod.",img:"https://upload.wikimedia.org/wikipedia/en/5/5d/Noragami_vol_1.jpg",link:"#"},
    {id:34,title:"The Seven Deadly Sins",titleTl:"Ang Pitong Nakamamatay na Kasalanan",year:"2012",type:"Manga",lang:"EN / TL",category:["all"],desc:"Princess Elizabeth reunites a group of disgraced knights to save her kingdom.",descTl:"Pinagsama muli ni Prinsesa Elizabeth ang mga dating kawal upang iligtas ang kanilang kaharian.",img:"https://upload.wikimedia.org/wikipedia/en/9/9c/The_Seven_Deadly_Sins_vol_1.jpg",link:"#"},
    {id:35,title:"Fairy Tail",titleTl:"Buntot ng Diwata",year:"2006",type:"Manga",lang:"EN / TL",category:["all"],desc:"A young celestial mage joins a rowdy guild of wizards and finds family.",descTl:"Sumali ang batang manggagamot sa maingay na samahan ng mga salamangkero at nakahanap ng pamilya.",img:"https://upload.wikimedia.org/wikipedia/en/0/06/Fairy_Tail_vol_1.jpg",link:"#"},
    {id:36,title:"Baki",titleTl:"Baki",year:"1991",type:"Manga",lang:"EN / TL",category:["all"],desc:"A young fighter trains to surpass his father and become the strongest alive.",descTl:"Nagsasanay ang batang mandirigma upang higitan ang kanyang ama at maging pinakamalakas.",img:"https://upload.wikimedia.org/wikipedia/en/7/7d/Baki_vol_1.jpg",link:"#"},
    {id:37,title:"Kengan Ashura",titleTl:"Kengan Ashura",year:"2012",type:"Manga",lang:"EN / TL",category:["all"],desc:"Businesses settle disputes through gladiator-style hand-to-hand combat.",descTl:"Ang mga negosyo ay naglulutas ng alitan sa pamamagitan ng labanan ng lakas.",img:"https://upload.wikimedia.org/wikipedia/en/1/1b/Kengan_Ashura_vol_1.jpg",link:"#"},
    {id:38,title:"Mob Psycho 100",titleTl:"Mob Psycho 100",year:"2012",type:"Manga",lang:"EN / TL",category:["all"],desc:"A powerful psychic boy tries to live a normal life while suppressing his powers.",descTl:"Ang batang may malakas na kapangyarihan ay nagsisikap mamuhay nang payapa.",img:"https://upload.wikimedia.org/wikipedia/en/0/0a/Mob_Psycho_100_vol_1.jpg",link:"#"},
    {id:39,title:"One Punch Man",titleTl:"Isang Suntok na Tao",year:"2009",type:"Manga",lang:"EN / TL",category:["trending","all"],desc:"A hero who defeats every enemy with one punch grows bored of fighting.",descTl:"Ang bayaning tatalo sa lahat ng kalaban sa isang suntok ay nagsawa na sa pakikipaglaban.",img:"https://upload.wikimedia.org/wikipedia/en/7/7c/One_Punch_Man_vol_1.jpg",link:"#"},
    {id:40,title:"Dr. Stone",titleTl:"Dr. Stone",year:"2016",type:"Manga",lang:"EN / TL",category:["all"],desc:"After humanity is turned to stone, a genius rebuilds civilization using science.",descTl:"Matapos maging bato ang lahat, muling itinayo ng matalinong binata ang sibilisasyon gamit ang agham.",img:"https://upload.wikimedia.org/wikipedia/en/8/8c/Dr._Stone_vol_1.jpg",link:"#"},
    {id:41,title:"Fire Force",titleTl:"Puwersa ng Apoy",year:"2015",type:"Manga",lang:"EN / TL",category:["all"],desc:"Firefighters battle humans turned into living infernals by spontaneous combustion.",descTl:"Ang mga bumbero ay nakikipaglaban sa mga taong naging halimaw ng apoy.",img:"https://upload.wikimedia.org/wikipedia/en/6/6f/Fire_Force_vol_1.jpg",link:"#"},
    {id:42,title:"Black Lagoon",titleTl:"Itim na Lawa",year:"2002",type:"Manga",lang:"EN / TL",category:["all"],desc:"A businessman becomes part of a mercenary crew in Southeast Asia.",descTl:"Ang negosyante ay naging miyembro ng pangkat ng mga upahang mandirigma.",img:"https://upload.wikimedia.org/wikipedia/en/6/60/Black_Lagoon_vol_1.jpg",link:"#"},
    {id:43,title:"Vinland Saga",titleTl:"Kwento ng Vinland",year:"2005",type:"Manga",lang:"EN / TL",category:["all"],desc:"A Viking boy seeks revenge then abandons violence to build a peaceful land.",descTl:"Naghiganti ang batang Viking ngunit tinalikuran ang karahasan upang bumuo ng payapang lupain.",img:"https://upload.wikimedia.org/wikipedia/en/a/a4/Vinland_Saga_vol_1.jpg",link:"#"},
    {id:44,title:"Steins;Gate",titleTl:"Steins;Gate",year:"2009",type:"Light Novel / Manga",lang:"EN / TL",category:["all"],desc:"A self-proclaimed mad scientist discovers time travel and tries to fix its damage.",descTl:"Natuklasan ng tinatawag na baliw na siyentipiko ang paglalakbay sa oras at inayos ang pinsalang dulot nito.",img:"https://upload.wikimedia.org/wikipedia/en/7/73/Steins_Gate_vol_1.jpg",link:"#"},
    {id:45,title:"Parasyte",titleTl:"Parasyte",year:"1988",type:"Manga",lang:"EN / TL",category:["all"],desc:"Alien parasites take over human bodies — one boy fights alongside his parasite.",descTl:"Kinukuha ng mga dayuhang parasito ang katawan ng tao — isang binata ang nakipagtulungan sa kanyang parasito.",img:"https://upload.wikimedia.org/wikipedia/en/3/32/Parasyte_vol_1.jpg",link:"#"},
    {id:46,title:"Monster",titleTl:"Halimaw",year:"1994",type:"Manga",lang:"EN / TL",category:["all"],desc:"A doctor saves a boy who grows up to become a serial killer.",descTl:"Iniligtas ng doktor ang batang lumaki at naging mamamatay-tao.",img:"https://upload.wikimedia.org/wikipedia/en/8/8d/Monster_vol_1.jpg",link:"#"},
    {id:47,title:"Berserk",titleTl:"Berserk",year:"1989",type:"Manga",lang:"EN / TL",category:["all"],desc:"A lone swordsman seeks revenge against his former best friend who betrayed him.",descTl:"Ang nag-iisang mandirigma ay naghihiganti sa dating kaibigan na nagtaksil sa kanya.",img:"https://upload.wikimedia.org/wikipedia/en/5/5a/Berserk_vol_1.jpg",link:"#"},
    {id:48,title:"Mob Psycho 100 II",titleTl:"Mob Psycho 100 II",year:"2016",type:"Manga",lang:"EN / TL",category:["new","all"],desc:"Continuation of Mob's journey controlling his powers and growing up.",descTl:"Pagpapatuloy ng paglalakbay ni Mob sa pagkontrol ng kanyang kapangyarihan at paglaki.",img:"https://upload.wikimedia.org/wikipedia/en/0/0a/Mob_Psycho_100_vol_1.jpg",link:"#"},
    {id:49,title:"Demon Slayer: Swordsmith Village",titleTl:"Demon Slayer: Nayon ng Panday",year:"2022",type:"Manga",lang:"EN / TL",category:["trending","new","all"],desc:"Tanjiro travels to the Swordsmith Village to repair his broken blade.",descTl:"Naglakbay si Tanjiro sa Nayon ng Panday upang ipagawa ang kanyang espada.",img:"https://upload.wikimedia.org/wikipedia/en/0/09/Kimetsu_no_Yaiba_vol_1.jpg",link:"#"},
    {id:50,title:"Jujutsu Kaisen 0",titleTl:"Jujutsu Kaisen 0",year:"2017",type:"Manga",lang:"EN / TL",category:["trending","new","all"],desc:"The story of Yuta Okkotsu, a boy haunted by his dead girlfriend's powerful curse.",descTl:"Ang kwento ni Yuta Okkotsu na pinagmumultuhan ng sumpa ng kanyang namatay na kasintahan.",img:"https://upload.wikimedia.org/wikipedia/en/9/91/Jujutsu_Kaisen_vol_1.jpg",link:"#"}
];

// ==================================================
// ALL FUNCTIONS BELOW - DO NOT EDIT
// ==================================================
let currentLang = 'en';
const langText = {
    en: {heroTitle:"Your Favorite Anime Novels & Manga",heroDesc:"Download thousands of anime light novels, manga, and ebooks for free",trendingTitle:"🔥 Trending Now",newTitle:"✨ New Released",allTitle:"📚 All Anime Ebooks",searchPlaceholder:"Search anime ebooks..."},
    tl: {heroTitle:"Ang Iyong Mga Paboritong Nobela at Manga",heroDesc:"Mag-download ng libo-libong anime light novel, manga, at ebook nang libre",trendingTitle:"🔥 Pinakasikat Ngayon",newTitle:"✨ Mga Bagong Labas",allTitle:"📚 Lahat ng Anime Ebook",searchPlaceholder:"Maghanap ng anime ebook..."}
};

const navbar = document.querySelector('.navbar');
const langSelect = document.getElementById('langSelect');
const searchInput = document.getElementById('searchInput');
const infoModal = document.getElementById('infoModal');
const closeBtn = document.querySelector('.close-btn');
const downloadBtn = document.getElementById('downloadBtn');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

langSelect.addEventListener('change', e => {
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

function renderCards(data = animeData) {
    document.getElementById('trendingRow').innerHTML = '';
    document.getElementById('newRow').innerHTML = '';
    document.getElementById('allRow').innerHTML = '';
    data.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `<img src="${anime.img}" alt="${currentLang==='en'?anime.title:anime.titleTl}" loading="lazy"><div class="card-info"><h3>${currentLang==='en'?anime.title:anime.titleTl}</h3><p>${anime.year} • ${anime.type}</p></div>`;
        card.addEventListener('click', () => openModal(anime));
        if (anime.category.includes('trending')) document.getElementById('trendingRow').appendChild(card);
        if (anime.category.includes('new')) document.getElementById('newRow').appendChild(card);
        if (anime.category.includes('all')) document.getElementById('allRow').appendChild(card);
    });
}

function openModal(anime) {
    document.getElementById('modalImg').src = anime.img;
    document.getElementById('modalTitle').innerText = currentLang==='en'?anime.title:anime.titleTl;
    document.getElementById('modalYear').innerText = anime.year;
    document.getElementById('modalType').innerText = anime.type;
    document.getElementById('modalLang').innerText = anime.lang;
    document.getElementById('modalDesc').innerText = currentLang==='en'?anime.desc:anime.descTl;
    downloadBtn.onclick = () => window.open(anime.link, '_blank');
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

closeBtn.addEventListener('click', () => {
    infoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});
window.addEventListener('click', e => {
    if (e.target === infoModal) {
        infoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

searchInput.addEventListener('input', e => {
    const kw = e.target.value.toLowerCase().trim();
    if (!kw) return renderCards();
    renderCards(animeData.filter(a => a.title.toLowerCase().includes(kw) || a.titleTl.toLowerCase().includes(kw)));
});

renderCards();
updateLanguage();
