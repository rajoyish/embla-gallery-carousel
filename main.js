import "./style.css";
import EmblaCarousel from "embla-carousel";
import { setupTweenOpacity } from "./EmblaCarouselTweenOpacity";
import { addDotBtnsAndClickHandlers } from "./EmblaCarouselDotButton";
import { addPrevNextBtnsClickHandlers } from "./EmblaCarouselArrowButtons";
import "./embla.css";

const OPTIONS = { loop: true };

const emblaNode = document.querySelector(".embla");
const viewportNode = emblaNode.querySelector(".embla__viewport");
const prevBtn = emblaNode.querySelector(".embla__button--prev");
const nextBtn = emblaNode.querySelector(".embla__button--next");
const dotsNode = document.querySelector(".embla__dots");

const emblaApi = EmblaCarousel(viewportNode, OPTIONS);
const removeTweenOpacity = setupTweenOpacity(emblaApi);

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtn,
  nextBtn
);
const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode
);

emblaApi
  .on("destroy", removeTweenOpacity)
  .on("destroy", removePrevNextBtnsClickHandlers)
  .on("destroy", removeDotBtnsAndClickHandlers);
