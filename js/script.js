$(function () {

    //반응형 메뉴
    let menuBtn = document.querySelector('.menu_btn');
    let mobileNav = document.querySelector('.mobile_nav');

    menuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    //헤더 상단 고정
    let header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        /* alert(); */

        let scrolllBar = window.scrollY;
        if (scrolllBar > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        };
    });//scroll

    //그래픽디자인 스와이퍼
    const swiper = new Swiper('.mySwiper', {
        loop: true,                        
        slidesPerView: "auto",
        centeredSlides : true,
        spaceBetween: 10,               //added
        autoplay: {                         
            delay: 2000,  
        },                   
        pagination: {                       
            el: '.swiper-pagination',
        },
        breakpoints: {
            640: {
                slidesPerView: "auto",
              spaceBetween: 20,
            },
            768: {
                slidesPerView: "auto",
              spaceBetween: 20,
            },
            1024: {
                slidesPerView: "auto",
              spaceBetween: 25,
            },
          }
    });

    //fancy box

    //thank you
    const $text = document.querySelector(".typing .text");

    // 글자 모음
    const letters = [
        "Thank You for Watching!",
    ];

    // 글자 입력 속도
    const speed = 100;
    let i = 0;

    // 타이핑 효과
    const typing = async () => {
        const letter = letters[i].split("");

        while (letter.length) {
            await wait(speed);
            $text.innerHTML += letter.shift();
        }

        // 잠시 대기
        await wait(800);

        // 지우는 효과
        remove();
    }
    // 글자 지우는 효과
    const remove = async () => {
        const letter = letters[i].split("");

        while (letter.length) {
            await wait(speed);

            letter.pop();
            $text.innerHTML = letter.join("");
        }

        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        i = !letters[i + 1] ? 0 : i + 1;
        typing();
    }
    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
    }

    // 초기 실행
    setTimeout(typing, 1500);
});



