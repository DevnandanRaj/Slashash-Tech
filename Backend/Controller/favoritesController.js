const db = require("../Connection/db");

exports.getFavorites = (req, res) => {
  const query = 'SELECT * FROM favorites';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching favorites:', error);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    res.json(results);
  });
};

exports.saveFavorite = (req, res) => {
  const { title, year, type, poster } = req.body;
  const query = 'INSERT INTO slashashtech.favorites (title, year, type, poster) VALUES (?, ?, ?, ?)';
  db.query(query, [title, year, type, poster], (error, results) => {
    if (error) {
      console.error('Error saving favorite:', error);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    res.status(201).json({ message: 'Favorite saved successfully' });
  });
};
