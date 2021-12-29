function A() {
    var len1 = +prompt("Enter array1 length")
    a = new Array(9);
    for (var i = 0; i < a.length; i++) {
        a[i] = new Array(5);
    }
    for (var r = 0; r < a.length; r++) {
        for (var c = 0; c < a[r].length; c++) {
            a[r][c] = r * c;
        }
    }
    ShowArray(a);
}
function ShowArray(x) {
    var s = "";
    for (var r = 0; r < x.length; r++) {
        for (var c = 0; c < x[r].length; c++) {
            s = s + x[r][c] + " ";
        }
        s = s + "<br />";
    }
    s = s + "<br />";
    s = s + "<br />";
    document.write(s);
}
