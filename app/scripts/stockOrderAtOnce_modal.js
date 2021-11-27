const orderAtOnceTrigger = document.querySelector('.trigger-all'); // 재고 발주 버튼
const items = document.querySelectorAll('.dropdown-item'); // 드롭다운 아이템
const cart = document.querySelector('.order-cart');
const atOnceUp = document.querySelectorAll('.at-once-up-quantity');
const atOnceDown = document.querySelectorAll('.at-once-down-quantity');

function addlist(e) {
  console.log(e.target);
}

items.forEach((element) => {
  element.addEventListener('click', (e) => {
    const id = e.target.querySelector('._id').innerText;
    console.log(id);
    const orderList = document.getElementById(id);
    //console.log(orderList);
    orderList.classList.toggle('hide');
  });
});

atOnceUp.forEach((element) => {
  const quantity = element.parentElement.querySelector('.order-quantity');
  const order_cost = element.parentElement.querySelector('.stock-order-cost');
  const total = element.parentElement.querySelector('.item-sum');
  element.addEventListener('click', () => {
    quantity.value = parseInt(quantity.value) + 1;

    total.value = parseInt(order_cost.innerText) * quantity.value;

    console.log(total.value);
    element.parentElement.querySelector(
      '.at-once-down-quantity'
    ).disabled = false;

    calcTotalAtOnce();
  });
});

atOnceDown.forEach((element) => {
  const quantity = element.parentElement.querySelector('.order-quantity');
  const order_cost = element.parentElement.querySelector('.stock-order-cost');
  const total = element.parentElement.querySelector('.item-sum');
  element.addEventListener('click', () => {
    quantity.value = parseInt(quantity.value) - 1;
    total.value = parseInt(order_cost.innerText) * quantity.value;
    console.log(total.value);
    if (quantity.value == 0) {
      element.disabled = true;
    }
    calcTotalAtOnce();
  });
});

function hide(e) {
  e.parentNode.classList.add('hide');
}

function calcTotalAtOnce() {
  const totals = document.querySelectorAll('.item-sum');
  //console.log(totals);
  const final = document.querySelector('.final-cost');
  let val = 0;
  console.log(val);
  totals.forEach((total) => {
    val += parseInt(total.value);
  });

  console.log(val);
  final.innerText = val + '원';
}
