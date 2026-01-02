function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Dept</th>
          <th>Role</th>
          <th>Salary</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>{emp.role}</td>
            <td>{emp.salary}</td>
            <td>{emp.status}</td>
            <td>
              <button onClick={() => onEdit(emp)}>Edit</button>
              <button onClick={() => onDelete(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
