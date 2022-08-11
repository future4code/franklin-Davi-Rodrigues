// EX 01

// function checaTriangulo(a, b, c) {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

function checaTriangulo(a: number, b: number, c: number): string {
    if(a !== b && b !== c){
        return "Escaleno";
    }else if (a === b && b === c) {
        return "Equilátero";
    }else {
        return "Isósceles";
    }
}

console.log(checaTriangulo(4, 8, 6));
console.log(checaTriangulo(8, 8, 8));
console.log(checaTriangulo(4, 6, 6));
