const modalTriggers = document.querySelectorAll('.trigger'); // 재고 발주 버튼
const stockQuantity = document.querySelector('.stock-quantity'); // 장바구니 담을 재고 수량 인풋
const upBtn = document.querySelector('.up-quantity'); // 스량 더하기 버튼
const downBtn = document.querySelector('.down-quantity'); // 수량 빼기 버튼
const infos = document.querySelectorAll('.stock-info'); // 재고 정보
const modal = document.querySelector('#defaultModal');
const totalCost = modal.querySelector('.total-cost');
const totalQuantity = modal.querySelector('.total-quantity');

upBtn.addEventListener('click', () => {
  stockQuantity.value = parseInt(stockQuantity.value) + 1;
  downBtn.disabled = false;
  calcTotal(stockQuantity.value);
});

downBtn.addEventListener('click', () => {
  stockQuantity.value = parseInt(stockQuantity.value) - 1;
  if (parseInt(stockQuantity.value) === 0) {
    downBtn.disabled = true;
  }
  calcTotal(stockQuantity.value);
});

modalTriggers.forEach((modal, index) => {
  modal.addEventListener('click', () => {
    addInfo(index);
  });
});

function calcTotal(value) {
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
  modal.querySelector('.stock-name').value = item.cells[0].innerHTML;
  modal.querySelector('.order-price').value = item.cells[2].innerHTML;
  modal.querySelector('.order-unit').value = item.cells[3].innerHTML;

  totalCost.innerHTML = '0원';
  totalQuantity.innerHTML =
    modal.querySelector('.order-unit').value + ' * 0 = ';
}
