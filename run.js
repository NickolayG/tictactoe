var game = {
    A: [
        "X", // A1
        "X", // A2
        "X" // A3
    ],
    B: [
        "X", // B1
        "X", // B2
        "X" // B3
    ],
    C: [
        "X", // C1
        "X", // C2
        "X" // C3
    ]
}


// Random logic to test changing symbol
if (game.A[0] == 'X') {
    game.A[0] = 'O';
}

// Putting everything into a string to resemble game 
const finaloutput = (`
        A   B   C
      -------------
    1 | ${game.A[0]} | ${game.A[1]} | ${game.A[2]} |
      -------------
    2 | ${game.B[0]} | ${game.B[1]} | ${game.B[2]} |
      -------------
    3 | ${game.C[0]} | ${game.C[1]} | ${game.C[2]} |
      -------------
`);

// Log it
console.log(finaloutput)