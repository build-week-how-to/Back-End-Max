
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
router.get( '/:id/actions' , async ( req, res ) => {
    try {
        const project = await Projects.getProjectActions( req.params.id );
        if ( project ) {
            res.status( 200 ).json( project );
        } else {
            res.status( 404 ).json({ message: 'Actions not found' })
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Error getting the Actions' });
    } 
});

//ADDING PROJECTS ACTIONS
router.post( '/:id/actions' , async ( req, res ) => {
    const project = { ...req.body, project_id: req.params.id }
    if (req.body.description.length > 128) {
        // console.log( 'message is too long (Over 128 characters)' )
        res.status( 400 ).json({ message: 'message is too long (Over 128 characters)' })
    } else {
        try {
            const actions = await Actions.insert( project );
            res.status( 201 ).json( actions );
        } catch ( error ) {
            console.log( error );
            res.status( 500 ).json({ message: 'Server Error Adding Action' });
        }
    }
});

//REMOVING ACTIONS
router.delete( '/:id/actions', async ( req, res ) => {
    try {
        const count = await Actions.remove( req.body.id );
        if ( count > 0 ) {
            res.status( 201 ).json({ message: 'Delete Action Success' });
        } else {
            res.status( 404 ).json({ message: 'No Actions left to Delete' });
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Server Error With Deleting Action' });
    }
});

//UPDATING ACTIONS
router.put( '/:id/actions' , async ( req, res ) => {
    try {
        const action = await Actions.update( req.body.id, req.body );
        if ( action ) {
            res.status( 200 ).json( action );
        } else {
            res.status( 404 ).json({ message: 'Action Not Found' });
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Server Error Updating Action' });
    }
});

module.exports = router;
