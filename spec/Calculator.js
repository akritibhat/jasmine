var reporters = require('jasmine-reporters');
var junitReporter = new reporters.JUnitXmlReporter({
    savePath: 'test_reports',
    consolidateAll: false
});
jasmine.getEnv().addReporter(junitReporter)

var Calculator = function() {}

Calculator.prototype.add = function(a,b) {
    return a + b;
}

Calculator.prototype.subtract = function(a,b) {
    return a - b;
}

Calculator.prototype.multiply = function(a,b) {
    return a * b;
}
