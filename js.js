let Apple=function (){
    this.weight=10
}
Apple.prototype.decrease = function () {
    return this.weight--;
}
Apple.prototype.isEmpty = function () {
    if (this.weight === 0) {
        return true
    } else {
        return false
    }
}
Apple.prototype.getWeight = function () {
    return this.weight;
}

let Human=function (name, weight) {
    this.name = name;
    this.gender = "";
    this.weight = weight;
}
Human.prototype.isMale = function () {
    if (this.gender == "male") {
        return true
    } else {
        return false
    }
}
Human.prototype.setGender = function (set) {
    return this.gender = set;
}
Human.prototype.eatApple = function (apple) {
    if (!apple.isEmpty()) {
        this.weight += 1;
        apple.decrease();
        console.log(`${this.name} eat apple....`)
    }


}

function theStory() {
    let adam = new Human('adam', 60);
    let eva = new Human('eva', 45);
    let apple = new Apple()
    adam.setGender('male');
    eva.setGender('female');
    while (apple.weight > 0) {
        adam.eatApple(apple);
        eva.eatApple(apple);
    }
    console.log('Apple are already eaten');
}

theStory();