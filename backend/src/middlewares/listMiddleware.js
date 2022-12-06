const checkBody = (req, res, next) => {

    const {body} = req;

    if (body.title == undefined) {
        return res.status(400).json({message: 'O campo título é necessário!'});
    };

    if (body.title == ''){
        return res.status(400).json({message: 'Você precisa digitar um título'})
    };

    next();

}





module.exports ={

    checkBody

}