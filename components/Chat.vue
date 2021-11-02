<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen lg:flex">
        <div class="lg:w-134 lg:h-screen lg:py-2 lg:border-r lg:border-grey">
            <div class="flex justify-between mb-4 mt-2 mx-4">
                <div class="flex justify-center items-center">
                    <img
                        src="/img/user0.jpg"
                        alt="user"
                        class="object-contain w-12 h-12 rounded-full"
                    />
                    <h1 class="ml-2">Chats</h1>
                </div>
                <div>
                    <button
                        class="bg-black w-12 h-12 rounded-full flex justify-center items-center"
                    >
                        <!-- eslint-disable-next-line vue/no-v-html -->
                        <div class="stroke-current text-yellow-300" v-html="featherYellow" />
                    </button>
                </div>
            </div>
            <div class="bg-grey rounded-3xl h-12 flex items-center mx-2 px-4 py-3">
                <img src="@/assets/svg/search.svg" alt="search" />
                <input
                    type="text"
                    class="bg-grey outline-none border-none ml-3 w-full"
                    placeholder="Search for a chatter or message"
                />
            </div>
            <div class="overflow-scroll max-h-full px-4 rm-scrollbar">
                <div v-for="n in 12" :key="n">
                    <ChatCard user="Mark" time="4:00am" message="Hello" />
                </div>
            </div>
        </div>
        <div class="hidden lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center">
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

<style scoped>
.rm-scrollbar {
    scrollbar-width: none;
}
.rm-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>