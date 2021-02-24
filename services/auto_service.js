const { models } = require('../configs/database')
const sequelize = require('../configs/database')

async function getAutos() {
    let result = await models.Auto.findAll();
    if (!result) {
        return { statusCode: 404, message: "No se encontraron resultados" }
    }
    return { statusCode: 202, response: result };

}

async function saveAutos(body) {
    let result = await models.Auto.create(body);
    if (!result) {
        return { statusCode: 404, message: "No se pudo realizar el registro" }
    }
    return { statusCode: 202, response: "Registro exitoso!" };
}

async function updateAutos(body) {
    try {
        if (!body.idauto) {
            return { statusCode: 400, message: "No ha especificado el id a actualizar" }
        }
        let result = await models.Auto.findOne({ where: { idauto: body.idauto } });
        if (!result) {
            return { statusCode: 400, message: "No existe un registro con ese id: " + body.idauto }
        }
        let result1 = await models.Auto.update(
            {
                placa: body.placa,
                modelo: body.modelo,
            }, {
            where: {
                idauto: body.idauto
            }
        });

        if (!result1) {
            return { statusCode: 400, message: "Error al actualizar" }
        } else {
            return { statusCode: 200, message: "Modificado exitosamente" }
        }

    } catch (error) {
        console.error(error)
        return { statusCode: 500, message: "No se puede actualizar el registro: " + body.id }
    }
}

async function deleteAutos(idauto) {
    try {
        let result = await models.Auto.destroy({
            where: {
                idauto
            }
        });
        if (result) {
            return { statusCode: 202, message: "Eliminado" }
        } else {
            return { statusCode: 404, message: "No existe" }
        }
    } catch (error) {
        console.error(error)
        return { statusCode: 500, message: "No se elimino" }
    }
}

module.exports = {
    getAutos,
    saveAutos,
    updateAutos,
    deleteAutos
}