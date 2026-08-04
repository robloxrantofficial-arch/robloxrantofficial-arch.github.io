const animeData = [
    {id:1,title:"Demon Slayer: The Flower of Happiness",titleTl:"Demon Slayer: Bulaklak ng Kaligayahan",year:"2019",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.8,totalVotes:1247,
    desc:"An official side-story light novel set during the main series journey. Follow Tanjiro, Nezuko, Zenitsu, and Inosuke as they arrive at a peaceful mountain village plagued by a mysterious demon that preys on happy memories. Filled with heartwarming moments, intense battles, and deeper insight into each character’s resolve, this story shows what it truly means to protect the people you love.",
    descTl:"Isang opisyal na karagdagang kwento na naganap habang naglalakbay pa ang mga bida. Samahan sina Tanjiro, Nezuko, Zenitsu, at Inosuke sa isang payapang nayon sa bundok na pinamumugaran ng demonyong kumukuha ng masasayang alaala. Puno ito ng magagandang tagpo, matitinding labanan, at mas malalim na pagkilala sa layunin ng bawat tauhan — na nagpapakita kung ano talaga ang kahulugan ng pagprotekta sa mga mahal mo sa buhay.",
    img:"https://upload.wikimedia.org/wikipedia/en/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg",linkEn:"#",linkTl:"#"},
    {id:2,title:"Jujutsu Kaisen: Summer of Ashes, Autumn of Dust",titleTl:"Jujutsu Kaisen: Tag-init ng Abo, Taglagas ng Alikabok",year:"2019",type:"Light Novel",lang:"EN / TL",category:["trending","new","all"],rating:4.9,totalVotes:1892,
    desc:"Explore untold missions and backstories of Yuji Itadori, Megumi Fushiguro, Nobara Kugisaki, and their teacher Gojo Satoru. This novel reveals what happens between major battles, the dark secrets of the jujutsu world, and the personal struggles each student faces while carrying the heavy burden of saving humanity from cursed spirits.",
    descTl:"Alamin ang mga hindi pa nasasabing misyon at nakaraan nina Yuji Itadori, Megumi Fushiguro, Nobara Kugisaki, at ng kanilang guro na si Gojo Satoru. Ipinapakita dito ang mga pangyayari sa pagitan ng malalaking labanan, ang madidilim na lihim ng mundo ng jujutsu, at ang mga sariling pagsubok na dinaranas ng bawat mag-aaral habang pasan nila ang tungkuling iligtas ang sangkatauhan mula sa mga sumpang nilalang.",
    img:"https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg",linkEn:"#",linkTl:"#"},
    {id:3,title:"One Piece: The Novel",titleTl:"One Piece: Ang Nobela",year:"2000",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.7,totalVotes:987,
    desc:"A retelling of the early adventures of Monkey D. Luffy and the formation of the Straw Hat Pirates. From meeting his first crewmates to facing powerful enemies on the high seas, this book captures the spirit of freedom, loyalty, and unwavering determination to find the legendary treasure and become the King of the Pirates.",
    descTl:"Isang muling pagsasalaysay ng mga unang pakikipagsapalaran ni Monkey D. Luffy at kung paano nabuo ang Straw Hat Pirates. Mula sa pagkilala sa kanyang mga unang kasama hanggang sa pagharap sa malalakas na kaaway sa karagatan, makikita rito ang diwa ng kalayaan, katapatan, at hindi natitinag na pagnanais na makuha ang maalamat na kayamanan at maging Hari ng mga Pirata.",
    img:"https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",linkEn:"#",linkTl:"#"},
    {id:4,title:"Solo Leveling: Light Novel Complete",titleTl:"Solo Leveling: Kumpletong Nobela",year:"2016",type:"Light Novel",lang:"EN / TL",category:["new","all"],rating:4.9,totalVotes:2103,
    desc:"The full original light novel series that inspired the global hit manhwa. Follow Sung Jin-Woo, the weakest hunter in humanity, who gains a mysterious ability called the 'System' that lets him level up without limits. Witness his incredible rise from being an easy target to becoming the strongest being in existence, uncovering dark truths about the gates and monsters that threaten the world.",
    descTl:"Ang buong orihinal na nobela na naging batayan ng sikat na manhwa sa buong mundo. Sundan si Sung Jin-Woo, ang pinakamahinang mangangaso, na binigyan ng mahiwagang kakayahan na tinatawag na 'System' na nagpapahintulot sa kanya na lumakas nang walang hangganan. Masaksihan ang kanyang pambihirang pag-angat mula sa pagiging mahina hanggang sa maging pinakamalakas na nilalang, habang inilalantad ang madidilim na katotohanan tungkol sa mga pintuan at halimaw na nagbabanta sa mundo.",
    img:"https://upload.wikimedia.org/wikipedia/en/6/6c/Solo_Leveling_Volume_1_Cover.jpg",linkEn:"#",linkTl:"#"},
    {id:5,title:"Attack on Titan: Before the Fall",titleTl:"Pag-atake ng Higante: Bago ang Pagbagsak",year:"2011",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.6,totalVotes:765,
    desc:"A gripping prequel set decades before Eren Yeager’s story begins. Learn how humanity first discovered the terrifying Titans, the invention of the Vertical Maneuvering Equipment, and the brave sacrifices made by early soldiers trying to survive behind the walls when hope was almost gone.",
    descTl:"Isang nakakapanabik na kwento na naganap ilang dekada bago pa man ipinanganak si Eren Yeager. Alamin kung paano unang nakilala ng sangkatauhan ang mga nakakatakot na Higante, paano naimbento ang kagamitan sa paglaban, at ang matatapang na sakripisyo ng mga unang sundalo na pilit nabubuhay sa likod ng mga pader noong halos wala na silang pag-asa.",
    img:"https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg",linkEn:"#",linkTl:"#"},
    {id:6,title:"Spy x Family: Family Portrait",titleTl:"Spy x Family: Larawan ng Pamilya",year:"2021",type:"Light Novel",lang:"EN / TL",category:["trending","new","all"],rating:4.8,totalVotes:1567,
    desc:"Enjoy extra missions and slice-of-life stories featuring the Forger Family: the spy Loid, the assassin Yor, and the telepath Anya. Filled with comedy, heartwarming moments, and action, this book shows how a fake family slowly becomes real while keeping the world safe from shadowy threats.",
    descTl:"Masiyahan sa mga karagdagang misyon at kwento ng pang-araw-araw na buhay ng pamilya Forger: ang espiya na si Loid, ang mamamatay-tao na si Yor, at ang batang nakakabasa ng isip na si Anya. Puno ito ng katatawanan, magagandang tagpo, at aksyon — na nagpapakita kung paano naging tunay na pamilya ang nagkukunwari lamang, habang inililigtas nila ang mundo mula sa mga nakatagong banta.",
    img:"https://upload.wikimedia.org/wikipedia/en/5/51/Spy_Family_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:7,title:"Naruto: The Chronicles",titleTl:"Naruto: Ang mga Kasaysayan",year:"2002",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.7,totalVotes:1123,
    desc:"Official expanded stories diving deeper into Naruto Uzumaki’s journey from an outcast boy to the Seventh Hokage. Read about untold battles, special missions, and the bonds he forged with friends and rivals that shaped the ninja world forever.",
    descTl:"Mga opisyal na kwento na nagpapalawak sa paglalakbay ni Naruto Uzumaki — mula sa pagiging batang iniiwasan hanggang sa maging Ikapitong Hokage. Basahin ang mga hindi pa nasasabing labanan, mga espesyal na misyon, at ang mga ugnayang nabuo niya sa mga kaibigan at karibal na nagpabago sa mundo ng mga ninja.",
    img:"https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",linkEn:"#",linkTl:"#"},
    {id:8,title:"Bleach: The Death Save the Strawberry",titleTl:"Bleach: Ang Kaligtasan ng Prutas",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.5,totalVotes:654,
    desc:"Follow Ichigo Kurosaki during the gaps between major battles, exploring his life as a substitute Soul Reaper, his relationships with friends, and the secrets behind his unique powers that blend human, Shinigami, Hollow, and Quincy abilities.",
    descTl:"Sundan si Ichigo Kurosaki sa mga panahong walang malalaking labanan — alamin ang kanyang buhay bilang pansamantalang Tagapagligtas ng Kaluluwa, ang kanyang ugnayan sa mga kaibigan, at ang mga lihim sa likod ng kanyang pambihirang kapangyarihan na pinagsasama ang lakas ng tao, kaluluwa, halimaw, at Quincy.",
    img:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bleach_%28manga%29_1.png",linkEn:"#",linkTl:"#"},
    {id:9,title:"My Hero Academia: School Briefs",titleTl:"Ang Aking Bayani: Mga Kwento sa Paaralan",year:"2016",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.8,totalVotes:1345,
    desc:"Step into the daily life of Class 1-A at U.A. High School. From training exercises and school festivals to facing unexpected villains, this collection shows how Izuku Midoriya and his classmates grow together, learn the true meaning of heroism, and support each other through every challenge.",
    descTl:"Pumasok sa pang-araw-araw na buhay ng Class 1-A sa U.A. High School. Mula sa pagsasanay at mga pagdiriwang sa paaralan hanggang sa pagharap sa mga hindi inaasahang kontrabida, makikita rito kung paano sabay-sabay na lumaki si Izuku Midoriya at ang kanyang mga kaklase, natutunan ang tunay na kahulugan ng pagiging bayani, at nagtulungan sa bawat pagsubok.",
    img:"https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png",linkEn:"#",linkTl:"#"},
    {id:10,title:"Tokyo Ghoul: Days",titleTl:"Halimaw ng Tokyo: Mga Araw",year:"2013",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.4,totalVotes:543,
    desc:"A collection of side stories showing the quiet, painful, and sometimes hopeful moments of both humans and ghouls living in Tokyo. Follow Ken Kaneki and others as they struggle to find their place in a world that fears and hunts them.",
    descTl:"Isang kalipunan ng mga karagdagang kwento na nagpapakita ng tahimik, masakit, at minsan ay puno ng pag-asang buhay ng mga tao at mga halimaw sa Tokyo. Samahan si Ken Kaneki at iba pa habang pilit nilang hinahanap ang kanilang lugar sa mundong natatakot at humuhuli sa kanila.",
    img:"https://upload.wikimedia.org/wikipedia/en/e/e5/Tokyo_Ghoul_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:11,title:"Death Note: Another Note",titleTl:"Aklat ng Kamatayan: Isa pang Tala",year:"2006",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:876,
    desc:"A thrilling prequel about the Los Angeles BB Murder Cases that took place before Kira appeared. Watch as the world’s greatest detective L tries to solve a series of bizarre crimes committed by a mysterious killer obsessed with him.",
    descTl:"Isang nakakapanindig-balahibong kwento bago pa man dumating si Kira — tungkol sa mga serye ng kakaibang pagpatay sa Los Angeles. Masaksihan kung paano sinubukan ng pinakamahusay na detektib na si L na lutasin ang mga krimen na ginawa ng isang misteryosong mamamatay-tao na nahuhumaling sa kanya.",
    img:"https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:12,title:"Black Clover: The Knights of the Kingdom",titleTl:"Itim na Klaber: Mga Kawal ng Kaharian",year:"2018",type:"Light Novel",lang:"EN / TL",category:["new","all"],rating:4.6,totalVotes:721,
    desc:"Journey with Asta and the Black Bulls as they take on dangerous missions across the Clover Kingdom. This story highlights the power of never giving up, friendship, and proving that hard work can overcome even the strongest magic.",
    descTl:"Samahan si Asta at ang Black Bulls sa kanilang mga mapanganib na misyon sa buong Kaharian ng Clover. Ipinapakita rito ang lakas ng hindi pagsuko, pagkakaibigan, at patunay na ang pagsisikap ay kayang talunin kahit ang pinakamalakas na mahika.",
    img:"https://upload.wikimedia.org/wikipedia/en/6/69/Black_Clover%2C_volume_1.jpg",linkEn:"#",linkTl:"#"},
    {id:13,title:"Re:Zero - Starting Life in Another World",titleTl:"Re:Zero - Magsimula Muli sa Ibang Mundo",year:"2014",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.8,totalVotes:1098,
    desc:"Follow Natsuki Subaru who is suddenly transported to a fantasy world and discovers he has the power to return from death. Every time he dies, he goes back to a certain point in time — forcing him to endure pain, loss, and countless struggles to protect the people he cares about.",
    descTl:"Sundan si Natsuki Subaru na biglang dinala sa ibang mundo at natuklasang may kakayahan siyang bumalik mula sa kamatayan. Sa bawat pagkamatay niya, bumabalik siya sa nakaraan — kaya kinakailangan niyang tiisin ang sakit, pagkawala, at walang katapusang pagsubok para lang maprotektahan ang mga taong mahalaga sa kanya.",
    img:"https://upload.wikimedia.org/wikipedia/en/3/3c/Re-Zero_kara_Hajimeru_Isekai_Seikatsu_light_novel_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:14,title:"Overlord",titleTl:"Overlord",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:932,
    desc:"When a popular online game shuts down, player Momonga finds himself trapped inside as his powerful undead character. He sets out to build his own empire, uncover the secrets of this new world, and rule with absolute power while holding onto his humanity.",
    descTl:"Nang isara ang isang sikat na laro sa internet, ang manlalarong si Momonga ay biglang naipit sa loob bilang isang makapangyarihang nilalang na hindi namamatay. Nagsimula siyang bumuo ng sariling kaharian, alamin ang mga lihim ng mundong ito, at mamuno nang may ganap na kapangyarihan habang pilit na pinapanatili ang kanyang pagkatao.",
    img:"https://upload.wikimedia.org/wikipedia/en/0/05/Overlord_II.jpg",linkEn:"#",linkTl:"#"},
    {id:15,title:"Konosuba: God's Blessing on This Wonderful World",titleTl:"Konosuba: Pagpapala sa Kahanga-hangang Mundong Ito",year:"2013",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.6,totalVotes:812,
    desc:"A hilarious adventure following Kazuma Satou who is reborn in a fantasy world with a useless goddess named Aqua. Together with his eccentric party members, they face monsters, quests, and endless comedic trouble while trying to live a normal life in a magical realm.",
    descTl:"Isang nakakatawang pakikipagsapalaran kasama si Kazuma Satou na muling isinilang sa ibang mundo kasama ang isang walang silbing diyosa na si Aqua. Kasama ang kanyang mga kakaibang kasama, haharap sila sa mga halimaw, misyon, at walang katapusang kalokohan habang pilit namumuhay nang payapa sa mundong puno ng mahika.",
    img:"https://upload.wikimedia.org/wikipedia/en/3/3e/Kono_Subarashii_Sekai_ni_Shukufuku_o%21_light_novel_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:16,title:"Sword Art Online",titleTl:"Sword Art Online",year:"2009",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.5,totalVotes:1023,
    desc:"Thousands of players get trapped inside a virtual reality game where dying in the game means dying in real life. Follow Kirito as he fights to survive, clear all floors, and find a way to free everyone while forming deep bonds with friends along the way.",
    descTl:"Libu-libong manlalaro ang naipit sa loob ng isang laro kung saan ang pagkamatay sa laro ay nangangahulugan din ng pagkamatay sa totoong buhay. Sundan si Kirito habang lumalaban siya para mabuhay, tapusin ang lahat ng antas, at palayain ang lahat habang bumubuo ng matibay na pagkakaibigan.",
    img:"https://upload.wikimedia.org/wikipedia/en/3/3e/Sword_Art_Online_light_novel_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:17,title:"No Game No Life",titleTl:"Walang Laro Walang Buhay",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:765,
    desc:"Genius siblings Sora and Shiro are transported to a world where everything — including war and fate — is decided by games. Using their incredible intelligence and teamwork, they aim to conquer every nation and stand at the top of this game-ruled world.",
    descTl:"Ang matalinong magkapatid na sina Sora at Shiro ay dinala sa isang mundo kung saan ang lahat — pati na ang digmaan at tadhana — ay nakadepende sa laro. Gamit ang kanilang talino at pagtutulungan, hangad nilang lupigin ang bawat bansa at maging pinakamalakas sa mundong ito.",
    img:"https://upload.wikimedia.org/wikipedia/en/c/cd/No_Game_No_Life_light_novel_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:18,title:"Fate/Stay Night",titleTl:"Fate/Stay Night",year:"2004",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.4,totalVotes:543,
    desc:"Seven mages summon powerful heroic spirits and fight a deadly battle royale for the Holy Grail — a legendary relic that can grant any wish. Follow Shirou Emiya as he gets caught up in this brutal war and learns what it truly means to be a hero.",
    descTl:"Pitong salamangkero ang tumawag ng malalakas na bayani upang maglaban para sa Banal na Kopa — isang bagay na kayang tuparin ang anumang hiling. Sundan si Shirou Emiya na naisangkot sa madugong labanan at alamin ang tunay na kahulugan ng pagiging bayani.",
    img:"https://upload.wikimedia.org/wikipedia/en/d/d4/Fate-stay_night.jpg",linkEn:"#",linkTl:"#"},
    {id:19,title:"Chainsaw Man: Buddy Stories",titleTl:"Tao na Lagari: Mga Kwento ng Magkaibigan",year:"2021",type:"Light Novel",lang:"EN / TL",category:["trending","new","all"],rating:4.8,totalVotes:1432,
    desc:"Side stories focusing on Denji, Power, and Aki Hayakawa during their work as Public Safety Devil Hunters. Experience the chaos, dark humor, and heartbreaking moments that define their lives while fighting dangerous devils and struggling to find happiness.",
    descTl:"Mga karagdagang kwento tungkol kina Denji, Power, at Aki Hayakawa habang nagtatrabaho sila bilang mga tagapamahala ng mga demonyo. Masaksihan ang kaguluhan, katatawanan, at mga madamdaming tagpo sa kanilang buhay habang lumalaban sa mga mapanganib na nilalang at pilit na naghahanap ng tunay na ligaya.",
    img:"https://upload.wikimedia.org/wikipedia/en/2/24/Chainsawman.jpg",linkEn:"#",linkTl:"#"},
    {id:20,title:"Hunter x Hunter: The Journey",titleTl:"Mangangaso x Mangangaso: Ang Paglalakbay",year:"2001",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.6,totalVotes:891,
    desc:"Join Gon Freecss and his friends as they take the dangerous Hunter Exam and travel across a vast world full of mysteries, powerful enemies, and hidden treasures. This story explores the true meaning of strength, friendship, and chasing your dreams no matter how far they are.",
    descTl:"Samahan si Gon Freecss at ang kanyang mga kaibigan sa pagsali sa mapanganib na pagsusulit at paglalakbay sa malawak na mundong puno ng misteryo, malalakas na kalaban, at nakatagong kayamanan. Ipinapakita dito ang tunay na kahulugan ng lakas, pagkakaibigan, at paghabol sa mga pangarap kahit gaano pa ito kalayo.",
    img:"https://upload.wikimedia.org/wikipedia/en/e/e8/Hunter_%C3%97_Hunter_vol._1.png",linkEn:"#",linkTl:"#"},
    {id:21,title:"Fullmetal Alchemist: The Land of Sand",titleTl:"Buong Metal na Alkemista: Lupain ng Buhangin",year:"2003",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:678,
    desc:"Brotherhood, sacrifice, and the law of equivalent exchange — this story follows Edward and Alphonse Elric as they search for a way to restore their bodies after a failed alchemical ritual. Set in a desert nation, they uncover corruption, secrets, and the true cost of using alchemy.",
    descTl:"Pagkakapatiran, sakripisyo, at ang batas ng katumbas na palitan — sundan sina Edward at Alphonse Elric habang naghahanap sila ng paraan upang maibalik ang kanilang katawan matapos ang isang bigong ritwal. Sa isang bansang disyerto, matutuklasan nila ang katiwalian, mga lihim, at ang tunay na halaga ng paggamit ng alkemya.",
    img:"https://upload.wikimedia.org/wikipedia/en/9/9d/Fullmetal123.jpg",linkEn:"#",linkTl:"#"},
    {id:22,title:"Dragon Ball: The Legend",titleTl:"Dragon Ball: Ang Alamat",year:"1986",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.5,totalVotes:987,
    desc:"Go back to the beginning of the greatest adventure ever told. Follow Goku from his childhood meeting with Bulma, collecting the seven magical Dragon Balls, and growing into the strongest warrior in the universe while protecting Earth and all he holds dear.",
    descTl:"Bumalik sa pinagmulan ng pinakasikat na kwento ng pakikipagsapalaran. Sundan si Goku mula sa pagkabata at pagkilala kay Bulma, paghahanap sa pitong mahiwagang bola, hanggang sa lumaki siya bilang pinakamalakas na mandirigma sa sansinukob habang inililigtas ang mundo at ang mga taong mahalaga sa kanya.",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RqUW0UcMDuAwflpzfMmfkCtgkXa-Ufu1lq8iCf1YMxxgtJ-OGh-XDH3Yqi5JFXI1RJiW&s=10",linkEn:"#",linkTl:"#"},
    {id:23,title:"Your Name. Light Novel",titleTl:"Ang Iyong Pangalan. Nobela",year:"2016",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.9,totalVotes:1654,
    desc:"The heart-touching novel adaptation of Makoto Shinkai’s masterpiece. Follow Taki, a boy living in Tokyo, and Mitsuha, a girl in the countryside, who mysteriously start swapping bodies. As they try to live each other’s lives, a celestial event threatens to tear them apart forever.",
    descTl:"Ang madamdaming nobela batay sa obra maestra ni Makoto Shinkai. Sundan sina Taki, isang binata sa Tokyo, at Mitsuha, isang dalaga sa probinsya, na biglang nagpapalitan ng katawan. Habang pilit nilang namumuhay ang buhay ng isa’t isa, may darating na pangyayaring maaaring maghiwalay sa kanila habambuhay.",
    img:"https://upload.wikimedia.org/wikipedia/en/2/24/Your_Name_%28novel%29_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:24,title:"Weathering With You Light Novel",titleTl:"Pagbabago ng Panahon Nobela",year:"2019",type:"Light Novel",lang:"EN / TL",category:["new","all"],rating:4.8,totalVotes:1211,
    desc:"A story of love and sacrifice set in a rain-soaked Tokyo. Meet Hodaka, a runaway teen, and Hina, a girl with the ability to control the weather. Together they try to make the most of their gift, but every blessing comes with a heavy price.",
    descTl:"Isang kwento ng pag-ibig at sakripisyo sa Tokyo na laging umuulan. Kilalanin si Hodaka, isang batang tumakas sa bahay, at si Hina, isang dalagang may kakayahang kontrolin ang panahon. Sabay nilang susulitin ang kanilang biyaya, ngunit bawat himala ay may kapalit na mabigat na halaga.",
    img:"https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg",linkEn:"#",linkTl:"#"},
    {id:25,title:"Tokyo Revengers: A Letter from Keisuke Baji",titleTl:"Mga Tagapaghiganti ng Tokyo: Liham mula kay Baji",year:"2021",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.7,totalVotes:1034,
    desc:"Dive into the untold story of Keisuke Baji and the early days of the Tokyo Manji Gang. Learn about his deep loyalty, his reasons for joining the gang, and the sacrifices he made to protect his friends and keep the group from falling apart.",
    descTl:"Alamin ang hindi pa nasasabing kwento ni Keisuke Baji at kung paano nabuo ang Tokyo Manji Gang. Basahin ang tungkol sa kanyang matinding katapatan, kung bakit siya sumali sa grupo, at ang mga sakripisyong ginawa niya para protektahan ang mga kaibigan at panatilihing buo ang samahan.",
    img:"https://upload.wikimedia.org/wikipedia/en/b/b1/Tokyo_Revengers_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:26,title:"Violet Evergarden",titleTl:"Violet Evergarden",year:"2015",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.9,totalVotes:1789,
    desc:"Once a weapon of war, Violet Evergarden now works as an Auto Memory Doll — writing letters that connect people’s hearts. On her journey to understand the meaning of the words 'I love you', she meets many people and learns about love, loss, and the beautiful power of words.",
    descTl:"Dati ay sandata ng digmaan, ngunit ngayon ay nagtatrabaho si Violet Evergarden bilang taga-sulat ng mga liham na nag-uugnay sa puso ng mga tao. Sa kanyang paghahanap sa kahulugan ng salitang 'mahal kita', makikilala niya ang iba’t ibang tao at matutunan ang tungkol sa pag-ibig, pagkawala, at ang kapangyarihan ng mga salita.",
    img:"https://upload.wikimedia.org/wikipedia/en/b/be/Violet_Evergarden_light_novel_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:27,title:"Steins;Gate",titleTl:"Steins;Gate",year:"2009",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.6,totalVotes:856,
    desc:"A thrilling story about time travel and changing fate. Rintaro Okabe accidentally invents a way to send messages to the past, but soon discovers that altering time brings terrible consequences. He must fight to save his friends and find the right timeline where everyone can be safe.",
    descTl:"Isang nakakapanabik na kwento tungkol sa paglalakbay sa oras at pagbabago ng tadhana. Hindi sinasadyang nakaimbento si Rintaro Okabe ng paraan upang magpadala ng mensahe sa nakaraan, ngunit natuklasan niyang may mabibigat na epekto ang pagbabago ng panahon. Kailangan niyang lumaban para iligtas ang mga kaibigan at hanapin ang tamang panahon kung saan ligtas ang lahat.",
    img:"https://upload.wikimedia.org/wikipedia/en/e/e4/Steins%3BGate_cover_art.jpg",linkEn:"#",linkTl:"#"},
    {id:28,title:"The Seven Deadly Sins: Seven Days",titleTl:"Ang Pitong Nakamamatay na Kasalanan: Pitong Araw",year:"2014",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.5,totalVotes:643,
    desc:"An epic side story expanding the world of the Seven Deadly Sins. Discover the past of each legendary knight, their battles against the Holy Knights, and their quest to save the kingdom of Liones from total destruction.",
    descTl:"Isang malawak na kwento na nagpapalawak sa mundo ng Pitong Nakamamatay na Kasalanan. Alamin ang nakaraan ng bawat maalamat na kawal, ang kanilang labanan, at ang misyong iligtas ang kaharian ng Liones mula sa ganap na pagkawasak.",
    img:"https://upload.wikimedia.org/wikipedia/en/e/e1/The_Seven_Deadly_Sins_2014_TV_series.jpg",linkEn:"#",linkTl:"#"},
    {id:29,title:"Fairy Tail: The Phoenix Priestess",titleTl:"Buntot ng Diwata: Ang Pari ng Ibong Adarna",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.4,totalVotes:532,
    desc:"Join Natsu, Lucy, and the rest of Fairy Tail on a magical adventure involving a mysterious girl and a powerful ancient artifact. Filled with action, humor, and the unbreakable bonds of family that define the guild.",
    descTl:"Samahan sina Natsu, Lucy, at ang buong Fairy Tail sa isang mahiwagang pakikipagsapalaran kasama ang isang misteryosong dalaga at isang makapangyarihang bagay mula sa sinaunang panahon. Puno ito ng aksyon, katatawanan, at ang hindi matitinag na ugnayan ng pamilya na nagbibigay-katangian sa kanilang samahan.",
    img:"https://upload.wikimedia.org/wikipedia/en/e/e1/FairyTail-Volume_1_Cover.jpg",linkEn:"#",linkTl:"#"},
    {id:30,title:"One Punch Man: A Hero Nobody Knows",titleTl:"Isang Suntok na Tao: Bayaning Walang Nakakakilala",year:"2015",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.7,totalVotes:1121,
    desc:"What does it mean to be truly strong? Follow Saitama, a hero who can defeat any enemy with just one punch, as he searches for a worthy opponent and struggles to find purpose in a world that barely notices him.",
    descTl:"Ano nga ba ang tunay na kahulugan ng pagiging malakas? Sundan si Saitama, isang bayaning kayang talunin ang sinumang kalaban sa isang suntok lamang, habang naghahanap siya ng karapat-dapat na kalaban at hinahanap ang layunin sa mundong halos hindi siya pinapansin.",
    img:"https://upload.wikimedia.org/wikipedia/en/c/c3/OnePunchMan_manga_cover.png",linkEn:"#",linkTl:"#"},
    {id:31,title:"Dr. Stone: Rebirth of Civilization",titleTl:"Dr. Stone: Muling Pagsilang ng Sibilisasyon",year:"2019",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.8,totalVotes:1345,
    desc:"When all of humanity is turned to stone for thousands of years, genius Senku Ishigami wakes up and decides to rebuild civilization from zero using nothing but science, logic, and hard work.",
    descTl:"Nang ang buong sangkatauhan ay maging bato sa loob ng libu-libong taon, nagising ang matalinong si Senku Ishigami at nagpasiyang muling itayo ang sibilisasyon mula sa wala — gamit lamang ang agham, katwiran, at pagsisikap.",
    img:"https://upload.wikimedia.org/wikipedia/en/2/29/Doctor_stone.jpg",linkEn:"#",linkTl:"#"},
    {id:32,title:"Blue Exorcist: The Movie Novel",titleTl:"Asul na Ekzorista: Nobela ng Pelikula",year:"2012",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.5,totalVotes:678,
    desc:"Rin Okumura discovers he is the son of Satan but chooses to become an exorcist instead of following his father’s path. This story follows his fight to protect the human world while dealing with his dark heritage.",
    descTl:"Natuklasan ni Rin Okumura na siya ay anak ni Satanas, ngunit pinili niyang maging tagapagpalayas ng demonyo sa halip na sumunod sa yapak ng kanyang ama. Ipinapakita rito ang kanyang pakikipaglaban para protektahan ang mundo habang hinaharap ang kanyang madilim na pinagmulan.",
    img:"https://upload.wikimedia.org/wikipedia/en/6/62/Blue_Exorcist_vol_1.png",linkEn:"#",linkTl:"#"},
    {id:33,title:"Noragami: Stray God Stories",titleTl:"Noragami: Mga Kwento ng Ligaw na Diyos",year:"2013",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.6,totalVotes:765,
    desc:"Yato is a minor god who dreams of being worshipped by millions. Follow his adventures with Hiyori and Yukine as he takes on odd jobs, fights evil spirits, and tries to build his own shrine.",
    descTl:"Si Yato ay isang maliit na diyos na nangangarap na kilalanin at sambahin ng marami. Samahan siya kasama sina Hiyori at Yukine sa kanyang mga misyon, pakikipaglaban sa masasamang espiritu, at pagsisikap na magkaroon ng sariling dambana.",
    img:"https://upload.wikimedia.org/wikipedia/en/b/bc/Noragami_1.png",linkEn:"#",linkTl:"#"},
    {id:34,title:"Bungo Stray Dogs: Untold Stories",titleTl:"Mga Aso sa Kalye: Mga Hindi Nasabing Kwento",year:"2016",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:892,
    desc:"Members of the Armed Detective Agency possess supernatural abilities and solve dangerous cases that regular police cannot handle. This book reveals more about their pasts, rivalries, and the reason they fight.",
    descTl:"Ang mga miyembro ng Armed Detective Agency ay may mga pambihirang kakayahan at lumulutas ng mga kasong hindi kaya ng karaniwang pulis. Ipinapakita rito ang kanilang mga nakaraan, karibal, at ang dahilan kung bakit sila lumalaban.",
    img:"https://upload.wikimedia.org/wikipedia/en/f/f8/Bung%C5%8D_Stray_Dogs_volume_1.jpg",linkEn:"#",linkTl:"#"},
    {id:35,title:"Fire Force: The Hero’s Tale",titleTl:"Puwersa ng Apoy: Kwento ng Bayani",year:"2017",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.5,totalVotes:723,
    desc:"In a world where people suddenly burst into flames and turn into monsters, Shinra Kusakabe joins Special Fire Force Company 8 to find the truth behind the phenomenon and become a hero who saves lives.",
    descTl:"Sa mundong kung saan ang mga tao ay biglang nag-aapoy at nagiging halimaw, sumali si Shinra Kusakabe sa Special Fire Force upang alamin ang katotohanan at maging bayaning nagliligtas ng buhay.",
    img:"https://upload.wikimedia.org/wikipedia/en/0/06/Fire_Force%2C_Volume_1.jpg",linkEn:"#",linkTl:"#"},
    {id:36,title:"Mob Psycho 100: The First Step",titleTl:"Mob Psycho 100: Ang Unang Hakbang",year:"2018",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.8,totalVotes:1098,
    desc:"Shigeo 'Mob' Kageyama has incredible psychic powers but chooses to live a normal life. Follow his journey under the guidance of Reigen Arataka, learning that strength comes not from power, but from kindness and self-control.",
    descTl:"Si Shigeo 'Mob' Kageyama ay may napakalakas na kapangyarihan ngunit piniling mamuhay nang payapa. Sundan ang kanyang paglalakbay kasama si Reigen Arataka, at alamin na ang tunay na lakas ay hindi galing sa kapangyarihan, kundi sa kabutihan at pagpipigil sa sarili.",
    img:"https://upload.wikimedia.org/wikipedia/en/4/4b/Mob_Psycho_100_manga_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:37,title:"Vinland Saga: The True Warrior",titleTl:"Kwento ng Vinland: Ang Tunay na Mandirigma",year:"2013",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.9,totalVotes:1456,
    desc:"From a vengeful boy to a man seeking peace — follow Thorfinn’s journey during the age of Vikings, learning that true strength lies not in war, but in forgiveness and building a better world.",
    descTl:"Mula sa batang puno ng galit hanggang sa taong naghahangad ng kapayapaan — sundan si Thorfinn sa panahon ng mga Viking, at matutunan na ang tunay na lakas ay wala sa digmaan kundi sa pagpapatawad at pagbuo ng mas maayos na kinabukasan.",
    img:"https://upload.wikimedia.org/wikipedia/en/8/8c/Vinland_Saga_key_visual.png",linkEn:"#",linkTl:"#"},
    {id:38,title:"Berserk: The Flame Dragon Knight",titleTl:"Berserk: Ang Kabalyero ng Apoy na Dragon",year:"2017",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.6,totalVotes:876,
    desc:"Set in the dark and brutal world of Berserk, this story follows a brave warrior fighting against fate and demonic forces. It explores themes of struggle, resilience, and the will to keep moving forward no matter how hopeless things seem.",
    descTl:"Sa madilim at marahas na mundo ng Berserk, sundan ang isang matapang na mandirigma na lumalaban sa tadhana at sa mga demonyong pwersa. Ipinapakita rito ang pagsisikap, katatagan, at kagustuhang magpatuloy kahit gaano pa kawala ang pag-asa.",
    img:"https://upload.wikimedia.org/wikipedia/en/4/4a/Berserk_vol01.png",linkEn:"#",linkTl:"#"},
    {id:39,title:"A Silent Voice Light Novel",titleTl:"Tahimik na Tinig Nobela",year:"2014",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.8,totalVotes:1234,
    desc:"A touching story about redemption, friendship, and understanding. Follow Shoya Ishida and Shoko Nishimiya as they learn to forgive each other, overcome their past mistakes, and find their place in the world.",
    descTl:"Isang madamdaming kwento tungkol sa pagbabago, pagkakaibigan, at pag-unawa. Sundan sina Shoya Ishida at Shoko Nishimiya habang natutunan nilang magpatawad, itama ang mga pagkakamali noon, at hanapin ang kanilang halaga sa mundo.",
    img:"https://upload.wikimedia.org/wikipedia/en/6/6c/Koe_no_Katachi%2C_Volume_1.jpg",linkEn:"#",linkTl:"#"},
    {id:40,title:"Toradora!",titleTl:"Toradora!",year:"2006",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:987,
    desc:"A beloved romantic comedy about Ryuji Takasu and Taiga Aisaka — two students who look intimidating but are actually kind-hearted. They decide to help each other confess their feelings to their crushes, only for unexpected love to bloom between them.",
    descTl:"Isang sikat na kwento ng pag-ibig at katatawanan tungkol kina Ryuji Takasu at Taiga Aisaka — dalawang estudyanteng mukhang matapang ngunit mababait ang puso. Nagkasundo silang tulungan ang isa’t isa na umamin sa kanilang nagugustuhan, ngunit hindi inaasahang pag-ibig ang mabubuo sa pagitan nila.",
    img:"https://upload.wikimedia.org/wikipedia/en/c/cd/Toradora%21_light_novel_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:41,title:"Sakura Wars: The Beginning",titleTl:"Sakura Wars: Ang Simula",year:"1996",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.4,totalVotes:543,
    desc:"In an alternate historical Tokyo, young women with spiritual powers form the Flower Division to protect the city from demons using both combat and stage performance. This story tells how their legendary team was first formed.",
    descTl:"Sa ibang panahon sa Tokyo, ang mga kababaihang may espesyal na kapangyarihan ay bumuo ng Flower Division upang ipagtanggol ang lungsod — gamit ang pakikipaglaban at pagtatanghal. Ipinapakita rito kung paano nabuo ang kanilang maalamat na samahan.",
    img:"https://upload.wikimedia.org/wikipedia/en/3/3e/Sakura_Wars_3_cover_art.jpg",linkEn:"#",linkTl:"#"},
    {id:42,title:"Accel World",titleTl:"Accel World",year:"2009",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.5,totalVotes:678,
    desc:"Haruyuki Arita is an overweight boy who finds escape in virtual games until he meets the beautiful and talented Kuroyukihime. She introduces him to a secret program that accelerates his brain, opening doors to battles and adventures he never imagined.",
    descTl:"Si Haruyuki Arita ay isang batang madalas apihin na nakahanap ng aliw sa laro hanggang sa makilala niya si Kuroyukihime. Ipinakilala siya nito sa isang lihim na programa na nagpapabilis sa kanyang isipan — na nagbukas ng pinto sa mga labanan at pakikipagsapalaran na hindi niya inakala.",
    img:"https://upload.wikimedia.org/wikipedia/en/d/dd/Accel_World_cover.png",linkEn:"#",linkTl:"#"},
    {id:43,title:"Goblin Slayer",titleTl:"Tagapatay ng Goblin",year:"2016",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:943,
    desc:"A young adventurer witnesses the cruel fate of new recruits at the hands of goblins and dedicates his life to eradicating them completely. He leads a small, trusted party, using careful planning, knowledge of monster habits, and unwavering resolve to protect those who cannot protect themselves.",
    descTl:"Isang batang mandirigma ang nakasaksi sa malupit na sinapit ng mga baguhan sa kamay ng mga goblin kaya inalay niya ang kanyang buhay upang lipulin silang lahat. Namumuno siya sa maliit ngunit matibay na samahan, gamit ang maingat na pagpaplano, pagkilala sa ugali ng mga halimaw, at matibay na paninindigan para protektahan ang mga walang kakayahang lumaban.",
    img:"https://upload.wikimedia.org/wikipedia/en/7/7d/Goblin_Slayer_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:44,title:"Arifureta: From Commonplace to World's Strongest",titleTl:"Arifureta: Mula sa Karaniwan Hanggang sa Pinakamalakas",year:"2015",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.5,totalVotes:756,
    desc:"Hajime Nagumo is an ordinary student transported to a fantasy world with only weak magic. After being betrayed and falling into the depths of a dungeon, he gains terrifying power and sets out to return home, vowing to overcome every obstacle and protect those who stand by him.",
    descTl:"Si Hajime Nagumo ay isang karaniwang estudyante na dinala sa ibang mundo na may mahinang kapangyarihan lamang. Matapos siyang pagtaksilan at mahulog sa ilalim ng kweba, nakakuha siya ng nakakatakot na lakas at nagpasiyang umuwi — handang harapin ang anumang hadlang at protektahan ang mga taong naniniwala sa kanya.",
    img:"https://upload.wikimedia.org/wikipedia/en/6/6d/Arifureta_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:45,title:"Konosuba: God's Blessing on This Wonderful World! Vol. 2",titleTl:"Konosuba: Pagpapala sa Kahanga-hangang Mundong Ito! Ikalawang Bahagi",year:"2013",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.6,totalVotes:821,
    desc:"Kazuma and his party continue their chaotic life in this fantasy world, taking on quests that often go wrong and getting into hilarious trouble. Despite their failures, they slowly build a strong bond while facing powerful enemies and everyday struggles.",
    descTl:"Ipinagpapatuloy nina Kazuma at ng kanyang mga kasama ang kanilang magulong buhay sa mundong ito — tumatanggap ng mga misyong laging nasisira at napapahamak sa mga nakakatawang pangyayari. Sa kabila ng mga pagkabigo, unti-unti silang nagkakaisa habang humaharap sa malalakas na kalaban at mga hamon sa araw-araw.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Kono_Subarashii_Sekai_ni_Shukufuku_o%21_light_novel_volume_1_cover.jpg/220px-Kono_Subarashii_Sekai_ni_Shukufuku_o%21_light_novel_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:46,title:"The Rising of the Shield Hero",titleTl:"Ang Pag-angat ng Bayaning Kalasag",year:"2013",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.8,totalVotes:1567,
    desc:"Naofumi Iwatani is summoned as one of four legendary heroes but is immediately betrayed, falsely accused, and cast out. With only a shield as his weapon, he gains strength through perseverance and the help of loyal companions, fighting to protect the world while clearing his name.",
    descTl:"Si Naofumi Iwatani ay tinawag bilang isa sa apat na maalamat na bayani ngunit agad siyang pinagtaksilan, inakusahan nang mali, at itinaboy. Gamit lamang ang kalasag, lumakas siya sa pamamagitan ng pagtitiyaga at tulong ng mga tapat na kasama — lumalaban para iligtas ang mundo habang pinapatunayan ang kanyang kawalang-sala.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/The_Rising_of_the_Shield_Hero_light_novel_vol_1.jpg/220px-The_Rising_of_the_Shield_Hero_light_novel_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:47,title:"That Time I Got Reincarnated as a Slime",titleTl:"Noong Ako ay Naging Isang Halimaw na Putik",year:"2014",type:"Light Novel",lang:"EN / TL",category:["trending","all"],rating:4.8,totalVotes:1689,
    desc:"Satoru Mikami is reborn in another world as a slime with unique powers. He befriends ancient monsters, builds his own nation, and unites different races to create a peaceful kingdom, all while hiding his true power from the rest of the world.",
    descTl:"Si Satoru Mikami ay muling isinilang sa ibang mundo bilang isang halimaw na may pambihirang kakayahan. Nakipagkaibigan siya sa mga sinaunang nilalang, nagtayo ng sariling bansa, at pinag-isa ang iba't ibang lahi upang makabuo ng mapayapang kaharian — habang itinatago ang kanyang tunay na lakas sa buong mundo.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/That_Time_I_Got_Reincarnated_as_a_Slime_volume_1.jpg/220px-That_Time_I_Got_Reincarnated_as_a_Slime_volume_1.jpg",linkEn:"#",linkTl:"#"},
    {id:48,title:"No Game No Life Practical War Game",titleTl:"Walang Laro Walang Buhay: Tunay na Labanan",year:"2014",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:845,
    desc:"Sora and Shiro face a nation that challenges them to a high-stakes game that could decide the fate of the entire continent. Using only their wits and teamwork, they must outsmart opponents far more powerful than them.",
    descTl:"Hinarap nina Sora at Shiro ang isang bansa na humamon sa kanila sa isang mapanganib na laro na magpapasya sa kapalaran ng buong kontinente. Gamit lamang ang kanilang talino at pagtutulungan, kailangan nilang talunin ang mga kalaban na mas malakas sa kanila.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/No_Game_No_Life_light_novel_vol_1.jpg/220px-No_Game_No_Life_light_novel_vol_1.jpg",linkEn:"#",linkTl:"#"},
    {id:49,title:"Re:Zero - The Frozen Bond",titleTl:"Re:Zero - Ang Nagyeyelong Ugnayan",year:"2019",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.8,totalVotes:1123,
    desc:"A side story set during Subaru’s journey with Emilia and the others. It reveals deeper connections between characters, past traumas, and the sacrifices made to protect the people they love, all while facing the harsh cold and dangerous enemies.",
    descTl:"Isang karagdagang kwento habang naglalakbay si Subaru kasama si Emilia at ang iba pa. Ipinapakita rito ang mas malalim na ugnayan ng mga tauhan, mga sugat ng nakaraan, at mga sakripisyong ginawa para sa mga mahal nila sa buhay — sa kabila ng matinding lamig at mga mapanganib na kaaway.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Re-Zero_kara_Hajimeru_Isekai_Seikatsu_light_novel_volume_1_cover.jpg/220px-Re-Zero_kara_Hajimeru_Isekai_Seikatsu_light_novel_volume_1_cover.jpg",linkEn:"#",linkTl:"#"},
    {id:50,title:"My Youth Romantic Comedy Is Wrong, As I Expected",titleTl:"Ang Aking Kabataan at Pag-ibig ay Mali Gaya ng Inaasahan Ko",year:"2011",type:"Light Novel",lang:"EN / TL",category:["all"],rating:4.7,totalVotes:987,
    desc:"Hachiman Hikigaya is a cynical student who believes genuine relationships do not exist. Forced to join the Service Club with two beautiful girls, he slowly learns to understand others, confront his own views on life, and discover what real connection truly means.",
    descTl:"Si Hachiman Hikigaya ay isang estudyanteng hindi naniniwala sa tunay na pagkakaibigan at pag-ibig. Napilitan siyang sumali sa isang samahan kasama ang dalawang magagandang dalaga — at unti-unti niyang naintindihan ang damdamin ng iba, binago ang kanyang pananaw, at natuklasan ang tunay na kahulugan ng pakikipag-ugnayan sa kapwa.",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/My_Youth_Romantic_Comedy_Is_Wrong%2C_As_I_Expected_Volume_1.jpg/220px-My_Youth_Romantic_Comedy_Is_Wrong%2C_As_I_Expected_Volume_1.jpg",linkEn:"#",linkTl:"#"}
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
