import {createMainMenu} from './view/list.js';
import {createNav} from './view/nav.js';
import {createFilters} from './view/filters.js';
import {createSorting} from './view/sort.js';
import {createMainContent} from './view/contant.js';
import {createAddPoints} from './view/add-points.js';

const COUNT = 3;

const render = (container, template, place) => {
	container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.page-body');

const siteHeaderElement = siteMainElement.querySelector('.trip-main');
render(siteHeaderElement, createMainMenu(), 'afterbegin');

const siteNavigationElement = siteMainElement.querySelector('.trip-controls__navigation');
render(siteNavigationElement, createNav(), 'beforeend');

const siteFilterElement = siteMainElement.querySelector('.trip-controls__filters');
render(siteFilterElement, createFilters(), 'beforeend');

const siteSortingElement = siteMainElement.querySelector('.trip-events');
render(siteSortingElement, createSorting(), 'beforeend');

const siteContentElement = siteMainElement.querySelector('.trip-events__list');

for (let i = 0; i < COUNT; i++) {
	render(siteContentElement, createMainContent(), 'beforeend');
}

render(siteContentElement, createAddPoints(), 'afterbegin');
