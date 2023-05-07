export const getPages = (pagesCount: number, currentPage: number) => {
    const pages: number[] = [];
    const showPagesMaxCount = 5;
    if (pagesCount !== 1 && pagesCount <= showPagesMaxCount) {
        for (let i = 1; i < pagesCount + 1; i++) {
            pages.push(i);
        }
    }
    if (pagesCount > showPagesMaxCount) {
        if (currentPage > pagesCount - showPagesMaxCount) {
            pages.push(1);
            for (let i = pagesCount - (showPagesMaxCount - 2); i < pagesCount + 1; i++) {
                pages.push(i);
            }
        }

        if (currentPage >= 1 && currentPage <= showPagesMaxCount) {
            for (let i = 1; i < showPagesMaxCount; i++) {
                pages.push(i);
            }
            pages.push(pagesCount);
        }

        if (currentPage > showPagesMaxCount && currentPage <= pagesCount - showPagesMaxCount) {
            pages.push(1);
            for (let i = currentPage - 1; i < currentPage + 1; i++) {
                pages.push(i);
            }
            pages.push(pagesCount);
        }
    }
    return pages;
}

export const getPagesCount = (totalItemsCount: number, showCount: number) => Math.ceil(totalItemsCount / showCount);