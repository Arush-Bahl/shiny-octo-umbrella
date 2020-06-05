class User{

    constructor(){

        this.email = null,
        this.input = null;
        this.index = null

    }

    updateCount(count) {
        database.ref('/').update({
            peopleCount: count
        });
    }
    
    update(answer1, answer2, answer3) {
        var playerIndex = "player" + this.index;
        database.ref(playerIndex).set({
            input: this.input,
            email: this.email,
            answer: [answer1, answer2, answer3]
        });
    }

}