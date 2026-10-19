import dns from "node:dns";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dns.setServers(["1.1.1.1"]);

const PORT = 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB");
    console.error(error.message);
    process.exit(1);
  });