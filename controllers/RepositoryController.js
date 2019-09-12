const repositories = require('./DB/repositoriesDb')
class RespositoryController{
    static getAllRepositories(req, res){
        return res.status(200).json({
            message: "list of all github repo",
            repositories
        })
    }
    static getRepoByID(req, res){
        const id = parseInt(req.params.id,10)
        const repo = repositories.find(repo => repo.id ===id)
        if(repo){
            return res.status(200).json({
                message: "repo " + id,
                repo
            })
        }else{
            return res.status(404).json({
                message: "repo not found"
            })
        }
        
    }
}

module.exports=RespositoryController;