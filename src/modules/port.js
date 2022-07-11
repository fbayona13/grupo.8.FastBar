const port = process.env.PORT || 3000;
const callback = () => console.log ('Server started at htttp://localhost:' + port);

module.exports = {port, callback}