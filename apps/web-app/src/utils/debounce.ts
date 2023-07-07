export const debounce = (fn, hasFirstTrigger) => {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        if (hasFirstTrigger && !timer) {
            fn.apply(this, args)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
            timer = null
        }, 500)
    }
}