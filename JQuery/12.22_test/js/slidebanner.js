$(function(){

    var current = 0;

    $("#btns > li").click(function(){
        var i = $(this).index();
        // console.log(i);

        move(i); // 해당되는 버튼의 번호를 매개변수로 보냄
    });


    // 자동 실행
    // setInterval(실행문, 시간)
    timer(); // 함수 호출
    function timer() {
        setInterval(function(){
        var n = current + 1;
        if(n == 4) {
            n = 0;
        }
        move(n);
        }, 3000);
        
    }






// 애니메이션 함수
function move(n){
    if(current == n) return;

    var currentEl = $("#view ul li").eq(current);
    var nextEl = $("#view ul li").eq(n);

    currentEl.css({left:"0%"}).animate({left:"-100%"});
    nextEl.css({left:"100%"}).animate({left:"0%"});

    current = n;
}















});