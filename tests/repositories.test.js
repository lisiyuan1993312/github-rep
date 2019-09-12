const chai = require("chai");
const app = require("../server");
const chaiHttp = require("chai-http");
const chaiLike = require('chai-like')


chai.use(chaiHttp);
chai.use(chaiLike)
chai.should();

describe("Respositories", function() {
  describe("GET /repositories", function() {
    // Get all repos
    it("Should return the repositories with a 200 status", function(done) {
      chai
        .request(app)
        .get("/repositories")
        .end((err, res) => {
          res
            .should
            .have
            .status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("Should return the repositories by id with a 200 status", function(done) {
        chai
          .request(app)
          .get("/repositories/35")
          .end((err, res) => {
            res
              .should
              .have
              .status(200);
            res.body.repo.full_name.should.equal('defunkt/exception_logger');
            done();
          });
      });
      it("should return 404 when the id is not found", function(done){
          chai.request(app).get('/repositories/0').end((err, res)=>{
              res.should.have.status(404)
              console.log(res.body)
              res.body.should.be.a('Object').that.contains.like( { message: "repo not found"})
              done()
          })
      })
  });
});
