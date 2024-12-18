
interface ManualVersionProps {
    id: number;
    value: string;
}

export class ManualVersionModel {
    private id: number;
    private value: string;

    constructor(data: ManualVersionProps) {
        this.id = data.id;
        this.value = data.value;
    }

    static build(data: ManualVersionProps): ManualVersionModel {
        return new ManualVersionModel(data);
    }

    getId(): number {
        return this.id;
    }
    getValue(): string {
        return this.value;
    }
    setValue(value: string) {
        this.value = value;
    }
}