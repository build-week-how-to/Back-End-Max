
//IMPORTS ⬇︎
const express = require( 'express' );
const helmet = require( 'helmet' );
const morgan = require( 'morgan' );
const cors = require( 'cors' );
const server = express();

//GLOBAL MIDDLEWARE
server.use( express.json());
server.use( helmet());
server.use( morgan('short'));
server.use( cors());

//SANITY CHECk ⬇︎
server.get( '/' , ( req , res ) => {
    res.send( 'Sup ✌🏼 -Server' )
});

//EXPORTS ⬇︎
module.exports = server;
