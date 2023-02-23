import { Movies } from './movies'

export class Cart {
    id: number;
    title: string;
    showtime: string;
    auditorium: string;
    ticket_price: number;
    quantity: number;
    image_url: string;


    constructor(movie: Movies) {
        this.id = movie.id;
        this.title = movie.title;
        this.showtime = movie.showtime;
        this.auditorium = movie.auditorium;
        this.ticket_price = movie.ticket_price;
        this.quantity = 1;
        this.image_url = movie.image_url;

    }


}
