(this.webpackJsonpquint=this.webpackJsonpquint||[]).push([[3],{11:function(e,a,i){"use strict";function t(e,a){(null==a||a>e.length)&&(a=e.length);for(var i=0,t=new Array(a);i<a;i++)t[i]=e[i];return t}function n(e,a){if(e){if("string"===typeof e)return t(e,a);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(e,a):void 0}}function l(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var i=[],t=!0,n=!1,l=void 0;try{for(var s,o=e[Symbol.iterator]();!(t=(s=o.next()).done)&&(i.push(s.value),!a||i.length!==a);t=!0);}catch(r){n=!0,l=r}finally{try{t||null==o.return||o.return()}finally{if(n)throw l}}return i}}(e,a)||n(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.r(a);var o=i(1),r=i(0);function d(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;return e.slice(a,a+i)}function u(e){var a=new Date(e);return"".concat(a.getDate(),"  ").concat(function(e){switch(e){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";case 6:return"Jul";case 7:return"Aug";case 8:return"Sep";case 9:return"Oct";case 10:return"Nov";default:return"Dec"}}(a.getMonth())," ").concat(a.getFullYear())}var h=[{bg:"cornflowerblue",fg:"white"},{bg:"cadetblue",fg:"white"},{bg:"darkblue",fg:"white"},{bg:"darkcyan",fg:"white"},{bg:"tomato",fg:"white"},{bg:"coral",fg:"white"},{bg:"blueviolet",fg:"white"},{bg:"brown",fg:"white"},{bg:"chocolate",fg:"white"},{bg:"crimson",fg:"white"}],c=i(12);var m=function(e){var a=e.story,i=e.color,t=a.headline,n=a.slug,l=a.publishedAt,s="https://images.thequint.com/".concat(a["hero-image-s3-key"]),r=a["author-name"];return Object(o.jsx)("div",{className:"story-container",style:{backgroundColor:i.bg,color:i.fg},children:Object(o.jsxs)("div",{className:"story",children:[Object(o.jsx)("small",{className:"published-at",children:u(l)}),Object(o.jsx)("h1",{className:"headline",children:t}),Object(o.jsxs)("small",{className:"author",children:["Written by ",Object(o.jsx)("strong",{children:r})]}),Object(o.jsx)("img",{className:"story-image",src:s,alt:n}),Object(o.jsx)("div",{className:"description",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem, ab excepturi officia earum, asperiores necessitatibus eaque delectus odit tempora adipisci dolore neque recusandae. Explicabo repellendus dolorem delectus distinctio maiores."})]})})},p=h.length;var w=function(e){var a=e.stories;return Object(o.jsx)(o.Fragment,{children:a.map((function(e,a){var i=new Date(e["published-at"]);return e.publishedAt=i,Object(o.jsx)(m,{story:e,color:h[a%p]},a)}))})};var b=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("a",{href:"https://www.thequint.com/",target:"_blank",rel:"noreferrer",children:"Logo"})})},g=c.stories;a.default=function(){var e=s(Object(r.useState)([]),2),a=e[0],i=e[1],t=0,n=!1,u=function(){if(window.innerHeight+window.scrollY+50>=document.body.clientHeight&&!n){n=!0;var e=d(g,t);e.length>0&&i((function(a){t+=5;var i=[].concat(l(a),l(e));return n=!1,i}))}};return Object(r.useEffect)((function(){var e=d(g,t,5);return i([].concat(l(a),l(e))),t+=5,window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(w,{stories:a}),a.length>0&&Object(o.jsx)(b,{})]})}},12:function(e){e.exports=JSON.parse('{"stories":[{"author-name":"The Quint","headline":"Sunday View: The Best Weekend Opinion Reads, Curated Just For You","slug":"news/india/sunday-view-the-best-weekend-opinion-reads-curated-just-for-you-71","last-published-at":1602382155657,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"india","name":"India","section-url":"https://www.thequint.com/news/india","id":2803,"parent-id":2777,"display-name":"India","collection":{"slug":"follow-up-delhi-violence-probe","name":"NE Delhi Violence Probe","id":38806},"data":null},{"domain-slug":null,"slug":"politics","name":"Politics","section-url":"https://www.thequint.com/news/politics","id":2786,"parent-id":2777,"display-name":"Politics","collection":{"slug":"ram-janmabhoomi-babri-masjid-dispute","name":" Babri Masjid Demolition","id":8894},"data":null}],"hero-image-metadata":{"width":832,"mime-type":"image/jpeg","focus-point":[611,169],"height":468},"published-at":1602382155657,"id":"132295b8-be04-4cfe-988f-e8eb36addff1","hero-image-s3-key":"thequint/2020-04/8e79688b-1dde-4d5b-96c7-ff34ce321e09/SV_1.jpg","url":"https://www.thequint.com/news/india/sunday-view-the-best-weekend-opinion-reads-curated-just-for-you-71","author-id":31,"first-published-at":1602380318756,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"The Quint","headline":"Joe Biden Edges Closer to Victory With Wins in Michigan, Wisconsin","slug":"news/world/polls-and-problems-in-battleground-states-us-elections-2020-biden-trump","last-published-at":1604590067681,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"world","name":"World","section-url":"https://www.thequint.com/news/world","id":2802,"parent-id":2777,"display-name":"World","collection":{"slug":"world","name":"World","id":1005},"data":null}],"hero-image-metadata":{"width":2000,"height":1125,"mime-type":"image/jpeg","focus-point":[985,529]},"published-at":1604590067681,"id":"add7db82-03d7-4223-97b7-4f4780c86829","hero-image-s3-key":"thequint/2020-11/edc9b3ad-3339-4302-b2ce-ec1d3d7003dc/Hero_Image_3__2_.jpg","url":"https://www.thequint.com/news/world/polls-and-problems-in-battleground-states-us-elections-2020-biden-trump","author-id":31,"first-published-at":1604449473684,"story-template":"text","metadata":{"card-share":{"shareable":true}}},{"author-name":"IANS","headline":"Ahead of Protest Meet, Railways Postpones Goa Project Indefinitely","slug":"news/environment/ahead-of-protest-meet-railways-postpones-goa-project-indefinitely","last-published-at":1604589891757,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"environment","name":"Environment","section-url":"https://www.thequint.com/news/environment","id":2800,"parent-id":2777,"display-name":"Environment","collection":{"slug":"world-environment-day-2019","name":"World Environment Day 2019","id":10084},"data":null}],"hero-image-metadata":{"width":2738,"height":1540,"mime-type":"image/jpeg","focus-point":[1495,711]},"published-at":1604589891757,"id":"0374dbf9-cb11-433b-9e54-532e0284c648","hero-image-s3-key":"thequint/2020-11/99987e05-1ae9-4336-9ff9-b961db0f0d90/goa.jpg","url":"https://www.thequint.com/news/environment/ahead-of-protest-meet-railways-postpones-goa-project-indefinitely","author-id":12555,"first-published-at":1604589891757,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"The Quint","headline":"US Polls: Biden\u2019s Arizona Lead Narrows, Race Tightens in Georgia","slug":"news/world/who-is-ahead-in-us-presidential-election-2020-donald-trump-joe-biden","last-published-at":1604589457836,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"world","name":"World","section-url":"https://www.thequint.com/news/world","id":2802,"parent-id":2777,"display-name":"World","collection":{"slug":"world","name":"World","id":1005},"data":null}],"hero-image-metadata":{"mime-type":"image/jpeg","focus-point":[979,477],"width":2000,"height":1125},"published-at":1604589457836,"id":"bee966b3-c3c2-4b1a-9a25-f404a5f6c329","hero-image-s3-key":"thequint/2020-11/057afb4b-7a09-4a46-8a29-e331dd62888f/Hero_Image.jpg","url":"https://www.thequint.com/news/world/who-is-ahead-in-us-presidential-election-2020-donald-trump-joe-biden","author-id":31,"first-published-at":1604448524545,"story-template":"text","metadata":{"card-share":{"shareable":true}}},{"author-name":"The Quint","headline":"Haryana Assembly Passes Bill for 75% Quota for Locals in Pvt Jobs","slug":"news/india/haryana-assembly-passes-bill-for-75-quota-for-locals-in-private-jobs","last-published-at":1604589313816,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"india","name":"India","section-url":"https://www.thequint.com/news/india","id":2803,"parent-id":2777,"display-name":"India","collection":{"slug":"follow-up-delhi-violence-probe","name":"NE Delhi Violence Probe","id":38806},"data":null},{"domain-slug":null,"slug":"news","name":"News","section-url":"https://www.thequint.com/news","id":2777,"parent-id":null,"display-name":"News","collection":{"slug":"news","name":"News","id":1036},"data":null},{"domain-slug":null,"slug":"politics","name":"Politics","section-url":"https://www.thequint.com/news/politics","id":2786,"parent-id":2777,"display-name":"Politics","collection":{"slug":"ram-janmabhoomi-babri-masjid-dispute","name":" Babri Masjid Demolition","id":8894},"data":null}],"hero-image-metadata":{"mime-type":"image/jpeg","focus-point":[292,263],"width":700,"height":394},"published-at":1604589313816,"id":"44ab1ad1-4602-4b96-ad36-22bc53f506d4","hero-image-s3-key":"thequint/2020-07/94bfd99e-d909-45d0-819a-02c954844998/Khattar.jpg","url":"https://www.thequint.com/news/india/haryana-assembly-passes-bill-for-75-quota-for-locals-in-private-jobs","author-id":31,"first-published-at":1604589313816,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"IANS","headline":"Early Sunset These Days in UAE Has Made Chasing Easier: Tendulkar","slug":"indian-premier-league-ipl/ipl-2020-early-sunset-these-days-in-uae-has-made-chasing-easier-says-sachin-tendulkar","last-published-at":1604589126602,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"indian-premier-league-ipl","name":"IPL","section-url":"https://www.thequint.com/indian-premier-league-ipl","id":17848,"parent-id":null,"display-name":"IPL","collection":{"slug":"indian-premier-league-ipl","name":"Indian Premier League","id":35158},"data":{"color":"#370067"}},{"domain-slug":null,"slug":"sports-buzz","name":"Sports Buzz","section-url":"https://www.thequint.com/sports/sports-buzz","id":3353,"parent-id":13,"display-name":"Sports Buzz","collection":{"slug":"sports-buzz","name":"Sports Buzz","id":8168},"data":null},{"domain-slug":null,"slug":"sports","name":"Sports","section-url":"https://www.thequint.com/sports","id":13,"parent-id":null,"display-name":"Sports","collection":{"slug":"sports","name":"Sports","id":1031},"data":null}],"hero-image-metadata":{"width":1186,"height":667,"mime-type":"image/jpeg","focus-point":[633,195]},"published-at":1604589126602,"id":"09091b75-f826-4d92-ae66-bf6760a45492","hero-image-s3-key":"thequint/2020-11/1fef1ed1-104e-444e-ae7b-425a04a3db9c/tendulkar_1200.jpg","url":"https://www.thequint.com/indian-premier-league-ipl/ipl-2020-early-sunset-these-days-in-uae-has-made-chasing-easier-says-sachin-tendulkar","author-id":12555,"first-published-at":1604589126602,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"The Quint","headline":"Opposition Leaders Slam Nitish Kumar\u2019s \u2018Last Election\u2019 Comment","slug":"news/politics/bihar-polls-this-will-be-my-last-election-says-nitish-kumar","last-published-at":1604588933264,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"politics","name":"Politics","section-url":"https://www.thequint.com/news/politics","id":2786,"parent-id":2777,"display-name":"Politics","collection":{"slug":"ram-janmabhoomi-babri-masjid-dispute","name":" Babri Masjid Demolition","id":8894},"data":null},{"domain-slug":null,"slug":"quint-news-feed","name":"Quint News Feed","section-url":"https://www.thequint.com/quint-news-feed","id":18280,"parent-id":null,"display-name":"Quint News Feed","collection":{"slug":"quint-news-feed","name":"Quint News Feed","id":35836},"data":null}],"hero-image-metadata":{"width":2100,"mime-type":"image/jpeg","focus-point":[941,446],"height":1181},"published-at":1604588933264,"id":"cc46dca2-2c01-4b2e-b5d5-3b8fc3e7647e","hero-image-s3-key":"thequint/2016-05/54f022e9-9175-4f12-9581-306c318f758a/nitish hero.jpg","url":"https://www.thequint.com/news/politics/bihar-polls-this-will-be-my-last-election-says-nitish-kumar","author-id":31,"first-published-at":1604576380436,"story-template":"video","metadata":{"card-share":{"shareable":true}}},{"author-name":"IANS","headline":"Ecclestone Spins Trailblazers to Comfortable Win over Velocity","slug":"indian-premier-league-ipl/womens-t20-challenge-sophie-ecclestone-spins-trailblazers-to-comfortable-win-over-velocity","last-published-at":1604588199684,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"indian-premier-league-ipl","name":"IPL","section-url":"https://www.thequint.com/indian-premier-league-ipl","id":17848,"parent-id":null,"display-name":"IPL","collection":{"slug":"indian-premier-league-ipl","name":"Indian Premier League","id":35158},"data":{"color":"#370067"}},{"domain-slug":null,"slug":"cricket","name":"Cricket","section-url":"https://www.thequint.com/sports/cricket","id":2790,"parent-id":13,"display-name":"Cricket","collection":{"slug":"cricket","name":"Cricket","id":1017},"data":null},{"domain-slug":null,"slug":"india","name":"India","section-url":"https://www.thequint.com/news/india","id":2803,"parent-id":2777,"display-name":"India","collection":{"slug":"follow-up-delhi-violence-probe","name":"NE Delhi Violence Probe","id":38806},"data":null}],"hero-image-metadata":{"width":3473,"height":1954,"mime-type":"image/jpeg","focus-point":null},"published-at":1604588199684,"id":"e6d3e7f1-0368-4b8d-a380-858753b49b98","hero-image-s3-key":"thequint/2020-11/b10c9479-3eca-4084-8c70-d02a8f4daea0/ARJUNk0457.jpg","url":"https://www.thequint.com/indian-premier-league-ipl/womens-t20-challenge-sophie-ecclestone-spins-trailblazers-to-comfortable-win-over-velocity","author-id":12555,"first-published-at":1604583964911,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"The Quint","headline":"Adani Changes Aus Op\u2019s Name to Latin Word Which Means \u2018Crooked\u2019","slug":"news/world/bravus-aka-crooked-adani-groups-gaffe-in-naming-australian-ops-brave","last-published-at":1604587285417,"subheadline":"Adani Changes Aus Op\u2019s Name to Latin Word Which Means \u2018Crooked\u2019","alternative":{},"sections":[{"domain-slug":null,"slug":"world","name":"World","section-url":"https://www.thequint.com/news/world","id":2802,"parent-id":2777,"display-name":"World","collection":{"slug":"world","name":"World","id":1005},"data":null}],"hero-image-metadata":{"width":1024,"height":576,"mime-type":"image/jpeg","focus-point":[556,311]},"published-at":1604587285417,"id":"7e05df64-5036-431b-8439-f10c85063a7e","hero-image-s3-key":"thequint/2020-11/1ec9f8da-4ac4-4cdd-8e6a-bcb9e8588805/nationalherald_2018_02_187c7a1e_85e9_459a_acb7_a5a4d354b17f_adani_fails.jpg","url":"https://www.thequint.com/news/world/bravus-aka-crooked-adani-groups-gaffe-in-naming-australian-ops-brave","author-id":31,"first-published-at":1604587285417,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"Sonal Gupta","headline":"Photos of Kashi Vishwanath Temple Viral As Ayodhya\u2019s Ram Mandir","slug":"news/webqoof/photos-of-kashi-vishwanath-temple-viral-as-ayodhya-ram-mandir","last-published-at":1604586698940,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"webqoof","name":"WebQoof","section-url":"https://www.thequint.com/news/webqoof","id":3397,"parent-id":2777,"display-name":"WebQoof","collection":{"slug":"webqoof","name":"WebQoof","id":8256},"data":null}],"hero-image-metadata":{"width":2000,"height":1125,"mime-type":"image/png","focus-point":[1037,553]},"published-at":1604586698940,"id":"eaa9b862-6e38-405a-aaaf-4ec029b07856","hero-image-s3-key":"thequint/2020-11/62060b01-449d-435c-a45b-a9ea1fc78399/Add_a_subheading.png","url":"https://www.thequint.com/news/webqoof/photos-of-kashi-vishwanath-temple-viral-as-ayodhya-ram-mandir","author-id":604351,"first-published-at":1604401483969,"story-template":"video","metadata":{"story-attributes":{"claimreviewrating":["1"],"claimsource":["Facebook","Twitter"],"claimreviewed":["\'First Look\' of Ayodhya\'s Ram Mandir Under Construction"],"factcheck":["True"]},"card-share":{"shareable":true}}},{"author-name":"The Quint","headline":"Delhi Govt Bans Firecrackers Ahead of Diwali As COVID Cases Surge","slug":"news/india/ahead-of-diwali-delhi-govt-bans-firecrackers","last-published-at":1604586555829,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"india","name":"India","section-url":"https://www.thequint.com/news/india","id":2803,"parent-id":2777,"display-name":"India","collection":{"slug":"follow-up-delhi-violence-probe","name":"NE Delhi Violence Probe","id":38806},"data":null},{"domain-slug":null,"slug":"environment","name":"Environment","section-url":"https://www.thequint.com/news/environment","id":2800,"parent-id":2777,"display-name":"Environment","collection":{"slug":"world-environment-day-2019","name":"World Environment Day 2019","id":10084},"data":null}],"hero-image-metadata":{"width":3990,"height":2244,"mime-type":"image/jpeg","focus-point":[2166,1183]},"published-at":1604586555829,"id":"c437e43b-6913-448e-a43a-0e2d0ea6cd1a","hero-image-s3-key":"thequint/2019-10/38396726-f256-40bc-a791-0609c92c6fb4/28101_pti10_28_2019_000100b.jpg","url":"https://www.thequint.com/news/india/ahead-of-diwali-delhi-govt-bans-firecrackers","author-id":31,"first-published-at":1604585346425,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"The Quint","headline":"Protests in NY, Detroit, Portland, Arizona Before Election Results","slug":"news/world/us-presidential-election-protests-across-united-states-donald-trump-joe-biden","last-published-at":1604586004891,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"world","name":"World","section-url":"https://www.thequint.com/news/world","id":2802,"parent-id":2777,"display-name":"World","collection":{"slug":"world","name":"World","id":1005},"data":null}],"hero-image-metadata":{"width":3872,"height":2178,"mime-type":"image/jpeg","focus-point":[1853,941]},"published-at":1604586004891,"id":"a0fb1033-ce00-49d7-9fc0-0734c3a5fefd","hero-image-s3-key":"thequint/2020-11/0d3b3b3e-b8da-4d3f-8560-1c72d471f45a/05111_ap05_11_2020_000021b.jpg","url":"https://www.thequint.com/news/world/us-presidential-election-protests-across-united-states-donald-trump-joe-biden","author-id":31,"first-published-at":1604559036430,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"The Quint","headline":"COVID-19: China Temporarily Bars Entry of Indians With Valid Visas","slug":"news/india/china-temporarily-bars-entry-of-indians-with-valid-visas","last-published-at":1604585954011,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"india","name":"India","section-url":"https://www.thequint.com/news/india","id":2803,"parent-id":2777,"display-name":"India","collection":{"slug":"follow-up-delhi-violence-probe","name":"NE Delhi Violence Probe","id":38806},"data":null}],"hero-image-metadata":{"mime-type":"image/jpeg","focus-point":[979,511],"width":2000,"height":1125},"published-at":1604585954011,"id":"91930734-d13b-4f00-ab1e-62afe2234f59","hero-image-s3-key":"thequint/2020-07/6a88d36a-4853-4294-a375-b5d00e54fd18/c2.jpg","url":"https://www.thequint.com/news/india/china-temporarily-bars-entry-of-indians-with-valid-visas","author-id":31,"first-published-at":1604585954011,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"Vakasha Sachdev","headline":"Arnab Goswami Arrested: Is Suicide Note Enough to Hold Him Guilty?","slug":"news/law/arnab-goswami-named-in-suicide-note-is-this-enough-to-hold-guilty-supreme-court-high-court-cases","last-published-at":1604585719055,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"law","name":"Law","section-url":"https://www.thequint.com/news/law","id":5298,"parent-id":2777,"display-name":"Law","collection":{"slug":"law","name":"Law","id":11495},"data":null},{"domain-slug":null,"slug":"india","name":"India","section-url":"https://www.thequint.com/news/india","id":2803,"parent-id":2777,"display-name":"India","collection":{"slug":"follow-up-delhi-violence-probe","name":"NE Delhi Violence Probe","id":38806},"data":null},{"domain-slug":null,"slug":"politics","name":"Politics","section-url":"https://www.thequint.com/news/politics","id":2786,"parent-id":2777,"display-name":"Politics","collection":{"slug":"ram-janmabhoomi-babri-masjid-dispute","name":" Babri Masjid Demolition","id":8894},"data":null},{"domain-slug":null,"slug":"celebrities","name":"Celebrities","section-url":"https://www.thequint.com/entertainment/celebrities","id":2739,"parent-id":3,"display-name":"Celebrities","collection":{"slug":"celebrities","name":"Celebrities","id":1000},"data":null}],"hero-image-metadata":{"width":2000,"height":1125,"mime-type":"image/jpeg","focus-point":[1440,358]},"published-at":1604585719055,"id":"0840bddb-834a-45c4-84e0-2890d5341108","hero-image-s3-key":"thequint/2020-11/6eb551f0-6e11-4d08-a9af-ef7c02bfb19e/hero_image_2_6_.jpg","url":"https://www.thequint.com/news/law/arnab-goswami-named-in-suicide-note-is-this-enough-to-hold-guilty-supreme-court-high-court-cases","author-id":122661,"first-published-at":1604585719055,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"The Quint","headline":"Indian Army Chief Receives Honorary Rank by Nepal President","slug":"news/india/indian-army-chief-naravane-to-visit-nepal-to-improve-strained-ties","last-published-at":1604585410046,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"india","name":"India","section-url":"https://www.thequint.com/news/india","id":2803,"parent-id":2777,"display-name":"India","collection":{"slug":"follow-up-delhi-violence-probe","name":"NE Delhi Violence Probe","id":38806},"data":null},{"domain-slug":null,"slug":"politics","name":"Politics","section-url":"https://www.thequint.com/news/politics","id":2786,"parent-id":2777,"display-name":"Politics","collection":{"slug":"ram-janmabhoomi-babri-masjid-dispute","name":" Babri Masjid Demolition","id":8894},"data":null},{"domain-slug":null,"slug":"world","name":"World","section-url":"https://www.thequint.com/news/world","id":2802,"parent-id":2777,"display-name":"World","collection":{"slug":"world","name":"World","id":1005},"data":null},{"domain-slug":null,"slug":"news","name":"News","section-url":"https://www.thequint.com/news","id":2777,"parent-id":null,"display-name":"News","collection":{"slug":"news","name":"News","id":1036},"data":null}],"hero-image-metadata":{"width":1198,"height":674,"mime-type":"image/jpeg","focus-point":null},"published-at":1604585410046,"id":"ba8e0fa6-8c68-4d79-8bd7-6f22e928860f","hero-image-s3-key":"thequint/2020-11/20f86873-5555-4be8-8778-c85b8c9f8867/download__1_.jpg","url":"https://www.thequint.com/news/india/indian-army-chief-naravane-to-visit-nepal-to-improve-strained-ties","author-id":31,"first-published-at":1604461127845,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"The Quint","headline":"Delhi Capitals Elect to Bowl vs Mumbai Indians in Qualifier 1","slug":"indian-premier-league-ipl/delhi-capitals-won-toss-mumbai-indians-elected-to-bowl-first","last-published-at":1604584850722,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"indian-premier-league-ipl","name":"IPL","section-url":"https://www.thequint.com/indian-premier-league-ipl","id":17848,"parent-id":null,"display-name":"IPL","collection":{"slug":"indian-premier-league-ipl","name":"Indian Premier League","id":35158},"data":{"color":"#370067"}},{"domain-slug":null,"slug":"sports","name":"Sports","section-url":"https://www.thequint.com/sports","id":13,"parent-id":null,"display-name":"Sports","collection":{"slug":"sports","name":"Sports","id":1031},"data":null},{"domain-slug":null,"slug":"india","name":"India","section-url":"https://www.thequint.com/news/india","id":2803,"parent-id":2777,"display-name":"India","collection":{"slug":"follow-up-delhi-violence-probe","name":"NE Delhi Violence Probe","id":38806},"data":null}],"hero-image-metadata":{"width":3370,"height":1896,"mime-type":"image/jpeg","focus-point":[1762,649]},"published-at":1604584850722,"id":"cf4e94cf-7519-42f9-a0c7-81b4a3c5c50e","hero-image-s3-key":"thequint/2020-11/a64477d0-59a8-4ff1-8b35-ea2725d95318/RAJ_4569.jpg","url":"https://www.thequint.com/indian-premier-league-ipl/delhi-capitals-won-toss-mumbai-indians-elected-to-bowl-first","author-id":31,"first-published-at":1604583287718,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"The Quint","headline":"Less Men Voted for Trump; Women Favoured Biden: Exit Poll","slug":"news/world/us-election-2020-trump-lost-support-among-men-exit-poll-demographics","last-published-at":1604584461314,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"world","name":"World","section-url":"https://www.thequint.com/news/world","id":2802,"parent-id":2777,"display-name":"World","collection":{"slug":"world","name":"World","id":1005},"data":null},{"domain-slug":null,"slug":"politics","name":"Politics","section-url":"https://www.thequint.com/news/politics","id":2786,"parent-id":2777,"display-name":"Politics","collection":{"slug":"ram-janmabhoomi-babri-masjid-dispute","name":" Babri Masjid Demolition","id":8894},"data":null},{"domain-slug":null,"slug":"news","name":"News","section-url":"https://www.thequint.com/news","id":2777,"parent-id":null,"display-name":"News","collection":{"slug":"news","name":"News","id":1036},"data":null}],"hero-image-metadata":{"mime-type":"image/jpeg","focus-point":[1300,591],"width":2000,"height":1125},"published-at":1604584461314,"id":"72a26e6c-d98f-4d88-8d85-5c9d41ca1576","hero-image-s3-key":"thequint/2020-11/a27bb701-7194-41a4-9ca6-e33ed1fb83b3/Hero_Image_6.jpg","url":"https://www.thequint.com/news/world/us-election-2020-trump-lost-support-among-men-exit-poll-demographics","author-id":31,"first-published-at":1604584461314,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"The Quint","headline":"Overcrowded Boat With 50 Passengers Capsizes In Bihar, One Dead","slug":"news/india/bihar-bhagalpur-overcrowded-boat-capsized-people-dead","last-published-at":1604583820493,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"india","name":"India","section-url":"https://www.thequint.com/news/india","id":2803,"parent-id":2777,"display-name":"India","collection":{"slug":"follow-up-delhi-violence-probe","name":"NE Delhi Violence Probe","id":38806},"data":null}],"hero-image-metadata":{"width":983,"height":553,"mime-type":"image/jpeg","focus-point":null},"published-at":1604583820493,"id":"fce1c15c-eb94-481f-a6d6-d5b23258a6d1","hero-image-s3-key":"thequint/2020-11/40b802d0-9234-49b9-aa08-d96cbf04180a/WhatsApp_Image_2020_11_05_at_6_34_47_PM.jpeg","url":"https://www.thequint.com/news/india/bihar-bhagalpur-overcrowded-boat-capsized-people-dead","author-id":31,"first-published-at":1604583820493,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"Aditya Menon","headline":"\u2018My Last Election\u2019: What Explains Nitish Kumar\u2019s Emotional Appeal?","slug":"news/politics/nitish-kumar-last-election-appeal-pm-modi-letter-bihar-assembly-polls-2020","last-published-at":1604583247928,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"politics","name":"Politics","section-url":"https://www.thequint.com/news/politics","id":2786,"parent-id":2777,"display-name":"Politics","collection":{"slug":"ram-janmabhoomi-babri-masjid-dispute","name":" Babri Masjid Demolition","id":8894},"data":null},{"domain-slug":null,"slug":"india","name":"India","section-url":"https://www.thequint.com/news/india","id":2803,"parent-id":2777,"display-name":"India","collection":{"slug":"follow-up-delhi-violence-probe","name":"NE Delhi Violence Probe","id":38806},"data":null}],"hero-image-metadata":{"mime-type":"image/jpeg","focus-point":[554,407],"width":1280,"height":720},"published-at":1604583247928,"id":"471d4ef1-abd2-449b-8428-85a52f1b5d26","hero-image-s3-key":"thequint/2020-01/f48cccfc-5318-49be-b8af-31fd86713573/bihar_nitish.jpg","url":"https://www.thequint.com/news/politics/nitish-kumar-last-election-appeal-pm-modi-letter-bihar-assembly-polls-2020","author-id":559683,"first-published-at":1604582521831,"story-template":null,"metadata":{"card-share":{"shareable":true}}},{"author-name":"Jehangir Ali ","headline":"J&K Political Parties in Dilemma As Centre Sounds Poll Bugle","slug":"news/politics/jandk-political-parties-in-dilemma-as-centre-sounds-poll-bugle","last-published-at":1604582324346,"subheadline":null,"alternative":{},"sections":[{"domain-slug":null,"slug":"politics","name":"Politics","section-url":"https://www.thequint.com/news/politics","id":2786,"parent-id":2777,"display-name":"Politics","collection":{"slug":"ram-janmabhoomi-babri-masjid-dispute","name":" Babri Masjid Demolition","id":8894},"data":null}],"hero-image-metadata":{"width":2000,"height":1125,"mime-type":"image/jpeg","focus-point":[948,559]},"published-at":1604582324346,"id":"4bb31972-4b5c-4236-8469-89edd6649504","hero-image-s3-key":"thequint/2019-10/3d0ae538-50b0-4dcd-9796-fa539e6e4e48/ka.jpg","url":"https://www.thequint.com/news/politics/jandk-political-parties-in-dilemma-as-centre-sounds-poll-bugle","author-id":834,"first-published-at":1604582324346,"story-template":null,"metadata":{"card-share":{"shareable":true}}}]}')}}]);
//# sourceMappingURL=3.9f84fb9a.chunk.js.map