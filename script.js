// ==============================================
// 🔴 PINAKA-UNA: ANG BUONG LISTA NG LAHAT NG ANIME
// ==============================================
const animeData = [
    {id:1,title:"Demon Slayer: The Flower of Happiness",titleTl:"Demon Slayer: Bulaklak ng Kaligayahan",year:"2019",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.8,totalVotes:1247,
    desc:"An official side-story light novel set during the main series journey. Follow Tanjiro, Nezuko, Zenitsu, and Inosuke as they arrive at a peaceful mountain village plagued by a mysterious demon that preys on happy memories.",
    descTl:"Isang opisyal na karagdagang kwento na naganap habang naglalakbay pa ang mga bida. Samahan sina Tanjiro, Nezuko, Zenitsu, at Inosuke sa isang payapang nayon sa bundok na pinamumugaran ng demonyong kumukuha ng masasayang alaala.",
    img:"https://upload.wikimedia.org/wikipedia/en/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg",linkEn:"#",linkTl:"#"},
    {id:2,title:"Jujutsu Kaisen: Summer of Ashes, Autumn of Dust",titleTl:"Jujutsu Kaisen: Tag-init ng Abo, Taglagas ng Alikabok",year:"2019",type:"Light Novel",lang:"EN / TL",category:["trending","new","all"],rating:4.9,totalVotes:1892,
    desc:"Explore untold missions and backstories of Yuji Itadori, Megumi Fushiguro, Nobara Kugisaki, and their teacher Gojo Satoru.",
    descTl:"Alamin ang mga hindi pa nasasabing misyon at nakaraan nina Yuji Itadori, Megumi Fushiguro, Nobara Kugisaki, at ng kanilang guro na si Gojo Satoru.",
    img:"https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg",linkEn:"#",linkTl:"#"},
    {id:3,title:"One Piece: The Novel",titleTl:"One Piece: Ang Nobela",year:"2000",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.7,totalVotes:987,
    desc:"A retelling of the early adventures of Monkey D. Luffy and the formation of the Straw Hat Pirates.",
    descTl:"Isang muling pagsasalaysay ng mga unang pakikipagsapalaran ni Monkey D. Luffy at kung paano nabuo ang Straw Hat Pirates.",
    img:"https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",linkEn:"#",linkTl:"#"},
    {id:4,title:"Solo Leveling: Light Novel Complete",titleTl:"Solo Leveling: Kumpletong Nobela",year:"2016",type:"Light Novel",lang:"EN / TL",category:["new","all"],rating:4.9,totalVotes:2103,
    desc:"The full original light novel series that inspired the global hit manhwa. Follow Sung Jin-Woo, the weakest hunter, who gains a mysterious ability to level up without limits.",
    descTl:"Ang buong orihinal na nobela na naging batayan ng sikat na manhwa. Sundan si Sung Jin-Woo, ang pinakamahinang mangangaso, na binigyan ng kakayahang lumakas nang walang hangganan.",
    img:"https://upload.wikimedia.org/wikipedia/en/6/6c/Solo_Leveling_Volume_1_Cover.jpg",linkEn:"#",linkTl:"#"},
    {id:5,title:"Attack on Titan: Before the Fall",titleTl:"Pag-atake ng Higante: Bago ang Pagbagsak",year:"2011",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.6,totalVotes:765,
    desc:"A gripping prequel set decades before Eren Yeager’s story begins. Learn how humanity first discovered the terrifying Titans.",
    descTl:"Isang nakakapanabik na kwento bago pa man ang kwento ni Eren. Alamin kung paano unang nakilala ng tao ang mga nakakatakot na Higante.",
    img:"https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg",linkEn:"#",linkTl:"#"},
    {id:6,title:"Spy x Family: Family Portrait",titleTl:"Spy x Family: Larawan ng Pamilya",year:"2021",type:"Light Novel",lang:"EN / TL",category:["trending","new","all"],rating:4.8,totalVotes:1567,
    desc:"Enjoy extra missions and slice-of-life stories featuring the Forger Family: spy Loid, assassin Yor, and telepath Anya.",
    descTl:"Masiyahan sa mga karagdagang kwento ng pamilya Forger: ang espiya, mamamatay-tao, at batang nakakabasa ng isip.",
    img:"https://upload.wikimedia.org/wikipedia/en/5/51/Spy_Family_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:7,title:"Naruto: The Chronicles",titleTl:"Naruto: Ang mga Kasaysayan",year:"2002",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.7,totalVotes:1123,
    desc:"Official expanded stories diving deeper into Naruto Uzumaki’s journey from outcast to Seventh Hokage.",
    descTl:"Mga kwento na nagpapalawak sa paglalakbay ni Naruto mula sa pagiging iniiwasan hanggang sa maging Hokage.",
    img:"https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",linkEn:"#",linkTl:"#"},
    {id:8,title:"Bleach: The Death Save the Strawberry",titleTl:"Bleach: Ang Kaligtasan ng Prutas",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.5,totalVotes:654,
    desc:"Follow Ichigo Kurosaki during the gaps between major battles, exploring his life as a substitute Soul Reaper.",
    descTl:"Sundan si Ichigo sa kanyang buhay bilang pansamantalang Tagapagligtas ng Kaluluwa.",
    img:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bleach_%28manga%29_1.png",linkEn:"#",linkTl:"#"},
    {id:9,title:"My Hero Academia: School Briefs",titleTl:"Ang Aking Bayani: Mga Kwento sa Paaralan",year:"2016",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.8,totalVotes:1345,
    desc:"Step into the daily life of Class 1-A at U.A. High School as they learn the true meaning of heroism.",
    descTl:"Pumasok sa buhay ng Class 1-A at alamin ang tunay na kahulugan ng pagiging bayani.",
    img:"https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png",linkEn:"#",linkTl:"#"},
    {id:10,title:"Tokyo Ghoul: Days",titleTl:"Halimaw ng Tokyo: Mga Araw",year:"2013",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.4,totalVotes:543,
    desc:"Side stories showing the quiet, painful moments of humans and ghouls living in Tokyo.",
    descTl:"Mga kwento ng tahimik at masakit na buhay ng mga tao at halimaw sa Tokyo.",
    img:"https://upload.wikimedia.org/wikipedia/en/e/e5/Tokyo_Ghoul_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:11,title:"Death Note: Another Note",titleTl:"Aklat ng Kamatayan: Isa pang Tala",year:"2006",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:876,
    desc:"A thrilling prequel about the Los Angeles BB Murder Cases before Kira appeared.",
    descTl:"Kwento ng mga krimen bago pa man dumating si Kira.",
    img:"https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:12,title:"Black Clover: The Knights of the Kingdom",titleTl:"Itim na Klaber: Mga Kawal ng Kaharian",year:"2018",type:"Light Novel",lang:"EN / TL",category:["new","all"],rating:4.6,totalVotes:721,
    desc:"Journey with Asta and the Black Bulls showing that hard work can overcome magic.",
    descTl:"Samahan si Asta at patunayan na ang pagsisikap ay kayang talunin ang mahika.",
    img:"https://upload.wikimedia.org/wikipedia/en/6/69/Black_Clover%2C_volume_1.jpg",linkEn:"#",linkTl:"#"},
    {id:13,title:"Re:Zero - Starting Life in Another World",titleTl:"Re:Zero - Magsimula Muli sa Ibang Mundo",year:"2014",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.8,totalVotes:1098,
    desc:"Natsuki Subaru returns from death repeatedly to protect the people he loves.",
    descTl:"Paulit-ulit na bumabalik mula sa kamatayan si Subaru para iligtas ang mga mahal niya.",
    img:"https://upload.wikimedia.org/wikipedia/en/3/3c/Re-Zero_kara_Hajimeru_Isekai_Seikatsu_light_novel_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:14,title:"Overlord",titleTl:"Overlord",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:932,
    desc:"A player trapped as an undead builds an empire in a new world.",
    descTl:"Isang manlalarong naipit bilang patay na nilalang na bumuo ng sariling kaharian.",
    img:"https://upload.wikimedia.org/wikipedia/en/0/05/Overlord_II.jpg",linkEn:"#",linkTl:"#"},
    {id:15,title:"Konosuba: God's Blessing on This Wonderful World",titleTl:"Konosuba: Pagpapala sa Kahanga-hangang Mundong Ito",year:"2013",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.6,totalVotes:812,
    desc:"Hilarious adventures of Kazuma and his useless goddess Aqua.",
    descTl:"Nakakatawang pakikipagsapalaran ni Kazuma at ng walang silbing diyosang si Aqua.",
    img:"https://upload.wikimedia.org/wikipedia/en/3/3e/Kono_Subarashii_Sekai_ni_Shukufuku_o%21_light_novel_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:16,title:"Sword Art Online",titleTl:"Sword Art Online",year:"2009",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.5,totalVotes:1023,
    desc:"Players trapped in a VR game where dying means death in real life.",
    descTl:"Mga manlalarong naipit sa laro kung saan ang kamatayan sa laro ay kamatayan din sa totoo.",
    img:"https://upload.wikimedia.org/wikipedia/en/3/3e/Sword_Art_Online_light_novel_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:17,title:"No Game No Life",titleTl:"Walang Laro Walang Buhay",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:765,
    desc:"Genius siblings conquer a world ruled entirely by games.",
    descTl:"Matalinong magkapatid na sumakop sa mundong laro ang batas.",
    img:"https://upload.wikimedia.org/wikipedia/en/c/cd/No_Game_No_Life_light_novel_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:18,title:"Fate/Stay Night",titleTl:"Fate/Stay Night",year:"2004",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.4,totalVotes:543,
    desc:"Seven mages fight for the Holy Grail that grants any wish.",
    descTl:"Pitong salamangkero na naglalaban para sa Banal na Kopa.",
    img:"https://upload.wikimedia.org/wikipedia/en/d/d4/Fate-stay_night.jpg",linkEn:"#",linkTl:"#"},
    {id:19,title:"Chainsaw Man: Buddy Stories",titleTl:"Tao na Lagari: Mga Kwento ng Magkaibigan",year:"2021",type:"Light Novel",lang:"EN / TL",category:["trending","new","all"],rating:4.8,totalVotes:1432,
    desc:"Side stories of Denji, Power, and Aki hunting devils together.",
    descTl:"Mga kwento nina Denji, Power, at Aki habang nanghuhuli ng demonyo.",
    img:"https://upload.wikimedia.org/wikipedia/en/2/24/Chainsawman.jpg",linkEn:"#",linkTl:"#"},
    {id:20,title:"Hunter x Hunter: The Journey",titleTl:"Mangangaso x Mangangaso: Ang Paglalakbay",year:"2001",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.6,totalVotes:891,
    desc:"Gon Freecss takes the dangerous Hunter Exam to find his father.",
    descTl:"Sumali si Gon sa mapanganib na pagsusulit para hanapin ang kanyang ama.",
    img:"https://upload.wikimedia.org/wikipedia/en/e/e8/Hunter_%C3%97_Hunter_vol._1.png",linkEn:"#",linkTl:"#"},
    {id:21,title:"Fullmetal Alchemist: The Land of Sand",titleTl:"Buong Metal na Alkemista: Lupain ng Buhangin",year:"2003",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:678,
    desc:"Edward and Alphonse Elric search for a way to restore their bodies.",
    descTl:"Naghahanap sina Edward at Alphonse ng paraan para maibalik ang kanilang katawan.",
    img:"https://upload.wikimedia.org/wikipedia/en/9/9d/Fullmetal123.jpg",linkEn:"#",linkTl:"#"},
    {id:22,title:"Dragon Ball: The Legend",titleTl:"Dragon Ball: Ang Alamat",year:"1986",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.5,totalVotes:987,
    desc:"Follow Goku from childhood to becoming the strongest warrior.",
    descTl:"Sundan si Goku mula pagkabata hanggang maging pinakamalakas.",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RqUW0UcMDuAwflpzfMmfkCtgkXa-Ufu1lq8iCf1YMxxgtJ-OGh-XDH3Yqi5JFXI1RJiW&s=10",linkEn:"#",linkTl:"#"},
    {id:23,title:"Your Name. Light Novel",titleTl:"Ang Iyong Pangalan. Nobela",year:"2016",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.9,totalVotes:1654,
    desc:"Taki and Mitsuha mysteriously swap bodies across Japan.",
    descTl:"Biglang nagpapalitan ng katawan sina Taki at Mitsuha.",
    img:"https://upload.wikimedia.org/wikipedia/en/2/24/Your_Name_%28novel%29_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:24,title:"Weathering With You Light Novel",titleTl:"Pagbabago ng Panahon Nobela",year:"2019",type:"Light Novel",lang:"EN / TL",category:["new","all"],rating:4.8,totalVotes:1211,
    desc:"Hodaka meets Hina, a girl who can control the weather.",
    descTl:"Nakilala ni Hodaka si Hina na may kakayahang kontrolin ang panahon.",
    img:"https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg",linkEn:"#",linkTl:"#"},
    {id:25,title:"Tokyo Revengers: A Letter from Keisuke Baji",titleTl:"Mga Tagapaghiganti ng Tokyo: Liham mula kay Baji",year:"2021",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.7,totalVotes:1034,
    desc:"Untold story of Baji and the early days of Tokyo Manji Gang.",
    descTl:"Kwento ni Baji at kung paano nabuo ang Tokyo Manji Gang.",
    img:"https://upload.wikimedia.org/wikipedia/en/b/b1/Tokyo_Revengers_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:26,title:"Violet Evergarden",titleTl:"Violet Evergarden",year:"2015",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.9,totalVotes:1789,
    desc:"Former weapon Violet writes letters to understand the meaning of 'I love you'.",
    descTl:"Dati ay sandata, ngayon ay nagsusulat ng liham para alamin ang kahulugan ng pag-ibig.",
    img:"https://upload.wikimedia.org/wikipedia/en/b/be/Violet_Evergarden_light_novel_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:27,title:"Steins;Gate",titleTl:"Steins;Gate",year:"2009",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.6,totalVotes:856,
    desc:"Okabe invents time travel and must fix its terrible consequences.",
    descTl:"Nakaimbento si Okabe ng paraan sa oras at kailangang ayusin ang epekto nito.",
    img:"https://upload.wikimedia.org/wikipedia/en/e/e4/Steins%3BGate_cover_art.jpg",linkEn:"#",linkTl:"#"},
    {id:28,title:"The Seven Deadly Sins: Seven Days",titleTl:"Ang Pitong Nakamamatay na Kasalanan: Pitong Araw",year:"2014",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.5,totalVotes:643,
    desc:"Side stories expanding the world of the legendary knights.",
    descTl:"Mga karagdagang kwento tungkol sa mga maalamat na kawal.",
    img:"https://upload.wikimedia.org/wikipedia/en/e/e1/The_Seven_Deadly_Sins_2014_TV_series.jpg",linkEn:"#",linkTl:"#"},
    {id:29,title:"Fairy Tail: The Phoenix Priestess",titleTl:"Buntot ng Diwata: Ang Pari ng Ibong Adarna",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.4,totalVotes:532,
    desc:"Magical adventure with Natsu, Lucy, and the Fairy Tail guild.",
    descTl:"Mahiwagang pakikipagsapalaran kasama sina Natsu at Lucy.",
    img:"https://upload.wikimedia.org/wikipedia/en/e/e1/FairyTail-Volume_1_Cover.jpg",linkEn:"#",linkTl:"#"},
    {id:30,title:"One Punch Man: A Hero Nobody Knows",titleTl:"Isang Suntok na Tao: Bayaning Walang Nakakakilala",year:"2015",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.7,totalVotes:1121,
    desc:"Saitama defeats any enemy with one punch but seeks a real challenge.",
    descTl:"Talo ni Saitama ang lahat sa isang suntok lang, naghahanap ng totoong kalaban.",
    img:"https://upload.wikimedia.org/wikipedia/en/c/c3/OnePunchMan_manga_cover.png",linkEn:"#",linkTl:"#"},
    {id:31,title:"Dr. Stone: Rebirth of Civilization",titleTl:"Dr. Stone: Muling Pagsilang ng Sibilisasyon",year:"2019",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.8,totalVotes:1345,
    desc:"Senku rebuilds human civilization from zero using only science.",
    descTl:"Muling itinayo ni Senku ang sibilisasyon gamit lang ang agham.",
    img:"https://upload.wikimedia.org/wikipedia/en/2/29/Doctor_stone.jpg",linkEn:"#",linkTl:"#"},
    {id:32,title:"Blue Exorcist: The Movie Novel",titleTl:"Asul na Ekzorista: Nobela ng Pelikula",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.5,totalVotes:678,
    desc:"Rin Okumura, son of Satan, chooses to become an exorcist.",
    descTl:"Anak ni Satanas si Rin ngunit pinili niyang maging tagapagpalayas ng demonyo.",
    img:"https://upload.wikimedia.org/wikipedia/en/6/62/Blue_Exorcist_vol_1.png",linkEn:"#",linkTl:"#"},
    {id:33,title:"Noragami: Stray God Stories",titleTl:"Noragami: Mga Kwento ng Ligaw na Diyos",year:"2013",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.6,totalVotes:765,
    desc:"Minor god Yato dreams of being worshipped by millions.",
    descTl:"Maliit na diyos na si Yato na gustong kilalanin ng marami.",
    img:"https://upload.wikimedia.org/wikipedia/en/b/bc/Noragami_1.png",linkEn:"#",linkTl:"#"},
    {id:34,title:"Bungo Stray Dogs: Untold Stories",titleTl:"Mga Aso sa Kalye: Mga Hindi Nasabing Kwento",year:"2016",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:892,
    desc:"Agency members with supernatural powers solve dangerous cases.",
    descTl:"Mga miyembro ng ahensya na may kakaibang kakayahan na lumulutas ng krimen.",
    img:"https://upload.wikimedia.org/wikipedia/en/f/f8/Bung%C5%8D_Stray_Dogs_volume_1.jpg",linkEn:"#",linkTl:"#"},
    {id:35,title:"Fire Force: The Hero’s Tale",titleTl:"Puwersa ng Apoy: Kwento ng Bayani",year:"2017",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.5,totalVotes:723,
    desc:"Shinra joins the Fire Force to stop people turning into monsters.",
    descTl:"Sumali si Shinra para pigilan ang pagiging halimaw ng mga tao.",
    img:"https://upload.wikimedia.org/wikipedia/en/0/06/Fire_Force%2C_Volume_1.jpg",linkEn:"#",linkTl:"#"},
    {id:36,title:"Mob Psycho 100: The First Step",titleTl:"Mob Psycho 100: Ang Unang Hakbang",year:"2018",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.8,totalVotes:1098,
    desc:"Mob has immense psychic power but chooses kindness over strength.",
    descTl:"Napakalakas ng isip ni Mob pero kabutihan ang pinili niya.",
    img:"https://upload.wikimedia.org/wikipedia/en/4/4b/Mob_Psycho_100_manga_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:37,title:"Vinland Saga: The True Warrior",titleTl:"Kwento ng Vinland: Ang Tunay na Mandirigma",year:"2013",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.9,totalVotes:1456,
    desc:"Thorfinn goes from vengeful Viking to a man seeking peace.",
    descTl:"Mula sa paghihiganti, naghanap ng kapayapaan si Thorfinn.",
    img:"https://upload.wikimedia.org/wikipedia/en/8/8c/Vinland_Saga_key_visual.png",linkEn:"#",linkTl:"#"},
    {id:38,title:"Berserk: The Flame Dragon Knight",titleTl:"Berserk: Ang Kabalyero ng Apoy na Dragon",year:"2017",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.6,totalVotes:876,
    desc:"Dark tale of struggle and will to keep moving forward against fate.",
    descTl:"Madilim na kwento ng pakikipaglaban sa tadhana.",
    img:"https://upload.wikimedia.org/wikipedia/en/4/4a/Berserk_vol01.png",linkEn:"#",linkTl:"#"},
    {id:39,title:"A Silent Voice Light Novel",titleTl:"Tahimik na Tinig Nobela",year:"2014",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.8,totalVotes:1234,
    desc:"Shoya seeks redemption and friendship after bullying Shoko.",
    descTl:"Paghahanap ng kapatawaran matapos ang pang-aapi.",
    img:"https://upload.wikimedia.org/wikipedia/en/6/6c/Koe_no_Katachi%2C_Volume_1.jpg",linkEn:"#",linkTl:"#"},
    {id:40,title:"Toradora!",titleTl:"Toradora!",year:"2006",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:987,
    desc:"Ryuji and Taiga help each other confess but fall in love instead.",
    descTl:"Tumulong sa isa’t isa pero sila pala ang nagkagustuhan.",
    img:"https://upload.wikimedia.org/wikipedia/en/c/cd/Toradora%21_light_novel_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:41,title:"Sakura Wars: The Beginning",titleTl:"Sakura Wars: Ang Simula",year:"1996",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.4,totalVotes:543,
    desc:"Spirit-powered women defend Tokyo using combat and stage performance.",
    descTl:"Mga kababaihang may kapangyarihan na nagtatanggol sa Tokyo.",
    img:"https://upload.wikimedia.org/wikipedia/en/3/3e/Sakura_Wars_3_cover_art.jpg",linkEn:"#",linkTl:"#"},
    {id:42,title:"Accel World",titleTl:"Accel World",year:"2009",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.5,totalVotes:678,
    desc:"Haruyuki finds escape in games until he meets Kuroyukihime.",
    descTl:"Nakahanap ng aliw sa laro hanggang makilala niya si Kuroyukihime.",
    img:"https://upload.wikimedia.org/wikipedia/en/d/dd/Accel_World_cover.png",linkEn:"#",linkTl:"#"},
    {id:43,title:"Goblin Slayer",titleTl:"Tagapatay ng Goblin",year:"2016",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:943,
    desc:"A warrior dedicates his life to eradicating all goblins.",
    descTl:"Inalay ang buhay para lipulin ang lahat ng goblin.",
    img:"https://m.media-amazon.com/images/I/81bfb0Nzx3L._UF1000,1000_QL80_.jpg",linkEn:"#",linkTl:"#"}
];

// ==============================================
// 🟢 DITO NA MAGSISIMULA ANG CODE MO — TAMA NA ANG PAGKAKASUNOD
// ==============================================
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

    // DOWNLOAD BUTTONS
    document.getElementById('downloadEn').onclick = (e) => {
        e.preventDefault();
        if(!currentUser) {
            document.getElementById('infoModal').classList.remove('active');
            document.getElementById('signinModal').style.display = 'flex';
            document.body.style.overflow = 'auto';
            return;
        }
        const link = document.createElement('a');
        link.href = anime.linkEn;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    document.getElementById('downloadTl').onclick = (e) => {
        e.preventDefault();
        if(!currentUser) {
            document.getElementById('infoModal').classList.remove('active');
            document.getElementById('signinModal').style.display = 'flex';
            document.body.style.overflow = 'auto';
            return;
        }
        const link = document.createElement('a');
        link.href = anime.linkTl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
                document.getElementById('signinModal').style.display = 'flex';
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
    renderCards();
    setInterval(updateOnlineCount, 600000);

    // Firebase setup
    const auth = window.firebaseAuth;
    const { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } = window.firebaseMethods;
    const provider = window.firebaseProvider;

    onAuthStateChanged(auth, user => { updateLoginUI(user); });

    // Open Sign In / Sign Up
    document.getElementById('signinBtn').onclick = () => {
        document.getElementById('signinModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };
    document.getElementById('signupBtn').onclick = () => {
        document.getElementById('signupModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    // Google Sign In
    document.getElementById('googleSignInBtn').onclick = () => {
        signInWithPopup(auth, provider).then(res => { 
            updateLoginUI(res.user); 
            document.getElementById('signinModal').style.display = 'none'; 
            document.body.style.overflow = 'auto';
        }).catch(err => showError(err.message));
    };

    // Google Sign Up
    document.getElementById('googleSignUpBtn').onclick = () => {
        signInWithPopup(auth, provider).then(res => { 
            updateLoginUI(res.user); 
            document.getElementById('signupModal').style.display = 'none'; 
            document.body.style.overflow = 'auto';
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
            document.body.style.overflow = 'auto';
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
            document.body.style.overflow = 'auto';
        }).catch(err => showError("Invalid email or password!"));
    };

    // FORGOT PASSWORD MODAL
    document.getElementById('forgotPassLink').onclick = (e) => {
        e.preventDefault();
        document.getElementById('signinModal').style.display = 'none';
        document.getElementById('forgotPassModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    document.querySelector('.close-fp').onclick = () => {
        document.getElementById('forgotPassModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    document.getElementById('backToSignin').onclick = (e) => {
        e.preventDefault();
        document.getElementById('forgotPassModal').style.display = 'none';
        document.getElementById('signinModal').style.display = 'flex';
    };

    document.getElementById('doSendReset').onclick = async () => {
        const email = document.getElementById('fpEmail').value.trim();
        const errBox = document.getElementById('fpError');

        if (!email) {
            errBox.style.display = 'block';
            errBox.textContent = "Please enter your email address.";
            return;
        }
        if (!isValidEmail(email)) {
            errBox.style.display = 'block';
            errBox.textContent = "Please enter a valid email address.";
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            alert(`✅ Reset link sent to:\n${email}\n\nCheck your inbox or Spam folder.`);
            document.getElementById('fpEmail').value = '';
            document.getElementById('forgotPassModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        } catch (err) {
            errBox.style.display = 'block';
            switch(err.code) {
                case 'auth/user-not-found':
                    errBox.textContent = "No account found with this email.";
                    break;
                case 'auth/invalid-email':
                    errBox.textContent = "Invalid email address.";
                    break;
                default:
                    errBox.textContent = err.message;
            }
        }
    };

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.onclick = () => {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const section = item.dataset.section;
            if(section === 'home') {
                window.scrollTo({top:0, behavior:'smooth'});
            } else {
                document.getElementById(`${section}Row`).parentElement.scrollIntoView({behavior:'smooth'});
            }
        };
    });

    // Sign In ↔ Sign Up Switch
    document.getElementById('goSignup').onclick = () => {
        document.getElementById('signinModal').style.display = 'none';
        document.getElementById('signupModal').style.display = 'flex';
    };
    document.getElementById('goSignin').onclick = () => {
        document.getElementById('signupModal').style.display = 'none';
        document.getElementById('signinModal').style.display = 'flex';
    };

    // Learn More Button
    document.getElementById('learnMoreBtn').onclick = () => {
        document.getElementById('infoModal').classList.add('active');
        document.body.style.overflow = 'hidden';
        document.getElementById('modalImg').src = 'https://images3.alphacoders.com/130/thumb-1920-1302159.jpg';
        document.getElementById('modalTitle').innerText = 'About Anime Ebooks Hub';
        document.getElementById('modalYear').innerText = '';
        document.getElementById('modalType').innerText = '';
        document.getElementById('modalLang').innerText = '';
        document.getElementById('modalDesc').innerText = `✅ Download all light novels and ebooks for free
✅ Available in English and Tagalog
✅ You can rate and vote for your favorites
✅ Safe, fast, and easy to use
✅ New titles added regularly

Everything is made for anime and story lovers — completely free, no hassle!`;
        document.getElementById('modalRatingStars').innerHTML = '';
        document.getElementById('modalRatingPercent').innerText = '';
        document.getElementById('modalVotes').innerText = '';
        document.getElementById('downloadEn').style.display = 'none';
        document.getElementById('downloadTl').style.display = 'none';
        document.querySelector('.vote-area').style.display = 'none';
    };

    // Close Modals
    document.querySelector('.close-btn').onclick = () => { 
        document.getElementById('infoModal').classList.remove('active'); 
        document.body.style.overflow='auto'; 
        document.getElementById('downloadEn').style.display = 'inline-block';
        document.getElementById('downloadTl').style.display = 'inline-block';
        document.querySelector('.vote-area').style.display = 'block';
    };

    window.onclick = e => { 
        if(e.target === document.getElementById('infoModal')) { 
            document.getElementById('infoModal').classList.remove('active'); 
            document.body.style.overflow='auto';
            document.getElementById('downloadEn').style.display = 'inline-block';
            document.getElementById('downloadTl').style.display = 'inline-block';
            document.querySelector('.vote-area').style.display = 'block';
        }
        if(e.target === document.getElementById('signinModal')) {
            document.getElementById('signinModal').style.display = 'none';
            document.body.style.overflow='auto';
        }
        if(e.target === document.getElementById('signupModal')) {
            document.getElementById('signupModal').style.display = 'none';
            document.body.style.overflow='auto';
     
        }
        if(e.target === document.getElementById('forgotPassModal')) {
            document.getElementById('forgotPassModal').style.display = 'none';
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

    // Logout Button
    document.getElementById('logoutBtn').onclick = () => {
        signOut(auth).then(() => {
            updateLoginUI(null);
        }).catch(err => showError(err.message));
    };

    // Language Switch
    document.getElementById('langSelect').onchange = e => {
        currentLang = e.target.value;
        updateLanguage();
        renderCards();
    };

    // ✅ SEARCH BAR — NOW FULLY WORKING
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (!query) {
            renderCards();
            return;
        }

        const filtered = animeData.filter(anime => {
            const matchEn = anime.title.toLowerCase().includes(query);
            const matchTl = anime.titleTl?.toLowerCase().includes(query) || false;
            return matchEn || matchTl;
        });

        ['trending','new','all'].forEach(cat => {
            const row = document.getElementById(`${cat}Row`);
            row.innerHTML = '';
            filtered.filter(a => a.category.includes(cat)).forEach(anime => {
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
    });

});
