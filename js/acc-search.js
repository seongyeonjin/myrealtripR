let data = [
    { id: 1, liImg: 'acc-images/Sleep Steps Away From Dotonbori at The Lively Hotel in Osaka.jpeg', name: '힐튼 하와이안 빌리지 와이키키 비치 리조트', star: '1', price: '99900', rate: 2.7, priceFront: '0', heart: 1021 },
    { id: 2, liImg: 'acc-images/Royal Cliff Beach Hotel by DBALP.jpeg', name: '홀리데이 인 제주 ', star: '3', price: '178808', rate: 4.2, priceFront: '1', heart: 115 },
    { id: 3, liImg: 'acc-images/Ryokans in Japan_ Tradition & Luxury.jpeg', name: '신주쿠 워싱턴 호텔 메인', star: '4', price: '378808', rate: 4.3, priceFront: '3', heart: 1212 },
    { id: 4, liImg: 'acc-images/This New Mexico Hotel Was Designed to Mimic a Nearby UNESCO World Heritage Site.jpeg', name: '게이오 플라자 호텔 교토', star: '4', price: '48808', rate: 4.3, priceFront: '0', heart: 33 },
    { id: 5, liImg: 'acc-images/Where to stay in Tokyo_ The best Tokyo hotels in 2023.jpeg', name: '호텔 그루브 신주쿠, 파크로얄 호텔', star: '2', price: '278808', rate: 4.7, priceFront: '2', heart: 4543 },
    { id: 6, liImg: 'acc-images/IMG_5159.jpeg', name: '게이오 플라자 호텔 후쿠오카', star: '1', price: '48808', rate: 4.1, priceFront: '0', heart: 634 },
    { id: 7, liImg: 'acc-images/IMG_5098.jpeg', name: '도요코인 인 로마', star: '3', price: '585232', rate: 1.2, priceFront: '5', heart: 211 },
    { id: 8, liImg: 'acc-images/IMG_5370.jpeg', name: '힐튼 플라자 호텔 인 상하이', star: '2', price: '478333', rate: 5.0, priceFront: '4', heart: 23 },
    { id: 9, liImg: 'acc-images/In Zanzibar, Delicious Local Food at Passing Show Hotel.jpeg', name: '롯데 제주 호텔', star: '5', price: '346799', rate: 3.7, priceFront: '3', heart: 223 },
    { id: 10, liImg: 'acc-images/IMG_5449.jpeg', name: '홀리데이 인 로마', star: '5', price: '65800', rate: 2.2, priceFront: '0', heart: 1332 },
];

let imgurl = '',
    curr = 0,
    bimg = '',
    totalImg = data.length,
    cnt = 0;
let output = '';
for (let i = 0; i < totalImg; i++) {
    imgurl = data[i].liImg;
    hotelName = data[i].name;
    hotelPrice = data[i].price;
    hotelRate = data[i].rate;
    hotelStar = data[i].star;
    heart = data[i].heart;

    // img.setAttribute('src', 'images/photo' + cnt + '.jpg' )
    // img.setAttribute('src', imgurl )
    // img.setAttribute('data-id', cnt )
    // li.append(img)
    // $list.append(li)

    output += `
    <li>
    <img src="${imgurl}" alt="search Image">
    <ul class="acc-searchContent"> 
        <li>
            <span class="acc-txt20">${hotelName}</span>
            <span class="acc-greytxtSmall">
                <i class="xi-heart-o"></i>
                <span>${heart}</span>
            </span>
        </li>
        <li>
            <span class="acc-greytxtSmall">  <i class="xi-star"></i> ${hotelStar}성급 </span>
        </li>
        <li>
            <span class="acc-greytxt">  ${hotelRate} </span>
        
        
        </li>
        <li> 
            <div class="freeCancel">무료 취소</div>
            <span class="price">
                ${hotelPrice}
            </span>
        </li>
    </ul>
</li>
    `;

    cnt++; //증가
}

let $li = document.querySelector('.acc-searchList ul');

// console.log(output)
//
$li.innerHTML = output;

//임의로 링크 걸어둡니다...
$li.style.cursor = 'pointer'
$li.addEventListener('click', (e) => {
    location.href = 'accDetail.html';
});

const All = () => {
    // if(cnt > totalImg -1 ) return
    const li = document.createElement('li');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const div = document.createElement('div');
};

// let li = document.querySelectorAll('.acc-searchList ul li')
// let price = document.querySelectorAll('.acc-searchList ul .price')

let chkvalue = document.querySelectorAll('.acc-priceFilter input[type=checkbox]');
let starvalue = document.querySelectorAll('.acc-starFilter input[type=checkbox]');
let highest = document.querySelector('.acc-filter3  .sortByHighest');
let lowest = document.querySelector('.acc-filter3 .sortByLowest');
let byRate = document.querySelector('.acc-filter3 .sortByRate');


let heartli = document.querySelectorAll('.acc-greytxtSmall ');

heartli.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        let heartbtn = item.querySelector(' i');
        let heartnum = item.querySelector('span');

        if (heartbtn.classList.contains('xi-heart-o')) {
            console.log(idx);
            let hrt = item.innerText;
            console.log(hrt);
            hrt *= 1;
            let newhrt = hrt + 1;

            heartbtn.classList.replace('xi-heart-o', 'xi-heart');
            heartnum.innerText = newhrt;
        } else {
            let hrt = heartnum.innerText;
            hrt *= 1;
            let newhrt = hrt - 1;
            heartnum.innerText = newhrt;
            heartbtn.classList.replace('xi-heart', 'xi-heart-o');
        }
    });
});

chkvalue.forEach((item, idx) => {
    let temp = [];
    //  let pricearr= [10 0000, 20 0000, 30 0000, 40 0000, 50 0000]
    let output = '';
    let isLink = false; //상태변수

    item.addEventListener('change', (e) => {
        // let ddata = data.
        let priceval = e.currentTarget.value;
        isLink = e.currentTarget.checked;

        // parseInt(priceval)
        // console.log( priceval)
        // console.log(typeof priceval)
        if (isLink) {
            for (let i = 0; i < data.length; i++) {
                let pprice = data[i].priceFront;
                if (priceval === pprice) {
                    // console.log(data[i])
                    temp.push(data[i]);
                }
            }
            console.log(temp);

            for (let i = 0; i < temp.length; i++) {
                imgurl1 = temp[i].liImg;
                hotelName1 = temp[i].name;
                hotelPrice1 = temp[i].price;
                hotelRate1 = temp[i].rate;
                hotelStar1 = temp[i].star;

                output += `
                <li>
                <img src="${imgurl1}" alt="search Image">
                <ul class="acc-searchContent"> 
                    <li>
                        <span class="acc-txt20">${hotelName1}</span>
                        <span class="acc-greytxtSmall">
                            <i class="xi-heart-o"></i>
                            <span>${heart}</span>
                        </span>
                    </li>
                    <li>
                        <span class="acc-greytxtSmall">  <i class="xi-star"></i>${hotelStar1}성급</span>
                    </li>
                    <li>
                        <span class="acc-greytxt"> ${hotelRate1}</span>
                    
                    
                    </li>
                    <li> 
                        <div class="freeCancel">무료 취소</div>
                        <span class="price">
                            ${hotelPrice1}
                        </span>
                    </li>
                </ul>
            </li>
                `;
            }
        } else {
            for (let i = 0; i < totalImg; i++) {
                imgurl = data[i].liImg;
                hotelName = data[i].name;
                hotelPrice = data[i].price;
                hotelRate = data[i].rate;
                hotelStar = data[i].star;

                // img.setAttribute('src', 'images/photo' + cnt + '.jpg' )
                // img.setAttribute('src', imgurl )
                // img.setAttribute('data-id', cnt )
                // li.append(img)
                // $list.append(li)

                output += `
                <li>
                <img src="${imgurl}" alt="search Image">
                <ul class="acc-searchContent"> 
                    <li>
                        <span class="acc-txt20">${hotelName}</span>
                        <span class="acc-greytxtSmall">
                            <i class="xi-heart-o"></i>
                            <span>${heart}</span>   
                        </span>
                    </li>
                    <li>
                        <span class="acc-greytxtSmall">  <i class="xi-star"></i>${hotelStar}성급</span>
                    </li>
                    <li>
                        <span class="acc-greytxt"> ${hotelRate}</span>
                    
                    
                    </li>
                    <li> 
                        <div class="freeCancel">무료 취소</div>
                        <span class="price">
                            ${hotelPrice}
                        </span>
                    </li>
                </ul>
            </li>
                `;

                cnt++; //증가
            }
        }
        let $li = document.querySelector('.acc-searchList ul');
        //
        $li.innerHTML = output;

        output = '';
    });
});
starvalue.forEach((item, idx) => {
    let temp = [];
    //  let pricearr= [10 0000, 20 0000, 30 0000, 40 0000, 50 0000]
    let output = '';
    let isLink = false; //상태변수

    item.addEventListener('change', (e) => {
        // let ddata = data.
        let priceval = e.currentTarget.value;
        isLink = e.currentTarget.checked;
        console.log(priceval);
        // parseInt(priceval)
        // console.log( priceval)
        // console.log(typeof priceval)
        if (isLink) {
            for (let i = 0; i < data.length; i++) {
                let pprice = data[i].star;

                if (priceval === pprice) {
                    console.log('star ' + pprice);
                    // console.log(data[i])
                    temp.push(data[i]);
                }
            }
            console.log(temp);

            for (let i = 0; i < temp.length; i++) {
                imgurl1 = temp[i].liImg;
                hotelName1 = temp[i].name;
                hotelPrice1 = temp[i].price;
                hotelRate1 = temp[i].rate;
                hotelStar1 = temp[i].star;
                console.log(hotelPrice1);
                output += `
                <li>
                <img src="${imgurl1}" alt="search Image">
                <ul class="acc-searchContent"> 
                    <li>
                        <span class="acc-txt20">${hotelName1}</span>
                        <span class="acc-greytxtSmall">
                            <i class="xi-heart-o"></i>
                            <span>${heart}</span>
                        </span>
                    </li>
                    <li>
                        <span class="acc-greytxtSmall">  <i class="xi-star"></i>${hotelStar1}성급 </span>
                    </li>
                    <li>
                        <span class="acc-greytxt">  ${hotelRate1} </span>
                    
                    
                    </li>
                    <li> 
                        <div class="freeCancel">무료 취소</div>
                        <span class="price">
                            ${hotelPrice1}
                        </span>
                    </li>
                </ul>
            </li>
                `;
            }
        } else {
            for (let i = 0; i < totalImg; i++) {
                imgurl = data[i].liImg;
                hotelName = data[i].name;
                hotelPrice = data[i].price;
                hotelRate = data[i].rate;
                hotelStar = data[i].star;

                // img.setAttribute('src', 'images/photo' + cnt + '.jpg' )
                // img.setAttribute('src', imgurl )
                // img.setAttribute('data-id', cnt )
                // li.append(img)
                // $list.append(li)

                output += `
                <li>
                <img src="${imgurl}" alt="search Image">
                <ul class="acc-searchContent"> 
                    <li>
                        <span class="acc-txt20">${hotelName}</span>
                        <span class="acc-greytxtSmall">
                            <i class="xi-heart-o"></i>
                            <span>${heart}</span>
                        </span>
                    </li>
                    <li>
                        <span class="acc-greytxtSmall">  <i class="xi-star"></i> ${hotelStar}성급</span>
                    </li>
                    <li>
                        <span class="acc-greytxt">  ${hotelRate}</span>
                    
                    
                    </li>
                    <li> 
                        <div class="freeCancel">무료 취소</div>
                        <span class="price">
                            ${hotelPrice}
                        </span>
                    </li>
                </ul>
            </li>
                `;

                cnt++; //증가
            }
        }
        let $li = document.querySelector('.acc-searchList ul');

        console.log(output);
        //
        $li.innerHTML = output;

        output = '';
    });
});

const sortHigh = (a, b) => {
    var ageDiff = a.price - b.price;
    // If the ages are equal, compare by price
    if (ageDiff === 0) {
        return a.name.localeCompare(b.name);
    }
    // Otherwise, return the age difference
    return ageDiff;
};
const sortRate = (a, b) => {
    var rateDiff = a.rate - b.rate;
    // If the ages are equal, compare by rate
    if (rateDiff === 0) {
        return a.name.localeCompare(b.name);
    }
    // Otherwise, return the age difference
    return rateDiff;
    // if (a.rate - b.rate === 0 ){
    //     return a.name(b.name)
    // }
    // console.log(a.rate)
    // return a.rate - b.rate;
};

highest.addEventListener('change', (e) => {
    let output = '';
    let isLink = false; //상태변수
    isLink = e.currentTarget.checked;
    if (isLink) {
        data.sort(sortHigh);
        console.log('data : ' + data);
        for (let i = 0; i < totalImg; i++) {
            imgurl = data[i].liImg;
            hotelName = data[i].name;
            hotelPrice = data[i].price;
            hotelRate = data[i].rate;
            hotelStar = data[i].star;
            heart = data[i].heart;

            output += `
            <li>
            <img src="${imgurl}" alt="search Image">
            <ul class="acc-searchContent"> 
                <li>
                    <span class="acc-txt20">${hotelName}</span>
                    <span class="acc-greytxtSmall">
                        <i class="xi-heart-o"></i>
                        <span>${heart}</span>
                    </span>
                </li>
                <li>
                    <span class="acc-greytxtSmall">  <i class="xi-star"></i> ${hotelStar}성급 </span>
                </li>
                <li>
                    <span class="acc-greytxt">  ${hotelRate} </span>
                
                
                </li>
                <li> 
                    <div class="freeCancel">무료 취소</div>
                    <span class="price">
                        ${hotelPrice}
                    </span>
                </li>
            </ul>
        </li>
            `;

            cnt++; //증가
        }
        let $li = document.querySelector('.acc-searchList ul');

        // console.log(output)
        //
        $li.innerHTML = output;
    } else {
        for (let i = 0; i < totalImg; i++) {
            imgurl = data[i].liImg;
            hotelName = data[i].name;
            hotelPrice = data[i].price;
            hotelRate = data[i].rate;
            hotelStar = data[i].star;
            hotelStar = data[i].star;
            heart = data[i].heart;

            output += `
            <li>
            <img src="${imgurl}" alt="search Image">
            <ul class="acc-searchContent"> 
                <li>
                    <span class="acc-txt20">${hotelName}</span>
                    <span class="acc-greytxtSmall">
                        <i class="xi-heart-o"></i>
                        <span>${heart}</span>
                    </span>
                </li>
                <li>
                    <span class="acc-greytxtSmall">  <i class="xi-star"></i> ${hotelStar}성급 </span>
                </li>
                <li>
                    <span class="acc-greytxt">  ${hotelRate} </span>
                
                
                </li>
                <li> 
                    <div class="freeCancel">무료 취소</div>
                    <span class="price">
                        ${hotelPrice}
                    </span>
                </li>
            </ul>
        </li>
            `;

            cnt++; //증가
        }
        let $li = document.querySelector('.acc-searchList ul');

        // console.log(output)
        //
        $li.innerHTML = output;
    }
});
lowest.addEventListener('change', (e) => {
    let output = '';
    let isLink = false; //상태변수
    isLink = e.currentTarget.checked;
    if (isLink) {
        data.sort(sortHigh).reverse();

        for (let i = 0; i < totalImg; i++) {
            imgurl = data[i].liImg;
            hotelName = data[i].name;
            hotelPrice = data[i].price;
            hotelRate = data[i].rate;
            hotelStar = data[i].star;
            heart = data[i].heart;

            output += `
            <li>
            <img src="${imgurl}" alt="search Image">
            <ul class="acc-searchContent"> 
                <li>
                    <span class="acc-txt20">${hotelName}</span>
                    <span class="acc-greytxtSmall">
                        <i class="xi-heart-o"></i>
                        <span>${heart}</span>
                    </span>
                </li>
                <li>
                    <span class="acc-greytxtSmall">  <i class="xi-star"></i> ${hotelStar}성급 </span>
                </li>
                <li>
                    <span class="acc-greytxt">  ${hotelRate} </span>
                
                
                </li>
                <li> 
                    <div class="freeCancel">무료 취소</div>
                    <span class="price">
                        ${hotelPrice}
                    </span>
                </li>
            </ul>
        </li>
            `;

            cnt++; //증가
        }
        let $li = document.querySelector('.acc-searchList ul');

        // console.log(output)
        //
        $li.innerHTML = output;
    } else {
        for (let i = 0; i < totalImg; i++) {
            imgurl = data[i].liImg;
            hotelName = data[i].name;
            hotelPrice = data[i].price;
            hotelRate = data[i].rate;
            hotelStar = data[i].star;
            heart = data[i].heart;

            output += `
            <li>
            <img src="${imgurl}" alt="search Image">
            <ul class="acc-searchContent"> 
                <li>
                    <span class="acc-txt20">${hotelName}</span>
                    <span class="acc-greytxtSmall">
                        <i class="xi-heart-o"></i>
                        <span>${heart}</span>
                    </span>
                </li>
                <li>
                    <span class="acc-greytxtSmall">  <i class="xi-star"></i> ${hotelStar}성급 </span>
                </li>
                <li>
                    <span class="acc-greytxt">  ${hotelRate} </span>
                
                
                </li>
                <li> 
                    <div class="freeCancel">무료 취소</div>
                    <span class="price">
                        ${hotelPrice}
                    </span>
                </li>
            </ul>
        </li>
            `;

            cnt++; //증가
        }
        let $li = document.querySelector('.acc-searchList ul');

        // console.log(output)
        //
        $li.innerHTML = output;
    }
});
byRate.addEventListener('change', (e) => {
    let output = '';
    let isLink = false; //상태변수
    isLink = e.currentTarget.checked;
    if (isLink) {
        data.sort(sortRate).reverse();
        console.log('data : ' + data);
        for (let i = 0; i < totalImg; i++) {
            imgurl = data[i].liImg;
            hotelName = data[i].name;
            hotelPrice = data[i].price;
            hotelRate = data[i].rate;
            hotelStar = data[i].star;
            heart = data[i].heart;

            output += `
            <li>
            <img src="${imgurl}" alt="search Image">
            <ul class="acc-searchContent"> 
                <li>
                    <span class="acc-txt20">${hotelName}</span>
                    <span class="acc-greytxtSmall">
                        <i class="xi-heart-o"></i>
                        <span>${heart}</span>
                    </span>
                </li>
                <li>
                    <span class="acc-greytxtSmall">  <i class="xi-star"></i> ${hotelStar}성급 </span>
                </li>
                <li>
                    <span class="acc-greytxt">  ${hotelRate} </span>
                
                
                </li>
                <li> 
                    <div class="freeCancel">무료 취소</div>
                    <span class="price">
                        ${hotelPrice}
                    </span>
                </li>
            </ul>
        </li>
            `;

            cnt++; //증가
        }
        let $li = document.querySelector('.acc-searchList ul');

        // console.log(output)
        //
        $li.innerHTML = output;
    } else {
        for (let i = 0; i < totalImg; i++) {
            imgurl = data[i].liImg;
            hotelName = data[i].name;
            hotelPrice = data[i].price;
            hotelRate = data[i].rate;
            heart = data[i].heart;

            output += `
            <li>
    <img src="${imgurl}" alt="search Image">
    <ul class="acc-searchContent"> 
        <li>
            <span class="acc-txt20">${hotelName}</span>
            <span class="acc-greytxtSmall">
                <i class="xi-heart-o"></i>
                <span>${heart}</span>
            </span>
        </li>
        <li >
            <span class="acc-greytxtSmall">  <i class="xi-star"></i> ${hotelStar}성급 </span>
        </li>
        <li>
            <span class="acc-greytxt">  ${hotelRate} </span>
        
        
        </li>
        <li> 
            <div class="freeCancel">무료 취소</div>
            <span class="price">
                ${hotelPrice}
            </span>
        </li>
    </ul>
</li>
            `;

            cnt++; //증가
        }
        let $li = document.querySelector('.acc-searchList ul');

        // console.log(output)
        //
        $li.innerHTML = output;
    }
});

function checkOnlyOne(element) {
    let checkboxes = document.querySelectorAll('input');

    checkboxes.forEach((cb) => {
        cb.checked = false;
    });

    element.checked = true;
}
const accSearchPersonInput = () => {
    const $accSearchPersonPopup = get('#acc-ser-Visual .person-popup');
    const $accSearchPersonInput = get('#acc-ser-Visual .acc-input ul li:nth-child(3)');
    const $accSearchPersonText = get('#acc-ser-Visual .acc-input ul li:nth-child(3) p');
    const $accSearchPersonMinus = get('#acc-ser-Visual .person-popup .person-counting .counting .minus');
    const $accSearchPersonPlus = get('#acc-ser-Visual .person-popup .person-counting .counting .plus');
    const $accSearchPersonCount = get('#acc-ser-Visual .person-popup .person-counting .counting p');
    const $accSearchPersonEnter = get('#acc-ser-Visual .person-popup .enter button');
    const $accSearchBg2 = get('#acc-ser-Visual .bg2')
    let cnt = 2;

    $accSearchPersonInput.addEventListener('click', (e) => {
        $accSearchPersonPopup.classList.add('show');
        $accSearchBg2.classList.add('on');
    });
    $accSearchPersonEnter.addEventListener('click', (e) => {
        $accSearchPersonPopup.classList.remove('show');
        $accSearchBg2.classList.remove('on')
        $accSearchPersonText.textContent = `성인 ${cnt}명`;
        $accSearchPersonText.style.color = '#191919';
    });
    $accSearchBg2.addEventListener('click', (e) => {
        $accSearchBg2.classList.remove('on');
        $accSearchPersonPopup.classList.remove('show')
    });
    $accSearchPersonPlus.addEventListener('click', (e) => {
        cnt++;
        if (cnt > 9) cnt = 9;
        $accSearchPersonCount.textContent = cnt;
    });
    $accSearchPersonMinus.addEventListener('click', (e) => {
        cnt--;
        if (cnt < 0) cnt = 0;
        $accSearchPersonCount.textContent = cnt;
    });
    //end accMainPersonInput
};
accSearchPersonInput()

