<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>UserName: {{ switchName() }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            }
        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("");
            },
            resetName() {
                this.name = 'Michael';
                this.$emit('nameWasReset', this.name);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
