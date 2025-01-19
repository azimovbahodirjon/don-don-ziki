import { hands } from "./hands.js";
import { initialState } from "./settings.js";

export function aiChooser(mode, elHumanHand) {
    if (mode === "easy") {
        const randomIndex = Math.trunc(Math.random() * hands.length);
        return hands[randomIndex];
    } else if (mode === "hard") {
        // ....
    } else {
        console.error("Bunday xolat mavjut emas")
    }
}