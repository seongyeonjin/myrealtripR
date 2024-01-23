const mainVisual = () => {
    const visualColorData = ['#9BCDF8', '#A7D9FA', '#6098C7', '#07A1F6', '#629ADE', '#19AEE5'];
    const visualSubData = ['accommodation.html', 'tour_ticket_main.html', 'package.html'];
    const $topBanner = getAll('#my-real-visual .my-real-top-banner .top-banner li');
    const $topBannerPrev = get('#my-real-visual .my-real-top-banner .my-real-btn .prev');
    const $topBannerNext = get('#my-real-visual .my-real-top-banner .my-real-btn .next');
    const $topBannerPagingLi = getAll('#my-real-visual .my-real-top-banner .paging li');
    const $myRealVisual = get('#my-real-visual');
    let cnt = 0,
        old = 0,
        len = $topBanner.length,
        timer = null,
        interval = 4000;

    timer = setInterval(make, interval);
    function make() {
        cnt++;
        if (cnt > len - 1) cnt = 0;
        topBanner();
    }
    $topBannerPagingLi.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            cnt = idx;
            topBanner();
            time();
        });
    });
    $topBannerPrev.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) cnt = len - 1;
        topBanner();
        time();
    });
    $topBannerNext.addEventListener('click', (e) => {
        cnt++;
        if (cnt > len - 1) cnt = 0;
        topBanner();
        time();
    });
    function topBanner() {
        $topBanner[old].style.left = '-600px';
        $topBanner[old].style.zIndex = '1';
        $topBanner[cnt].style.left = '0px';
        $topBanner[cnt].style.zIndex = '10';

        $topBannerPagingLi[old].classList.remove('on');
        $topBannerPagingLi[cnt].classList.add('on');
        $myRealVisual.style.backgroundColor = visualColorData[cnt];

        lastBanner(old);
        old = cnt;
    }
    function lastBanner(x) {
        setTimeout(() => {
            $topBanner[x].style.left = '600px';
        }, 400);
    }
    function time() {
        clearInterval(timer);
        timer = setInterval(make, interval);
    } //end top-banner

    const $myRealTab = getAll('#my-real-visual .my-real-choose-box .my-real-tab p');
    const $myRealTabBtn = get('#my-real-visual .my-real-choose-box .my-real-choose ul li button');
    const $myRealTabBtnLink = get('#my-real-visual .my-real-choose-box .my-real-choose ul li button a');
    let tabLen = $myRealTab.length;
    $myRealTabBtnLink.setAttribute('href', `${visualSubData[cnt]}`);
    $myRealTab.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            $myRealTab.forEach((tabItem) => {
                tabItem.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
            $myRealTabBtn.addEventListener('click', (e) => {
                cnt = idx;
                $myRealTabBtnLink.setAttribute('href', `${visualSubData[cnt]}`);
            });
        });
    }); //end tab
}; //end mainVisual

const mainInpVisual = () => {
    const $mDestination = get('#my-real-visual .my-real-choose-box .my-real-choose ul .destination');
    const $mainPopup = get('#my-real-visual .my-real-inp-popup');
    const $mainEsc = get('#my-real-visual .my-real-inp-popup .esc button');
    const $mainBg = get('#my-real-visual .bg');
    $mDestination.addEventListener('click', (e) => {
        $mainPopup.style.display = 'block';
        $mainBg.classList.add('on');
    });
    $mainEsc.addEventListener('click', (e) => {
        $mainPopup.style.display = 'none';
        $mainBg.classList.remove('on');
    });
    $mainBg.addEventListener('click', (e) => {
        $mainPopup.style.display = 'none';
        $mainBg.classList.remove('on');
    });
    const nationList1 = document.querySelectorAll('#my-real-visual .my-real-inp-popup .nation .nation-list li');
    const captions1 = document.querySelectorAll('#my-real-visual .my-real-inp-popup .nation .nation-list li div p');
    const nation1 = document.querySelector('#my-real-visual .my-real-inp-popup .nation');
    const inpBody1 = document.querySelector('#my-real-visual .my-real-inp-popup .inp-body');
    const close1 = document.querySelector('#my-real-visual .my-real-inp-popup .inp-search .close');
    const myArray1 = [];
    let counter = 1;

    for (let caption of captions1) {
        myArray1.push({
            id: counter++,
            text: caption.textContent,
        });
    }

    const searchInput1 = document.querySelector('#my-real-visual .my-real-inp-popup input[type=text]');
    searchInput1.addEventListener('keyup', (e) => {
        keyupHandler1();
    });

    $mainBg.addEventListener('click', (e) => {
        nation1.classList.remove('d-block');
        inpBody1.classList.remove('block');
        e.currentTarget.classList.remove('');
    });
    function keyupHandler1() {
        nation1.classList.add('d-block');
        for (const item of nationList1) {
            item.classList.add('dnone');
        }
        const keywords1 = searchInput1.value;
        if (keywords1.trim().length === 0 || !keywords1) return;

        const filteredArray1 = myArray1.filter((el) => el.text.includes(keywords1));
        console.log(filteredArray1);
        if (filteredArray1.length > 0) {
            for (const el of filteredArray1) {
                document.querySelector(`.my-real-inp-popup .nation .nation-list li:nth-child(${el.id})`).classList.remove('dnone');
            }
            inpBody1.classList.remove('block');
        } else if (filteredArray1.length === 0) {
            inpBody1.classList.add('block');
            nation1.classList.remove('d-block');
        } else {
            return;
        }
        close1.addEventListener('click', (e) => {
            nation1.classList.remove('d-block');
            inpBody1.classList.remove('block');
        });
    } //end searchInput
    const $myRealPersonPopup = get('#my-real-visual .person-popup');
    const $myRealPersonInput = get('#my-real-visual .my-real-choose-box .my-real-choose ul li:nth-child(3)');
    const $myRealPersonText = get('#my-real-visual .my-real-choose-box .my-real-choose ul li:nth-child(3) p');
    const $myRealPersonMinus = get('#my-real-visual .person-popup .person-counting .counting .minus');
    const $myRealPersonPlus = get('#my-real-visual .person-popup .person-counting .counting .plus');
    const $myRealPersonCount = get('#my-real-visual .person-popup .person-counting .counting p');
    const $myRealPersonEnter = get('#my-real-visual .person-popup .enter button');
    const $myRealBg2 = get('#my-real-visual .bg2');
    let cnt = 2;

    $myRealPersonInput.addEventListener('click', (e) => {
        $myRealPersonPopup.classList.add('show');
        $myRealBg2.classList.add('on');
    });
    $myRealPersonEnter.addEventListener('click', (e) => {
        $myRealPersonPopup.classList.remove('show');
        $myRealPersonText.textContent = `성인 ${cnt}명`;
        $myRealPersonText.style.color = '#191919';
        $myRealBg2.classList.remove('on');
    });
    $myRealBg2.addEventListener('click', (e) => {
        $myRealBg2.classList.remove('on');
        $myRealPersonPopup.classList.remove('show');
    });
    $myRealPersonPlus.addEventListener('click', (e) => {
        cnt++;
        if (cnt > 9) cnt = 9;
        $myRealPersonCount.textContent = cnt;
        console.log(cnt);
    });
    $myRealPersonMinus.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) cnt = 0;
        $myRealPersonCount.textContent = cnt;
    });
    //end tourPersonInput
}; //end mainInpVisual

const myRealBanner = () => {
    const $mainBannerLi = getAll('.my-real-main .con2 .main-banner-list li');
    const $mainBannerPaging = getAll('.my-real-main .con2 .paging li');
    let imgurl = '',
        cnt = 0,
        old = 0,
        timer = null,
        interval = 4000,
        size = $mainBannerLi.length;

    timer = setInterval(make, interval);
    function make() {
        cnt++;
        if (cnt > size - 1) cnt = 0;
        mainBanner();
    }
    $mainBannerPaging.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            cnt = idx;
            mainBanner();
            clearInterval(timer);
            timer = setInterval(make, interval);
        });
    });

    function mainBanner() {
        $mainBannerLi[old].style.left = '-100%';
        $mainBannerLi[old].style.zIndex = '1';
        $mainBannerLi[cnt].style.left = '0px';
        $mainBannerLi[cnt].style.zIndex = '10';

        $mainBannerPaging[old].classList.remove('on');
        $mainBannerPaging[cnt].classList.add('on');

        lastMainBanner(old);
        old = cnt;
    }
    function lastMainBanner(x) {
        setTimeout(() => {
            $mainBannerLi[x].style.left = '100%';
        }, 400);
    }
}; //end myRealBanner
const mainTimeList = () => {
    const $smallImgLi = getAll('.my-real-main .con4 .my-real-small-list li');
    const $smallStrong = getAll('.my-real-main .con4 .my-real-small-list li .list-box strong');
    const $smallP = getAll('.my-real-main .con4 .my-real-small-list li .list-box p');
    const $bigImg = get('.my-real-main .con4 .my-real-big-img img');
    const $bigImgStrong = get('.my-real-main .con4 .my-real-big-img strong');
    const $bigImgText = get('.my-real-main .con4 .my-real-big-img p');

    let imgurl = '',
        cnt = 0,
        timer = null,
        interval = 4000,
        size = $smallImgLi.length;

    timer = setInterval(make4, interval);
    function make4() {
        cnt++;
        if (cnt > size - 1) cnt = 0;
        listMoving();
    }
    $smallImgLi.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            cnt = idx;
            listMoving();
            clearInterval(timer);
            timer = setInterval(make4, interval);
            location.href = 'accommodation.html';
        });
    });
    function listMoving() {
        imgurl = `images/mainpage/content4/skiling${cnt}.jpg`;
        $bigImg.setAttribute('src', imgurl);
        $bigImgStrong.textContent = $smallStrong[cnt].textContent;
        $bigImgText.textContent = $smallP[cnt].textContent;
        $smallImgLi.forEach((liItem) => {
            liItem.classList.remove('on');
        });
        $smallImgLi[cnt].classList.add('on');
    }
};

const mainContent1 = () => {
    const $mListbox1 = getAll('.my-real-main .con1 .my-real-list .slider-list');
    const $mListNext1 = get('.my-real-main .con1 .my-real-list-btn .next');
    const $mListPrev1 = get('.my-real-main .con1 .my-real-list-btn .prev');
    let cnt = 0,
        old = 0;

    $mListNext1.addEventListener('click', (e) => {
        cnt++;
        if (cnt > $mListbox1.length - 1) {
            cnt = 0;
        }
        moveLeft();
        $mListPrev1.classList.add('on');
    });
    $mListPrev1.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) {
            cnt = $mListbox1.length - 1;
        }
        moveLeft();
        $mListPrev1.classList.add('on');
    });

    function moveLeft() {
        $mListbox1[old].style.left = '-110%';
        $mListbox1[old].style.zIndex = '1';
        $mListbox1[cnt].style.left = '0px';
        $mListbox1[cnt].style.zIndex = '10';
        lastMoveLeft(old);
        old = cnt;
    }
    function lastMoveLeft(x) {
        setTimeout(() => {
            $mListbox1[x].style.left = '100%';
        }, 400);
    }
    const $mListLink1 = getAll('.my-real-main .con1 .my-real-list .slider-list li');
    $mListLink1.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'tour_ticket_detail.html';
        });
    });
};
const mainContent3 = () => {
    const $mListbox3 = getAll('.my-real-main .con3 .my-real-list .slider-list');
    const $mListNext3 = get('.my-real-main .con3 .my-real-list-btn .next');
    const $mListPrev3 = get('.my-real-main .con3 .my-real-list-btn .prev');
    let cnt = 0,
        old = 0;

    $mListNext3.addEventListener('click', (e) => {
        cnt++;
        if (cnt > $mListbox3.length - 1) {
            cnt = 0;
        }
        moveLeft();
    });
    $mListPrev3.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) {
            cnt = $mListbox3.length - 1;
        }
        moveLeft();
    });

    function moveLeft() {
        $mListbox3[old].style.left = '-110%';
        $mListbox3[old].style.zIndex = '1';
        $mListbox3[cnt].style.left = '0px';
        $mListbox3[cnt].style.zIndex = '10';
        lastMoveLeft(old);
        old = cnt;
    }
    function lastMoveLeft(x) {
        setTimeout(() => {
            $mListbox3[x].style.left = '100%';
        }, 400);
    }
    const $mListLink3 = getAll('.my-real-main .con3 .my-real-list .slider-list li');
    $mListLink3.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'tour_ticket_detail.html';
        });
    });
};
const mainContent5 = () => {
    const $mListbox5 = getAll('.my-real-main .con5 .my-real-list .slider-list');
    const $mListNext5 = get('.my-real-main .con5 .my-real-list-btn .next');
    const $mListPrev5 = get('.my-real-main .con5 .my-real-list-btn .prev');
    let cnt = 0,
        old = 0;

    $mListNext5.addEventListener('click', (e) => {
        cnt++;
        if (cnt > $mListbox5.length - 1) {
            cnt = 0;
        }
        moveLeft();
    });
    $mListPrev5.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) {
            cnt = $mListbox5.length - 1;
        }
        moveLeft();
    });

    function moveLeft() {
        $mListbox5[old].style.left = '-110%';
        $mListbox5[old].style.zIndex = '1';
        $mListbox5[cnt].style.left = '0px';
        $mListbox5[cnt].style.zIndex = '10';
        lastMoveLeft(old);
        old = cnt;
    }
    function lastMoveLeft(x) {
        setTimeout(() => {
            $mListbox5[x].style.left = '100%';
        }, 400);
    }
    const $mListLink5 = getAll('.my-real-main .con5 .my-real-list .slider-list li');
    $mListLink5.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'paybangkok.html';
        });
    });
};
const mainContent6 = () => {
    const $mListbox6 = getAll('.my-real-main .con6 .my-real-list .slider-list');
    const $mListNext6 = get('.my-real-main .con6 .my-real-list-btn .next');
    const $mListPrev6 = get('.my-real-main .con6 .my-real-list-btn .prev');
    let cnt = 0,
        old = 0;

    $mListNext6.addEventListener('click', (e) => {
        cnt++;
        if (cnt > $mListbox6.length - 1) {
            cnt = 0;
        }
        moveLeft();
    });
    $mListPrev6.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) {
            cnt = $mListbox6.length - 1;
        }
        moveLeft();
    });

    function moveLeft() {
        $mListbox6[old].style.left = '-110%';
        $mListbox6[old].style.zIndex = '1';
        $mListbox6[cnt].style.left = '0px';
        $mListbox6[cnt].style.zIndex = '10';
        lastMoveLeft(old);
        old = cnt;
    }
    function lastMoveLeft(x) {
        setTimeout(() => {
            $mListbox6[x].style.left = '100%';
        }, 400);
    }
    const $mListLink6 = getAll('.my-real-main .con6 .my-real-list .slider-list li');
    $mListLink6.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'accDetail.html';
        });
    });
};

const mainInit = () => {
    mainVisual();
    mainInpVisual();
    myRealBanner();
    mainTimeList();
    mainContent1();
    mainContent3();
    mainContent5();
    mainContent6();
};

(() => {
    mainInit();
})();
