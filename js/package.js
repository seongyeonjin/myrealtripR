(()=>{


    let $top1 = get('.top1')
    let $con = getAll('.content con');     
    let $menuli = getAll('.menu ul li');
    let $bigimg = get('.nav .inner .maintop img');
    let $mainli = getAll('.nav .inner .maintop ul li');

    

    


    let cnt=0 , timer=null , old=0  , interval=4000 , ty=0 , posY=[];
    /* let cur=0 , totalimg=$li.length ; */
    


    timer=setInterval(make,interval);
    function make() {
        cnt++;
        if(cnt >6) cnt=0;
        $bigimg.setAttribute('src','images/package/top'+cnt+'.jpg')
        $mainli.forEach(item =>{
                item.classList.remove('on')
            })
            $mainli[cnt].classList.add('on')
    } 

    
    $mainli.forEach((item,idx)=>{
        item.addEventListener('click',e=>{
            $bigimg.setAttribute('src','images/package/top'+idx+'.jpg')
            $mainli.forEach(item =>{
                item.classList.remove('on')
            })
            $mainli[idx].classList.add('on')
        })
        timer=setInterval(make,interval);
        clearInterval(timer)
    })
    




    

})();