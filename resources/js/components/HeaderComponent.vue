<template>
    <div class="container-fluid bg-gray-400 mb-3">
        <div class="container">
            <nav class="navbar navbar-dark">
                <span class="navbar-brand mb-0 h1">筋トレ管理</span>
                <div>
                    <router-link v-bind:to="{name: 'workout.register'}">
                        <button class="btn-blue">登録</button>
                    </router-link>
                    <router-link v-bind:to="{name: 'workout.calendar'}">
                    <button class="btn-blue">カレンダー</button>
                    </router-link>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>

<style lang="scss" scoped>
</style>
