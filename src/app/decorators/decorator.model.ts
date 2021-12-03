export interface Decorator {
    marker: string;
    detach: () => void;
}

export class BaseDecorator implements Decorator {
    marker: string = ''

    detach() {
        this.marker = ''
    }
}