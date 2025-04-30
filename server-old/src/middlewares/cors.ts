export default () => (req, res, next) => {


    //  Vite hosting 
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6273'); // example

    // Replace with actual frontend origin in production
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'HEAD, OPTIONS, GET, POST, PUT, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, X-Authorization'
    );
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    //TODO: add options for preflight
    next();
};
