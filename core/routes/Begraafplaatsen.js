// Begraafplaatsen
// -------------------------------------
// @return: Oplijsting begraafplaatsen

exports.Begraafplaatsen = function(reg, res) {
  global.Pool.getConnection(function(err, Conn) {
    if(err) throw err;

    Conn.query('SELECT * FROM Begraafplaatsen', function(err, rows) {
      if(err) throw err;

      res.send(rows)
      // Close connection
      Conn.release();
    });
  });
}

exports.Begraafplaats = function(req, res) {
  global.Pool.getConnection(function(err, Conn) {
    if(err) throw err;

    // Get Param
    var ID = req.params.GID;

    Conn.query('SELECT * FROM Begraafplaatsen WHERE GID = ?', [ID], function(err, rows) {
      if(err) throw err;

      if(rows < 1) {
        res.send('There is no field for this ID');
      } else {
        res.send(rows)
        // Close connection
        Conn.release();
      }
    });
  });
}
