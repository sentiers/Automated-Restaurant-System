const modalTriggers = document.querySelectorAll('.trigger'); // 재고 발주 버튼
const stockQuantity = document.querySelector('#stock-quantity'); // 장바구니 담을 재고 수량 인풋
const upBtn = document.querySelector('.up-quantity'); // 수량 더하기 버튼
const downBtn = document.querySelector('.down-quantity'); // 수량 빼기 버튼
const infos = document.querySelectorAll('.stock-info'); // 재고 정보
const modal = document.querySelector('#defaultModal'); // modal 창
const totalCost = document.querySelector('.total-cost'); // 총 주문 금액
const totalQuantity = document.querySelector('.total-quantity'); // 총 주문 수량

upBtn.addEventListener('click', () => {
  stockQuantity.value = parseInt(stockQuantity.value) + 1;
  stockQuantity.setAttribute('value', stockQuantity.value);
  downBtn.disabled = false;
  updateTotal(stockQuantity.value);
});

downBtn.addEventListener('click', () => {
  stockQuantity.value = parseInt(stockQuantity.value) - 1;
  if (parseInt(stockQuantity.value) === 0) {
    downBtn.disabled = true;
  }
  updateTotal(stockQuantity.value);
});

modalTriggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    addInfo(index);
  });
});

function updateTotal(value) {
  stockQuantity.value = value;
  const price = modal.querySelector('.order-price').value;
  const unit = modal.querySelector('.order-unit').value;

  let cost = value * price;
  cost = String(cost).replace(/(.)(?=(\d{3})+$)/g, '$1,');
  totalCost.innerHTML = `${cost}원`;
  totalQuantity.innerHTML = `${unit} * ${value} = `;
}

function addInfo(index) {
  const item = infos[index];
  stockQuantity.value = '0';

  modal.querySelector('.stock-id').value = item.cells[0].innerHTML;
  modal.querySelector('.stock-name').value = item.cells[1].innerHTML;
  modal.querySelector(
    '.order-price-unit'
  ).value = `${item.cells[3].innerHTML} / ${item.cells[4].innerText}`;
  modal.querySelector('.order-price').value = item.cells[3].innerHTML;
  modal.querySelector('.order-unit').value = item.cells[4].innerText;
  modal.querySelector('.info-quantity').value =
    item.cells[2].querySelector('.stock-quantity').innerHTML;

  totalCost.innerHTML = '0원';
  totalQuantity.innerHTML =
    modal.querySelector('.order-unit').value + ' * 0 = ';
}
