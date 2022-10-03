export function getCity() {
    return new Promise((resolve, reject) => {
        // BMap = window.BMap;
        // @ts-ignore
        const geolocation:any = new  BMap.Geolocation();
        geolocation.getCurrentPosition(
            function getinfo(position:any) {
                let city = position.address.city; //获取城市信息
                let province = position.address.province; //获取省份信息
                resolve({ province, city });
            },
            function (e:any) {
                // _this.LocationCity = "定位失败";
            },
            { provider: "baidu" }
        );
    });
    // 定义获取城市方法
}
