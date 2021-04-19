var db = require("../models");
var db_test = db.Test;
// var db_class=db.Class;
//get list
exports.get_List_Test= function (req, res) {
    db_test.findAll({
        // include: [{
        //     model: db.Class, as: "Id_Grade"
        // }]
    }).then(details => {
        res.status(200).json({
            success: 'true',
            details
        })
    });
};
