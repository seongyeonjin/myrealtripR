// 전체 페이지 공통
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

let $link = getAll('a[href="#"]');
$link.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

const navi = () => {
    
}; //end nav

const familySite = () => {}; //end familySite

const comInit = () => {
    const loadPage = (page, tag) => {
        fetch(page)
            .then((res) => {
                return res.text();
            })
            .then((data) => {
                get(tag).innerHTML = data;
                navi();
                familySite();
            });
    };
    loadPage('page/header.html', 'header');
    loadPage('page/footer.html', 'footer');
};

(() => {
    comInit();
})();
