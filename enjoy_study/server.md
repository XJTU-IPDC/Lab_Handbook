# 实验室服务器使用手册

## 服务器配置

- CPU: AMD EPYC 7742 64-Core *2
- 显卡: NVIDIA GeForce 3090 24G*4
- 内存: 1008G
- 硬盘: 1T SSD, 16T HDD
- 操作系统: Ubuntu 18.04

## 服务管理员

- 于钊 yuzhaokz@163.com
- 韩硕 hanshuo123i@163.com

> 如对服务器管理有兴趣，随时欢迎加入

## 服务器使用说明

1. 服务器IP地址为 `10.184.17.102`，在校内网环境下可以直接链接，校外可通过学校提供的SSL VPN服务 (https://sslvpn.xjtu.edu.cn) 接入校内网使用
2. 如需使用服务器可联系任一管理员创建账号，使用账号均为普通用户权限
3. 在使用过程中有任何问题及时联系管理员进行处理
4. 如果需要使用显卡进行深度学习训练，请先用`watch -n 1 nvidia-smi`命令查看并选择未被占用的显卡进行使用，Pytorch环境下使用`torch.cuda.set_device(gpu_idx)`设置指定的GPU