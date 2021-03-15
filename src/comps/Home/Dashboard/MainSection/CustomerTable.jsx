import React from "react";
import "react-tabulator/lib/styles.css";
import "react-tabulator/lib/css/tabulator.min.css";
import { ReactTabulator } from "react-tabulator";

function CustomerTable(props) {
  const { customers } = props;

  const columns = [
    { title: "ID", field: "id", sorter: "number" },
    { title: "Name", field: "full_name" },
    { title: "Phone Number", field: "phone" },
    { title: "Email", field: "email" },
  ];
  return (
    <>
      <ReactTabulator
        data={customers}
        columns={columns}
        tooltips={true}
        layout={"fitData"}
        options={{ pagination: "local", height: "100%" }}
      />
    </>
  );
}

export default CustomerTable;
