class TicTacToe {
    constructor() {
        /*this.arr = [[0,0,0],
                    [0,0,0],
                    [0,0,0]];*/
        //this.rowIndex = 0;
        //this.columnIndex = 0;
        //this.arr = [[],[],[]];
        this._currentSymbol = 'x';
        this._winer = null;
        this._moves = 0;
        //this._player = 1;
        this.n = 3;
        this.m = 3;
        this.arr = new Array(this.m);       
        for (var i = 0; i < this.m; i++) {
            this.arr[i] = new Array(this.n);
            for (var j = 0; j < this.n; j++) {
                this.arr[i][j] = null;
            }        
        }
        /*for (var i = 0; i < m; i++) {
            //this.arr[i] = 0;
            for (var j = 0; j < n; j++) {
                this.arr[i][j] = 0;
            }        
        }*/
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
        this._moves = this._moves + 1;
        return;
    }
       
    isFinished() { 
        if ((this.getWinner() == null) && (this._moves < 9)) { 
            return false}
        else {
            return true;
        }
        
    }

    getWinner() { 
       /*var winner = null;
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
     
        return null;*/
        if (this.arr[0][0] == this.arr[0][1] && this.arr[0][1] == this.arr[0][2] && this.arr[0][2] == 'o' ||
            this.arr[1][0] == this.arr[1][1] && this.arr[1][1] == this.arr[1][2] && this.arr[1][2] == 'o' ||
            this.arr[2][0] == this.arr[2][1] && this.arr[2][1] == this.arr[2][2] && this.arr[2][2] == 'o' ||
            this.arr[0][0] == this.arr[1][0] && this.arr[1][0] == this.arr[2][0] && this.arr[2][0] == 'o' ||
            this.arr[0][1] == this.arr[1][1] && this.arr[1][1] == this.arr[2][1] && this.arr[2][1] == 'o' ||
            this.arr[0][2] == this.arr[1][2] && this.arr[1][2] == this.arr[2][2] && this.arr[2][2] == 'o' ||
            this.arr[0][0] == this.arr[1][1] && this.arr[1][1] == this.arr[2][2] && this.arr[2][2] == 'o' ||
            this.arr[0][2] == this.arr[1][1] && this.arr[1][1] == this.arr[2][0] && this.arr[2][0] == 'o' ){
            this._winer = 'o';
            return this._winer;}
        else if (this.arr[0][0] == this.arr[0][1] && this.arr[0][1] == this.arr[0][2] && this.arr[0][2] == 'x' ||
            this.arr[1][0] == this.arr[1][1] && this.arr[1][1] == this.arr[1][2] && this.arr[1][2] == 'x' ||
            this.arr[2][0] == this.arr[2][1] && this.arr[2][1] == this.arr[2][2] && this.arr[2][2] == 'x' ||
            this.arr[0][0] == this.arr[1][0] && this.arr[1][0] == this.arr[2][0] && this.arr[2][0] == 'x' ||
            this.arr[0][1] == this.arr[1][1] && this.arr[1][1] == this.arr[2][1] && this.arr[2][1] == 'x' ||
            this.arr[0][2] == this.arr[1][2] && this.arr[1][2] == this.arr[2][2] && this.arr[2][2] == 'x' ||
            this.arr[0][0] == this.arr[1][1] && this.arr[1][1] == this.arr[2][2] && this.arr[2][2] == 'x' ||
            this.arr[0][2] == this.arr[1][1] && this.arr[1][1] == this.arr[2][0] && this.arr[2][0] == 'x' ){
            this._winer = 'x';
            return this._winer;}
         else{
            return null;}
        
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
        if(this.noMoreTurns() && (this.getWinner() == null)){
             return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arr[rowIndex][colIndex];
        
    }
}

module.exports = TicTacToe;
