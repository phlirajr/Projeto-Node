const listModel = require('../models/listModels');

const getAll = async (_req, res) => {

    const movies = await listModel.getAll();

    return res.status(200).json(movies);
};

const addMovie = async (req, res) => {

    const addedMovie = await listModel.addMovie(req.body);
    return res.status(201).json(req.body);
}


const deleteMovie = async (req, res) => {

    const {id} = req.params;
    
    await listModel.deleteMovie(id);

    return res.status(204).json();

};

const updateMovie = async (req, res) => {

    const {id} = req.params;

   await listModel.updateMovie(id, req.body);
   return res.status(204).json();
    

};



module.exports = {

    getAll,
    addMovie,
    deleteMovie,
    updateMovie

}; 