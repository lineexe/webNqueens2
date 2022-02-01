window.onload = () => {
    startTable();
}

//////////////////////////////////////////////////////////////////////
function startTable() {
    var table = document.createElement("table");
    for (var i = 1; i <= 8; i++) {
        var tr = document.createElement('tr');
        for (var j = 1; j <= 8; j++) {
            var td = document.createElement('td');
            if (i % 2 == j % 2) {
                td.className = "black";
            } else {
                td.className = "white";
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

function changeTable(obj) {
    var Valor = obj.options[obj.selectedIndex].value;

    if (Valor == 4) {
        //insere tabela 4x4
        attBoard()
        var table = document.createElement("table");
        for (var i = 1; i <= 4; i++) {
            var tr = document.createElement('tr');
            for (var j = 1; j <= 4; j++) {
                var td = document.createElement('td');
                if (i % 2 == j % 2) {
                    td.className = "black";
                } else {
                    td.className = "white";
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }

    if (Valor == 5) {
        //insere tabela 5x5
        attBoard()
        var table = document.createElement("table");
        for (var i = 1; i <= 5; i++) {
            var tr = document.createElement('tr');
            for (var j = 1; j <= 5; j++) {
                var td = document.createElement('td');
                if (i % 2 == j % 2) {
                    td.className = "black";
                } else {
                    td.className = "white";
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }

    if (Valor == 6) {
        //insere tabela 6x6
        attBoard()
        var table = document.createElement("table");
        for (var i = 1; i <= 6; i++) {
            var tr = document.createElement('tr');
            for (var j = 1; j <= 6; j++) {
                var td = document.createElement('td');
                if (i % 2 == j % 2) {
                    td.className = "black";
                } else {
                    td.className = "white";
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }

    if (Valor == 7) {
        //insere tabela 7x7
        attBoard()
        var table = document.createElement("table");
        for (var i = 1; i <= 7; i++) {
            var tr = document.createElement('tr');
            for (var j = 1; j <= 7; j++) {
                var td = document.createElement('td');
                if (i % 2 == j % 2) {
                    td.className = "black";
                } else {
                    td.className = "white";
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }

    if (Valor == 8) {
        //insere tabela 8x8
        attBoard()
        var table = document.createElement("table");
        for (var i = 1; i <= 8; i++) {
            var tr = document.createElement('tr');
            for (var j = 1; j <= 8; j++) {
                var td = document.createElement('td');
                if (i % 2 == j % 2) {
                    td.className = "black";
                } else {
                    td.className = "white";
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }

}

function attBoard() {
    function removeElements(elements) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i]);
        }
    }
    removeElements(document.querySelectorAll('table'));
}


function addQueen() {
    let queen = document.querySelector('#queen');
    let chess = document.querySelectorAll('table');

    chess.addEventListener('click', () => {

    })
}

