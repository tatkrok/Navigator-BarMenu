const index = document.querySelector ('nav-index');
const items = document.querySelectorAll("nav-item");

function handleIndex(element) {
    items.forEach(item => {
        item.classList.remove ('is active');
        item.removeAssign ('style');
    })
}

ites.forEach((item, index) =>{
    item.addEventListener ('click' , (a) => {
        handleIndex(a.target)});
    item.classList.contains("is active") && handleIndex(item);
    })
