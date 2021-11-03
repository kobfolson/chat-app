<template>
    <div>
        <div class="flex justify-center mt-20">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-html="welcomeImg" />
        </div>
        <div class="text-center mt-4">
            <a href="#">We hear say your mouth die hmmm</a>
            <button
                class="rounded-3xl bg-black text-yellow-300 px-4 py-2 flex justify-center items-center mx-auto mt-8"
            >
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div class="mr-2 stroke-current text-white" v-html="featherYellow" />Start chatting
            </button>
        </div>
    </div>
</template>

<script>
import welcomeImg from "@/assets/svg/group2.svg?raw"
import featherYellow from "@/assets/svg/feather-chat.svg?raw"

export default {
    data() {
        return { featherYellow, welcomeImg }
    }
}
</script>