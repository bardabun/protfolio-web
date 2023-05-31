const express = require("express");
const product = require("./api/product");
const app = express();

const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
// app.use((req, res, next) => {
//   console.log("Setting CORS headers");
//   res.set(
//     "Access-Control-Allow-Origin",
//     "https://bardabun.vercel.app, http://localhost:3000"
//   );
//   res.set(
//     "Access-Control-Allow-Methods",
//     "GET, HEAD, POST, PUT, DELETE, PATCH"
//   );
//   res.set("Access-Control-Allow-Headers", "Content-Type");
//   next(); //used to pass control to the next middleware function in the request-response cycle
// });

app.use("/api/product", product);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
