const {createApp, ref} = Vue;

const app = createApp({
    //template: `
    //<h1>{{message}}</h1>
    //<p>{{author}}</p>
    //`,
    setup(){
        const message = ref("I'm Batman");
        const author = ref("Bruce Wayne");

        const changeQuote = () =>{
                message.value = 'Hola, soy Gokú';
                author.value = 'Gokú';
        }

        /*setTimeout(() => {
            message.value = 'Soy Gokú';
            author.value = message.value;
        }, 2000);*/

        return {
            message,
            author,
            changeQuote,
        }
    }
});

app.mount('#myApp');