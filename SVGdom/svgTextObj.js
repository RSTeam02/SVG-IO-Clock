export class SVGTextObj {

    svgText(text) {
        let txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        $(txt).attr("fill-opacity", .7);
        $(txt).attr("fill", "white");
        $(txt).attr("font-family", "Geneva, sans-serif");
        $(txt).attr("font-size", "54px");
        txt.textContent = `${text.hour}:${text.min}:${text.sec} ${text.day}|${text.month}|${text.year}`;
        $("#nativeDisplay").append(txt);
    }

}
