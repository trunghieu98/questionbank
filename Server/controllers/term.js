var db = require("../models");
var db_term = db.Term;
// var db_class=db.Class;
//get list
exports.get_List_Term = function (req, res) {
    db_term.findAll({
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