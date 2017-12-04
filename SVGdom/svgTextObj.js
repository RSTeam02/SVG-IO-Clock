export class SVGTextObj {

    svgText(text) {
        let xDist = 5;
        let unit = [text.hour, text.min, text.sec, text.day, text.month, text.year];
        let tspan = new Array(unit.length);
        let txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        $(txt).attr("id", "hmsdmy");
        $("#nativeDisplay").append(txt);

        for (let i = 0; i < unit.length; i++) {
            tspan[i] = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            $(tspan[i]).attr("fill-opacity", .7);
            $(tspan[i]).attr("fill", "white");
            $(tspan[i]).attr("font-family", "Geneva, sans-serif");
            $(tspan[i]).attr("font-size", "54px");
            $(tspan[i]).attr("x", xDist);         
            tspan[i].textContent = unit[i];
            $("#hmsdmy").append(tspan[i]);
            xDist = xDist + 85;
        }

    }

}
