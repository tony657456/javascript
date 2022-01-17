### CSS

```css
position: relative  상대위치 지정 방식

position: absolute  절대위치 지정 방식 relative 방식이랑 부모 자식형태로 많이 사용한다

overflow: hidden 은 안에 박스가 밖의 박스보다 더 길 때 튀어나오지 못하도록 설정해주는 함수

z-index를 이용하면 여러 박스들이 겹쳐 있을 때 누가 제일 위에 오는지를 설정할 수 있다.

text-indent를 이용하면 내어쓰기, 들여쓰기를 할 수 있다.

float: block의 형태가 아니라 inline으로 사용할 수 있게 해주는 속성

margin: 0 auto 이런식으로 잡으면 마진을 다 평등하게 부여하는 것
```

<br/>
###JavaScript

```javascript
// clearInterval은 setInterval 함수를 초기화하는데 사용된다.
 $(".img_box").mouseover(function(){
                clearInterval(setIntervalId);
            });

            $(".img_box").mouseout(function(){
                timer();
            });


           function timer(){
                setIntervalId = setInterval(function(){
                    var n = current + 1;
                    if(n==3){
                        n=0;
                    }
                    movie(n);
                }, 3000)
            }
});
```

```javascript
// 자주 사용되는 add, remove ㅆ는 방식
for (var i = 0; i < navLi.length; i++) {
  navLi[i].addEventListener("click", function (e) {
    e.preventDefault();
    n = e.currentTarget.index; // 현재 클릭한 대상의 인덱스

    for (var j = 0; j < navLi.length; j++) {
      if (j == n) {
        navLi[i].classList.add("on");
        infoArray[i].classList.remove("active");
      } else {
        navLi[i].classList.add("on");
        infoArray[i].classList.remove("active");
      }
    }
  });
}
```
