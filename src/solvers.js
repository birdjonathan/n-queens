/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n, board, rookCount) {
  var board = board || new Board({n: n});
  var rookCount = rookCount || 0;

  if ( rookCount === n ){
    return board.rows();
  }

  for (var row=0; row<n; row++){
    for (var col=0; col<n; col++){
      if (board.rows()[row][col] === 0){
        board.togglePiece(row, col);
        if(!board.hasAnyRooksConflicts()){
          rookCount++;
          
          var solution = findNRooksSolution(n, board, rookCount);
          if (solution !== false){
            return solution;
            console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
          }
        }
        board.togglePiece(row, col);
      }
    }
  }

};




// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// Pseudo-code based on lecture solution
//  Start function taking in board, columns and row
//  When the rows and columns are the same number
//  Increment a solution counter and return 
// For entire board (loop through columns)
// Place a piece on a particular row
// If this works, does not cause a Rook conflict use recursion and 
// Try to place piece on the next row
// If it doesn't work, toggle the piece back off and keep going in loop

window.countNRooksSolutions = function(n) {
  
  var solutionCount = 0;
  var board = new Board({n: n});

  var findSolution = function(board, column, row) {
    if ( row === column ) {
      solutionCount++;
      return;
    }

    for ( var i=0; i<column; i++ ) {
      board.togglePiece(row, i);

      if ( !board.hasAnyRooksConflicts() ) {
        findSolution(board, column, row+1);
      }
      
      board.togglePiece(row, i);
    }
  };

  findSolution(board, n, 0);
  
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  // debugger;

  var findSolution = function(board, column, row) {
    if ( row === column ) {
      solutionCount++;
      return;
    }

    for ( var i=0; i<column; i++ ) {
      board.togglePiece(row, i);

      if ( !board.hasAnyQueensConflicts() ) {
        findSolution(board, column, row+1);
      }
      
      board.togglePiece(row, i);
    }
  };
  
  findSolution(board, n, 0);
  return solutionCount;
};
  
