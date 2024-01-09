const subTourVisual = () => {}; //end subTourVisual

const subTourDetail = () => {
    const $tourMinus = get('.tour_detail_sub4 .detail-wrap .select .s1 .minus');
    const $tourPlus = get('.tour_detail_sub4 .detail-wrap .select .s1 .plus');
    const $tourCount = get('.tour_detail_sub4 .detail-wrap .select .s1 .counting .text');
    const $tourMinus2 = get('.tour_detail_sub4 .detail-wrap .select .s2 .minus');
    const $tourPlus2 = get('.tour_detail_sub4 .detail-wrap .select .s2 .plus');
    const $tourCount2 = get('.tour_detail_sub4 .detail-wrap .select .s2 .counting .text');
    const $tourSelBox = get('.tour_detail_sub4 .detail-wrap .select')
    const $tourMoreBtn = get('.tour_detail_sub4 .detail-wrap .detail-more button');
    const $tourHide = get('.tour_detail_sub4 .detail-wrap .detail-img');
    const $tourHideImg = getAll('.tour_detail_sub4 .detail-wrap .detail-img img');
    const $tourGrid = get('.tour_detail_sub4 .detail-wrap .detail-img .gradient');
    const $tourTextMore = get('.tour_detail_sub4 .detail-wrap .introduction .btn-more button');
    const $tourAddInfo = get('.tour_detail_sub4 .detail-wrap .introduction .add-info');
    const $tourFolding = get('.tour_detail_sub4 .detail-wrap .introduction .add-info .folding');
    let infoprice1 = getAll('.select .sel .money')
    let s1cnt = 0, s2cnt = 0;
    console.log(infoprice1)
    $tourMinus.addEventListener('click', (e) => {
        s1cnt--;
        if(s1cnt<0){
            s1cnt=0
        }
        $tourCount.textContent = `${s1cnt}`
        let div = document.createElement('div')
        let txt = document.createElement('p')
        let price1 = 23000*s1cnt

        console.log('price1')
        txt.textContent = `자유이용권 대인 : 23,800원 * ${s1cnt} = ${23800*s1cnt}원`
        div.append(txt)
        $tourSelBox.append(div)
    });
    $tourPlus.addEventListener('click', (e) => {
        s1cnt++;
        if(s1cnt>9){
            s1cnt = 9;
        }
        $tourCount.textContent = `${s1cnt}`
        let div = document.createElement('div')
        let txt = document.createElement('p')
        txt.textContent = `자유이용권 대인 : 23,800원 * ${s1cnt} = ${23800*s1cnt}원`
        div.append(txt)
        $tourSelBox.append(div)
    });
    $tourMinus2.addEventListener('click', (e) => {
        s2cnt--;
        if(s2cnt<0){
            s2cnt=0
        }
        $tourCount2.textContent = `${s2cnt}`
    });
    $tourPlus2.addEventListener('click', (e) => {
        s2cnt++;
        if(s2cnt>9){
            s2cnt = 9;
        }
        $tourCount2.textContent = `${s2cnt}`
    });

    //상세정보 더보기
    $tourMoreBtn.addEventListener('click', (e) => {
        moreBtn();
    });
    //이용안내 더보기
    $tourTextMore.addEventListener('click', (e) => {
        moreText();
    });
    $tourFolding.addEventListener('click', (e) => {
        fold();
    });
    function moreBtn() {
        $tourHide.classList.add('show');
        $tourHide.style.height = `${1453 * 8.6}px`;
        $tourGrid.style.display = 'none';
        $tourMoreBtn.style.display = 'none';
    }
    function moreText() {
        $tourAddInfo.classList.add('on');
        $tourTextMore.style.display = 'none';
    }
    function fold() {
        $tourAddInfo.classList.remove('on');
        $tourTextMore.style.display = 'block';
    }
}; //end subTourDetail

const eventBanner = () => {}; //end eventBanner

const tourSubDetailInit = () => {
    subTourVisual();
    subTourDetail();
    eventBanner();
};

(() => {
    window.addEventListener('load', (e) => {
        tourSubDetailInit();
    });
})();
