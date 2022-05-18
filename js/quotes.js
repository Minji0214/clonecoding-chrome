const quotes = [{
    quote:"삶이 있는 한 희망은 있다",
    author:"키케로"
},
{
    quote:"언제나 현재에 집중할수 있다면 행복할것이다",
    author:"파울로 코엘료"
},
{
    quote:"신은 용기있는자를 결코 버리지 않는다",
    author:"켄러"
},
{
    quote:"피할수 없으면 즐겨라",
    author:"로버트 엘리엇"
},
{
    quote:"절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는것이다.",
    author:"L론허바드"
},
{
    quote:"평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라. ",
    author:"제임스 딘"
},
{
    quote:"1퍼센트의 가능성, 그것이 나의 길이다. ",
    author:"나폴레옹"
},
{
    quote:"고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
    author:"헬렌 켈러"
},
{
    quote:"자신을 내보여라. 그러면 재능이 드러날 것이다.",
    author:"발타사르 그라시안"
},
{
    quote:"겨울이 오면 봄이 멀지 않으리",
    author:"셸리"
}];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote= quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;