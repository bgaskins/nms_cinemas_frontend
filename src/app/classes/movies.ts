export class Movies {

        constructor(
                public id: number,
                public title: string,
                public ticket_price: number,
                public language: string,
                public description: string,
                public showtime: string,
                public auditorium: string,
                public image_url: string,
        ) { }

}
