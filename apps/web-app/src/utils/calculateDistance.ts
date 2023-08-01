// 将角度转换为弧度
const degreesToRadians = degrees => degrees * (Math.PI / 180);

// 使用Haversine公式计算两个经纬度之间的直线距离（单位：千米）
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
    if (!lat1) return;
    const earthRadiusKm = 6371; // 地球半径，单位：千米

    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degreesToRadians(lat1)) *
        Math.cos(degreesToRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadiusKm * c;
    return distance.toFixed();
};
