export const getPages = (pagesCount: number, currentPage: number) => {
    const pages: number[] = [];
    const showPagesMaxCount = 5;
    if (pagesCount <= showPagesMaxCount) {
        for (let i = 1; i <= showPagesMaxCount; i++) {
            pages.push(i);
        }
        return pages;
    }
    if (pagesCount > showPagesMaxCount) {
        if (currentPage > 2 && currentPage < pagesCount - 1) {
            pages.push(1);
            pages.push(currentPage - 1);
            pages.push(currentPage);
            pages.push(currentPage + 1);
            pages.push(pagesCount);
            return pages;
        }
        if (currentPage < showPagesMaxCount) {
            for (let i = 1; i < showPagesMaxCount; i++) {
                pages.push(i);
            }
            pages.push(pagesCount);
            return pages;
        }
        if (currentPage >= pagesCount - 1) {
            pages.push(1);
            pages.push(pagesCount - 3);
            pages.push(pagesCount - 2);
            pages.push(pagesCount - 1);
            pages.push(pagesCount);
        }
    }
    console.log(pages)
    return pages;
}

export const getPagesCount = (totalItemsCount: number, showCount: number) => Math.ceil(totalItemsCount / showCount);