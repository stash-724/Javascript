let Int = 100
let BigInt = 10000000000000000000000000000000000n
let Str = "Stash"
let bool = true
let nul = null
let ud = undefined
let smb = Symbol
console.table([Int +" "+typeof(Int), BigInt +" "+
typeof(BigInt), Str+" "+typeof(Str), bool +" "+typeof(bool), nul+" "+typeof(nul), 
ud+" "+typeof(ud), smb+" "+typeof(smb)])