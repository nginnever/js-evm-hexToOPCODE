'use strict'

function run(bytecode) {
	var inputLen = bytecode.length
	if (!inputLen || inputLen % 2)
		throw new Error("Bad input")
	// right shift convert to 32 byte int
	const hl = inputLen >> 1
	var code = new Array(hl)
	for (var i = 0; i < hl; i++) {
		code[i] = parseInt(bytecode.substr(i * 2, 2), 16)
	}
  
  const codeSize = code.length
  var stack = []
	// program counter for next instruction
	var pc = -1

	// step through the op stack
	while (++pc < codeSize) {

		switch (code[pc]) {
			// add operation
			case 1:
			  var num = (code[++pc] << 24 ) | (code[++pc] << 16) | (code[++pc] << 8) | code[++pc]
			  stack.push(num)
			  console.log('PUSH: ' + num)
			  break
			case 2:
			  if (stack.length < 2)
			  	throw new Error('stack underflow')
			  const a = stack.pop(), b = stack.pop()
			  const sum = a + b
			  stack.push(sum)
			  console.log('ADD: %d + %d = %d', a, b, sum)
			  break
			default:
			  throw new Error('bad instruction')
		}
		console.log('Stack: ' + stack)
	}
	console.log('done')
}

run(process.argv[2])