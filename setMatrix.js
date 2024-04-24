let matrix = [
    [0, 0, 0],
    [1, 1, 0],
    [0, 0, 0]
];

function convertMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 1) {
                convertRow(matrix, n, m, i);
                convertCol(matrix, n, m, j);

            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] == -1) {
                matrix[i][j] = 1;
            }
        }
    }
}

function convertRow(matrix, n, m, i) {
    for (let j = 0; j < m; j++) {
        if (matrix[i][j] !== 1) {
            matrix[i][j] = -1;
        }
    }
}

function convertCol(matrix, n, m, j) {
    for (let i = 0; i < n; i++) {
        if (matrix[i][j] !== 1) {
            matrix[i][j] = -1;
        }
    }
}

convertMatrix(matrix);


// For Printing the matrix .............
for(let i=0 ; i<matrix.length;i++){
    console.log(matrix[i]);
}

