import { results, mbtis } from "./data.js";

// http://127.0.0.1:5500/results.html?str=entp
//1.str=entp entp 추출
//entp가 data.js mbtis 값 중 몇번째 인지
//결과 entp = ?

const resultMBTI = new URLSearchParams(location.search).get("str");
console.log(resultMBTI);

console.log(resultMBTI + " 의 MBTI 값은 : " + mbtis[resultMBTI]);

//MBTI 값을 색인값으로 전환처리
let findIndex = mbtis[resultMBTI];

//색인값으로 results에서 찾기
let find =  results[findIndex];

const title = find.title;

console.log(title);

//각 위치에 있는 태그 위치 가져오기

const titleEl = document.querySelector('.page-title');
titleEl.innerHTML = title;

//캐릭터 종류
const characterEl = document.querySelector('.character');
// src="images/result_character1.png"
//data.js
//character: '/images/result_character1.png'
const resultImgUrl = find.character;

characterEl.src = resultImgUrl;

//결과 4개 얻어오기
const boxElement = document.querySelectorAll('.box');


//boxElemnet 배열 순회하면서 값 넣어주기
boxElement.forEach((x, index)=> {
    console.log(find.results[index]);
    x.innerHTML=find.results[index];
})

//직업 상자 결과 연결
const jobEl = document.querySelectorAll('.job');

jobEl.forEach((x,index) =>{
    x.innerHTML=find.jobs[index];
})
//결과에 따른 lectureImg 연결
const lectureImg = document.querySelector('.lectureImg');
const resultLecImg = find.lectureImg;
lectureImg.src = resultLecImg;


//결과에 따른 lectureUrl 연결
const lectUrl = document.querySelector('.lecture');
lectUrl.href = find.lectureUrl;



