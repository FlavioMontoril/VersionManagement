export interface MachineProps {
    id: number;
    code: number;
    description: string;
}

export class MachineModel {
    private id: number;
    private code: number;
    private description: string;

    constructor(data: MachineProps) {
        this.id = data.id;
        this.code = data.code;
        this.description = data.description;
    }   

    static build(data: MachineProps): MachineModel {
        return new MachineModel(data);
    }

    getId(): number {
        return this.id;
    }

    getCode(): number {
        return this.code;
    }

    getDescription(): string {
        return this.description;
    }

    setCode(code: number): void {
        this.code = code;
    }
    
    setDescription(description: string): void {
        this.description = description;
    }
}    