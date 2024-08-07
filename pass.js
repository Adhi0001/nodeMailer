const bcrypt = require('bcrypt');
const saltRounds=10;
var password = "uhgaiugaiugalgh";

bcrypt.genSalt(saltRounds,function(err,salt){
if(err){
    console.log("error gentaring salts",err)
}else{
console.log("password hased successfully")
}
bcrypt.hash(password, salt, function(err, hash) {
    if(err){
        console.log("error hashing password",err)
    }else{
    console.log("password hased successfully",hash)
    }
    });
});
