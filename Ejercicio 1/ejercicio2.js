//comprobar si una palabra empieza y acaba por la msima letra

r1 = prompt("Di una palabra y te diré si empieza y termina por la misma letra");

if (r1.charAt(0) === r1.charAt(r1.length - 1)) {
  console.log("Empiezan y acaban por la misma letra");
} else {
  console.log("No lo hacen");
}