# js-evm-hexToOPCODE
a js module to assemble evm byte code into instructions

example

input: 6005600A0150602060405260205100

``node index.js 6005600A0150602060405260205100``

output:

```
------------
OPCODE_PUSH: 5
PC: 0
Stack: [ 5 ]
Memory: []
------------
OPCODE_PUSH: 10
PC: 2
Stack: [ 5, 10 ]
Memory: []
------------
OPCODE_ADD: 10 + 5 = 15
PC: 4
Stack: [ 15 ]
Memory: []
------------
OPCODE_POP:
PC: 5
Stack: []
Memory: []
------------
OPCODE_PUSH: 32
PC: 6
Stack: [ 32 ]
Memory: []
------------
OPCODE_PUSH: 64
PC: 8
Stack: [ 32, 64 ]
Memory: []
------------
OPCODE_MSTORE
PC: 10
Stack: []
Memory: [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 64 ]
------------
OPCODE_PUSH: 32
PC: 11
Stack: [ 32 ]
Memory: [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 64 ]
------------
OPCODE_MLOAD
PC: 13
Stack: [ 64 ]
Memory: [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 64 ]
------------
OPCODE_STOP:
PC: 14
------------
```
