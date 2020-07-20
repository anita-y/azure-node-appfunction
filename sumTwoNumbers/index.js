module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('body::',req.body);
    var num1 =  parseInt(req.query.num1);
    var num2 =  parseInt(req.query.num2);

    if(num1 == null && num2 == null){
        return context.res ={
            status: 400,
            body : "Please pass both the numbers"
        }
    }
    if(num1 == null && num2 != null){
        return context.res ={
            status: 400,
            body : "Please pass num1"
        }
    }
    if(num1 != null && num2 == null){
        return context.res ={
            status: 400,
            body : "Please pass num2"
        }
    }
    //const name = (req.query.name || (req.body && req.body.name));
    //const responseMessage = name
    //    ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //    : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    var sum = num1 + num2;
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: sum
    };
}