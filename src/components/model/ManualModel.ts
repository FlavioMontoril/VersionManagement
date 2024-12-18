export interface ManualProps {
    id: number;
    description: string;
}
export class ManualModel {
    private id: number;
    private description: string;

    constructor(data: ManualProps) {
        this.id = data.id;
        this.description = data.description;
    }

    static build(data: ManualProps): ManualModel {
        return new ManualModel(data);
    }

    getId(): number {
        return this.id;
    }

    getDescription(): string {
        return this.description;
    }
    
    setDescription(description: string): void {
        this.description = description;
    }
}