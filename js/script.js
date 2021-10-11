import ScrollSuave from "./modules/scroll-suave.js";
import initScrollAnimation from "./modules/scroll-anim.js";
import Accordion from "./modules/accordion.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDrodownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcon from "./modules/fetch-bitcon.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initScrollAnimation();
initTabNav();
initModal();
initTooltip();
initDrodownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcon();
