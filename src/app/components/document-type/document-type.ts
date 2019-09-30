export class DocumentType {

    id: number;
    name: string;
    active: boolean;

    constructor(name: string) {
        this.id = Math.floor(Math.random() * 10000000000);
        this.name = name;
        this.active = true;
    }

}