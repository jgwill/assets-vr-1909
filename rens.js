//Rename a sequence of file starting from a number and bring it to 1.
//ex.   0060-0100 will became 0001-0040
//

var pad = require('pad-number');

var args = process.argv.slice(2);
console.log(` -- Guillaume D.Isabelle Sequence Renamer, v0.0.1`);

if (args[0] == "--help" || args[0] == "--h" || args[0] == "-h" )
{
    console.log(`
    ===SYNOPSIS===
    ${process.argv.slice(0)[0]} [startNo] [ext] ([mv cmd])
    ex.
    rens 60 jpg
    rens 60 jpg "git mv"
    
    `);
}
else{
    runProgram();
}


function runProgram()
{
    
    var start = 60;
    var end = 89;
    var renamer =  args[2]? args[2] : "git mv";
    var spad = 4; //padding
    var ext = args[1]? args[1] : "jpg";
    var F = 4; //0000
    
    
    var c = 1;
    for (let i =  x = start; i < end; i++) {
        // console.log(pad(10, 4)); // '0010'
        var ofn = pad(i,spad) + `.${ext}`;
        var nfn = pad(c,spad) + `.${ext}`;
        
        console.log(`${renamer} ${ofn} ${nfn}`)
        
        
        c++;
        
    }
}