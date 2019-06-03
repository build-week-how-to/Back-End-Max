
//TABLE SETUP ⬇︎
exports.up = function(knex, Promise) {
    return knex.schema.createTable( 'steps' , steps => {
        steps.increments()
        steps
            .integer( 'howto_id' )
            .unsigned()
            .notNullable()
            .references( 'id' )
            .inTable( 'howto' )
            .onDelete( 'CASCADE' )
            .onUpdate( 'CASCADE' )
        steps
            .string( 'description' , 128 ).notNullable();
    });
};

//DROP IF EXISTS ⬇︎
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists( 'steps' );
};
