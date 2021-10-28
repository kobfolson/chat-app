<template>
    <div class="flex h-20 py-3 w-full">
        <img src="img/user0.jpg" alt="user" class="w-14 h-14 rounded-full" />
        <div class="flex-auto ml-4">
            <div class="flex justify-between">
                <h2>{{ user }}</h2>
                <p>{{ time }}</p>
            </div>
            <div>
                <p>{{ message }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChatCard",
    props: {
        user: { type: String, default: "Joe" },
        time: { type: String, default: "8:00pm" },
        message: { type: String, default: "Hello Joe!" }
    }
}
</script>