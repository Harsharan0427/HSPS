# JavaScript

## Data Types

### Categorization

1. Primitive: Fundamental Types -> Jina nu mila ke baki bnde a.

- int
- char
- bool

2. Non-Primitive: Jede mila ke bnde a oh eh hunde a.

- array: Collection of Homogenous data types
  - 2 array -> 2d array -> matrix
- object: Collection of heterogenous data types -> JavaScript = object, Python -> dictionary

## Variables

javasript ch variable define karan de 3 trike hunde a:

1. var -> old way
2. let -> after ES6 -> latest standard
3. const -> after ES6 -> latest standard

JavaScript:
let x = 1;
let name = "PH";
const people = ["Harsharan", "Parvinder Singh", "me"]
const age = [[32, 44, 25], [12, 23, 4]]

let pAge = age[1][0]

console.log(pAge - 2)
console.log(age[1][0])

const pName = people[1]

Other programming languages especially which are compiled need to know the type of datatype beforehand.

int a = 2
char c = h

int a = j -> error

But in high level languages we do not need to be specific

let a = 2 -> a nu integer bna ta
let b = h -> b nu charactyer bna ta

let b;

b = 4;

kuch hor kita do char function run kite

b = j

agge ja ke purana b chahida c pr hun b de vich j a cchaida ohnu integer a ta fr rola pe jana

eh chiz to bachan vaste assi JavaScript sidhi sidhi nahi use krde, asdsi ohda ik vdda bhra (superset) use krde a: TypeScript

let a:number = 3 --> let a = 3
a = j
