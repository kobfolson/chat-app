<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen">
        <div class="flex justify-between mb-4 mt-2 mx-4">
            <div class="flex justify-center items-center">
                <img src="/img/user0.jpg" alt="user" class="object-contain w-12 h-12 rounded-full" />
                <h1 class="ml-2">Chats</h1>
            </div>
            <div>
                <button class="bg-yellow-400 w-12 h-12 rounded-full">
                    <img src="@/assets/svg/feather-chat.svg" alt="chat" class="m-auto" />
                </button>
            </div>
        </div>
        <div class="bg-grey rounded-3xl h-12 flex items-center px-4 py-3">
            <img src="@/assets/svg/search.svg" alt="search" />
            <input
                type="text"
                class="bg-grey outline-none border-none ml-3 w-full"
                placeholder="Search for a chatter or message"
            />
        </div>
        <div class="overflow-scroll max-h-full rm-scrollbar">
            <!-- <div v-for="n in 12" :key="n"> -->
            <ChatCard user="Mark" time="4:00am" message="Hello" />
            <!-- </div> -->
        </div>
        <div class="hidden">
            <div class="flex justify-center mt-20">
                <img src="@/assets/svg/group2.svg" alt="group" />
            </div>
            <div class="text-center mt-4">
                <a href="#">We hear say your mouth die</a>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.rm-scrollbar {
    scrollbar-width: none;
}
</style>