const subTourVisual = () => {
    const $destination = get('.tour-vis .tour-vis-input ul .destination');
    const $tourPopup = get('#tour-subVisual .tour-inp-popup');
    const $esc = get('#tour-subVisual .tour-inp-popup .esc button');
    const $destSelect = get('.tour-vis .tour-vis-input ul .destination p');
    const $tourBg = get('#tour-subVisual .bg');
    $destination.addEventListener('click', (e) => {
        $tourPopup.style.display = 'block';
        $tourBg.classList.add('on');
    });
    $esc.addEventListener('click', (e) => {
        $tourPopup.style.display = 'none';
        $tourBg.classList.remove('on');
    });
    $tourBg.addEventListener('click', (e) => {
        $tourPopup.style.display = 'none';
        $tourBg.classList.remove('on');
    });

    const nationList = document.querySelectorAll('.tour-inp-popup .nation .nation-list li');
    const captions = document.querySelectorAll('.tour-inp-popup .nation .nation-list li div p');
    const nation = document.querySelector('.nation');
    const inpBody = document.querySelector('.tour-inp-popup .inp-body');
    const close = document.querySelector('.close');
    const myArray = [];
    let counter = 1;

    for (let caption of captions) {
        myArray.push({
            id: counter++,
            text: caption.textContent,
        });
    }

    const searchInput = document.querySelector('input[type=text]');
    searchInput.addEventListener('keyup', (e) => {
        keyupHandler();
    });

    function keyupHandler() {
        nation.classList.add('d-block');
        for (const item of nationList) {
            item.classList.add('dnone');
        }
        const keywords = searchInput.value;
        if (keywords.trim().length === 0 || !keywords) return;

        const filteredArray = myArray.filter((el) => el.text.includes(keywords));
        console.log(filteredArray);
        if (filteredArray.length > 0) {
            for (const el of filteredArray) {
                document.querySelector(`.tour-inp-popup .nation .nation-list li:nth-child(${el.id})`).classList.remove('dnone');
            }
            inpBody.classList.remove('block');
        } else if (filteredArray.length === 0 && keywords.trim().length === 0) {
            inpBody.classList.add('block');
            nation.classList.remove('d-block');
        } else {
            return;
        }
        close.addEventListener('click', (e) => {
            nation.classList.remove('d-block');
            inpBody.classList.remove('block');
        });
        console.log(filteredArray);
    } //end searchInput
    const $tourPersonPopup = get('#tour-subVisual .person-popup');
    const $tourPersonInput = get('#tour-subVisual .tour-vis-input ul li:nth-child(3)');
    const $tourPersonText = get('#tour-subVisual .tour-vis-input ul li:nth-child(3) p');
    const $tourPersonMinus = get('#tour-subVisual .person-popup .person-counting .counting .minus');
    const $tourPersonPlus = get('#tour-subVisual .person-popup .person-counting .counting .plus');
    const $tourPersonCount = get('#tour-subVisual .person-popup .person-counting .counting p');
    const $tourPersonEnter = get('#tour-subVisual .person-popup .enter button');
    const $tourBg2 = get('#tour-subVisual .bg2')
    let cnt = 2;

    $tourPersonInput.addEventListener('click', (e) => {
        $tourPersonPopup.classList.add('show');
        $tourBg2.classList.add('on');
    });
    $tourPersonEnter.addEventListener('click', (e) => {
        $tourPersonPopup.classList.remove('show');
        $tourBg2.classList.remove('on')
        $tourPersonText.textContent = `성인 ${cnt}명`;
        $tourPersonText.style.color = '#191919';
    });
    $tourBg2.addEventListener('click', (e) => {
        $tourBg2.classList.remove('on');
        $tourPersonPopup.classList.remove('show')
    });
    $tourPersonPlus.addEventListener('click', (e) => {
        cnt++;
        if (cnt > 9) cnt = 9;
        $tourPersonCount.textContent = cnt;
        console.log(cnt);
    });
    $tourPersonMinus.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) cnt = 0;
        $tourPersonCount.textContent = cnt;
    });
    //end tourPersonInput
}; //end subTourVisual

const eventBanner = () => {}; //end eventBanner
const tourContent1 = () => {
    const $tourListbox1 = getAll('.tour-sub4 .con1 .tour-list .slider-list');
    const $tourNextBtn1 = get('.tour-sub4 .con1 .tour-list-btn .next');
    const $tourPrevBtn1 = get('.tour-sub4 .con1 .tour-list-btn .prev');
    let cnt = 0,
        old = 0,
        len = $tourListbox1.length;

    $tourNextBtn1.addEventListener('click', (e) => {
        cnt++;
        if (cnt > len - 1) {
            cnt = 0;
        }
        moveLeft();
        $tourPrevBtn1.classList.add('on');
    });
    $tourPrevBtn1.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) {
            cnt = len - 1;
        }
        moveLeft();
        $tourPrevBtn1.classList.add('on');
    });

    function moveLeft() {
        $tourListbox1[old].style.left = '-110%';
        $tourListbox1[old].style.zIndex = '1';
        $tourListbox1[cnt].style.left = '0px';
        $tourListbox1[cnt].style.zIndex = '10';
        lastMoveLeft(old);
        old = cnt;
    }
    function lastMoveLeft(x) {
        setTimeout(() => {
            $tourListbox1[x].style.left = '100%';
        }, 400);
    }
    const $tourLink1 = getAll('.tour-sub4 .con1 .tour-list .slider-list li');
    $tourLink1.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'tour_ticket_detail.html';
        });
    });
};
const tourContent2 = () => {
    const $tourListbox2 = getAll('.tour-sub4 .con2 .tour-list .slider-list');
    const $tourNextBtn2 = get('.tour-sub4 .con2 .tour-list-btn .next');
    const $tourPrevBtn2 = get('.tour-sub4 .con2 .tour-list-btn .prev');
    let cnt = 0,
        old = 0,
        len = $tourListbox2.length;

    $tourNextBtn2.addEventListener('click', (e) => {
        cnt++;
        if (cnt > len - 1) {
            cnt = 0;
        }
        moveLeft();
        $tourPrevBtn2.classList.add('on');
    });
    $tourPrevBtn2.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) {
            cnt = len - 1;
        }
        moveLeft();
        $tourPrevBtn2.classList.add('on');
    });

    function moveLeft() {
        $tourListbox2[old].style.left = '-110%';
        $tourListbox2[old].style.zIndex = '1';
        $tourListbox2[cnt].style.left = '0px';
        $tourListbox2[cnt].style.zIndex = '10';
        lastMoveLeft(old);
        old = cnt;
    }
    function lastMoveLeft(x) {
        setTimeout(() => {
            $tourListbox2[x].style.left = '100%';
        }, 400);
    }
    const $tourLink2 = getAll('.tour-sub4 .con2 .tour-list .slider-list li');
    $tourLink2.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'tour_ticket_detail.html';
        });
    });
};
const tourContent3 = () => {
    const $tourListbox3 = getAll('.tour-sub4 .con3 .tour-list .slider-list');
    const $tourNextBtn3 = get('.tour-sub4 .con3 .tour-list-btn .next');
    const $tourPrevBtn3 = get('.tour-sub4 .con3 .tour-list-btn .prev');
    let cnt = 0,
        old = 0,
        len = $tourListbox3.length;

    $tourNextBtn3.addEventListener('click', (e) => {
        cnt++;
        if (cnt > len - 1) {
            cnt = 0;
        }
        moveLeft();
        $tourPrevBtn3.classList.add('on');
    });
    $tourPrevBtn3.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) {
            cnt = len - 1;
        }
        moveLeft();
        $tourPrevBtn3.classList.add('on');
    });

    function moveLeft() {
        $tourListbox3[old].style.left = '-110%';
        $tourListbox3[old].style.zIndex = '1';
        $tourListbox3[cnt].style.left = '0px';
        $tourListbox3[cnt].style.zIndex = '10';
        lastMoveLeft(old);
        old = cnt;
    }
    function lastMoveLeft(x) {
        setTimeout(() => {
            $tourListbox3[x].style.left = '100%';
        }, 400);
    }
    const $tourLink3 = getAll('.tour-sub4 .con3 .tour-list .slider-list li');
    $tourLink3.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'tour_ticket_detail.html';
        });
    });
};
const tourContent4 = () => {
    const $tourListbox4 = getAll('.tour-sub4 .con4 .tour-list .slider-list');
    const $tourNextBtn4 = get('.tour-sub4 .con4 .tour-list-btn .next');
    const $tourPrevBtn4 = get('.tour-sub4 .con4 .tour-list-btn .prev');
    let cnt = 0,
        old = 0,
        len = $tourListbox4.length;

    $tourNextBtn4.addEventListener('click', (e) => {
        cnt++;
        if (cnt > len - 1) {
            cnt = 0;
        }
        moveLeft();
        $tourPrevBtn4.classList.add('on');
    });
    $tourPrevBtn4.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) {
            cnt = len - 1;
        }
        moveLeft();
        $tourPrevBt4.classList.add('on');
    });

    function moveLeft() {
        $tourListbox4[old].style.left = '-110%';
        $tourListbox4[old].style.zIndex = '1';
        $tourListbox4[cnt].style.left = '0px';
        $tourListbox4[cnt].style.zIndex = '10';
        lastMoveLeft(old);
        old = cnt;
    }
    function lastMoveLeft(x) {
        setTimeout(() => {
            $tourListbox4[x].style.left = '100%';
        }, 400);
    }
    const $tourLink4 = getAll('.tour-sub4 .con4 .tour-list .slider-list li');
    $tourLink4.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'tour_ticket_detail.html';
        });
    });
};
const tourContent5 = () => {
    const $tourListbox5 = getAll('.tour-sub4 .con5 .tour-list .slider-list');
    const $tourNextBtn5 = get('.tour-sub4 .con5 .tour-list-btn .next');
    const $tourPrevBtn5 = get('.tour-sub4 .con5 .tour-list-btn .prev');
    let cnt = 0,
        old = 0,
        len = $tourListbox5.length;

    $tourNextBtn5.addEventListener('click', (e) => {
        cnt++;
        if (cnt > len - 1) {
            cnt = 0;
        }
        moveLeft();
        $tourPrevBtn5.classList.add('on');
    });
    $tourPrevBtn5.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) {
            cnt = len - 1;
        }
        moveLeft();
        $tourPrevBtn5.classList.add('on');
    });

    function moveLeft() {
        $tourListbox5[old].style.left = '-110%';
        $tourListbox5[old].style.zIndex = '1';
        $tourListbox5[cnt].style.left = '0px';
        $tourListbox5[cnt].style.zIndex = '10';
        lastMoveLeft(old);
        old = cnt;
    }
    function lastMoveLeft(x) {
        setTimeout(() => {
            $tourListbox5[x].style.left = '100%';
        }, 400);
    }
    const $tourLink5 = getAll('.tour-sub4 .con5 .tour-list .slider-list li');
    $tourLink5.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'tour_ticket_detail.html';
        });
    });
};
const tourContent6 = () => {
    const $tourListbox6 = getAll('.tour-sub4 .con6 .tour-list .slider-list');
    const $tourNextBtn6 = get('.tour-sub4 .con6 .tour-list-btn .next');
    const $tourPrevBtn6 = get('.tour-sub4 .con6 .tour-list-btn .prev');
    let cnt = 0,
        old = 0,
        len = $tourListbox6.length;

    $tourNextBtn6.addEventListener('click', (e) => {
        cnt++;
        if (cnt > len - 1) {
            cnt = 0;
        }
        moveLeft();
        $tourPrevBtn6.classList.add('on');
    });
    $tourPrevBtn6.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) {
            cnt = len - 1;
        }
        moveLeft();
        $tourPrevBtn6.classList.add('on');
    });

    function moveLeft() {
        $tourListbox6[old].style.left = '-110%';
        $tourListbox6[old].style.zIndex = '1';
        $tourListbox6[cnt].style.left = '0px';
        $tourListbox6[cnt].style.zIndex = '10';
        lastMoveLeft(old);
        old = cnt;
    }
    function lastMoveLeft(x) {
        setTimeout(() => {
            $tourListbox6[x].style.left = '100%';
        }, 400);
    }
    const $tourLink6 = getAll('.tour-sub4 .con6 .tour-list .slider-list li');
    $tourLink6.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'tour_ticket_detail.html';
        });
    });
};
const tourSubInit = () => {
    subTourVisual();
    eventBanner();
    tourContent1();
    tourContent2();
    tourContent3();
    tourContent4();
    tourContent5();
    tourContent6();
};

(() => {
    window.addEventListener('load', (e) => {
        tourSubInit();
    });
})();
