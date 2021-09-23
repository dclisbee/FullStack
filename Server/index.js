const Sequelize = require('sequelize');
const { Products } = require('./models');
app.post('/products', async (req, res) => {
    
    const { title, price, image } = req.body;
    const newUser = await User.create({
        title,
        price,
        image
    });
    
 
    res.json({
        id: newUser.id
    });
})
app.get('/products', async (req, res) => {
    const products = await Products.findAll();
    res.json(products);
});
app.get('/products/by-title', async (req, res) => {
    const products = await Products.findAll({
        attributes: ['title']
    });
    res.json(products);
})
app.get('/products/:id', async (req, res) => {
    try{
        const oneUser = await Product.findByPk(req.params.id);
        res.json(oneUser);
    } catch (e) {
        console.log(e);
        res.status(404).json({
            message: 'Product not found'
        });
    }
});
app.post('/products/search', async (req, res) => {
    const products = await Product.findAll({
        where: {
            price: req.body.term,
        }
    });
    res.json(products);
});
app.post('/products/search', async (req, res) => {
    const products = await Product.findAll({
        where: {
            [Sequelize.Op.or]: [
                { 
                    title: req.body.term,
                    price: req.body.term
                }
            ]
        }
    });
    res.json(products);
});
app.post('/products/:id', async (req, res) => {
    const { id } = req.params;
    
    
    const updatedProduct = await Product.update(req.body, {
      where: {
        id
      }
    });
    
    res.json(updatedProduct);
});
app.delete('/product/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.destroy({
        where: {
            id
        }
    });
    res.json(deletedProduct);
});
