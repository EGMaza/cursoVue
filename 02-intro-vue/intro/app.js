const {createApp, ref}  = Vue;

const app = createApp({
    //template: `
    //    <h1>{{ message }}</h1>
    //    <h1>{{ message2 }}</h1>
    //`,
    setup(){

        const message = ref("I'm Batman");
        const message2 = ref("Bruce Wayne");

        //setTimeout(()=>{
        //    message.value = "Hola soy Gokú";
        //    message2.value = "Kakaroto";
        //}, 1000);

        const changeQuote = () => {
            message.value = 'Hola, soy Gokú' ;
            message2.value = 'Gokú';
        }

        return {
            message,
            message2,
            changeQuote,
        }
    }
});

app.mount('#myApp');