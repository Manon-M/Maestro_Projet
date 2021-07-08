class Account {
    id 
    mail
    password
    type_id
    formula_id
    constructor(mail,password,type_id,formula_id){
        this.mail = mail
        this.password = password
        this.type_id = type_id
        this.formula_id = formula_id
        this.id = null
        
    }
}
module.exports = Account;