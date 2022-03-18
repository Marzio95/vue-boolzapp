const app = new Vue({
    el: '.container',
    data: {
        openPage: false,
        deleteAllVisible: false,
        nomeRicercato: '',
        visible: -1,
        indiceUtenteAttivo: 0,
        newMessage: '',
        arrayUtentiChat: [
            {
                nome: 'Michele',
                imgUtente: 'avatar_1.jpg',
                visibilità: true,
                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'hai comprato il biglietto della lotteria?',
                        ora: '12.00',
                        mittente: true,

                    },
                    {
                        testo: 'hai vinto?',
                        ora: '17.30',
                        mittente: true,

                    },
                    {
                        testo: 'nope',
                        ora: '21.00',
                        mittente: false,

                    },
                ]

            },
            {
                nome: 'Fabio',
                imgUtente: 'avatar_2.jpg',
                visibilità: true,

                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: "Come sta andando l'esercizio?",
                        ora: '11.00',
                        mittente: true,

                    },
                    {
                        testo: 'Sei il più forte a scrivere codice???',
                        ora: '19.00',
                        mittente: true,

                    },
                    {
                        testo: 'Magari...',
                        ora: '22.00',
                        mittente: false,

                    },
                ]


            },
            {
                nome: 'Samuele',
                imgUtente: 'avatar_3.jpg',
                visibilità: true,

                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'Lavori stasera?',
                        ora: '10.00',
                        mittente: true,

                    },
                    {
                        testo: 'Andiamo al cinema?',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'Certo, alle 21 lì.',
                        ora: '23.00',
                        mittente: false,

                    },
                ]


            },
            {
                nome: 'Alessandro B.',
                imgUtente: 'avatar_4.jpg',
                visibilità: true,

                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'Partitta oggi?',
                        ora: '07.00',
                        mittente: true,

                    },
                    {
                        testo: "C'è la Roma...",
                        ora: '09.00',
                        mittente: true,

                    },
                    {
                        testo: 'Avoja',
                        ora: '11.00',
                        mittente: false,

                    },
                ]


            },
            {
                nome: 'Alessandro L.',
                imgUtente: 'avatar_5.jpg',
                visibilità: true,

                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'Come và?',
                        ora: '10.00',
                        mittente: true,

                    },
                    {
                        testo: 'Tutto bene?',
                        ora: '10.20',
                        mittente: true,

                    },
                    {
                        testo: 'Come al solito',
                        ora: '10.30',
                        mittente: false,

                    },
                ]


            },
            {
                nome: 'Claudia',
                imgUtente: 'avatar_6.jpg',
                visibilità: true,

                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'Ciao',
                        ora: '17.00',
                        mittente: true,

                    },
                    {
                        testo: 'Da quanto tempo...',
                        ora: '17.03',
                        mittente: true,

                    },
                    {
                        testo: 'Sono passati anni',
                        ora: '17.05',
                        mittente: false,

                    },
                ]


            },
            {
                nome: 'Federico',
                imgUtente: 'avatar_7.jpg',
                visibilità: true,

                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'Vieni stasera?',
                        ora: '19.00',
                        mittente: true,

                    },
                    {
                        testo: 'Festeggiamo...',
                        ora: '19.01',
                        mittente: true,

                    },
                    {
                        testo: 'Dimmi dove e quando',
                        ora: '20.00',
                        mittente: false,

                    },
                ]




            },
            {
                nome: 'Davide',
                imgUtente: 'avatar_8.jpg',
                visibilità: true,

                lastMessage: 'Ultimo messaggio inviato',
                chat: [
                    {
                        testo: 'Davide',
                        ora: '23.00',
                        mittente: true,

                    },
                    {
                        testo: 'Dove sono i miei soldi?',
                        ora: '23.01',
                        mittente: true,

                    },
                    {
                        testo: 'Non li avrai mai',
                        ora: '23.59',
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

        },
        deleteMessage(index) {
            this.arrayUtentiChat[this.indiceUtenteAttivo].chat.splice(index, 1)
        },
        visibleDelete(index) {
            if (this.visible == -1) {
                this.visible = this.arrayUtentiChat[this.indiceUtenteAttivo].chat[index]
            }
            else {
                this.visible = -1
            }
        },
        ricercaNome() {

            this.arrayUtentiChat.forEach(element => {
                if (!element.nome.toLowerCase().includes(this.nomeRicercato.toLowerCase())) {
                    element.visibilità = false;
                }
                if (this.nomeRicercato == '') {
                    element.visibilità = true;
                }

            });
        },
        deleteAll() {
            this.arrayUtentiChat[this.indiceUtenteAttivo].chat.splice(this.arrayUtentiChat[this.indiceUtenteAttivo].chat)
            if (this.deleteAllVisible == true) {
                this.deleteAllVisible = false;
            }
        },
        visibleDeleteAll() {
            if (this.deleteAllVisible == false) {
                this.deleteAllVisible = true;
            } else {
                this.deleteAllVisible = false;
            }
        },
        deleteChat(){
            this.arrayUtentiChat.splice(this.indiceUtenteAttivo, 1)
            if (this.deleteAllVisible == true) {
                this.deleteAllVisible = false;
            }
        },
        deleteChatAll(){
            this.arrayUtentiChat.splice(this.indiceUtenteAttivo)
            if (this.deleteAllVisible == true) {
                this.deleteAllVisible = false;
            }
        },

    },

    mounted: function () {
        setTimeout(() => {
            this.openPage = true;
        }, 3000);
    },

}
)