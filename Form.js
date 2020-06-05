class Form{

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("email")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Lets Do A Survey On Our School Students");
        this.question1 = createElement('h3', "Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        this.question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount every month for such a program?");
        this.radio1 = createRadio('h3');
        this.radio1.option('yes');
        this.radio1.option('No');
        this.question3 = createElement('h3', "Q3. How much per month would you be willing to pay?");
        this.radio2 = createRadio('h3');
        this.radio2.option('< Rs. 20');
        this.radio2.option('Rs. 10');
        this.radio2.option('Rs. 20');
        this.radio2.option('Rs. 50');
        this.radio2.option('Rs. 100');
        this.radio2.option('Rs. 200');
        this.radio2.option('Rs. 500');
        this.radio2.option('Rs. 1000');
        this.radio2.option('> Rs. 1000');
    }

    display(){

        this.input.position(270, 255)
        this.email.position(270, 165)
        this.button.position(300, 700)
        this.greeting.position(200, 105)
        this.text.position(200, 5)
        this.question1.position(100, 360)
        this.radio.position(300, 420)
        this.question2.position(100, 450)
        this.radio1.position(300, 510)
        this.question3.position(100, 540)
        this.radio2.position(300, 600)

    this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            peopleCount = peopleCount + 1
            User.update();
            User.updateCount(peopleCount);
        });

    }

}