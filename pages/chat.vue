<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen lg:flex">
        <div class="lg:w-134 lg:h-screen lg:py-2 lg:border-r lg:border-grey">
            <UserHeader />
            <SearchBar />
            <div class="overflow-scroll max-h-full px-4 rm-scrollbar">
                <div v-for="n in 12" :key="n">
                    <ChatCard user="Mark" time="4:00am" message="Hello" />
                </div>
            </div>
        </div>
        <div class="hidden lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center">
            <WelcomeMessage />
        </div>
    </div>
</template>

<script>
import featherYellow from "@/assets/svg/feather-chat.svg?raw"
import welcomeImg from "@/assets/svg/group2.svg?raw"

export default {
    data() {
        return { featherYellow, welcomeImg };
    },
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