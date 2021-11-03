<template>
    <main class="flex justify-center">
        <div class="mt-28">
            <img src="@/assets/svg/chatteree-logo.svg" alt="logo" class="mb-6" />
            <h1 class="text-4xl">
                A Chatteree ID cos
                <span class="block">you're special.</span>
            </h1>
            <p class="text-greyDark mb-10">
                <small>People will be able to find you with your unique ID</small>
            </p>
            <div class="w-90 mb-6">
                <label for="id" class="block text-greyDark mb-1">Chatteree ID</label>
                <div class="bg-grey rounded-3xl h-12 w-full px-6 flex justify-center items-center">
                    <img src="@/assets/svg/@.svg" alt="@ sign" />
                    <input type="text" class="outline-none border-none bg-grey px-6" />
                </div>
            </div>
            <div class="mb-6 flex flex-row-reverse">
                <NuxtLink to="/verify">
                    <button class="rounded-3xl bg-black text-yellow-300 px-4 py-2">Continue</button>
                </NuxtLink>
            </div>
        </div>
    </main>
</template>