const alumnas = ['maria','karen','belen','ana','sofia'];
const alumnos = ['criss','leo','jose','pedro','marcos'];
const estudiantes = ['maria','karen','belen','ana','sofia','criss','leo','jose','pedro','marcos'];

//alumnas
console.log('##### solo alumnas #####');
console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);

//alumnos
console.log('##### solo alumnos #####');
let i = 0;
while(i < alumnos.length){
    console.log(alumnos[i]);
    i++;
}

console.log('##### todos los alumnos #####');
for(let x = 0; x < estudiantes.length; x++){
    console.log(estudiantes[x]);
}