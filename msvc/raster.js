/**
 * @rsTeam02
 * View as SVG => dom
 */

class Raster extends BinaryConverter{
    //raster display decimal or circle dots
    drawRaster(strategy, binArr = new Array(7)) {
        let y = 0;
        let ledArr = [];
        let bin = [];
        let ledNo = 41;
        let ledObj = {};
        let binConv = super.convert(binArr);        
        
        for (let k = 0; k < binConv.length; k++) {
            bin[k] = (binConv[k] !== undefined) ? [...binConv[k]] : [..."0000000"];
        }

        for (let i = 5; i >= 0; i--) {
            ledArr[i] = [];
            let x = 0;
            for (let j = 0; j < 7; j++) {                
                    strategy.executeStrategy(ledObj = {
                        onState: ((bin[i][j] === "1") ? true : false), absX: x, absY: y, id: ledNo
                    });               
                ledNo--;
                //next row
                x += 35;
            }
            //next column
            y += 85
        }
    }    

}