import express from 'express'
import productosRoutes from './Routes/productos.routes.js'
import usuariosRoutes from './Routes/usuarios.routes.js'
import indexRoutes from "./Routes/index.routes.js";


const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', productosRoutes)
app.use('/api/2', usuariosRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Pagina no encontrada'
    })
}) 

export default app;