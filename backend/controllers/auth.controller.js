export const login = (req,res)=>{
      res.send('login route')
    console.log('login route')
} 

export const logout = (req,res)=>{
    res.send('logout route');
    console.log('logout');
}
export const signup = (req,res)=>{
    try{
        const {fullName,userName,password,confirmPassword,gender} =req.body; 
    } catch(error){
        
    }
 
}