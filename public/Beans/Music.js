class Music {
    id
    name
    link
    user_id
    constructor(name,link,user_id){
        this.name = name
        this.link = link
        this.user_id = user_id
        this.id = null
    }
}
module.exports = Music;