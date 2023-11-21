var usia = document.getElementById("usia");
var tbadan = document.getElementById("tbadan");
var bbadan = document.getElementById("bbadan");
var laki = document.getElementById("laki");
var perempuan = document.getElementById("perempuan");
var form = document.getElementById("form");

function validateForm() {
    if (
        usia.value == "" ||
        tbadan.value == "" ||
        bbadan.value == "" ||
        (laki.checked == false && perempuan.checked == false)
    ) {
        alert("Isi dulu semua cuyyy!");
        document
            .getElementById("submit")
            .removeEventListener("click", countBmi);
    } else {
        countBmi();
    }
}
document.getElementById("submit").addEventListener("click", validateForm);
function countBmi() {
    var p = [usia.value, tbadan.value, bbadan.value];
    if (laki.checked) {
        p.push("laki");
    } else if (perempuan.checked) {
        p.push("perempuan");
    }
    form.reset();
    var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
    var result = "";
    if (bmi < 18.5) {
        result = "Naikkan Lagi Berat Badannya";
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = "Sehat";
    } else if (25 <= bmi && bmi <= 29.9) {
        result = "Berlebihan";
    } else if (30 <= bmi && bmi <= 34.9) {
        result = "Berlebihan Sekali";
    } else if (35 <= bmi) {
        result = "Parah Banget Ini mah";
    }
    var h2 = document.createElement("h2");
    var h3 = document.createElement("h3");
    var t = document.createTextNode(result);
    var b = document.createTextNode("BMI: ");
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));
    h2.appendChild(t);
    h3.appendChild(b);
    h3.appendChild(r);
    document.body.appendChild(h2);
    document.body.appendChild(h3);
    document.getElementById("submit").removeEventListener("click", countBmi);
    document
        .getElementById("submit")
        .removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);