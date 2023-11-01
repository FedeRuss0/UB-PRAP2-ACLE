import {pool} from "../db.js";

export const getUsuarios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
        message: 'Algo anda mal'
     })
  }
}

export const getUsuario = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE ID = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Usuario no encontrado'
    })

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
}

export const createUsuarios = async (req, res) => {
    try {
        const {name, Apellido, Email, ContraseñaHash, Rol} = req.body
        const [rows] = await pool.query('INSERT INTO usuarios(name, Apellido, Email, ContraseñaHash, Rol) VALUES (?, ?, ?, ?, ?)', [name, Apellido, Email, ContraseñaHash, Rol])
        res.send({
            id: rows.insertId,
            name,
            Apellido,
            Email,
            ContraseñaHash,
            Rol
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
}
export const updateUsuarios = async (req, res) => {
    try {
        const { id } = req.params
    const { name, Apellido, Email, ContraseñaHash, Rol } = req.body

    const [result] = await pool.query('UPDATE usuarios SET name = IFNULL(?, name), Apellido = IFNULL(?, Apellido), Email = IFNULL(?, Email), ContraseñaHash = IFNULL(?, ContraseñaHash), Rol = IFNULL(?, Rol) WHERE id = ?', [name, Apellido, Email, ContraseñaHash, Rol, id])

    console.log(result)

    if (result.affectedRows === 0) return res.status(404).json({ 
        message: 'Usuario no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id])

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
}

export const deleteUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?', [req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Usuario no encontrado'
    })

    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
}