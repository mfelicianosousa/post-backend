const User = require('../models/user.model');

module.exports = {
  async index(req, res) {

    try{
      const user = await User.find();
      return res.json( user );

    } catch(error){
      return res.status(500).json({message: error.message})
    }
 
  },
  async create(req, res) {

    const { nome, email, password, type_user } = req.body;

    try {
      // Aguarde a conclusão da Promise retornada por findOne
      const user = await User.findOne({ email });

      if (!user) {
        const userData = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          type_user: req.body.type_user,
        });

        const newUser = await userData.save();
        return res.status(201).json(newUser);
      } else {
        return res.status(500).json({ message: 'User already exists' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  },
 

};