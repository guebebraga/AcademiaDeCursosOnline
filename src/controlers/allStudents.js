const modeloUser = require("../models/users.js")

const get = async (req, res) => {
    try {
      allStudents = await modeloUser.allStudents()
      return res.status(200).json({ msj: "todos los estudiantes", allStudents: allStudents});  
    } catch (error) {
      return res.status(500).json({msj: "error inesperado"})
    }
  };

