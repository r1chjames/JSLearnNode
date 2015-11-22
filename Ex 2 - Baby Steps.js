var args = [];
var output = 0;

console.log(process.argv[2] + process.argv[3] + process.argv[4]);

for (var i = 2; i < process.argv.length; i++) {
    args[i] = +process.argv[i];
    console.log(args[i]);
};

for (var i = 0; i < args.length; i++) {
    output += +args[i];
};

console.log(output);
