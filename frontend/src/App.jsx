import { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee
} from "./services/api";

function App() {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleSubmit = async (data) => {
    if (selected) {
      await updateEmployee(selected.id, data);
      setSelected(null);
    } else {
      await addEmployee(data);
    }
    loadEmployees();
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <>
      <h2>Employee Dashboard</h2>
      <EmployeeForm onSubmit={handleSubmit} selected={selected} />
      <EmployeeTable
        employees={employees}
        onEdit={setSelected}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;

