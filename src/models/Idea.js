/*
    Idea: id, name, description, budget, readyForComments, peopleNeeded, creationDate, lastModified, categoryId
*/
export default class Idea {

    constructor(id, name, description, budget, readyForComments, peopleNeeded, creationDate, lastModified, categoryId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.budget = budget;
        this.readyForComments = readyForComments;
        this.peopleNeeded = peopleNeeded;
        this.creationDate = creationDate;
        this.lastModified = lastModified;
        this.categoryId = categoryId;
    }
}