let arrBanner = [
    { id: 1, bannerImg: 'acc-images/banner1.jpg' },
    { id: 2, bannerImg: 'acc-images/banner2.jpeg' },
    { id: 3, bannerImg: 'acc-images/banner3.jpg' },
    { id: 4, bannerImg: 'acc-images/banner4.jpg' },
    { id: 5, bannerImg: 'acc-images/banner5.jpg' },
];
let data = [
    { id: 1, liImg: 'aimages/Sleep Steps Away From Dotonbori at The Lively Hotel in Osaka.jpeg', name: '힐튼 하와이안 빌리지 와이키키 비치 리조트', price: '478,808' },
    { id: 1, liImg: 'acc-images/Sleep Steps Away From Dotonbori at The Lively Hotel in Osaka.jpeg', name: '힐튼 하와이안 빌리지 와이키키 비치 리조트', price: '478,808' },
    { id: 1, liImg: 'acc-images/Sleep Steps Away From Dotonbori at The Lively Hotel in Osaka.jpeg', name: '힐튼 하와이안 빌리지 와이키키 비치 리조트', price: '478,808' },
    { id: 1, liImg: 'acc-images/Sleep Steps Away From Dotonbori at The Lively Hotel in Osaka.jpeg', name: '힐튼 하와이안 빌리지 와이키키 비치 리조트', price: '478,808' },
];
let midData = [
    { id: 1, liImg: 'acc-images/mid-banner/bnr_1.jpg', name: '힐튼 하와이안 빌리지 와이키키 비치 리조트', price: '478,808' },
    { id: 1, liImg: 'acc-images/mid-banner/bnr_2.jpg', name: '힐튼 하와이안 빌리지 와이키키 비치 리조트', price: '478,808' },
    { id: 1, liImg: 'acc-images/mid-banner/bnr_3.jpg', name: '힐튼 하와이안 빌리지 와이키키 비치 리조트', price: '478,808' },
    { id: 1, liImg: 'acc-images/mid-banner/bnr_4.jpg', name: '힐튼 하와이안 빌리지 와이키키 비치 리조트', price: '478,808' },
    { id: 1, liImg: 'acc-images/mid-banner/bnr_5.jpg', name: '힐튼 하와이안 빌리지 와이키키 비치 리조트', price: '478,808' },
    { id: 1, liImg: 'acc-images/mid-banner/bnr_6.jpg', name: '힐튼 하와이안 빌리지 와이키키 비치 리조트', price: '478,808' },
    { id: 1, liImg: 'acc-images/mid-banner/bnr_7.jpg', name: '힐튼 하와이안 빌리지 와이키키 비치 리조트', price: '478,808' },
];

let $bannerli = get('.acc-banner .visual .image img');
let $prev = get('.acc-banner .acc-btn .prev  ');
let $next = get('.acc-banner .acc-btn .next  ');
let $tabLi = getAll('.acc-con3 .acc-tabHeader ul li');
let $tabBtn = getAll('.acc-con3 .acc-tabHeader ul li button');
let $tabli = getAll('.acc-con3 .acc-tabBody');
let $tabMore = get('.acc-con3 .acc-tabBody .more');
let $tabMore1 = get('.acc-con3 .acc-tabBody .more2');
let $tabMore2 = get('.acc-con3 .acc-tabBody .more3');
let $tabMore3 = get('.acc-con3 .acc-tabBody .more4');
let $tabMore4 = get('.acc-con3 .acc-tabBody .more5');
let $popularity = getAll('.acc-con1 ul li .acc-coverImg');
let imgurl = '',
    curr = 0,
    bimg = '',
    totalImg = arrBanner.length,
    cnt = 0,
    totalLi = data.length,
    timer = null,
    interval = 4000;
timer = setInterval(make, interval);
function make() {
    cnt++;
    if (cnt > totalImg - 1) cnt = 0;
    banner();
}
function time() {
    clearInterval(timer);
    timer = setInterval(make, interval);
}
const banner = () => {
    imgurl = arrBanner[cnt].bannerImg;
    $bannerli.setAttribute('src', imgurl);
    console.log(imgurl);
};
$next.addEventListener('click', (e) => {
    cnt++;
    if (cnt > totalImg) {
        cnt = 0;
    }
    banner();
    time();
});
$prev.addEventListener('click', (e) => {
    cnt--;
    if (cnt < 0) {
        cnt = totalImg - 1;
    }
    banner();
    time();
});
banner();
const accPersonInput = () => {
    const $accMainPersonPopup = get('.acc-vis .person-popup');
    const $accMainPersonInput = get('.acc-vis .acc-input ul li:nth-child(3)');
    const $accMainPersonText = get('.acc-vis .acc-input ul li:nth-child(3) p');
    const $accMainPersonMinus = get('.acc-vis .person-popup .person-counting .counting .minus');
    const $accMainPersonPlus = get('.acc-vis .person-popup .person-counting .counting .plus');
    const $accMainPersonCount = get('.acc-vis .person-popup .person-counting .counting p');
    const $accMainPersonEnter = get('.acc-vis .person-popup .enter button');
    const $accMainBg2 = get('.acc-vis .bg2')
    let cnt = 2;

    $accMainPersonInput.addEventListener('click', (e) => {
        $accMainPersonPopup.classList.add('show');
        $accMainBg2.classList.add('on');
    });
    $accMainPersonEnter.addEventListener('click', (e) => {
        $accMainPersonPopup.classList.remove('show');
        $accMainBg2.classList.remove('on')
        $accMainPersonText.textContent = `성인 ${cnt}명`;
        $accMainPersonText.style.color = '#191919';
    });
    $accMainBg2.addEventListener('click', (e) => {
        $accMainBg2.classList.remove('on');
        $accMainPersonPopup.classList.remove('show')
    });
    $accMainPersonPlus.addEventListener('click', (e) => {
        cnt++;
        if (cnt > 9) cnt = 9;
        $accMainPersonCount.textContent = cnt;
    });
    $accMainPersonMinus.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) cnt = 0;
        $accMainPersonCount.textContent = cnt;
    });
    //end accMainPersonInput
};
accPersonInput()


function openTab(evt, idName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('acc-hideTab');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('acc-tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(idName).style.display = 'block';
    evt.currentTarget.className += ' active';
    //나에게 딱 맞는 숙소 찾기 - 탭메뉴(스타일 변경)
    $tabBtn.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            $tabBtn.forEach((bItem, bIdx) => {
                bItem.classList.remove('on');
                $tabLi[bIdx].classList.remove('on');
            });
            e.currentTarget.classList.add('on');
            $tabLi[idx].classList.add('on');
        });
    });
    //나에게 딱 맞는 숙소 찾기 - 더보기 버튼
    $tabMore.addEventListener('click', (e) => {
        let tabli = document.getElementsByClassName('acc-hideLi');
        for (i = 0; i < tabli.length; i++) {
            tabli[i].style.display = 'flex';
        }
        $tabMore.style.display = 'none';
    });
    $tabMore1.addEventListener('click', (e) => {
        let tabli = document.getElementsByClassName('acc-hideLi2');
        for (i = 0; i < tabli.length; i++) {
            tabli[i].style.display = 'flex';
        }
        $tabMore1.style.display = 'none';
    });
    $tabMore2.addEventListener('click', (e) => {
        let tabli = document.getElementsByClassName('acc-hideLi3');
        for (i = 0; i < tabli.length; i++) {
            tabli[i].style.display = 'flex';
        }
        $tabMore2.style.display = 'none';
    });
    $tabMore3.addEventListener('click', (e) => {
        let tabli = document.getElementsByClassName('acc-hideLi4');
        for (i = 0; i < tabli.length; i++) {
            tabli[i].style.display = 'flex';
        }
        $tabMore3.style.display = 'none';
    });
    $tabMore4.addEventListener('click', (e) => {
        let tabli = document.getElementsByClassName('acc-hideLi5');
        for (i = 0; i < tabli.length; i++) {
            tabli[i].style.display = 'flex';
        }
        $tabMore4.style.display = 'none';
    });
    const $accLink5 = getAll('.acc-con3 .acc-tabBody ul li');
    $accLink5.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'accDetail.html';
        });
    });
}
const accContent1 = () => {
    $popularity.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'accSearch.html';
        });
    });
};
accContent1();

const accContent2 = () => {
    const $repHotel = getAll('.acc-con2 > ul li');
    $repHotel.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'accDetail.html';
        });
    });
};
accContent2();

const accTimeList = () => {
    const $smallImgLi = getAll('.con4 .acc-small-list li');
    const $smallStrong = getAll('.con4 .acc-small-list li .list-box strong');
    const $smallP = getAll(' .con4 .acc-small-list li .list-box p');
    const $bigImg = get(' .con4 .acc-big-img img');
    const $bigImgStrong = get('.con4 .acc-big-img strong');
    const $bigImgText = get('.con4 .acc-big-img p');

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
            location.href = 'accDetail.html';
        });
    });
    function listMoving() {
        imgurl = `acc-images/IMG_${cnt}.jpeg`;
        $bigImg.setAttribute('src', imgurl);
        $bigImgStrong.textContent = $smallStrong[cnt].textContent;
        $bigImgText.textContent = $smallP[cnt].textContent;
        $smallImgLi.forEach((liItem) => {
            liItem.classList.remove('on');
        });
        $smallImgLi[cnt].classList.add('on');
    }
};
accTimeList();

const accBanner = () => {
    const $mainBannerLi = getAll(' .con5 .main-banner-list li');
    const $mainBannerPaging = getAll('.con5 .paging li');
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
accBanner();
