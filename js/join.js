
let btn1 = document.querySelector('.join77 .btn1');
let btn2 = document.querySelector('.join77 .btn2');
let chk = document.querySelector('.chk');

btn1.addEventListener('click',e=>{
    alert('회원가입 되었습니다.')
})                                                          // 페이지 이동 질문입니다. 페이지가 넘어가지않아요
btn2.addEventListener('click',e=>{
    alert('회원가입이 취소되었습니다.')
})

chk.addEventListener('click',e=>{
    alert('중복된 아이디 입니다.')
})

function khj() {
    new daum.Postcode({
        oncomplete: function(data) {
            if (data.userSelectedType === 'R') { 
                addr = data.roadAddress;
            } else { 
                addr = data.jibunAddress;
            }
            document.getElementById('add').value = data.zonecode;
                document.getElementById("nomaladd").value = addr;
            }
        }).open();
    }




  

   