//РАБОТАЕТ ТОЛЬКО С ЧИСЛАМИ до 999
//Функция работает только с целыми входными числами
for(i = 998; i < 1003; i++){
    getStringFromNumber("" + i);
}
//getStringFromNumber("" + 10);

//Функция преобразует строку в массив
function getMassivFromString(string, length1) {
    string = (string == null) ? "" : string;
    length1 = (length1 == null) ? 1 : length1;

    var chunks = [];
    var pos = 0;
    var len = string.length;
    while (pos < len) {
        chunks.push(string.slice(pos, pos += length1));
    }
    return chunks;
};

//Функция склонения словоформы
function morph(number, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[(number%100 > 4 && number%100 < 20) ? 2 : cases[(number%10<5) ? number % 10 :5]];
};

//Возвращает сумму прописью
function getStringFromNumber(num) {
    console.log("num = " + num);
    var defTraslite = {
        null: "ноль",
        a1: ["один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"],
        a2: ["одна", "две", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"],
        a10: ["одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"],
        a20: ["десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"],
        a100: ["сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"],
        u3: ["тысяча", "тысячи", "тысяч"],
        u2: ["миллион", "миллиона", "миллионов"],
        u1: ["миллиард", "миллиарда", "миллиардов"],
    }
    var i1, i2, i3, v, zeros, ref, ref1, ref2, ax;
    var out1 = "";
    var out = [];
    if (num > 0) {
        //Разбиваем число по три символа
        ref1 = getMassivFromString(num, 3);
        console.log("ref1 = " + ref1);
        console.log("ref1.length = " + ref1.length);
        for (var i = -1; i < ref1.length; i++) {
            v = ref1[i];
            if (!(v > 0)) continue;
            ref2 = getMassivFromString(v, 1);
            i1 = parseInt(ref2[0]);
            i2 = parseInt(ref2[1]);
            i3 = parseInt(ref2[2]);
            console.log("i1 = " + i1);
            console.log("i2 = " + i2);
            console.log("i3 = " + i3);
            //console.log("i = " + i);
            if(isNaN(i2)){
                i3 = i1;
                i1 = 0;
                i2 = 0;
            } else {
                if(isNaN(i3)){
                    i3 = i2;
                    i2 = i1;
                    i1 = 0;
                }
            }
            //console.log("i1 = " + i1);
            //console.log("i2 = " + i2);
            //console.log("i3 = " + i3);

            if(i1 > 0){
                out.push(defTraslite.a100[i1 - 1]);   //1xx-9xx
            }
            ax = (i + 1 == 3) ? "a2" : "a1";
            //console.log("ax = " + ax);
            if ((i2 > 1) || ((i2 === 1) && (i3 === 0))){
                out.push(defTraslite.a20[i2 - 1] + (i3 > 0 ? " " + defTraslite[ax][i3 - 1] : ""));  //20-99
            } else {
                out.push(i2 > 0 ? defTraslite.a10[i3 - 1] : defTraslite[ax][i3 - 1]);         //10-19 | 1-9
            }
            console.log("i = " + i);
            if (ref1.length > i + 1) {
                var name = defTraslite["u" + (i + 1)];
                out.push(morph(v, name));
            }
        }
    } else {
        out.push(defTraslite.null);
    }
    for(var i = 0; i < out.length; i++){
        out1 = out1 + out[i]  +" ";
        //console.log(out[i]);
    }
    console.log(out1);
    return out;
}


