<template>
    <div class="container">
        <part1-mxnguyen></part1-mxnguyen>
        <hr>
        <part2-mxnguyen></part2-mxnguyen>
        <hr>
        <part3-mxnguyen></part3-mxnguyen>
    </div>
</template>

<script>
import part1 from './Part1.vue';
import part2 from './Part2.vue';
import part3 from './Part3.vue';

export default {
    components: {
        'part1-mxnguyen': part1,
        'part2-mxnguyen': part2,
        'part3-mxnguyen': part3
    }
}
</script>
