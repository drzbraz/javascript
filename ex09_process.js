process.stdout.write("Qual o seu nome?\n");
process.stdin.on("data", function(data) {
  process.stdout.write(`Seu nome é ${data.toString()}\n`);
  process.exit();
});
