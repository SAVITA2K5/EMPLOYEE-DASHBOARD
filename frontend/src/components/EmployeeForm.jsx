import { useState, useEffect } from "react";

function EmployeeForm({ onSubmit, selected }) {
  const [form, setForm] = useState({
    name: "",
    department: "",
    role: "",
    salary: "",
    status: ""
  });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", department: "", role: "", salary: "", status: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="department" value={form.department} onChange={handleChange} placeholder="Department" />
      <input name="role" value={form.role} onChange={handleChange} placeholder="Role" />
      <input name="salary" value={form.salary} onChange={handleChange} placeholder="Salary" />
      <input name="status" value={form.status} onChange={handleChange} placeholder="Status" />
      <button type="submit">
        {selected ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default EmployeeForm;
