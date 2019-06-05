
//IMPORTS ⬇︎
const request = require( 'supertest' );
const Users = require( '../users/usersModel' );
const db = require( '../../data/dbConfig' );
const server = require( '../../api/server' );

//CLEANUP ⬇︎
beforeEach( async ( ) => {
    await db( 'users' ).truncate();
});

//REGISTER TESTS ⬇︎

describe( 'REGISTER' , () => {

    it('Should return length of 1', async () => {
        const steps = await Users.add({
            username: "Space",
            password: "Invader"
        });
        expect( steps.id ).toBe( 1 );
    }); 

})

//LOGIN TESTS ⬇︎
describe('LOGIN', () => {

    it( 'Should return status 404 if user doesnt exist' , async () => {
        await db( 'users' ).insert({
            username: 'max',
            password: 'gunter'
        })
        const res = await request( server )
            .put( '/login' )
            .send({
                username: 'tim',
                password: 'ginter'
            })
        expect( res.status ).toBe( 404 )
    });

});