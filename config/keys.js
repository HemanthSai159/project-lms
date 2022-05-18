
dbPassword ='mongodb+srv://userlog:' + encodeURIComponent('12345') + '@userlogins.gkbt5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
module.exports = {
    mongoURI: dbPassword
};
