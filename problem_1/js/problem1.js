var stream = (function () {
    var i = 0;
    return function () { return ++i; }
})();

var multiple3or5 = function (stream, upperBound ) {
    var number;
    return function iterator(acc) {
        return ((number = stream()) === upperBound) ? 
               acc : 
               (!(number % 3) || !(number % 5)) ? iterator (acc + number) : iterator (acc);
    };
};

multiple3or5(stream, 10000)(0);