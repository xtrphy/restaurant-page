import { renderRegularMenu } from "./regular-menu.js";
import { renderChildrensMenu } from "./childrens-menu.js";
import { renderBusinessMenu } from "./business-menu.js";

export function activeButton(buttonGroup, targetButton) {

  const buttons = buttonGroup.querySelectorAll('.btn');
  const menuContent = document.querySelector('.menu-content');

  buttons.forEach(btn => btn.classList.remove('active'));

  targetButton.classList.add('active');

  const tabId = targetButton.dataset.tab;
  let content = '';

  switch (tabId) {
    case '1':
      content = renderRegularMenu();
      break;
    case '2':
      content = renderChildrensMenu();
      break;
    case '3':
      content = renderBusinessMenu();
      break;
    default: content = '<p>Content not found</p>';
  }

  menuContent.innerHTML = content;
}

const buttonGroup = document.querySelector('.menu-nav');

buttonGroup.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('btn')) {
    activeButton(buttonGroup, target);
  }
});