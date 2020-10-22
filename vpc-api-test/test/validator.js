const assert = require('assert');
const {postVpc,getVpc,deleteVpc} = require('../controllers/implementation.js');



describe('the get list of vpc function', ()=>{

	const code = getVpc('jmp1104969696','John000@','a0433b20-8cb3-4666-9d1a-5bfc99bd6bbb');
	assert.strictEqual(code, "hai")
})