import navigation, { getNextPage, getPreviousPage } from './src/navigation.js';

window.getNextPage = getNextPage;
window.getPreviousPage = getPreviousPage;

navigation();
