import { sleep } from "@/helpers/sleep";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import type { YesNoResponse } from "@/interfaces/yes-no.response";
import { ref } from "vue";

export const useChat = () => {
    //image: "https://media4.giphy.com/media/v1.Y2lkPWIxMTNhOTZiZmFwNWNpa3BqYm5nbzZhdjFnaTYwaWo4eTZoNWs4eDZtOGwwYW1rYSZlcD12MV9naWZzX3JhbmRvbSZjdD1n/QBXuSzGhZQ0FOAmCxk/giphy.gif"
    //image: "https://media4.giphy.com/media/v1.Y2lkPWIxMTNhOTZidXVjM3JuNXRqd2Uwd29oanN0a21xNHc0dm0xeHo4aHR5bnJjdXlkcSZlcD12MV9naWZzX3JhbmRvbSZjdD1n/4lGpWeg9FvcFJJpx4I/giphy.gif"
    //image: "https://media2.giphy.com/media/v1.Y2lkPWFmMzk1ZjIwZjhjcXQwdWt1ZnJzMmhwNXV6dWRsbm03c2gzd2hmY2J5dXd2NDRmMiZlcD12MV9naWZzX3JhbmRvbSZjdD1n/NEvPzZ8bd1V4Y/giphy.gif"

    const messages = ref<ChatMessage[]>([]);

    const getHerResponse = async() => {
        const resp = await fetch('https://yes-no-wtf.vercel.app/api');
        const data = (await resp.json()) as YesNoResponse;
        return data;
    }

    const onMessage = async(text: string) =>{
        
        if(text.length === 0) return;

        messages.value.push({
            id: new Date().getTime(),
            message: text,
            itsMine: true,
        });

        //EValuar si termina con un ?
        if(!text.endsWith('?')) return;
        await sleep(1.5);
        const {answer, image, forced} = await getHerResponse();
        messages.value.push({
            id: new Date().getTime(),
            message: answer,
            itsMine: forced,
            image: image,
        });

    };



    return {

        //Properties
        messages,

        //Methods
        onMessage,
    }
}