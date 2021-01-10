const correctAnswers = ["a", "b", "c", "d", "e", "a", "b", "c", "d", "e", "a", "b", "c", "d", "e", "a", "b", "c", "d", "e", "a", "b", "c", "d", "e", "a", "b", "c", "d", "e", "a", "b", "c", "d", "e", "a", "b", "c", "d", "e", "a", "b", "c", "d", "e", "a", "b", "c", "d", "e"]

const guessMakeISee = (correctAnswers) => {
    const answerChoices=["a", "b", "c", "d", "e"]
    const randomAnswer = []
    let correct = 0
    for (var i = 0; i < 50; i++) {
        randomAnswer.push(answerChoices[Math.floor(Math.random()*4)])
    }

    for (var j = 0; j < 50; j++){
        if (randomAnswer[j] == correctAnswers[j]) {
            correct++
        }
    }
    console.log({randomAnswer, correct})
    return
}

for (var m = 0; m < 1000; m++){
    guessMakeISee(correctAnswers)
}
