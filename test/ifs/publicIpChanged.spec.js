var sut = require('../../if/publicIpChanged.js'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    sinon = require('sinon');

chai.use(chaiAsPromised);

describe('publicIpChanged', function(){
//    describe('stubbing out public ip', function(){
//    var promise = sut();
//        var successCb = function(){console.log('success');}
//        var failureCb = function(){console.log('failure');}
//        promise.then(successCb, failureCb);
//        
//        it('should use the stub value', function(done){
//
//            //promise.should.be.fulfilled;
//            //promise.then().should.be.fulfilled;        
//            //assert.isFulfilled(promise,"foo");
//        })                 
//    })
    describe('when public ip changes', function(){
        it('should resolve the promise');    
    })
                
    describe('when public ip does not change', function(){
        it('should reject the promise');
    })
    
    describe('when public ip is on watchlist', function(){
        it('should reject the promise')
    })
})