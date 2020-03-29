const _ = require("lodash");

const alunos = [
  {
    nome: "joao",
    nota: 5
  },
  {
    nome: "maria",
    nota: 5
  },
  {
    nome: "pedro",
    nota: 5
  }
];

const media = _.sumBy(alunos, "nota") / alunos.length;
console.log(media);
