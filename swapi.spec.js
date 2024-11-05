test('Deve visualizar informações de cadastro, quando buscar por uma pessoa inexistente', async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/people/9999')
    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    })

});
const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar por uma pessoa existente', async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/people/9999')
    console.log( resposta.status);
    console.log( resposta.body);

});

test('Deve visualizar informações de cadastro, quando buscar por uma pessoa inexistente', async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/people/9999')
    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    })

});