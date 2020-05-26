const { Product }= require('../models/product.model')

module.exports.list = (request, response) => {
    Product.find({})
    .then(product => {
        response.json(product);
    })
    .catch(err=>{
        response.status(400).json(err);
    })
}

module.exports.create = (request, response) =>{
    const {title, price, description} = request.body;
    Product.create({
        title, 
        price,
        description
    })
        .then(product => {
            response.json(product)
        })
        .catch(err=>{
            response.status(400).json(err)
        })
}   

module.exports.detail = (request, response) => {
    const {id}= request.params;
    Product.findOne({_id:id})
    .then(product => {
        response.json(product)
    })
    .catch(err => {
        response.status(400).json(err)
    })
}

module.exports.update = (request, response) => {
    const { id } = request.params;
    const {title, price, description} = request.body;
    Product.findOneAndUpdate({_id: id},{
        title,
        price,
        description
    },
        {
            new:true,
            useFundAndModify: true
        })
        .then(product =>{
            response.json(product)
        })
        .catch(err => {
            response.status(400).json(err)
        })
}
module.exports.delete = (request, response) => {
    const {id} = request.params;
    Product.deleteOne({_id:id})
    .then(deleteConfirmation => {
        response.json(deleteConfirmation);
    })
    .catch(err=>{
        response.json(err)
    })
}