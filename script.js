const basketItemsContainer = document.getElementById('basketItems');
const tagList = document.getElementById('tagList');
const addItemForm = document.getElementById('addItemForm');
const customItemInput = document.getElementById('customItemInput');

function createBasketTag(label) {
  const button = document.createElement('button');
  button.className = 'basket-tag';
  button.type = 'button';
  button.textContent = label;
  button.setAttribute('data-item', label.toLowerCase());
  button.addEventListener('click', () => {
    basketItemsContainer.removeChild(button);
    customItemInput.focus();
  });
  return button;
}

function addItemToBasket(label) {
  const trimmedLabel = label.trim();
  if (!trimmedLabel) {
    return;
  }
  const basketTag = createBasketTag(trimmedLabel);
  basketItemsContainer.appendChild(basketTag);
}

tagList.addEventListener('click', (event) => {
  if (!(event.target instanceof HTMLElement)) {
    return;
  }
  const target = event.target.closest('button.tag');
  if (!target) {
    return;
  }
  addItemToBasket(target.dataset.item ?? target.textContent ?? '');
});

addItemForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addItemToBasket(customItemInput.value);
  addItemForm.reset();
  customItemInput.focus();
});
