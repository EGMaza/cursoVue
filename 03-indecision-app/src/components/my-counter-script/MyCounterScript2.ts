import { defineComponent } from 'vue';
import { useCounter } from '@/composables/useCounter';
    export default defineComponent({
        props: {
            initialValue: {
                type: Number, required: true 
            },
        },

        setup(props){
            const {counter, squareCounter} = useCounter(props.initialValue);
            //const counter = ref(props.initialValue);
            //const squareCounter = computed(
            //()=>counter.value * counter.value
            //);
            const sumador = () =>{
                counter.value++;
            };
            const restador = () => {
                counter.value--;
            }

            return{
                counter,
                squareCounter,
                sumador,
                restador,
            };
        },
    });