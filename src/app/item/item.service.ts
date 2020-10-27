import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", image:'~/assets/images/user.jpg'},
        { id: 3, name: "Piqué", role: "Defender", image:'~/assets/images/user6.jpg' },
        { id: 4, name: "I. Rakitic", role: "Midfielder", image:'~/assets/images/user2.png' },
        { id: 5, name: "Sergio", role: "Midfielder", image:'~/assets/images/user3.png' },
        { id: 6, name: "Denis Suárez", role: "Midfielder", image:'~/assets/images/user4.png' },
        { id: 7, name: "Arda", role: "Midfielder", image:'~/assets/images/user5.png' },
        { id: 8, name: "A. Iniesta", role: "Midfielder", image:'~/assets/images/user6.jpg' },
        { id: 9, name: "Suárez", role: "Forward", image:'~/assets/images/user8.jpg' },
        { id: 10, name: "Messi", role: "Forward", image:'~/assets/images/user9.jpg' },
        { id: 11, name: "Neymar", role: "Forward", image:'~/assets/images/user5.png' },
        { id: 12, name: "Rafinha", role: "Midfielder", image:'~/assets/images/user2.png' },
        { id: 13, name: "Cillessen", role: "Goalkeeper", image:'~/assets/images/user3.png' },
        { id: 14, name: "Mascherano", role: "Defender", image:'~/assets/images/user4.png' },
        { id: 17, name: "Paco Alcácer", role: "Forward", image:'~/assets/images/user5.png' },
        { id: 18, name: "Jordi Alba", role: "Defender", image:'~/assets/images/user7.png' },
        { id: 19, name: "Digne", role: "Defender", image:'~/assets/images/user.jpg' },
        { id: 20, name: "Sergi Roberto", role: "Midfielder", image:'~/assets/images/user8.jpg' },
        { id: 21, name: "André Gomes", role: "Midfielder", image:'~/assets/images/user9.jpg' },
        { id: 22, name: "Aleix Vidal", role: "Midfielder", image:'~/assets/images/user2.png' },
        { id: 23, name: "Umtiti", role: "Defender", image:'~/assets/images/user8.png' },
        { id: 24, name: "Mathieu", role: "Defender", image:'~/assets/images/user3.png' },
        { id: 25, name: "Masip", role: "Goalkeeper", image:'~/assets/images/user9.jpg' }
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}
