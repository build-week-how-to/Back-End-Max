
//TABLE SETUP ⬇︎
exports.up = function(knex, Promise) {
    return knex.schema.createTable( 'howto' , howto => {
        howto.increments();
        howto
            .string( 'url' , 128 )
            .unique();
        howto
            .string( 'title' , 128 )
            .notNullable();
        howto
            .number( 'likes' ).defaultTo( 0 )
    })
};

//DROP IF EXISTS ⬇︎
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists( 'howto' );
};
