const subaccVisual = () => {}; //end subaccVisual

const subaccDetail = () => {
    const $accMinus = get('.acc_detail_sub4 .detail-wrap .select .s1 .minus');
    const $accPlus = get('.acc_detail_sub4 .detail-wrap .select .s1 .plus');
    const $accCount = get('.acc_detail_sub4 .detail-wrap .select .s1 .counting .text');
    const $accSelBox = get('.acc_detail_sub4 .detail-wrap .select')
    const $accMoreBtn = get('.acc_detail_sub4 .detail-wrap .detail-more button');
    const $accHide = get('.acc_detail_sub4 .detail-wrap .detail-img');
    const $accHideImg = getAll('.acc_detail_sub4 .detail-wrap .detail-img img');
    const $accGrid = get('.acc_detail_sub4 .detail-wrap .detail-img .gradient');
    const $accTextMore = get('.acc_detail_sub4 .detail-wrap .introduction .btn-more button');
    const $accAddInfo = get('.acc_detail_sub4 .detail-wrap .introduction .add-info');
    const $accFolding = get('.acc_detail_sub4 .detail-wrap .introduction .add-info .folding');
    let s1cnt = 0;
    $accMinus.addEventListener('click', (e) => {
        s1cnt--;
        if(s1cnt<0){
            s1cnt=0
        }
        $accCount.textContent = `${s1cnt}`
        let div = document.createElement('div')
        let txt = document.createElement('p')
        txt.textContent = `자유이용권 대인 : 23,800원 * ${s1cnt} = ${23800*s1cnt}원`
        div.append(txt)
        $accSelBox.append(div)
    });
    $accPlus.addEventListener('click', (e) => {
        s1cnt++;
        if(s1cnt>9){
            s1cnt = 9;
        }
        $accCount.textContent = `${s1cnt}`
        let div = document.createElement('div')
        let txt = document.createElement('p')
        // txt.textContent = `자유이용권 대인 : 23,800원 * ${s1cnt} = ${23800*s1cnt}원`
        div.append(txt)
        $accSelBox.append(div)
    });

    $accTextMore.addEventListener('click', (e) => {
        accmoreText();
    });
    $accFolding.addEventListener('click', (e) => {
        accfold();
    });
    function accmoreBtn() {
        $accHide.classList.add('show');
        $accHide.style.height = `${1453 * 8.6}px`;
        $accGrid.style.display = 'none';
        $accMoreBtn.style.display = 'none';
    }
    function accmoreText() {
        $accAddInfo.classList.add('on');
        $accTextMore.style.display = 'none';
    }
    function accfold() {
        $accAddInfo.classList.remove('on');
        $accTextMore.style.display = 'block';
    }
}; //end subaccDetail
const accDetailPersonInput = () => {
    const $accDetailPersonPopup = get('#acc-det-Visual .person-popup');
    const $accDetailPersonInput = get('#acc-det-Visual .acc-input ul li:nth-child(3)');
    const $accDetailPersonText = get('#acc-det-Visual .acc-input ul li:nth-child(3) p');
    const $accDetailPersonMinus = get('#acc-det-Visual .person-popup .person-counting .counting .minus');
    const $accDetailPersonPlus = get('#acc-det-Visual .person-popup .person-counting .counting .plus');
    const $accDetailPersonCount = get('#acc-det-Visual .person-popup .person-counting .counting p');
    const $accDetailPersonEnter = get('#acc-det-Visual .person-popup .enter button');
    const $accDetailBg2 = get('#acc-det-Visual .bg2')
    let cnt = 2;

    $accDetailPersonInput.addEventListener('click', (e) => {
        $accDetailPersonPopup.classList.add('show');
        $accDetailBg2.classList.add('on');
    });
    $accDetailPersonEnter.addEventListener('click', (e) => {
        $accDetailPersonPopup.classList.remove('show');
        $accDetailBg2.classList.remove('on')
        $accDetailPersonText.textContent = `성인 ${cnt}명`;
        $accDetailPersonText.style.color = '#191919';
    });
    $accDetailBg2.addEventListener('click', (e) => {
        $accDetailBg2.classList.remove('on');
        $accDetailPersonPopup.classList.remove('show')
    });
    $accDetailPersonPlus.addEventListener('click', (e) => {
        cnt++;
        if (cnt > 9) cnt = 9;
        $accDetailPersonCount.textContent = cnt;
    });
    $accDetailPersonMinus.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) cnt = 0;
        $accDetailPersonCount.textContent = cnt;
    });
    //end accMainPersonInput
};

// 팝업 js

const accmainMenu =()=>{
    let $link = getAll('a[href="#"]')
    $link.forEach(item =>{
        item.addEventListener('click', e =>{
            e.preventDefault();
        })
    })
} //end mainMenu

const accmainVisual =()=>{} //end mainVisual

const gallery =()=>{
    const $x = get('.bg ')
    const $total = get(' .popup-gallery .gallelry-header .total-img')
    const $close = get('.popup-gallery .gallelry-header .close ')
    const $next = get('.popup-gallery .gallelry-body .next ')
    const $prev = get('.popup-gallery .gallelry-body .prev ')
    const $more = get('.acc-morepic  ')
    const $popup = get('.popup-gallery ')
    const $list = get('.main .con-box .list  ')
    const $bimg = get('.popup-gallery .gallelry-body img  ')
    const $strong =get('.popup-gallery .gallelry-body strong  ')
    let imgurl ='', curr= 0, bimg='', totalImg= 10, cnt= 0

    let data = [
        {id:1, img:'./acc-images/hotelimg/h1.jpeg',title:'디럭스 더블 객실'},
        {id:2, img:'./acc-images/hotelimg/h2.jpeg',title:'디럭스 트윈'},
        {id:3, img:'./acc-images/hotelimg/h3.jpeg',title:'욕실'},
        {id:4, img:'./acc-images/hotelimg/h4.jpeg',title:'조식'},
        {id:5, img:'./acc-images/hotelimg/h5.jpeg',title:'피트니스 센터'},
        {id:6, img:'./acc-images/hotelimg/h6.jpeg',title:'비즈니스 디럭스 트윈'},
        {id:7, img:'./acc-images/hotelimg/h7.jpeg',title:'스파'},
        {id:8, img:'./acc-images/hotelimg/h8.jpeg',title:'회의실'},
        {id:9, img:'./acc-images/hotelimg/h9.jpeg',title:'다이닝룸'},
        {id:10, img:'./acc-images/hotelimg/h10.jpeg',title:'고양이'},

   

        // {id:7, img:'images/photo6.jpg',title:'호랑이'},
        // {id:8, img:'images/photo7.jpg',title:'표범'},
        // {id:9, img:'images/photo8.jpg',title:'치타'},
        // {id:10, img:'images/photo9.jpg',title:'하이에나'},
        // {id:11, img:'images/photo10.jpg',title:'기린'},
        // {id:12, img:'images/photo11.jpg',title:'코끼리'},
        // {id:13, img:'images/photo12.jpg',title:'코뿔소'},
        // {id:14, img:'images/photo13.jpg',title:'하마'},
        // {id:15, img:'images/photo14.jpg',title:'부엉이'},
        // {id:16, img:'images/photo15.jpg',title:'올빼미'},
        // {id:17, img:'images/photo16.jpg',title:'판다'},
        // {id:18, img:'images/photo17.jpg',title:'돼지'},
        // {id:19, img:'images/photo18.jpg',title:'원숭이'},
        // {id:20, img:'images/photo19.jpg',title:'칠면조'},
        // {id:21, img:'images/photo20.jpg',title:'직박구리'},
        // {id:22, img:'images/photo21.jpg',title:'앵무새'},
        // {id:23, img:'images/photo22.jpg',title:'스라소니'},
        // {id:24, img:'images/photo23.jpg',title:'오소리'},
    ]
    
    //화면에 사진 보이기 - 더보기 + 8
    // const showImg =() =>{
    //     if(cnt > totalImg -1 ) return 
    //     for(let i=0; i<8; i++){
    //         const li = document.createElement('li')
    //         const img = document.createElement('img')
    //         imgurl =`images/photo${cnt}.jpg`
    //         // img.setAttribute('src', 'images/photo' + cnt + '.jpg' )
    //         img.setAttribute('src', imgurl )
    //         img.setAttribute('data-id', cnt )
    //         li.append(img)
    //         $list.append(li)
    //         cnt++ //증가
          
    //     }
        
    // }
    // showImg()

    // const more = get('.acc-morepic ')

        $more.addEventListener('click', e =>{
            curr = cnt;
            $x.classList.add('show')
            $popup.classList.add('show')
            banner()
        })
  
    const banner =()=>{
        $total.innerHTML =` image
        <span>${data[cnt].id}</span> of
        <strong>${totalImg}</strong> `
        console.log(data[cnt].id)
        $bimg.setAttribute('src', data[cnt].img)
        $bimg.setAttribute('alt', data[cnt].title)
        $strong.textContent = data[cnt].title;
        $bimg.animate([{opacity: 0} , {opacity: 1}],300)
        
    }
    // $list.addEventListener('click', e =>{
    //     let el = e.target;
    //     curr= Number(el.dataset.id);
    //     $x.classList.add('show')
    //     $popup.classList.add('show')
    //     // console.log(typeof curr);
    //     bimg =$popup.querySelector('.gallelry-body img')
    //     banner()
    // })

    $next.addEventListener('click', e =>{
        cnt++
       if(cnt >data.length){
           cnt=0
       }
        banner()

    })
    $prev.addEventListener('click', e =>{
        cnt--
        if(cnt <0){
            cnt=data.length
        }
        banner()
   

    })
    $x.addEventListener('click' , e=>{
        $x.classList.remove('show')
        $popup.classList.remove('show')
    })
    $close.addEventListener('click' , e=>{
        $x.classList.remove('show')
        $popup.classList.remove('show')
    })

    // $more.addEventListener('click', e=>{
    //     showImg()
    // })
   


} //end gallery


//지도 이미지 클릭 시 구글맵 링크로 넘어가기 추가 
let imgLink =get('.acc_detail_sub4 .acc-describe .map')

imgLink.addEventListener('click', e =>{
    alert('구글맵')
    window.open('https://www.google.com/maps/place/7-ch%C5%8Dme-1-1+Ofukacho,+Kita+Ward,+Osaka,+530-0011,+Japan/@34.6972828,135.4842245,17z/data=!3m1!4b1!4m6!3m5!1s0x6000e66031898f23:0xc42a813ad54e8271!8m2!3d34.6972784!4d135.4868048!16s%2Fg%2F11v0ytnvjl?entry=ttu')
})

const eventBanner = () => {}; //end eventBanner

const subInit = () => {
    subaccVisual();
    subaccDetail();
    eventBanner();
    accDetailPersonInput();
    accmainMenu();
    accmainVisual();
    gallery();
};

(() => {
    window.addEventListener('load', (e) => {
        subInit();
    });
})();

