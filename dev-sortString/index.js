module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        var qString = req.query.name;
        var stringArr =qString.split(',');

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "sort " + stringArr.sort()
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};