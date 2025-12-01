try {
    const path = require.resolve("@openzeppelin/contracts/access/Ownable.sol");
    console.log("Found:", path);
} catch (e) {
    console.error("Error:", e.message);
}
