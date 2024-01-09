const moreEvent = () => {
    const $moreList = get('.event-main .more-list-box .more-list');
    const $moreBtnNext = get('.event-main .more-btn .next');
    const $moreBtnPrev = get('.event-main .more-btn .prev');
    let imgurl = '',
        current = 0,
        totalImage = 29,
        cnt = 0,
        perPage = 12;

    const showImg = () => {
        if (cnt > totalImage - 1) return;

        for (let i = 0; i < totalImage; i++) {
            const li = document.createElement('li');
            const img = document.createElement('img');
            imgurl = `images/event/event${cnt}.png`;
            img.setAttribute('src', imgurl);
            img.setAttribute('data-id', cnt);
            li.append(img);
            $moreList.append(li);
            cnt++;
        }
    };
    showImg();
    const $ePage = get('.event-main .paging');
    const $moreListLi = getAll('.event-main .more-list-box .more-list li');
    let liLen = $moreListLi.length;
    let pageCount = Math.ceil(liLen / perPage);
    let output = '';

    $moreListLi.forEach((item) => {
        item.addEventListener('click', (e) => {
            location.href = 'tour_ticket_detail.html';
        });
    });
    //페이지네이션 생성
    for (let i = 1; i <= pageCount; i++) {
        output += `<li><a href="">${i}</a></li>`;
        $ePage.innerHTML = output;
    }
    const $ePageBtn = getAll('.event-main .paging li a');

    $ePageBtn.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            $ePageBtn.forEach((aItem) => {
                aItem.classList.remove('active');
            });
            $ePageBtn[idx].classList.add('active');
            // 테이블 출력
            displayOn(idx);
        });
    });
    $moreBtnNext.addEventListener('click', (e) => {
        current++;
        if (current > pageCount - 1) {
            return;
        }
        idx = current;
        paging();
    });
    $moreBtnPrev.addEventListener('click', (e) => {
        current--;
        if (current < 0) {
            return;
        }
        idx = current;
        paging();
    });
    function paging() {
        $ePageBtn.forEach((aItem) => {
            aItem.classList.remove('active');
        });
        $ePageBtn[idx].classList.add('active');
        // 페이지(li 12개씩) 출력
        displayOn(idx);
    }
    function displayOn(idx) {
        let start = idx * perPage;
        let end = start + perPage;
        let liArray = Array.from($moreListLi);
        liArray.forEach((item) => {
            item.style.display = 'none';
        });
        let newLiArr = liArray.slice(start, end);
        newLiArr.forEach((item) => {
            item.style.display = '';
        });
    }
    displayOn(0);
    $ePageBtn[0].classList.add('active');
    
    //tab-button
    const $moreTab = get('.event-main .more-tab-box .more-tab');
    const $moreTabLi = getAll('.event-main .more-tab-box .more-tab li');
    const $eventBtn = get('.event-main .more-btn');
    let tabLen = $moreTabLi.length;
    $moreTabLi.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            if (idx === 0) {
                displayOn(idx);
                $ePage.style.display = 'flex'
                $eventBtn.style.display = 'block'
            } else if (idx !== 0) {
                tabContent(idx);
                // $ePageBtn.style.display = 'none' - 이부분 에러 생김 체크해보세요
                $eventBtn.style.display = 'none';
                $ePage.style.display = 'none';
            } else {
                return;
            }
            $moreTabLi.forEach((tab) => {
                tab.classList.remove('on');
            });
            $moreTabLi[idx].classList.add('on');
        });
    });
    function tabContent(x) {
        let s = x * tabLen;
        let e = s + tabLen;
        let tabArray = Array.from($moreListLi);
        tabArray.forEach((item) => {
            item.style.display = 'none';
        });
        let newTabArr = tabArray.slice(s, e);
        newTabArr.forEach((item) => {
            item.style.display = '';
        });
    }
}; //end moreEvent

const subInit = () => {
    moreEvent();
};

(() => {
    window.addEventListener('load', (e) => {
        subInit();
    });
})();
