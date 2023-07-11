import React, { useEffect } from "react";
import { newStock, damagedStock } from "@/contents/bengali";
import Table from "@/components/reusable/Table";
import { useStocks } from "./useStock";
import StatusHandler from "@/components/reusable/StatusHandler";
import { stocks } from "./utils/stock";
import Modal from "@/components/reusable/Modal";
import Pagination from "../../../reusable/Pagination";
import { convertDate, convertNumber } from "../../../../lib/convertToBen";

const List = () => {
  const {
    router,
    tableColumns,
    tableHeaders,
    pageTitle,
    newStockType,
    damagedStockType,
    stockLists,
    stockItem,
    setStockLists,
    renderActions,
    approveModal,
    setApproveModal,
    approveModalContent,
    approveAction,
    aprvIsLoading,
    deleteModal,
    setDeleteModal,
    deleteModalContent,
    deleteAction,
    dltIsLoading,
    pages,
    setPages,
    currentPage,
    setCurrentPage,
  } = stocks();

  const { data, isLoading, error } = useStocks(currentPage);

  useEffect(() => {
    
    const dataValues = data?.data?.data?.map((dataValue) => {
      const values = {
        id: dataValue?.id,
        stockId: convertNumber(dataValue?.id),
        quantity: dataValue?.incrementQuantity ? convertNumber(dataValue?.quantity) : "("+convertNumber(dataValue?.quantity)+")",
        type: dataValue?.incrementQuantity ? newStockType : damagedStockType,
        status: dataValue?.status,
        productName: dataValue?.product?.name,
        productCode: dataValue?.product?.slug,
        productUnit: dataValue?.product?.unit,
        user: dataValue?.user?.userName,
        date: dataValue?.date ? convertDate(dataValue?.date) : "-",
      }
      return values;
    });

    setStockLists(dataValues);
    let totalPages = Math.ceil(
      data?.data?.meta?.total / data?.data?.meta?.limit
    );
    setPages(totalPages);
  }, [data, currentPage]);

  return (
    <>
      {deleteModal && (
        <Modal
          state={deleteModal}
          setState={setDeleteModal}
          content={deleteModalContent}
          action={deleteAction}
          id={stockItem?.id}
        />
      )}
      {approveModal && (
        <Modal
          state={approveModal}
          setState={setApproveModal}
          content={approveModalContent}
          action={approveAction}
          id={stockItem?.id}
        />
      )}
      <div className="max-w-screen-xl mx-auto p-4 md:p-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              {pageTitle}
            </h3>
          </div>
          <div className="mt-3 md:mt-0 flex gap-2 items-center">
          <button
              onClick={() => router.push("/stocks/damaged")}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-red-600 rounded-lg hover:bg-red-500 active:bg-red-700 md:text-sm">
              {damagedStock?.pageTitle}
            </button>
            <button
              onClick={() => router.push("/stocks/new")}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-primary-600 rounded-lg hover:bg-primary-500 active:bg-primary-700 md:text-sm">
              {newStock?.pageTitle}
            </button>
          </div>
        </div>
        <StatusHandler isLoading={isLoading || dltIsLoading || aprvIsLoading} error={error}>
          <Table
            tableHeaders={tableHeaders}
            tableItems={stockLists}
            tableColumns={tableColumns}
            getActions={renderActions}
          />
          <Pagination
            pages={pages}
            setPages={setPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </StatusHandler>
      </div>
    </>
  );
};

export default List;
