const timer = process.argv.slice(2);
for(let num of timer) {
    if(isNaN(Number(num)) || Number(num) < 0) {
        continue;
    }
    setTimeout(()=> {
        process.stdout.write('\x07')
    }, Number(num) * 1000)
}