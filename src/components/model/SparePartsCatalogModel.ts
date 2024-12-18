interface SparePartsCatalogProps {
    id: number;
    description: string;
}

export class SparePartsCatalogModel {
    private id: number;
    private description: string;

    constructor(data: SparePartsCatalogProps) {
        this.id = data.id;
        this.description = data.description;
    }

    static build(data: SparePartsCatalogProps): SparePartsCatalogModel {
        return new SparePartsCatalogModel(data);
    }

    getId(): number {
        return this.id = this.id;
    }

    getDescription(): string {
        return this.description = this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }
}