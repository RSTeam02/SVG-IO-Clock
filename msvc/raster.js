/**
 * @rsTeam02
 * View as SVG => dom
 */

import {BinaryConverter} from './binaryConverter.js';

export class Raster extends BinaryConverter{
    //raster display decimal or circle dots
    drawRaster(strategy, binArr = {}) {
        let y = 0;
        let ledArr = [];       
        let ledObj = {};
        let binConv = super.convert(binArr);
        let ledNo = 0;        
        let colCnt = 6; 
        for (let i = 0; i < binConv[0].length; i++) {                      
            ledArr[i] = [];
            let x = 0;
            for (let j = 0; j < binConv.length; j++) {
                strategy.executeStrategy(ledObj = {
                    onState: ((binConv[j][i] === "1") ? true : false), absX: x, absY: y, id: ledNo, dec: colCnt
                });
                ledNo++;                             
                //next row
                x += 85;
            }            
            //next column
            colCnt--;
            y += 35
        }
    }

}
