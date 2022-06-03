<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
    </footer>
</template>

<script>
export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    }
}
</script>