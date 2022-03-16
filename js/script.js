const app = new Vue({
    el: '#root',
    data: {
        arrayIndex: 0,
        newMessage: '',
        arrayUtentiChat: [
            {
                nome: 'Michele',
                imgUtente: 'avatar_1.jpg',
                lastMessage: 'Ultimo messaggio inviato',
                messaggiRicevuti: [
                    'Hai portato a spasso il cane?',
                    'Ricordati di stendere panni'
                ],
                messaggiInviati: [
                    'Tutto fatto!'
                ]

            },
            {
                nome: 'Fabio',
                imgUtente: 'avatar_2.jpg',
                lastMessage: 'Ultimo messaggio inviato',
            },
            {
                nome: 'Samuele',
                imgUtente: 'avatar_3.jpg',
                lastMessage: 'Ultimo messaggio inviato',
            },
            {
                nome: 'Alessandro B.',
                imgUtente: 'avatar_4.jpg',
                lastMessage: 'Ultimo messaggio inviato',
            },
            {
                nome: 'Alessandro L.',
                imgUtente: 'avatar_5.jpg',
                lastMessage: 'Ultimo messaggio inviato',
            },
            {
                nome: 'Claudia',
                imgUtente: 'avatar_6.jpg',
                lastMessage: 'Ultimo messaggio inviato',
            },
            {
                nome: 'Federico',
                imgUtente: 'avatar_7.jpg',
                lastMessage: 'Ultimo messaggio inviato',
            },
            {
                nome: 'Davide',
                imgUtente: 'avatar_8.jpg',
                lastMessage: 'Ultimo messaggio inviato',
            },


        ]


    }, methods: {
        messaggioInviato() {
            const now = new Date();
            const current = now.getHours() + ':' + now.getMinutes();

            let listaMessaggi = document.querySelector('.lista_messaggi')
            let message = document.createElement('li');
            message.classList.add('my_message');
            message.innerHTML = `<div> ${this.newMessage.trim()} </div> <span class="timing_message">${current}</span>`
            if (this.newMessage.trim() == '') {

            } else {
                listaMessaggi.append(message);
            }
            this.newMessage = '';

    
            setTimeout(this.messaggioRicevuto, 2000);
        


        },
        messaggioRicevuto() {
            const now = new Date();
            const current = now.getHours() + ':' + now.getMinutes();

            let listaMessaggi = document.querySelector('.lista_messaggi')
            let respondMessage = document.createElement('li');
            respondMessage.classList.add('your_message');
            respondMessage.innerHTML = `<div>OK</div> <span class="timing_message">${current}</span>`
            listaMessaggi.append(respondMessage);
        }
    }

}
)