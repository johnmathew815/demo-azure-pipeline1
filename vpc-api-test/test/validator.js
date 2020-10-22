const { doesNotMatch } = require('assert');
//const assert = require('assert');
const {postVpc,getVpc,deleteVpc} = require('../controllers/implementation.js');



describe('the get list of vpc function', ()=>{
	//this.timeout(10000)

	it("the get list of vpc function TEST case", (done)=>{
		//done ();

		const code = getVpc('jmp1104969696','John000@','a0433b20-8cb3-4666-9d1a-5bfc99bd6bbb', (body, statuscode)=>{
			//assert.strictEqual(statuscode , 200)
			//done ();
			//console.log(body)
			//done();
			if(statuscode != 200)
			{
				done("Test Failed")
			}
			else

			done();

		})
		
	})

	
})
