class insects {
    constructor (legs, eyes, name){
        this._legs = legs;
        this._eyes = eyes;
        this._name = name;
    }
    get legs(){
        return this.legs
    }
    get eyes(){
        return this.eyes
    }
    get name(){
        return this.name
    }

    moving_fast(){
        console.log("zoommm....");
    }
    cuteness(){
        console.log("Awwww.... cute little bug");
    }
}

class spider extends insects {
    constructor (legs, eyes, name, dangerous){
        super(legs, eyes, name);
        this._dangerous = dangerous;
    }
    get dangerous(){
        return this.dangerous;
    }
    make_web(){
        console.log("Yikes, sticky!")
    }
}

class bee extends insects{
    constructor(legs, eyes, name, sting){
        super(legs, eyes, name);
        this._sting = sting;
    }
    get sting(){
        return this.sting;
    }
    fly(){
        console.log("bzzzzz")
    }
    scary(){
        console.log(`Oh, this {this._name} scared me!`)
    }
}

blackie = new spider(8, 8, 'Black Widow', 'deadly')
flying_panda = new bee(6, 2, 'Carpenter Bee', 'no')
caty = new insects('lots', 12, 'Caterpillar')