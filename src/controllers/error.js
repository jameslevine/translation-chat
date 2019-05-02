exports.client = (req, res) => {
  res
    .status(404)
    .render('404')
};

exports.server = (err, req, res, next) => {
  console.log(err.message , 'This is err in controller error.js');
  res
    .status(500)
    .render('500');
};

