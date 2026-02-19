import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import api from "../../utils/axios";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/product/${id}`);
        setForm({
          title: res.data.title,
          price: res.data.price,
          description: res.data.description,
          image: res.data.image || "",
        });
      } catch (err) {
        toast.error("Failed to fetch product");
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/product/product/${id}`, { ...form, price: Number(form.price) }); 
      toast.success("Product updated successfully");
      navigate("/product");
    } catch (err) {
      toast.error("Failed to update product");
    }
  };

  return (
    <div className="container mt-5 mb-5 heyy">
      <h2>Edit Product</h2>
      <Form onSubmit={handleSubmit}>
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

        <Button type="submit" variant="primary">
          Update Product
        </Button>
        <Button type="submit" variant="primary" onClick={()=>navigate('/product')}>
          Back
        </Button>
      </Form>
    </div>
  );
};

export default EditProduct;
