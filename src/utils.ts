export const getElement = (selection: string) =>
{
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error(`Please check "${selection}" selector, no such element exist`);
}