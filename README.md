# Tic-Tac-toe

### Specifications:

- There should be an interactive 3X3 board. (When we say square, we mean those smallest squares).
- Players have their respective symbol (cross or circle). These symbols will be interchanged after each game (i.e. in the first game, player1 gets cross; in the next game, player 2 gets cross ..). At the start of every game, cross plays first.
- Players play by clicking a square. When one player clicks a free square, their symbol (either a circle or a cross) should appear inside that square. If someone clicks an occupied square, nothing should happen.
- Players play alternatively. So, the first click should place a cross, second click should place a circle, 3rd-> again a cross and so on.
- A table needs to be maintained. It should have four columns: serial_no, result, cumulative score for player 1, cumulative score for player 2 (you can name them appropriately).
- For each row, serial_no is just the row number (starting with 1). Result is one of the three characters: {1,2,T}. If the match ends up as a tie, put T. If someone wins, then put their number (1 for player 1 and 2 for player 2). Other two columns should track the cumulative scores for both players.
- **Scoring**: Winner will get 4 points; loser will get no point; and if the game ends up as a tie, both players will get 1 point each.
- After each move, you should check if any player has won or the match has tied. In any case, update the table by appending a new row at its end. Then start a new game after 5 seconds. A countdown should appear to indicate the same with the following message:

- $RESULT$! Starting a new game in $t$ seconds ... :  
  
   $RESULT$ is one of the 3 things:  
    - Player 1 won  
    - Player 2 won
    - Match tied

   $t$ will go from 5 to 1. Any click on the board during this time must start a new game immediately. Starting a new game should refresh the board, change symbols for players, and the above countdown should vanish. It must NOT refresh the whole page!

