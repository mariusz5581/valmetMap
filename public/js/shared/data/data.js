
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
/*var partIndex = 100000;
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
console.log(parts);*/

//ALUE 81
//Korilinja
parts[0].data = 'nr:a0009874744|x:384|y:336';
parts[1].data = 'nr:a0009875144|x:384|y:336';
parts[2].data = 'nr:a0009908411|x:384|y:336';
parts[3].data = 'nr:a0009912903|x:384|y:336';
parts[4].data = 'nr:a0009913003|x:384|y:336';
parts[5].data = 'nr:a0009913203|x:384|y:336';
parts[6].data = 'nr:a0009914703|x:384|y:336';
parts[7].data = 'nr:a0009915203|x:384|y:336';
parts[8].data = 'nr:a00099180411401|x:384|y:336';
parts[9].data = 'nr:a0019910270|x:384|y:336';
parts[10].data = 'nr:a2036370998|x:384|y:336';
