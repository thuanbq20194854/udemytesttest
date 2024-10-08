import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface IProps {
    currentPage: number;
    totalPage: number;
    // setCurrentPage: React.Dispatch<React.SetStateAction<number>>;

    onPageChange: (value: number) => void;
}

function CustomPagination({ currentPage, totalPage, onPageChange }: IProps) {
    const renderPageDisplay = (currentPage: number, totalPage: number) => {
        if (totalPage <= 3) {
            let page = 0;

            return Array(totalPage).map(() => {
                page++;
                return page;
            });
        } else {
            if (currentPage === 1) return [currentPage, currentPage + 1];

            if (currentPage === totalPage) return [totalPage - 1, totalPage];
            else return [currentPage - 1, currentPage, currentPage + 1];
        }
    };
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        className={
                            currentPage === 1
                                ? "pointer-events-none opacity-50"
                                : undefined
                        }
                        onClick={() => onPageChange(currentPage - 1)}
                    />
                </PaginationItem>
                {/* <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#" isActive>
                2
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
        </PaginationItem> */}
                {currentPage - 1 > 1 && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}
                {renderPageDisplay(currentPage, totalPage).map((pageItem) => (
                    <PaginationItem key={pageItem}>
                        <PaginationLink
                            href="#"
                            isActive={pageItem === currentPage}
                            onClick={() => onPageChange(pageItem)}
                        >
                            {pageItem}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {currentPage + 1 < totalPage && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        className={
                            currentPage === totalPage
                                ? "pointer-events-none opacity-50"
                                : undefined
                        }
                        onClick={() => onPageChange(currentPage + 1)}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export default CustomPagination;
