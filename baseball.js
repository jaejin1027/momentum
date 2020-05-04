const baseballForm = document.querySelector(".js-baseballForm"),
    baseInput = baseballForm.querySelector("input"),
    bresult = document.querySelector(".js-result");


var 숫자후보;
var 숫자배열;

function 숫자뽑기(){
    숫자후보 = [1,2,3,4,5,6,7,8,9];
    숫자배열 = [];

    for ( var i = 0; i < 3; i += 1) {
        var 뽑은것 = 숫자후보.splice(Math.floor(Math.random()*(9-i)), 1)[0];
        숫자배열.push(뽑은것);
    }
}

숫자뽑기();
console.log(숫자배열);

baseInput.type = 'text';
baseInput.maxLength = 3;

var count = 0;
var 스트라이크 = 0;
var 볼 = 0;

function 비교(답){
  var inputArray = 답.split('');
  console.log(inputArray);
  스트라이크 = 0;
  볼 = 0;
  count += 1;
    for (var i = 0; i <= 2; i += 1) {
      if (Number(inputArray[i]) === 숫자배열[i]) { 
        스트라이크 += 1;
      } else if (숫자배열.indexOf(Number(inputArray[i])) > -1) { 
        볼 += 1;
      }
      }

    if (스트라이크 === 3) {
    console.log('홈런!!! ' + (count) + '번 만에 맞추셨습니다');
    bresult.textContent = '홈런!!! ' + (count) + '번 만에 맞추셨습니다';
    baseInput.value = '';
    baseInput.focus();
    } else if (count >= 10) {
    console.error('시도 횟수를 초과하셨습니다.');
    bresult.textContent = '시도 횟수를 초과하셨습니다.';
    baseInput.value = '';
    baseInput.focus();
    } else {
    console.info(inputArray.join('') + ': ' + 스트라이크 + '스트라이크 ' + 볼 + '볼');
    bresult.textContent = 스트라이크 + '스트라이크 ' + 볼 + '볼입니다.';
    baseInput.value = '';
    baseInput.focus();
  }

}

function 비동기(event){
    event.preventDefault();
    var 답 = baseInput.value;
    비교(답);
}




function init(){
    baseballForm.addEventListener("submit", 비동기)
    }
init();