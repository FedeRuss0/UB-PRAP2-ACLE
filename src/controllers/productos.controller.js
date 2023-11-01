import {pool} from "../db.js";

export const getProductos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
        message: 'Algo anda mal'
     })
  }
}

export const getProducto = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos WHERE ID = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Producto no encontrado'
    })

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
}

export const createProductos = async (req, res) => {
    try {
        const {name, Precio, Stock, StockMinimo} = req.body
        const [rows] = await pool.query('INSERT INTO productos(name, Precio, Stock, StockMinimo) VALUES (?, ?, ?, ?)', [name, Precio, Stock, StockMinimo])
        res.send({
            id: rows.insertId,
            name,
            Precio,
            Stock,
            StockMinimo
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
}
export const updateProductos = async (req, res) => {
    try {
        const { id } = req.params
    const { name, Precio, Stock, StockMinimo } = req.body

    const [result] = await pool.query('UPDATE productos SET name = IFNULL(?, name), Precio = IFNULL(?, Precio), Stock = IFNULL(?, Stock), StockMinimo = IFNULL(?, StockMinimo) WHERE id = ?', [name, Precio, Stock, StockMinimo, id])

    console.log(result)

    if (result.affectedRows === 0) return res.status(404).json({ 
        message: 'Producto no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM productos WHERE id = ?', [id])

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
}

export const deleteProductos = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM productos WHERE id = ?', [req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Producto no encontrado'
    })

    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
}