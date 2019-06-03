
//IMPORTS ⬇︎
const db = require( '../dbConfig' );
const mappers = require( './mappers' );

//EXPORTS ⬇︎
module.exports = {
    get,
    insert,
    update,
    remove,
    getSteps
}

//GET HOW TOS AND STEPS ⬇︎
function get( id ) {
    let query = db( 'howto as h' );

    if( id ) {
        query.where( 'h.id' , id ).first();

        const promises = [ query, this.getSteps( id ) ];

        return Promise.all( promises ).then( function( results ) {
            let [ howto , steps ] = results;

            if( howto ) {
                howto.steps = steps;
                return mappers.howtoToBody( howto );
            } else {
                return null;
            }
        });
    }

    return query.then( howtos => {
        return howtos.map( howtos => mappers.howtoToBody( howtos ));
    });
}

//ADD HOWTO ⬇︎
function insert( howto ) {
    return db( 'howto' )
        .insert( howto )
        .then(([ id ]) => this.get( id ));
}

//UPDATE HOWTO ⬇︎
function update( id , changes ) {
    return db( 'howto' )
        .where( 'id' , id )
        .update( changes )
        .then( count => ( count > 0 ? this.get( id ) : null ));
}

//DELETE HOWTO ⬇︎
function remove( id ) {
    return db( 'howto' )
        .where( 'id' , id )
        .del();
}

//GET STEPS FUNCTION ⬇︎
function getSteps( howtoId ) {
    return db( 'howto' )
        .where( 'howto_id' , howtoId )
        .then( steps => steps.map( step => mappers.stepsToBody( step )));
}