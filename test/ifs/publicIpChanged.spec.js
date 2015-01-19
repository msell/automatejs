var sut = require('../../if/publicIpChanged.js'),
    chai = require('chai'),
    should = require('chai').should(),
    chaiAsPromised = require('chai-as-promised'),
    sinon = require('sinon'),
    RSVP = require('rsvp');

chai.use(chaiAsPromised);

describe('publicIpChanged', function () {

    var promise;
    beforeEach(function () {
        promise = sut();
    })
    describe('when public ip changes', function () {
        it('should resolve the promise', function (done) {
            promise.should.be.instanceOf(RSVP.Promise);
            promise.then(function (value) {
                console.log(value);
                done();
            });
            //promise.should.become.resolved.and.notify(done);
        });
    })

    describe('when public ip does not change', function () {
        it('should reject the promise');
    })

    describe('when public ip is on watchlist', function () {
        it('should reject the promise')
    })
})