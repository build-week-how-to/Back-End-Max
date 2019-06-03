
//IMPORTS ⬇︎
const express = require( 'express' );
const Howtos = require( '../data/helpers/howtoModel' );
const router = express.Router();

//GET ALL HOWTOS ⬇︎
router.get( '/' , async ( req , res ) => {
    try {
        const howtos = await Howtos.get( req.query.id );
        if( howtos ) {
            res.status( 200 ).json( howtos );
        } else {
            res.status( 404 ).json({ message: 'How Tos Not Found, no server error though. Probrably just has no How Tos' });
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Server Error Getting How Tos' });
    }
});

//GET HOWTO BY ID ⬇︎
router.get( '/:id' , async ( req , res ) => {
    try {
        const howtos = await Howtos.get( req.query.id );
        if ( howtos ) {
            res.status( 200 ).json( projects );
        } else {
            res.staus( 404 ).json({ message: "How To doesn't exist" });
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Server Error Getting How Tos' });
    }
});

//DELETE A HOW TO PROJECT ⬇︎
router.delete( '/:id' , async ( req , res ) => {
    try {
        const howto = await Howtos.remove( req.body.id );
        if ( count > 0 ) {
            res.status( 201 ).json({ message: 'Successfully Deleted' });
        } else {
            res.status( 404 ).json({ message: 'HowTo not found' });
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Server Error Deleting HowTo' });
    }
});

//UPDATE HOWTO ⬇︎
router.put( '/:id' , async ( req , res ) => {
    try {
        const howto = await Howtos.update( req.params.id )
    }
})