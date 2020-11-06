// Define a utilização do model usuario e a dependência http-status
const Product = require('../models/product');
const status = require('http-status');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const productName = req.body.productName;
    const productCategory = req.body.productCategory;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const available = req.body.available;
 
    // Popula cada um dos campos do model com os campos recebido na request
    Product.create({
        productName: productName,
        productCategory: productCategory,
        price: price,
        quantity: quantity,
        available: available,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(product => {
            if (product) {
                res.status(status.OK).send(product);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Product.findAll ()
        .then(product => {
            if(product) {
                res.status(status.OK).send(product);
            }
        })
        .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then(product => {
            if (product) {
                res.status(status.OK).send(product);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.body.id;
    const productName = req.body.productName;
    const productCategory = req.body.productCategory;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const available = req.body.available;

    Product.findByPk(id)
        .then(product => {
            if (product) {
                product.update({
                    productName: productName,
                    productCategory: productCategory,
                    price: price,
                    quantity: quantity,
                    available: available
                },
                    {
                        where: {id: id}
                    })
                    .then( () => {
                        res.status(status.OK) .send();
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

    Product.findByPk(id)
        .then(product => {
            if (product) {
                product.destroy({
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