<template>
    <div class="container">
        <div class="row justify-content-center ">
            <div class="col-12">
                <button class="btn-blue">スクワット</button>
                <button class="btn-blue">ベンチプレス</button>
                <button class="btn-blue">デッドリフト</button>
                <button class="btn-blue">ラットプルダウン</button>
                <button class="btn-blue">アブローラー</button>
                <button class="btn-blue">サイドレイズ</button>
                <form>
                    <div>
                        <select name="weight">
                            <option value="">--選択してください--</option>
                            <option v-for="weight in weights" v-bind:value="weight.value">
                                {{ weight.text }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <input type="button" value="登録" class="btn-blue">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            weights: [
                {text: '1.25', value: '1'},
                {text: '2.5', value: '2'},
                {text: '3.75', value: '3'},
                {text: '5', value: '4'},
                {text: '6.25', value: '5'},
                {text: '7.5', value: '6'},
                {text: '8.75', value: '7'},
                {text: '10', value: '8'}
            ]
        }
    },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>

<style lang="scss" scoped>
</style>
