class Parts {
    constructor() {
        this.data = 'none';
        this.x;
        this.y;
        this.partSeries = 'z';
        this.partNr;
        this.assembly01;
        this.assembly02;
        this.assembly03;
        this.assembly04;
        this.assembly05;
    }
}

function getRandomInt(min, max) {
    var result = Math.floor(Math.random() * Math.floor(max));
    if(result < min){
        result = min;
    }
    if (result> max){
        result = max;
    }
    return result;
}
var partIndex = 100000;
var parts = [];
for (var i = 0; i < 100000; i++) {
    parts[i] = new Parts();
    var nr = 'Z00' + partIndex;
    partIndex++;
    var x= getRandomInt(40,950);
    var y= getRandomInt(40,470);
    parts[i].data = 'nr:' + nr + '|x:' + x + '|y:' + y;
    parts[i].partSeries = 'Z';
    parts[i].partNr = nr;
    parts[i].x = x;
    parts[i].y = y;

}
console.log(parts);
/*
parts[0].data = 'nr:a1776376500|x:615|y:375';
parts[1].data = 'nr:a1776201100|x:437|y:359';
parts[2].data = 'nr:a1778810500|x:576|y:400';
parts[3].data = 'nr:a1776264400|x:438|y:381';
parts[4].data = 'nr:a1776104500|x:492|y:360';
parts[5].data = 'nr:a1776104600|x:492|y:360';
parts[6].data = 'nr:a1776110200|x:551|y:357';
parts[7].data = 'nr:a1776103900|x:551|y:357';
parts[8].data = 'nr:a1776207500|x:467|y:372';
parts[9].data = 'nr:a1776101802|x:526|y:366';
parts[10].data = 'nr:a1776370200|x:582|y:357';
parts[11].data = 'nr:a1776303600|x:568|y:367';
parts[12].data = 'nr:a1778810600|x:576|y:408';
parts[13].data = 'nr:a1776375900|x:560|y:364';
parts[14].data = 'nr:a1776103200|x:504|y:404';
parts[15].data = 'nr:a1776370100|x:608|y:356';
parts[16].data = 'nr:a1776307700|x:560|y:364';
parts[17].data = 'nr:a1776206201|x:437|y:370';
*/