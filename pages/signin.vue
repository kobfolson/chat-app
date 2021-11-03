<template>
    <main class="flex fixed top-0 bottom-0 left-0 right-0">
        <div class="hidden lg:w-3/6 lg:flex lg:justify-center lg:items-center">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="w-90 flex" v-html="signInAlpha" />
        </div>
        <div class="w-full lg:w-auto m-2">
            <div
                class="flex flex-col w-full justify-center items-center lg:w-90 lg:mt-44 lg:flex-none lg:justify-start lg:items-start"
            >
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div class="mb-6" v-html="chattereeLogo" />
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div class="object-contain mx-6 w-80 flex lg:hidden" v-html="signInBeta" />
                <h1 class="text-base text-center mb-2 font-bold font-sans lg:text-4xl lg:text-left">
                    Howdy chatter! Your
                    <span class="block">peeps are waiting</span>
                </h1>
                <p class="mb-10">
                    <small
                        class="hidden lg:block lg:text-greyDark"
                    >Enter your email address to start chatting.</small>
                </p>
                <div class="w-90 mb-6">
                    <label
                        for="email"
                        class="hidden lg:block lg:text-greyDark lg:mb-1"
                    >Email address</label>
                    <input
                        placeholder="example@mail.com"
                        type="email"
                        class="outline-none border-none bg-grey rounded-3xl h-12 w-full px-6"
                    />
                    <div class="hidden lg:my-6 lg:flex lg:flex-row-reverse">
                        <NuxtLink to="/verify">
                            <button class="rounded-3xl bg-black text-yellow-300 px-4 py-2">Next</button>
                        </NuxtLink>
                    </div>
                    <hr class="hidden lg:block" />
                    <div class="mt-6">
                        <AppButton show="true" :image="googleIcon" text="Continue with Google" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<script>
import googleIcon from "@/assets/svg/google-icon.svg?raw";
import chattereeLogo from "@/assets/svg/chatteree-logo.svg?raw";
import signInAlpha from "@/assets/svg/chatteree-signin-alpha.svg?raw";
import signInBeta from "@/assets/svg/chatteree-signin-beta.svg?raw";

export default {
    data() {
        return { googleIcon, chattereeLogo, signInAlpha, signInBeta };
    },
};
</script>