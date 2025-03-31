describe('Delete User Tests', () => {
    it('Deve deletar um usuário com sucesso', () => {
        // Primeiro, cria um usuário para deletar
        cy.request('POST', 'http://localhost:3000/users', {
            username: 'User to Delete',
            email: 'delete.me@example.com',
            password: '123456'
        }).then((createResponse) => {
            const userId = createResponse.body.id;

            // Agora, deleta o usuário criado
            cy.request('DELETE', `http://localhost:3000/users/${userId}`).then((deleteResponse) => {
                expect(deleteResponse.status).to.eq(200);
                expect(deleteResponse.body.message).to.eq('User deleted successfully');
            });

            // Verifica se o usuário foi realmente deletado
            cy.request({
                method: 'GET',
                url: `http://localhost:3000/users/${userId}`,
                failOnStatusCode: false // Não falha se o status for 404
            }).then((getResponse) => {
                expect(getResponse.status).to.eq(404);
            });
        });
    });

    it('Deve retornar erro ao tentar deletar um usuário inexistente', () => {
        const nonExistentUserId = 9999; // ID que não existe no banco de dados

        cy.request({
            method: 'DELETE',
            url: `http://localhost:3000/users/${nonExistentUserId}`,
            failOnStatusCode: false // Não falha se o status for 404
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body.error).to.eq('User not found');
        });
    });
});