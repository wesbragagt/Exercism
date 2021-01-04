# find the last element in array
def latest(scores):
    last_index = len(scores) - 1
    return scores[last_index]

# highest from a list
def personal_best(scores):
    return max(scores)


# highest 3 scores
def personal_top_three(scores):
    scores.sort(reverse=True)
    return scores[0:3]

