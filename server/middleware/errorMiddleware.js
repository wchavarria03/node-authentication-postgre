var messages = require('../utils/errorMessages');

module.exports = function() {
  return function(err, req, res, next){
    if(err.name === 'UnauthorizedError'){
      return res.status(401).send(
        {
          errors : [{status:401, message: messages.invalidToken.message, code: messages.invalidToken.code}]
        }
      );

    } else if(err){
      return res.status(500).send(
        {
          errors : [{status:500, message: err, code: '0'}]
        }
      );
    }

    //console.error(err.stack);
    return res.status(500).send(
      {
        errors : {status:500, message: messages.fatalError.message, code: messages.fatalError.code}
      }
    );
  };
};