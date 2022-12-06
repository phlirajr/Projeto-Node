const connection = require ('./connection');

const getAll = async () => {   

    const [movies] = await connection.execute('SELECT * FROM movies');
    return movies;
};

const addMovie = async (movie) =>{

    const {title, genre, ano ,director, actors} = movie; 

    const query = 'INSERT INTO movies(title, ano, director, actors) VALUES (?, ?, ?, ?, ?)' 

    const [addedMovie] = await connection.execute(query, [title, genre, ano, director, actors]);

    return addedMovie;
};

const deleteMovie = async (id) => {

    const removedMovie = await connection.execute('DELETE FROM movies WHERE id = ?', [id]);
    return removedMovie;
    

};

const updateMovie = async (id, movie) => {

    const {title} = movie;

    const query = 'UPDATE movies SET title = ? WHERE id = ?'; 
    const updatedMovie = await connection.execute(query, [title, id]);
    return updatedMovie;
    

};


module.exports = {
    getAll,
    addMovie,
    deleteMovie,
    updateMovie
}