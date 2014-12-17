// Index
// -------------------------------------
// @return: fornt pagina van de api

exports.Index = function(req, res) {
  res.send('This highly trained Monkey is up and running!');
  console.log(req.method, req.url);
}
