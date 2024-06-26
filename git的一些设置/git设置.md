# 解决：git SSL certificate problem: unable to get local issuer certificate

用git获取项目的时候提示`git SSL certificate problem: unable to get local issuer certificate`

这个问题是由于没有配置信任的服务器HTTPS验证。默认，cURL被设为不信任任何CAs，就是说，它不信任任何服务器验证。

只需要执行下面命令就可以解决：
`git config --global http.sslVerify false`



#### git操作

一、pull操作
1、将远程指定分支 拉取到 本地指定分支上：

git pull origin <远程分支名>:<本地分支名>
1
（注：命令里的尖括号<>只是包裹中文的标识，方便你看的，实际使用时不用写，不过冒号需要）

2、将远程指定分支 拉取到 本地当前分支上：

git pull origin <远程分支名>
1
3、将与本地当前分支同名的远程分支 拉取到 本地当前分支上(需先关联远程分支，方法见文章末尾，只需关联一次)

git pull
1
在克隆远程项目的时候，本地分支会自动与远程仓库建立追踪关系，可以使用默认的origin来替代远程仓库名

二、push操作
1、将本地当前分支 推送到 远程指定分支上（注意：pull是远程在前本地在后，push相反）：

git push origin <本地分支名>:<远程分支名>
1
2、将本地当前分支 推送到 与本地当前分支同名的远程分支上（注意：pull是远程在前本地在后，push相反）：

git push origin <本地分支名>
1
3、将本地当前分支 推送到 与本地当前分支同名的远程分支上(需先关联远程分支，方法见文章末尾)

git push
1
附：
将本地分支与远程同名分支相关联

git push --set-upstream origin <本地分支名>

// 简写方式
git push -u origin <本地分支名>
