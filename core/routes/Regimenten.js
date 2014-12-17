// Regimenten
// -------------------------------------
// @return: oplijsting alle regimenten

exports.Regimenten = function(reg, res) {
  global.Pool.getConnection(function(err, Conn) {
    if(err) throw err;

    Conn.query('SELECT * FROM Regimenten', function(err, rows) {
      if(err) throw err;

      res.send(rows)
      // Close connection
      Conn.release();
    });
  });
}

// Single regiment
// --------------------------------------
// Oplijsting gegevens van een regiment

exports.SingleRegiment = function(req, res) {
  global.Pool.getConnection(function(err, Conn) {
    if(err) throw err;

    // Get Param
    var ID = req.params.regiment_id;

    Conn.query('SELECT * FROM Regimenten WHERE ID = ?', [ID], function(err, rows) {
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
