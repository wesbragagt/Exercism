class Matrix:
    def __init__(self, matrix_string):

        self.matrix = list(map(lambda e: e.split(' '),matrix_string.split('\n')))

    def row(self, index):
        if len(self.matrix) == 1:
            return list(map(lambda e: int(e),self.matrix[index - 1]))
        else:
            return list(map(lambda e: int(e),self.matrix[index - 1]))

    def column(self, index):
        if len(self.matrix) == 1:
            return list(map(lambda e: int(e),self.matrix[index - 1]))
        else:
            columns = []

            for i in range(len(self.matrix)):
                columns.append(self.matrix[i][index - 1])

            return list(map(lambda e: int(e),columns))

#DEBUG
new_matrix = Matrix('1')

print(
    new_matrix.row(1),
    new_matrix.column(1)
)