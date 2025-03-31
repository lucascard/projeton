describe('Create User Tests', () => {
    it('Deve criar um usuário com sucesso', () => {
        cy.request('POST', 'http://localhost:3000/users', {
            username: 'John Doe',
            email: 'john.doe@example.com',
            password: '123456'
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            expect(response.body.username).to.eq('John Doe');
            expect(response.body.email).to.eq('john.doe@example.com');
        });
    });
});