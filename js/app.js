import { aiChooser } from "./ai-chooser.js";
import {
    elGameZone,
    elGameZonePicker,
    elHands,
    elHumanHand,
    elRefreshGame,
} from "./html-selection.js";
import { initialState } from "./settings.js";
import { uiChanger } from "./ui-changer.js";

elHands.forEach((hand) => {
    hand.addEventListener("click", function(event) {
        const clickedElement = event.target;
        const chosenHand = clickedElement.querySelector(".game-zone__img");
        elHumanHand.src = chosenHand.src;
        // chosenHand.alt
        const choosenHandAi = aiChooser(initialState.mode)
        console.log(choosenHandAi);

        uiChanger("elGameZone");
    });
});

//Refresh game
elRefreshGame.addEventListener("click", function() {
    uiChanger("elGameZonePicker");
});