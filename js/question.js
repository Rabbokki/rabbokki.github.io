import {questions} from './data.js';

const numberElement = document.querySelector('.number');
const questionElement = document.querySelector('.question');
const choice1 = document.querySelector('.choice1');
const choice2 = document.querySelector('.choice2');
const progressValue = document.querySelector('.value')

//현재 문제 번호를 변수로 만들기
let currentNumber = 0;

//mbti 결과 저장 변수
let mbti = '';


function Question(){
    let question2 = questions[currentNumber];
    numberElement.innerHTML = question2.number;
    questionElement.innerHTML = question2.question;
    choice1.innerHTML = question2.choices[0].text;
    choice2.innerHTML = question2.choices[1].text;
    progressValue.style.width = ((currentNumber + 1) * 10) +'%';

    //mbti 결과 생성
    mbti += question2.choices[0].value;
    // console.log('MBTI : ' + question2.choices[0].value);
}

//페이지 로딩 시 실행되는 스크립트
Question();

//처리 절차
// 1. 아래 버튼2개 중 하나를 클릭하면
//  --다음 문제를 보여줌
//  --MBTI 타입을 저장
// 버튼에 이벤트리스너 담기
// 1.mbti = istj;로 출력
// 문제10번이 넘어가면 문제가 없습니다. 출력 alert로
function nextQeustion(choice){
    if(currentNumber < questions.length-1){
        let question2 = questions[currentNumber];
        mbti = mbti + question2.choices[choice].value;
        currentNumber++;
        Question();
        console.log('MBTI : ' + mbti);
    }else{
        //mbti 결과검사 보여줄 페이지로 이동
        window.location.href = '../results.html?str=' + mbti
        return;
    }
    
}
choice1.addEventListener('click', 
    //콜백함수
    () => {nextQeustion(0)});

choice2.addEventListener('click', 
    
    () => {nextQeustion(1)});

