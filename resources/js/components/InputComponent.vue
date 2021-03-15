<template>
    <div class="container">
        <div class="row justify-content-center bg-white">
            <div class="col-12">
                <button>スクワット</button>
                <button>ベンチプレス</button>
                <button>デッドリフト</button>
                <button>ラットプルダウン</button>
                <button>アブローラー</button>
                <button>サイドレイズ</button>
                <form>
                    <div>
                        <select name="weight">
                            <option value="1">1.25</option>
                            <option value="2">2.5</option>
                            <option value="3">3.75</option>
                        </select>
                    </div>
                    <div>
                        <input type="button" value="登録">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>

<style lang="scss" scoped>
</style>
