import styles from "./styles.module.css";

// Reusable component for table

const TableRow = ({ requisitionId, note, totalQuantity, totalItem, requestDate, receivedDate, status, orderId }) => {
  let isIdODD = (orderId + 1) % 2 === 0;
  return (
    <div className="">
      <section className="flex">
        <div
          className={`w-full grid grid-cols-6 p-4 justify-between cursor-pointer  hover:bg-primary-400 hover:text-gray-600 text-gray-400  duration-300 ${
            isIdODD ? "bg-gray-100" : " bg-white"
          }  `}
        >
          <p className={`${styles.table_row} col-span-1`}>{requisitionId}</p>
          <p className={`${styles.table_row} col-span-1`}>{totalQuantity}</p>
          <p className={`${styles.table_row} col-span-1`}>{totalItem}</p>
          <p className={`${styles.table_row} col-span-1`}>{requestDate}</p>
          <p className={`${styles.table_row} col-span-1`}>{receivedDate}</p>
          <p className={`${styles.table_row} col-span-1`}>{status}</p>
        </div>
      </section>
    </div>
  );
};

export default TableRow;
