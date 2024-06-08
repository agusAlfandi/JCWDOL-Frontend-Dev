import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => console.log(values),
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formik.name}
        onChange={formik.handleChange}
      />

      <label>Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formik.email}
        onChange={formik.handleChange}
      />

      <label>Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formik.password}
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
