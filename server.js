const apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`server now on port ${PORT}!`);
});

router.post('/animals', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  
    if (!validateNote(req.body)) {
      res.status(400).send('The note is not properly formatted.');
    } else {
      const note = createNewNote(req.body, notes);
      res.json(note);
    }
  });