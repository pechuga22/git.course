var x, y

var z=0
z=2
x=3
y=2

console.log=(x,y,z)

function operaciones(A, B) {
        var z=0

        x= A + B
        B*= 2
        z= x + B
        y= y + (x * B)

        console.log(x ,B, z)
            
}

operaciones(x,z)
console.log(x,y,z)