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

window.findNRooksSolution = function(n) {
  var board = new Board({n: n});

  var findSolution = function(board, column, row) {
    if ( row === column ) {
      return board.rows();
    }

    for ( var i=0; i<column; i++ ) {
      board.togglePiece(row, i);

      if ( !board.hasAnyRooksConflicts() ) {
        return findSolution(board, column, row+1);
      }
      
      board.togglePiece(row, i);
    }
  };

  return findSolution(board, n, 0);
};


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
  var board = new Board({n: n});

  var findSolution = function(board, column, row) {
    if ( row === column ) {
      return board.rows();
    }

    for ( var i=0; i<column; i++ ) {
      board.togglePiece(row, i);

      if ( !board.hasAnyQueensConflicts() ) {
        return findSolution(board, column, row+1);
      }
      
      board.togglePiece(row, i);
    }
  };
  
  return findSolution(board, n, 0);
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

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
  
