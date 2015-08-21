/*javaScript practice*/
var pi = 3.14;

function circle(r) {
    return = pi * r * r
};
document.write(circle(2));

/*切分*/
var string = "Hello!World!"
document.write(string + "yoooo");
a = string.slice(1, 6);
document.write(a);
/*運算*/
var score = ;
if (score >= 80) {
    document.write("A");
} else if (80 > score && score >= 70) {
    document.write("B");
} else if (70 > score && score >= 60) {
    document.write("C");

} else {
    document.write("D");
}

/*Switch*/
var fruittype = "這裡打水果";
switch (fruittype) {
    case "橘子":
        document.write("橘子一公斤 $50元 <br> ");
        break;
    case "蘋果":
        document.write("蘋果一公斤 $100元 <br> ");
        break;
    case "香蕉":
    case "鳳梨":
        document.write("香蕉跟鳳梨大特賣 <br> ");
        break;
    default:
        document.write("不好意思，沒有你要的" + fruittype + "。<br> ");
}

/*等第判斷*/
var score = score;
if (score >= 80) {
    document.write("A");
}
if (80 > score && || >= 70) {
    document.write("B");
}
if (70 > score && || 60) {
    document.write("C");
} else {
    document.write("D")
}

document.write(46)

/*迴圈 for*/
var total = 0;
for (var num = 3; num <= 103; num += 2) {
    total = total + num;
    document.write(total + "<br>");
}
/*迴圈 while??*/

var sum = 0;
var num = 1
var count = 0;
while (sum < 1000) {
    sum = sum + number;
    num += 2;
    count += 1;
    document.write("第" + count + "次" + "<br>");
    document.write(sum);
}

/*var""<<設定為字串*/
var ans = "1234";
var gue = "2345";
var countA = 0;
var countB = 0;
/*項次i=0(設定為0)，從0項抓到長度4，i=0的0是項次不是數字*/
for (var i = 0; i < ans.length; i += 1) {
    for (var j = 0; j < gue.length; j += 1) {
        if (ans[i] === gue[j]) {
            if (i === j) {
                countA += 1;
            } else countB += 1;
        }
    }
}

document.write(countA + "A" + countB + "B");



/*陣列*/
