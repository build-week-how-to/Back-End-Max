
//IMPORTS ⬇︎
const db = require( '../dbConfig' );
const mappers = require( './mappers' );

//EXPORTS ⬇︎
module.exports = {

    //GET STEPS ⬇︎
    get: function( id ) {
        let query = db( 'steps' );

        if( id ) {
            return query
                .where( 'id' , id )
                .first()
                .then( step => mappers.stepsToBody( step ));
        }

        return query.then( steps => {
            return steps.map( step => mappers.stepsToBody( step ));
        });
    },

    //ADD STEP ⬇︎
    insert: function( step ) {
        return db( 'steps' )
            .insert( step )
            .then(([ id ]) => this.get( id ));
    },

    //UPDATE STEP ⬇︎
    update: function( id , changes ) {
        return db( 'steps' )
            .where( 'id' , id )
            .update( changes )
            .then( count => ( count > 0 ? this.get.get( id ) : null ));
    },

    //DELETE STEP ⬇︎
    remove: function( id ) {
        return db( 'steps' )
            .where( 'id' , id )
            .del();
    }
    
};