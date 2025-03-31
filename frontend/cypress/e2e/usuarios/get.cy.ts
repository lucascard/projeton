interface User {
    id: number;
    username: string;
    email: string;
}
describe('Get Users Tests', () => {
    it('Deve listar todos os usuários com sucesso', () => {
        cy.request('GET', 'http://localhost:3000/users').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            response.body.forEach((user: User) => { // Define o tipo do parâmetro
                expect(user).to.have.property('id');
                expect(user).to.have.property('username');
                expect(user).to.have.property('email');
            });
        });
    });
});