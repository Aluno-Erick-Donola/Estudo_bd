export const routes = async (app) => {
    app.get('/', () => console.log('ok'))
    app.get('/produtos/:id', (request,response) => {
        console.log(request.params)
        return response.status(200).send({message: 'Requisição efetuada com sucesso!'})
    })
}