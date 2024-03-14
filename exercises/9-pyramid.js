// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const mid = n;
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= 2 * n; col++) {
      // le for ici ajoute 2 colonnes de plus a chaque ligne s'il y a plus que 1 ligne a chaque ligne de plus
      // le combre de colonnes et de lignes sera pris en compte pour le nombre de colonnes a chaque ligne
      if (col >= mid - row + 1 && col <= mid + row - 1) {
        /*
        La condition col >= mid - row + 1 vérifie si vous avez dépassé le début de la partie de la ligne où le symbole doit être affiché. C'est-à-dire que vous êtes à droite du début de la partie de la ligne où le symbole doit être affiché.
        La condition col <= mid + row - 1 vérifie si vous n'avez pas encore atteint la fin de la partie de la ligne
        où le symbole doit être affiché
        C'est-à-dire que vous êtes à gauche de la fin de la partie de la ligne où le symbole doit être affiché.
        */
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

pyramid(7);
