class BinaryConverter {

    convert(unit) {
        let binArr = [];
      

        for (let i = 0; i < unit.length; i++) {
            binArr[i] = ("000000" + parseInt(unit[i]).toString(2)).slice(-7);
        }
        return binArr;
    }
}