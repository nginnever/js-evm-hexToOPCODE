'use strict'

function run(bytecode) {
	var inputLen = bytecode.length
	if (!inputLen || inputLen % 2)
		throw new Error("Bad input")
	// right shift convert to 32 byte int
	const hl = inputLen >> 1
	var code = new Array(hl)
	for (var i = 0; i < hl; i++) {
		code[i] = bytecode.substr(i * 2, 2)
	}
  console.log(code)
  const codeSize = code.length
  var stack = []
  var memory = []
	// program counter for next instruction
	var pc = -1
	// step through the op stack

  // 6005600A0150602060405260205100
	while (++pc < codeSize) {
		console.log('------------')
		switch (code[pc]) {
			// push operation
			case '60':
			  var num = parseInt(code[pc + 1], 16)
			  stack.push(num)
			  console.log('OPCODE_PUSH: ' + num)
			  console.log('PC: ' + pc)
			  pc++
			  break
			// add op
			case '01':
			  if (stack.length < 2)
			  	throw new Error('stack underflow')
			  const a = stack.pop(), b = stack.pop()
			  const sum = a + b
			  stack.push(sum)
			  console.log('OPCODE_ADD: %d + %d = %d', a, b, sum)
        console.log('PC: ' + pc)
			  break
			case '50':
			  if(stack.length < 1)
			  	throw new Error('stack underflow')
			  stack.pop()
			  console.log('OPCODE_POP:')
			  console.log('PC: ' + pc)
			  break
			// Memory loader, (offset, data)
			case '52':
			  const d = stack.pop(), o = stack.pop()
			  memory[o] = d
			  console.log('OPCODE_MSTORE')
			  console.log('PC: ' + pc)
			  break
			case '51':
			  const l = stack.pop()
			  stack.push(memory[l])
			  console.log('OPCODE_MLOAD')
			  console.log('PC: ' + pc)			  
			  break
			case '00':
			  console.log('OPCODE_STOP:')
        console.log('PC: ' + pc)
        return
			default:
			  throw new Error('bad instruction')
		}
		console.log('Stack:', stack)
		console.log('Memory:', memory)
	}
	console.log('done')
}

run(process.argv[2])