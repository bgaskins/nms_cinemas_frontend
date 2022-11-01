import { Movies } from './movies'

export class Cart {
    id: number;
    title: string;
    imageUrl: string;
    showtime: string;
    auditorium: string;
    ticket_price: number;
    quantity: number;

    constructor(movie: Movies) {
        this.id = movie.id;
        this.title = movie.title;
        this.imageUrl = movie.imageUrl;
        this.showtime = movie.showtime;
        this.auditorium = movie.auditorium;
        this.ticket_price = movie.ticket_price;
        this.quantity = 1;

    }


}
