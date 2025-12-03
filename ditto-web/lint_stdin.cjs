const fs = require('fs');

let data = '';
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    data += chunk;
});

process.stdin.on('end', function () {
    try {
        const report = JSON.parse(data);
        const errors = report.filter(result => result.errorCount > 0);

        const out = fs.createWriteStream('lint_errors_full.txt');
        errors.forEach(result => {
            out.write(`File: ${result.filePath}\n`);
            result.messages.forEach(msg => {
                if (msg.severity === 2) { // 2 is error
                    out.write(`  Line ${msg.line}: ${msg.message} (${msg.ruleId})\n`);
                }
            });
        });
        out.end();
    } catch (e) {
        console.error("Error parsing JSON:", e.message);
        console.log("Data received (first 100 chars):", data.substring(0, 100));
    }
});
