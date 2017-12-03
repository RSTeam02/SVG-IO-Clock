export class Led {

    onOffState(elem) {
        let led = $(`#${elem.id}`);
        if (elem.id === 0 || elem.id === 1 ||elem.id === 2 ||elem.id === 3 ||elem.id === 4) {
            led.attr("fill", "black");
        } else if (elem.onState) {
            led.attr("fill", `url(#RadialGradient5)`);
            led.attr("fill-opacity", 1);
            led.text(Math.pow(2, (elem.dec)));
        } else {
            led.attr("fill", `url(#RadialGradient2)`);
            led.attr("fill-opacity", .3);
            led.text(0);
        }
    }
}
