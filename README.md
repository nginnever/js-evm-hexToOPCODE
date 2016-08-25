# js-evm-hexToOPCODE
a js module to assemble evm byte code into instructions

example

input: 6005600A015000

``node index.js 6005600A015000``

output:

``
------------
OPCODE_PUSH: 5
PC: 0
Stack: [ 5 ]
------------
OPCODE_PUSH: 10
PC: 2
Stack: [ 5, 10 ]
------------
OPCODE_ADD: 10 + 5 = 15
PC: 4
Stack: [ 15 ]
------------
OPCODE_POP:
PC: 5
Stack: []
------------
OPCODE_STOP:
PC: 6
------------
``
