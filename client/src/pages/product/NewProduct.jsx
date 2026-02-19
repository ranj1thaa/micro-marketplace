import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import api from "../../utils/axios";

const NewProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.price || !form.description || !form.image) {
      return toast.warn("All fields are required");
    }

    try {
      await api.post("/product/new", { ...form, price: Number(form.price) });
      toast.success("Product created successfully");
      navigate("/product"); 
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to create product");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2>Create New Product</h2>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter product title"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="Enter price"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="me-2">
          Create Product
        </Button>
        <Button variant="secondary" onClick={() => navigate("/product")}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default NewProduct;
