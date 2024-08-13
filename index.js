const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./middleware/passport');  // Correctly imported passport

const app = express();

app.use(bodyParser.json());  // Correct use of body-parser middleware
app.use(passport.initialize());  // Correct use of passport.initialize()

app.use('/api', require('./routes/auth'));  // Make sure this is importing a router object
app.use('/api', require('./routes/profile'));  // Make sure this is importing a router object

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
