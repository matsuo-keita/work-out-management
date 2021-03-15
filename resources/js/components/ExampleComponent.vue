<template>
    <div class="container">
        <div class="row justify-content-center bg-white">
            <div class="col-12">
                <table>
                    <thead>
                    <tr>
                        <td>No</td>
                        <td>タイトル</td>
                        <td>補足説明</td>
                        <td>最終更新日時</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in aryItems" v-bind:key="index">
                        <td>{{index+1}}</td>
                        <td>{{item}}</td>
                        <td>{{item}}</td>
                        <td>{{item}}</td>
                        <td>
                            <button type="button">
                                編集
                            </button>
                            <button type="button">
                                確認
                            </button>
                            <button type="button">
                                回答
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["aryItems"],
    data(){
        return {
        }
    },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>

<style lang="scss" scoped>
$main_color:LightGreen;
table ,td{
    border:solid 3px green;
}
tbody tr:hover{
    background-color: $main_color;
}
</style>
