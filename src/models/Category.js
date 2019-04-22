export default class Category {

    constructor(id, name, budgetLimit, description, isActive) {
        this.id = id;
        this.name = name;
        this.budgetLimit = budgetLimit;
        this.description = description;
        this.isActive = isActive;
    }
}