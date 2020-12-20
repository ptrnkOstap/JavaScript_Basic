const chessBoard = {
    rows: 10,
    columns: 10,
    cellColor1: '#d18b46',
    cellColor2: '#ffcda0',
    cellHeight: 'auto',
    rowTitles: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].reverse(),
    colTitles: ['1', '2', '3', '4', '5', '6', '7', '8'],
    setFigures(row, col, cell) {
        const icon = document.createElement('img');
        if (row === 3 || row === 8) {
            switch (row) {
                case 3:
                    icon.src = 'hw5-img/peshka_w.svg';
                    cell.appendChild(icon);
                    break;
                case 8:
                    icon.src = 'hw5-img/peshka.svg';
                    cell.appendChild(icon);
                    break;
            }
        }
        if (row === 2) {
            switch (col) {
                case 4:
                case 7:
                    icon.src = 'hw5-img/slon_w.svg';
                    cell.appendChild(icon);
                    break;
                case 2:
                case 9:
                    icon.src = 'hw5-img/ladya_w.svg';
                    cell.appendChild(icon);
                    break;
                case 8:
                case 3 :
                    icon.src = 'hw5-img/kon_w.svg';
                    cell.appendChild(icon);
                    break;
                case 6:
                    icon.src = 'hw5-img/ferz_w.svg';
                    cell.appendChild(icon);
                    break;
                case 5:
                    icon.src = 'hw5-img/korol_w.svg';
                    cell.appendChild(icon);
                    break;
            }
        }
        if (row === 9) {
            switch (col) {
                case 4:
                case 7:
                    icon.src = 'hw5-img/slon.svg';
                    cell.appendChild(icon);
                    break;
                case 2:
                case 9:
                    icon.src = 'hw5-img/ladya.svg';
                    cell.appendChild(icon);
                    break;
                case 8:
                case 3 :
                    icon.src = 'hw5-img/kon.svg';
                    cell.appendChild(icon);
                    break;
                case 6:
                    icon.src = 'hw5-img/ferz.svg';
                    cell.appendChild(icon);
                    break;
                case 5:
                    icon.src = 'hw5-img/korol.svg';
                    cell.appendChild(icon);
                    break;
            }
        }
    },
    renderChessBoard() {
        const chessTableTag = document.getElementById('Chess-board-table');

        for (let row = this.rows; row > 0; row--) {
            const tr = document.createElement('tr');
            chessTableTag.appendChild(tr);

            for (let col = this.columns; col > 0; col--) {
                let cell = document.createElement('td');
                cell.style.cssText = `width:${this.cellHeight}; height:${this.cellHeight}`;

                if ((col > 1 && row > 1) && (col < 10 && row < 10)) {
                    this.setFigures(row, col, cell);
                    if ((row + col) % 2 !== 0) {
                        cell.style.backgroundColor = this.cellColor1;
                    } else {
                        cell.style.backgroundColor = this.cellColor2;
                    }
                } else {
                    cell.style.cssText += "font-weight:bold; font-size:2rem; text-align:center;";
                    if ((row === 1 || row === 10) && (col > 1 && col < 10)) cell.innerHTML = this.rowTitles[col - 2];
                    if ((col === 1 || col === 10) && (row > 1 && row < 10)) cell.innerHTML = this.colTitles[row - 2];
                }
                tr.appendChild(cell);
            }
        }
    }
}
chessBoard.renderChessBoard();

