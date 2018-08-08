<template>
    <div>

    </div>
</template>

<script>
    export default {
        mixins: [require('')],
        data() {
            return {
                name: 'name'
            }
        },
        computed: {
            name() {
                return this.data 
            }
        },
        methods: {
            name() {
                
            }
        }
    }
    var vm = new Vue({
        data() {
            return {
                key: value
            }
        },
        computed: {
            name() {
                return this.data            
            }
        },
        methods: {
            name() {
                
            }
        },
        watch: {
            data(newValue, oldValue) {
                
            }
        },
        watch: {
            question:function(newValue, oldValue) {
                
            }
        },
    })
    vm.$watch(expOrFn, callback)
</script>

<style scoped>

</style>

