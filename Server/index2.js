const Sequelize = require('sequelize');
const { UserTables } = require('./models');
app.post('/userTables', async (req, res) => {
    
    const { userId, email, password } = req.body;
    const newUser = await User.create({
        userId,
        email,
        password
    });
    
 
    res.json({
        id: newUser.id
    });
})
app.get('/userTables', async (req, res) => {
    const userTables = await UserTables.findAll();
    res.json(userTables);
});
app.get('/userTables/by-userId', async (req, res) => {
    const userTables = await UserTables.findAll({
        attributes: ['userId']
    });
    res.json(userId);
})
app.get('/userId/:id', async (req, res) => {
    try{
        const oneUser = await UserTable.findByPk(req.params.id);
        res.json(oneUser);
    } catch (e) {
        console.log(e);
        res.status(404).json({
            message: 'User not found'
        });
    }
});
app.post('/userTables/search', async (req, res) => {
    const userTables = await UserTables.findAll({
        where: {
            email: req.body.term,
        }
    });
    res.json(userTables);
});
app.post('/userTables/search', async (req, res) => {
    const userTables = await UserTables.findAll({
        where: {
            [Sequelize.Op.or]: [
                { 
                    userId: req.body.term,
                    email: req.body.term
                }
            ]
        }
    });
    res.json(userTables);
});
app.post('/userTables/:id', async (req, res) => {
    const { id } = req.params;
    
    
    const updatedUserTables = await updatedUserTables.update(req.body, {
      where: {
        id
      }
    });
    
    res.json(updatedUser);
});
app.delete('/user/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.destroy({
        where: {
            id
        }
    });
    res.json(deletedUser);
});
