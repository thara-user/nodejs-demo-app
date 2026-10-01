const http = require("http");
const assert = require("assert");

const options = {
  hostname: "localhost",
  port: 3001,
  path: "/health",
  method: "GET"
};

const request = http.request(options, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    try {
      assert.strictEqual(response.statusCode, 200);

      const result = JSON.parse(data);
      assert.strictEqual(result.status, "healthy");

      console.log("✅ Test passed: /health endpoint is healthy");
      process.exit(0);
    } catch (error) {
      console.error("❌ Test failed");
      console.error(error.message);
      process.exit(1);
    }
  });
});

request.on("error", (error) => {
  console.error("❌ Test failed:", error.message);
  process.exit(1);
});

request.end();
