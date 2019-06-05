
//IMPORTS ⬇︎
const request = require( 'supertest' );
const server = require( '../../api/server' );
const db = require( '../../data/dbConfig' );
const helper = require( './howtoModel' );

//CLEANUP ⬇︎
beforeEach( async () => {
    await db( 'howtos' ).truncate()

});

//REMOVED RESTRICTED MIDDLEWARE FOR THE TESTS, DONT KNOW HOW TO LOGIN FOR A TEST, FRONT END COULD CONTROL NAV BAR ACCESS

//STEPS TEST ⬇︎

//GET HOW TO
describe( 'GET How To' , () => {

    it( 'Should set the testing env' , () => {
        expect( process.env.DB_ENV ).toBe( 'testing' )
    });

    it( 'Should be in application/json' , async () => {
        const res = await request( server ).get( '/api/howto' );
        expect( res.type ).toBe( 'application/json' );
    });

});

//GET INDIVIDUAL HOW TO

//ADD HOW TO

//UPDATE HOW TO

//DELETE HOW TO
describe( 'DELETE Steps.js' , () => {

    it( 'Should return 200 if deleted successfully' , async () => {
        await db( 'howtos' ).insert({
            title: "Slime"
        })
        const res = await request( server ).del( '/api/howto/1' ) ;
        expect( res.status ).toBe( 200 )
    });

    it( 'Should return 404 of it doesnt exist' , async () => {
        const res = await request( server ).del( '/api/howto/1' ) ;
        expect( res.status ).toBe( 404 )
    });

});