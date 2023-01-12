export class InvalidBattlefieldDescriptionError extends Error {
    constructor() {
        super('Invalid battlefield info');
    }

    getMessage(): string {
        return this.message;
    }
}