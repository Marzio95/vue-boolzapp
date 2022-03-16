const app = new Vue({
    el: '#root',
    data: {
        indiceUtenteAttivo: 0,
        newMessage: '',
        arrayUtentiChat: [
            {
                nome: 'Michele',
                imgUtente: 'avatar_1.jpg',
                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'hai portato',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'hai portato il dogo',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'nope',
                        ora: '17.00',
                        mittente: false,

                    },
                ]

            },
            {
                nome: 'Fabio',
                imgUtente: 'avatar_2.jpg',
                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'hai portato',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'hai portato il dogo',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'nope',
                        ora: '17.00',
                        mittente: false,

                    },
                ]


            },
            {
                nome: 'Samuele',
                imgUtente: 'avatar_3.jpg',
                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'hai portato',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'hai portato il dogo',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'nope',
                        ora: '17.00',
                        mittente: false,

                    },
                ]


            },
            {
                nome: 'Alessandro B.',
                imgUtente: 'avatar_4.jpg',
                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'hai portato',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'hai portato il dogo',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'nope',
                        ora: '17.00',
                        mittente: false,

                    },
                ]


            },
            {
                nome: 'Alessandro L.',
                imgUtente: 'avatar_5.jpg',
                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'hai portato',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'hai portato il dogo',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'nope',
                        ora: '17.00',
                        mittente: false,

                    },
                ]


            },
            {
                nome: 'Claudia',
                imgUtente: 'avatar_6.jpg',
                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'hai portato',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'hai portato il dogo',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'nope',
                        ora: '17.00',
                        mittente: false,

                    },
                ]


            },
            {
                nome: 'Federico',
                imgUtente: 'avatar_7.jpg',
                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'hai portato',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'hai portato il dogo',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'nope',
                        ora: '17.00',
                        mittente: false,

                    },
                ]




            },
            {
                nome: 'Davide',
                imgUtente: 'avatar_8.jpg',
                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'hai portato',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'hai portato il dogo',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'nope',
                        ora: '17.00',
                        mittente: false,

                    },
                ]



            },


        ]


    }, methods: {
        messaggioInviato(indiceUtenteAttivo) {
            const now = new Date();
            const current = now.getHours() + ':' + now.getMinutes();

            if (this.newMessage.trim() == '') {

            } else {
                this.arrayUtentiChat[indiceUtenteAttivo].chat.push(
                    {
                        testo: this.newMessage,
                        ora: current,
                        mittente: true,
                    }
                );
            }
            this.newMessage = '';


            setTimeout(this.messaggioRicevuto, 1000);



        },
        messaggioRicevuto() {
            const now = new Date();
            const current = now.getHours() + ':' + now.getMinutes();

            this.arrayUtentiChat[this.indiceUtenteAttivo].chat.push(
                {
                    testo: 'OK',
                    ora: current,
                    mittente: false,
                });
        },
        cambioUtente(index) {
            this.indiceUtenteAttivo = index;

        }


    }

}
)