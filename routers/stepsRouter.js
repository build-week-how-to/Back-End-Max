
//IMPORTS ⬇︎
const express = require( 'express' );
const Steps = require( '../data/helpers/stepModel' );
const Howtos = require( '../data/helpers/howtoModel' );
const router = express.Router();

//GET ALL STEPS FROM HOWTO ID ⬇︎
router.get( '/:id/steps' , async ( req , res ) => {
    try {
        const howtos = Howtos.getSteps( req.params.id );
        if ( howtos ) {
            res.status( 200 ).json( howtos );
        } else {
            res.status( 404 ).json({ Message: 'Steps not found' });
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Server error getting Steps' });
    }
});

//ADDING SETPS TO HOWTO ⬇︎
router.post( '/:id/actions' , async ( req , res ) )