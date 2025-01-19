import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try {
        const {token} = req.headers
        if(!token){
            return res.json({success:false, message:"Not Authorized. Login Again"})
            //we use return statement here to stop the function from executing on the spot if success = false
        }

        //decoding the token to get the email and password from which it was created
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        //verifying the email and password retreived
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            
            return res.json({success:false, message:"Not Authorized. Login Again"})
        }
        next()

    } catch (error) {
        res.json({success:false, message: error.message})
    }
} 

export default adminAuth