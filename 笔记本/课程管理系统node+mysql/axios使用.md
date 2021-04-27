

axios.get()方法执行获取操作

```javascript
axios

​        .get("http://localhost:3000/getListCount")

​        .then(response => {

​          //这里使用箭头函数，可以保证count赋值成功

​          console.log(response);

​          console.log(response.data.data[0].count);

​          this.count = response.data.data[0].count;

​        })

​        .catch(function(err) {});
```



axios. post()方法执行删除操作

```javascript
axios.post("http://localhost:3000/deleteStudent", {

         data: this.deleteData

        })

        .then(response => {
          console.log(response.data.data);

          this.deleteData.deleateFlag = response.data.msg;

          if ((this.deleteData.deleateFlag = "success")) {

            alert("删除成功！");

          } else {

           alert("删除失败！");

         }
       });




```

