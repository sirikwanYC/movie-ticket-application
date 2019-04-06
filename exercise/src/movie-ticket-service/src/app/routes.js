const route = (server) => {
    server.get('/hello', (req, res) => {
        res.send('hello')
    })
}

 export default route
 