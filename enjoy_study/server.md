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

### 数据目录挂载

服务器系统盘只有1T的空间，目前已经使用了接近50%，之后如果要给服务器装软件还需要对其进行占用。因此，为了节省系统盘的空间，当大家有较大数据文件需要放在服务器上时，建议挂载到数据盘内。
数据盘目前总容量为14T，后面还可以加，所以放心使用。接下来说明如何将数据盘挂载到自己目录下。

1. 切换到数据盘挂载的文件目录`/data`下
   ```shell
   cd /data
   ```
2. 创建以自己用户名命名的文件夹
   ```shell
   mkdir $USER$
   ```
3. 将该文件夹soft link（mount 需要sudo权限，这里不必要）到自己的用户目录下即可
   ```shell
   ln -s /data/$USER$ ~/data
   ```
4. 删除软连接
   ```shell
   rm -rf ~/data  # 注意千万不要给后面再加一个/ 如果加了就是连数据一起删除了，惨的一
   ```

### 用户目录下conda安装

Python 环境推荐使用Anaconda，可以每个普通用户自行安装

1. 首先创建目录 Downloads 用来存放下载文件

   ```shell
   mkdir Downloads

   ```

2. 进入 Downloads 文件夹下

   ```shell
   cd Downloads

   ```

3. 下载 Anaconda 安装包

   ```shell
   wget https://repo.anaconda.com/archive/Anaconda3-2022.05-Linux-x86_64.sh

   ```

4. 给安装包添加执行权限

   ```shell
   chmod +x Anaconda3-2022.05-Linux-x86_64.sh

   ```

5. 执行安装程序，一路回车，遇到选项就填 `yes`

   ```
   ./Anaconda3-2022.05-Linux-x86_64.sh

   ```

6. 重新进入命令行即可激活 `conda` 环境
