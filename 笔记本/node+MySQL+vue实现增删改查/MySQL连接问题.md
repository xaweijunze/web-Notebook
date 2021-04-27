如果你也遇到这个问题，请先找到目录/usr/local/mysql/data/，找到data这个文件夹，如果你没有权限，修改文件可读可写的权限，data文件里面有两个文件：ib_logfile0和ib_logfile1。把他们删除。

请删除它们。

接下来再按下面的步骤操作：


step1：
停止Mysql服务

step2：
进入终端输入：cd /usr/local/mysql/bin/
回车后 登录管理员权限 sudo su
回车后输入以下命令来禁止mysql验证功能 ./mysqld_safe --skip-grant-tables &
回车后mysql会自动重启（偏好设置中mysql的状态会变成running）

step3. 
输入命令 ./mysql
回车后，输入命令 FLUSH PRIVILEGES; 
回车后，输入命令 ALTER USER 'root'@'localhost' IDENTIFIED BY '你的新密码'; 
