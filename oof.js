function oof(number) {
    return ("000" + number.toString(4)).slice(-3).replace(/0/g, "o").replace(/1/g, "f").replace(/2/g, "O").replace(/3/g, "F");
}
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("").concat(["ðŸ‘½", "ðŸ™†", ":alien:", ":ok_woman:"]);
var oofhabet = new Array(64).fill().map(function(v, i) {return oof(i);});
var encodeRegex = new RegExp(alphabet.join("|"), "g");
var decodeRegex = new RegExp(oofhabet.join("|"), "g");
function encode(text) {
    return text.replace(encodeRegex, function(match) {
        var id = alphabet.indexOf(match);
        if (id >= 64) id -= 2;
        return oof(id);
        // return oof(alphabet.indexOf(match)); <- cooler but doesn't support both emoji formats
    });
}
function decode(text) {
    return text.replace(decodeRegex, function(match) {
        return alphabet[oofhabet.indexOf(match)];
    });
}

module.exports = {oof, encode, decode};