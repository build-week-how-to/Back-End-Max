
//IMPORTS ⬇︎
const request = require( 'supertest' );
const Steps = require( './stepModel' );
const db = require( '../../data/dbConfig' );
const server = require( '../../api/server' );

//CLEANUP ⬇︎
beforeEach( async () => {
    await db( 'steps' ).truncate()
})

//REMOVED RESTRICTED MIDDLEWARE FOR THE TESTS, DONT KNOW HOW TO LOGIN FOR A TEST, FRONT END COULD CONTROL NAV BAR ACCESS

//STEPS TEST ⬇︎

//GET HOW TO
describe( 'GET Steps.js' , () => {

    it( 'Should set the testing env' , () => {
        expect( process.env.DB_ENV ).toBe( 'testing' )
    });

    it( 'Should be in application/json' , async () => {
        const res = await request( server ).get( '/api/steps' );
        expect( res.type ).toBe( 'application/json' );
    })

});

//ADD HOW TO
describe( 'INSERT Steps.js' , () => {

    it('Should return length of 1', async () => {
        const steps = await Steps.add({
            step: "Space Invaders",
            howtoId: 1
        });
        expect( steps.id ).toBe( 1 );
    });

    it('Should return 406 if missing info', async () => {
        const res = await request( server ).post( '/api/steps' , {
            step: "Space Invaders"
        })
        expect( res.status ).toBe( 406 )
    });

});


//UPDATE HOW TO

//DELETE HOW TO
describe( 'DELETE Steps.js' , () => {

    it( 'Should return 200 if deleted successfully' , async () => {
        await db( 'steps' ).insert({
            step: "Slime",
            howtoId: 1
        })
        const res = await request( server ).del( '/api/steps/1' ) ;
        expect( res.status ).toBe( 200 )
    });

    it( 'Should return 404 of it doesnt exist' , async () => {
        await db( 'steps' ).insert({
            step: "Slime",
            howtoId: 1
        })
        const res = await request( server ).del( '/api/steps/2' ) ;
        expect( res.status ).toBe( 404 )
    });

});