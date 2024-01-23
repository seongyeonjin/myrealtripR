
const subVisual = () => {

}//end mainVisual

const subText = () => {
    let $body = get('main');
    let $sub = get('#subVisual h2');
    let bodyText  = $body.getAttribute('class');
    console.log( $sub )    
    // 클래스에 들어갈텍스트
    let arrSub =['회사소개','오시는길','고객문의','제품리스트','회원가입'];
    // 클래스명
    let arrClass =['sub1','sub2','sub3','sub4','sub5'];
    arrClass.forEach( (item , idx) => {
        if( bodyText === item)  {
            $sub.textContent =arrSub[idx];
        }
    })
}//end subText

const eventBanner = () => {

}//end eventBanner

const subInit = ()  => {
    subText();
    subVisual();
    eventBanner();
}

;( () => {
    window.addEventListener('load', e => {
        subInit();
    })    
})();