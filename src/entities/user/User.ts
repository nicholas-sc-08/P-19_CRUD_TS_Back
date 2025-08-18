export default class User {

    constructor(
        
        private email: string, 
        private name?: string, 
        private id?: string
    ) {};

    public get_id() : string | undefined {

        return this.id;
    }

    public get_name() : string | undefined {

        return this.name;
    }

    public get_email() : string | undefined {

        return this.email;
    }
}