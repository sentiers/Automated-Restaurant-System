const orderAtOnceTrigger = document.querySelector('.trigger-all'); // 재고 발주 버튼
const items = document.querySelectorAll('.dropdown-item'); // 드롭다운 아이템
const cart = document.querySelector('.order-cart');
console.log(cart);

function addlist(e) {
  console.log(e.target);
}

items.forEach((element) => {
  element.addEventListener('click', (e) => {
    const id = e.target.querySelector('._id').innerText;
    console.log(id);
    const orderList = document.getElementById(id);
    console.log(orderList);
    orderList.classList.toggle('hide');
  });
});

function hide(e) {
  e.parentNode.classList.add('hide');
}
