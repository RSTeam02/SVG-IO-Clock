class BinaryConverter {

    
    convert(unit) {
        let binArr = [];
        let timeUnit = [unit.hour, unit.min, unit.sec, unit.day, unit.month, unit.year];

        for (let i = 0; i < timeUnit.length; i++) {
            binArr[i] = ("000000" + parseInt(timeUnit[i]).toString(2)).slice(-7);
        }
        return binArr;
    }
}