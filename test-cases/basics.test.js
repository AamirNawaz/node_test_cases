var chai = require('chai')
var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

const conutry = "Pakistan"

//first test case with should
describe('Test Case with Should Method---->',()=>{
    
    it('check type of',()=>{
        conutry.should.be.a('string')
    })

    it('match string',()=>{
        conutry.should.be.equal("Pakistan")
    })

})


//with Expect method
describe('Test Case with Expect Method---->',()=>{
    
    it('check type of',()=>{
        expect(conutry).to.be.a('string')
    })

    it('match string',()=>{
       expect(conutry).to.be.equal("Pakistan")
    })

})

//with Assert method
describe('Test Case with Assert Method---->',()=>{
    
    it('check type of',()=>{
        assert.typeOf(conutry,'string')
    })

    it('match string',()=>{
        assert.equal(conutry,'Pakistan')
    })

})