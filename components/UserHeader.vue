<template>
    <div class="flex justify-between mb-4 mt-2 mx-4">
        <div class="flex justify-center items-center">
            <img src="/img/user0.jpg" alt="user" class="object-contain w-12 h-12 rounded-full" />
            <h1 class="ml-2">Chats</h1>
        </div>
        <div>
            <button class="bg-black w-12 h-12 rounded-full flex justify-center items-center">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div class="stroke-current text-yellow-300" v-html="featherYellow" />
            </button>
        </div>
    </div>
</template>

<script>
import featherYellow from "@/assets/svg/feather-chat.svg?raw"
import welcomeImg from "@/assets/svg/group2.svg?raw"

export default {
    data() {
        return { featherYellow, welcomeImg }
    }
}
</script>