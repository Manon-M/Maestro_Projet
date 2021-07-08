class User {
    id
    name
    firstname
    gender
    age
    city
    country
    account_id
    level_id
    constructor(name,firstname,gender,age,city,country,account_id,level_id){
        this.name = name
        this.firstname = firstname
        this.gender = gender
        this.age = age
        this.city = city
        this.country = country
        this.account_id = account_id
        this.level_id = level_id
        this.id = null
    }
}
module.exports = User;