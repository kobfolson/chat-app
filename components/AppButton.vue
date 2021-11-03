<template>
    <button class="rounded-3xl border border-gray-50 py-2 flex w-full justify-center items-center">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-show="show" class="mr-2" v-html="image" />
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        image: { type: Image, default: "" },
        text: { type: String, default: "" },
        show: { type: Boolean, default: false },
    }
}
</script>