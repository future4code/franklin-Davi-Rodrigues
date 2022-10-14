export const svgBackground = (color, mobile = false) => {
    if(!mobile){
        const svg = `data:image/svg+xml,%3Csvg width='613' height='1080' viewBox='0 0 613 1080' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M613 0C613 0 361.26 501.011 613 1080H0V0H613Z' fill='%23${color}'/%3E%3C/svg%3E%0A`
        return svg
    } else {
        const svg = `data:image/svg+xml,%3Csvg width='524' height='570' viewBox='0 0 524 570' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M871.477 569.828C871.477 569.828 306.227 281.609 -347 569.828V-132L871.477 -132V569.828Z' fill='%23${color}'/%3E%3C/svg%3E`
        return svg
    }
}