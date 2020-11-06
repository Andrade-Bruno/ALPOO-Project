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

exports.SelectAll = (req, res, next) => {
    User.findAll ()
        .then(user => {
            if(user) {
                res.status(status.OK).send(user);
            }
        })
        .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(user => {
            if (user) {
                res.status(status.OK).send(user);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.body.id;
    const userName = req.body.userName;
    const salary = req.body.salary;
    const birthday = req.body.birthday;
    const active = req.body.active;

    User.findByPk(id)
        .then(user => {
            if (user) {
                user.update({
                    userName: userName,
                    salary: salary,
                    birthday: birthday,
                    active: active
                },
                    {
                        where: {id: id}
                    })
                    .then( () => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
}

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(user => {
            if (user) {
                user.destroy({
                    where: {id: id}
                })
                    .then ( () => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};