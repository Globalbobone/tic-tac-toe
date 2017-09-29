class TicTacToe {
    constructor() {
       
        this._currentSymbol = 'x';
        this._winer = null;
        this._moves = 0;
        this.n = 3;
        this.m = 3;
        this.arr = new Array(this.m);       
        for (var i = 0; i < this.m; i++) {
            this.arr[i] = new Array(this.n);
            for (var j = 0; j < this.n; j++) {
                this.arr[i][j] = null;
            }        
        }
        
    }

    getCurrentPlayerSymbol() {
       return this._currentSymbol;      
    }

    nextTurn(rowIndex, columnIndex) {
        
        if (this.arr[rowIndex][columnIndex] != null){
            return;
        }
        this.arr[rowIndex][columnIndex] = this._currentSymbol;
        if (this._currentSymbol === 'x'){
            this._currentSymbol = 'o';
        }
        else {
            this._currentSymbol = 'x';
        }
        return;
        
    }
       
    isFinished() { 
       if (this.noMoreTurns() || this.getWinner()) { 
            return true;}
        else {
            return false;
        }
        
    }

    getWinner() { 
       var winner = null;
               // смотрим строчки x
            for (var i = 0; i < this.n; i++) {
                for (var j = 0; j < this.m; j++) {
                    if (this.arr[i][j] != 'x'){
                        break;
                    }
                    if (i == this.n - 1) {
                        winner = 'x';
                        return winner;
                    } 
                }
            }
            //смотрим столбцы x
              for (var i = 0; i < this.m; i++) {
                for (var j = 0; j < this.n; j++) {
                if (this.arr[j][i] != 'x'){
                    break;
                }
                if (j == this.n - 1) {
                    winner = 'x';
                    return winner;}
                } 
            }
            //смотрим  диагонали x
            for (var i = 0; i < this.m; i++) {
                if (this.arr[i][i] != 'x'){
                    break;
                }
                if (i == this.m - 1) {
                    winner = 'x';
                    return winner;
                } 
            }

            for (var i = 0, j = 2; i < this.m, j > 0; i++, j--) {
                if (this.arr[i][j] != 'x'){
                    break;
                }
                if (i == this.m - 1) {
                    winner = 'x';
                    return winner;
                } 
            }

                // смотрим строчки o
            for (var i = 0; i < this.n; i++) {
                for (var j = 0; j < this.m; j++) {
                    if (this.arr[i][j] != 'o'){
                        break;
                    }
                    if (i == this.n - 1) {
                        winner = 'o';
                        return winner;
                    } 
                }
            }
            //смотрим столбцы o
              for (var i = 0; i < this.m; i++) {
                for (var j = 0; j < this.n; j++) {
                if (this.arr[j][i] != 'o'){
                    break;
                }
                if (j == this.n - 1) {
                    winner = 'o';
                    return winner;}
                } 
            }
            //смотрим  диагонали o
            for (var i = 0; i < this.m; i++) {
                if (this.arr[i][i] != 'o'){
                    break;
                }
                if (i == this.m - 1) {
                    winner = 'o';
                    return winner;
                } 
            }

            for (var i = 0, j = 2; i < this.m, j > 0; i++, j--) {
                if (this.arr[i][j] != 'o'){
                    break;
                }
                if (i == this.m - 1) {
                    winner = 'o';
                    return winner;
                } 
            }
      
        return null;
     
    }

    noMoreTurns() { 
        if ((this._moves >= this.n * this.m) ) {
            return true;
         }
        else {
            return false;
         }                 
      }
       
           
    isDraw() { 
       if(this.isFinished () || !this.getWinner()) {
            return false;
        } else {
            return true;
        }
      
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arr[rowIndex][colIndex];
        
    }
}

module.exports = TicTacToe;
