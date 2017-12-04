import { Led } from './led.js';

export class SVGCircle extends Led {


    draw(ledObj) {
        let led = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        $(led).attr("cursor", "pointer");
        $(led).attr("id", ledObj.id);
        //$(led).attr("cx", 14);
        $(led).attr("transform", `translate(${ledObj.absX + 24} ${ledObj.absY +40})`);
        //$(led).attr("cy", 30);       
        $(led).attr("r", 12);
        $("#ledDisplay").append(led);
        super.onOffState(ledObj);
    }

}
