<template>
    <main class="fixed top-0 bottom-0 left-0 right-0">
        <NuxtLink to="/signin">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="fixed lg:fixed lg:top-24 lg:left-36" v-html="ellipseImg" />
        </NuxtLink>
        <div
            class="flex flex-col justify-center items-center mt-10 md:mx-auto md:w-96 md:mt-24 md:block"
        >
            <img src="@/assets/svg/chatteree-logo.svg" alt="logo" class="mb-6" />
            <h1 class="mb-4 text-4xl font-sans">
                <strong>Check your mail</strong>
            </h1>
            <p class="mb-10 text-greyDark text-center lg:text-left">
                <small>
                    Enter the confirmation code sent to
                    <span class="block">
                        <span class="text-black">example@mail.com</span>
                        to verify that its you.
                    </span>
                </small>
            </p>
            <div class="flex flex-row justify-between mb-10 px-4 w-full">
                <div v-for="n in 6" :key="n">
                    <input
                        type="text"
                        class="bg-grey border-none outline-none rounded-2xl w-14 h-16 px-4"
                    />
                </div>
            </div>
            <div class="flex flex-row justify-between items-center mb-16 px-4 w-full">
                <p>Resend code</p>
                <NuxtLink to="/id">
                    <button class="rounded-3xl bg-black text-yellow-300 px-6 py-2">Verify</button>
                </NuxtLink>
            </div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="flex justify-center items-center w-full object-contain" v-html="illustImg" />
        </div>
    </main>
</template>

<script>
import illustImg from "@/assets/svg/illust.svg?raw";
import ellipseImg from "@/assets/svg/ellipse.svg?raw";
import chattereeLogo from "@/assets/svg/chatteree-logo.svg?raw";

export default {
    data() {
        return { illustImg, ellipseImg, chattereeLogo }
    }
}
</script>
