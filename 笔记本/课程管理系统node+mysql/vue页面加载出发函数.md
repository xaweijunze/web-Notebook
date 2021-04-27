使用 **mounted:****function () {} 访问页面时自动触发函数内容**



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Index</title>
    <script src="static/js/vue.js"></script>
    <script src="static/js/axios.min.js"></script>
</head>
<body>
<div id="get_host_data">
    <button @click="GetHostData">获取数据</button>
    <table class="table table-bordered table-hover table-striped">
        <thead>
        <tr>
            <td>ID</td>
            <td>版本包</td>
            <td>md5</td>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) of host_list" :key="item.pk">
                <td>{{ item.pk }}</td>
                <td>{{ item.fields.package_version }}</td>
                <td>{{ item.fields.md5_number }}</td>
            </tr>
        </tbody>
    </table>
</div>
<script>
    new Vue({
        el:"#get_host_data",
        data: {
            host_list: []
        },
        methods:{
            GetHostData:function(){
                var url = "http://127.0.0.1:8001/super_cmdb/serverhost_list/";
                axios.get(url).then(response => {
                    if (response.data.status==0) {
                        this.host_list = response.data.message;
                        console.log(response.data.message);
                        console.log("获取机器列表成功")
                } else {
                        console.error("获取机器列表失败")
                    }
                })
            }
        },
        mounted:function () {   //自动触发写入的函数
            this.GetHostData();
        }
    })
</script>
</body>
</html>
```