const User=require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register=async(req,res)=>{
    const {username,password,email}=req.body
    try{
        const exist=await User.findOne({email})
        if(exist){
            res.json("User already exist")
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=await User.create({username,email,password:hashedPassword});
        res.status(201).json({
            message: 'User registered successfully',
            user: {
              id: newUser._id,
              username: newUser.username,
              email: newUser.email,
            }
          });
    }catch(error){
     res.status(500).json({error:error.message});
    }
}
exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.status(200).json({
        message: 'User login successful',
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        }
      });
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  