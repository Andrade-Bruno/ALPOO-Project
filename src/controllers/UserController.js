// Define a utilização do model usuario e a dependência http-status
const User = require('../models/user');

const status = require('http-status');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const userName = req.body.userName;
    const salary = req.body.salary;
    const birthday = req.body.birthday;
    const active = req.body.active;
 
    // Popula cada um dos campos do model com os campos recebido na request
    User.create({
        userName: userName,
        salary: salary,
        birthday: birthday,
        active: active,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(user => {
            if (user) {
                res.status(status.OK).send(user);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};
