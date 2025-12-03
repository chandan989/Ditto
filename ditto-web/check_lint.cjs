const fs = require('fs');

try {
    const report = JSON.parse(fs.readFileSync('lint_report.json', 'utf16le'));
    const errors = report.filter(result => result.errorCount > 0);

    errors.forEach(result => {
        console.log(`File: ${result.filePath}`);
        result.messages.forEach(msg => {
            if (msg.severity === 2) { // 2 is error
                console.log(`  Line ${msg.line}: ${msg.message} (${msg.ruleId})`);
            }
        });
    });
} catch (e) {
    console.error("Error parsing report:", e);
}
