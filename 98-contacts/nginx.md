# net::ERR_CONTENT_LENGTH_MISMATCH 200

由nginx权限不足引起， 解决：

终端执行：

> sudo nginx -s stop
>
> sudo rm -rf /usr/local/var/run/nginx/*
>
> sudo nginx