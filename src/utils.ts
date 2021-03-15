export const getElement = (selection: string) =>
{
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error(`Please check "${selection}" selector, no such element exist`);
};

export const throttled = (fn: Function, delay = 200) =>
{
    let last = 0;
    return function (...args: any)
    {
        const now = (new Date).getTime();
        if (now - last < delay) { return; }
        last = now;
        return fn(...args);
    };
};