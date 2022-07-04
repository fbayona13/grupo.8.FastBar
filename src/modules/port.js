const port = process.env.PORT || 3000;
const callback = () => console.log ('Server started at htttp://loalhost:' + port);

module.exports = {port, callback}