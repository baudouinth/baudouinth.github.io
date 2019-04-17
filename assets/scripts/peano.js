const NUMBERS = {currentId: 0};

class Number
{
    constructor(name)
    {
        this.id = Number.id();
        NUMBERS[this.id] = this;
        this.name = name;
    }
    static id() {return NUMBERS.currentId++;}
};

const ZERO = new Number("zero");

class PropType
{
    constructor(symbol, propCount, numCount)
    {
        this.symbol = symbol;
        this.propCount = propCount;
        this.numCount = numCount;
    }
};

const not = new PropType("¬", 1);

const and = new PropType("∧", 2);

/*const or = new PropType("∨", 2);

const implies = new PropType("⇒", 2);*/

const thereExists = new PropType("∃", 1);

const areEqual = new PropType("=", 0, 2);

const PROPOSITIONS = {currentId: 0};
const TRUTHTABLES = {};

class Proposition
{
    constructor(proptype, props, nums)
    {
        this.id = Proposition.id();
        PROPOSITIONS[this.id] = this;
        this.numbers = [];
        switch (proptype)
        {
            case not:
            TRUTHTABLES[this.id] = {otherProps: [props[0].id], cases: {"0": 1,"1": 0}};
            break;

            case and:
            TRUTHTABLES[this.id] = {otherProps: [props[0].id, props[1].id], cases: {"00": 0,"01": 0, "10": 0, "11": 1}};
            break;

            case thereExists:
            number = new Number();
            this.numbers.push(number);
            TRUTHTABLES[]
        }
    }
    static id() {return PROPOSITIONS.currentId++;}
    inject()
    {

    }
}