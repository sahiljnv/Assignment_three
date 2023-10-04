export const condition = (password, email)=>{
        
    if (!password.length > 0) {
        return false;
    }
    if(!email.length > 0){
        return false;
    }

    if ((password.length >= 8 && email.length >= 11)){
        return true;
    }
    
    return false;


}
