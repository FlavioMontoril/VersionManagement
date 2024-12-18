interface MachineVersionProps {
    id: number;
    value: string;
}

export class MachineVersionModel {
    private id: number;
    private value: string;

    constructor(data: MachineVersionProps) {
        this.id = data.id;
        this.value = data.value;
    }

    static build(data: MachineVersionProps): MachineVersionModel {
        return new MachineVersionModel(data);
    }

    getId(): number {
        return this.id;
    }
    getValue(): string {
        return this.value;
    }
    setValue(value: string): void {
        this.value = value;
    }
}