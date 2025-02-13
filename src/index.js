import "./style.css";
import { activeButton } from "./content.js";
import { renderRegularMenu } from "./regular-menu.js";

document.addEventListener('DOMContentLoaded', () => {
  renderRegularMenu();

  const firstButton = document.querySelector('.menu-nav .btn[data-tab="1"]');
  if (firstButton) {
    activeButton(document.querySelector('.menu-nav'), firstButton);
  }
});