require('dotenv').config();
const Connect = require('./configs/db');
const app = require('./index');

const PORT = process.env.PORT || 3000;

Connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to DB or start server:", err);
    process.exit(1);
  });
