const mongoose = require('mongoose');

// Configurate tool mongoose to conet mongodb
mongoose
  .connect('mongodb://localhost/smsdb', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((db) => console.log('\n<-- Data Base is Connected!-->\n'))
  .catch((err) => console.error(`\n<-- Data Base is NOT Connected! ERROR--> ${err}\n`));
