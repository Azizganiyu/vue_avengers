<template>
    <div class="welcome">
        <h2>Hello {{name}}</h2>
        <p>Artificial intelligence is a science and technology based on disciplines such as Computer Science, Biology, Psychology, Linguistics, Mathematics, and Engineering. A major thrust of AI is in the development of computer functions associated with human intelligence, such as reasoning, learning, and problem solving.</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: this.$route.params.name
            }
        }
    }
</script>