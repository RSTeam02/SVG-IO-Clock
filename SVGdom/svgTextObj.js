class SVGTextObj {

    svgText(text) {
        let txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        $(txt).attr("fill-opacity", .7);
        $(txt).attr("fill", "white");
        $(txt).attr("font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif");
        $(txt).attr("font-size", "54px");
        txt.textContent = `${text[0]}:${text[1]}:${text[2]}:${text[3]}:${text[4]}:${text[5]}`;
        $("#nativeDisplay").append(txt);
    }

}