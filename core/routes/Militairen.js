// Genseuvelden
// -------------------------------------
// @return: oplijsting alle genseuvelde militairen

exports.Gesneuvelden = function(reg, res) {
  global.Pool.getConnection(function(err, Conn) {
    if(err) throw err;

    Conn.query('SELECT * FROM Gesneuvelde', function(err, rows) {
      if(err) throw err;

      res.send(rows)
      // Close connection
      Conn.release();
    });
  });
}
