<template>
  <main class="flex fixed top-0 bottom-0 left-0 right-0">
    <div class="w-3/6 flex">
      <img src="@/assets/svg/chatteree-signin-img.svg" alt="sign in" class="block m-auto" />
    </div>
    <div>
      <div class="w-90 mt-44">
        <img src="@/assets/svg/chatteree-logo.svg" alt="logo" class="mb-6" />
        <h1 class="text-4xl mb-4 font-sans">
          Howdy chatter! Your
          <span class="block">peeps are waiting</span>
        </h1>
        <p class="mb-10">
          <small class="text-greyDark">Enter your email address to start chatting.</small>
        </p>
        <div class="w-90 mb-6">
          <label for="email" class="block text-greyDark mb-1">Email address</label>
          <input type="email" class="outline-none border-none bg-grey rounded-3xl h-12 w-full px-6" />
        </div>
        <div class="mb-6 flex flex-row-reverse">
          <NuxtLink to="/verify">
            <button class="rounded-3xl bg-black text-yellow-300 px-4 py-2">Next</button>
          </NuxtLink>
        </div>
        <hr />
        <button
          class="rounded-3xl border border-gray-50 py-2 flex w-full justify-center items-center mt-6"
        >
          <img src="@/assets/svg/google-icon.svg" alt="google icon" class="mr-2" />
          Continue with Google
        </button>
      </div>
    </div>
  </main>
</template>
