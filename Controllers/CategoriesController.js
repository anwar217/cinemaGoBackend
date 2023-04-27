
// Importer le modèle de catégorie
const Categorie = require('../Models/CategoriesModel');

// Définir la fonction pour récupérer toutes les catégories
exports.getCategories = async (req, res) => {
try {
const categories = await Categorie.find('movies');
res.status(200).json(categories);
} catch (error) {
console.error(error);
res.status(500).send('Error getting categories');
}
};
