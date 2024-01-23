(()=>{

    let $hotelpic = get('.nav .inner .pack-img5 img');
    let $morebtn = get('.nav .inner .more .more-btn');
    let $all = get('.nav .inner .pack-schedule');
    let $khj1 = get('.nav .inner #khj1');
    let $khj2 = get('.nav .inner #khj2');
    let $span1 = get('.nav .inner .sun1 span');
    let $popspan = get('.popspan');
    let $popot = get('.pack-ot');
    let $bg = get('.nav .inner .bg');
    let $btnmoney = get('.nav .inner .btnmoney');
    let $span = get ('.pack-fli2 span');
    let $pp = get ('.pack-all p');
    let $st = get ('.pack-all2 strong');
    let $finish = get('.pack-option2 .pack-money');

    let cnt=0 ,cnt2=0 , timer=null , interval=3000 , imgurl='',$himg=3 ;


    $morebtn.addEventListener('click',e=>{
        $all.style.display='block';
        $morebtn.style.display='none';
    })
    $popspan.addEventListener('click',e=>{
        $bg.classList.add('on');
        $popot.classList.add('on');
      })
      $bg.addEventListener('click',e=>{
        $bg.classList.remove('on');
        $popot.classList.remove('on');
      })
  
      $khj2.addEventListener('click',e=>{
        $popspan.textContent='[프라이빗]하와이 5일 오아후'
        cnt2++;
        if(cnt2 > 9 ) {
           cnt2 = 9;
        }
        $span1.textContent=cnt2;
        $span.textContent=cnt2;
        $pp.textContent=`${cnt2*2250000}원`
        $st.textContent=`${cnt2*2250000}원`
  })
  
   $khj1.addEventListener('click',e=>{
           cnt2--;  //변수명이 달라요
           if(cnt2 < 0 ) {
              cnt2 = 0;
           }
           $span1.textContent=cnt2;
           $span.textContent=cnt2;
           $pp.textContent=`${cnt2*2250000}원`
           $st.textContent=`${cnt2*2250000}원`
           
   })
  
   
  
  
  $btnmoney.addEventListener('click',e=>{
     $finish.style.display='block'
     $bg.classList.remove('on');
     $popot.classList.remove('on');
  })
   
})();