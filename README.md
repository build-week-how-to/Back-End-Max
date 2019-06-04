# Back-End-Max

//TABLE SETUP ⬇︎
exports.up = function(knex, Promise) {
    return knex.schema.createTable( 'users' , users => {
        users.increments();
        users
            .string( 'username' , 128 )
            .notNullable()
            .unique();
        users
            .string( 'password' , 128 )
            .notNullable();
    });
};

//DROP IF EXISTS ⬇︎
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists( 'users' );
};



//TABLE SETUP ⬇︎
exports.up = function(knex, Promise) {
    return knex.schema.createTable( 'howtos' , howto => {
        howto.increments();
        howto.string( 'url' );
        howto.string( 'title' ).notNullable();
        howto.timestamps( true , true )
    })
};

//DROP IF EXISTS ⬇︎
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists( 'howtos' );
};



//TABLE SETUP ⬇︎
exports.up = function(knex, Promise) {
    return knex.schema.createTable( 'steps' , steps => {
        steps.increments()
        steps.integer( 'step' ).notNullable()
        steps.integer( 'howtoId' ).unsigned();
        steps.foreign( 'howtoId' ).references( 'id' ).on( 'howto' )
    });
};

//DROP IF EXISTS ⬇︎
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists( 'steps' );
};

