//exercício1
const alunos = [
    { nome: "Draculaura", notaFinal: 80 },
    { nome: "Clawdeen", notaFinal: 60 },
    { nome: "Frankie", notaFinal: 90 },
    { nome: "João", notaFinal: 50 }
  ];

  const encontrado = alunos.find(alunos => alunos.nome === "João");
console.log(encontrado); 

//exercício2
const notas = alunos.filter(alunos => alunos.notaFinal >= 70);
console.log(notas);

//exercício3
const ordenadosPorNotas = alunos.sort((a, b) => a.notaFinal - b.notaFinal);
console.log(ordenadosPorNotas);
