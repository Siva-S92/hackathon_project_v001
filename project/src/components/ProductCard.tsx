import React, { useEffect, useState } from "react";
import { Card, message, Modal } from "antd";
import axios from "axios";

const ProductCard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productdefinition, setProductdefinition] = useState<any>({});
  const [isupdate, setIsUpdate] = useState(false);
  const [isnewproduct, setIsNewProduct] = useState(false);
  const [createformData, setCreateformData] = useState<any>({
    productID: "6905855f-f441-48de-9ca4-103e535cfab8",
    productName: "Agricultural Fertilizer Dispensing System ",
    components: {
      soil_moisture_sensor: {
        name: "Soil Moisture Sensor",
        type: "sensor",
        unit: "°C",
        range: { min: 150, max: 350 },
      },
      LDR_sensor: {
        name: "LDR Sensor",
        type: "sensor",
        unit: "%",
        range: { min: 3000, max: 9000 },
      },
      actuator: {
        type: "Fertilizer Dispencing Motor",
        state: ["ON", "OFF"],
      },
    },
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const createCancel = () => {
    setIsModalOpen(false);
  };
  const updateCancel = () => {
    setIsUpdate(!isupdate);
  };
  const newproductCancel = () => {
    setIsNewProduct(!isnewproduct);
  };

  const fetchProductDefinition = async () => {
    try {
      const response = await axios.get(`/api/getproductdefinition`);
      setProductdefinition(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createProductDefinition = async () => {
    try {
      const response = await axios.post(`/api/create-productdefinition`);
      setProductdefinition(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProductDefinition = async () => {
    try {
      const response = await axios.delete(`/api/delete-productdefinition`);
      message.success(response.data.message, 5);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDefinition();
  }, [productdefinition]);

  return (
    <>
      <Card
        className="bg-gray-200 w-full max-w-2xl mx-auto "
        title="Product Details"
        extra={
          <span>
            <button
              onClick={() => setIsUpdate(!isupdate)}
              className="px-4 py-1 bg-green-400 rounded-lg"
            >
              update
            </button>
            <button
              onClick={deleteProductDefinition}
              className="px-4 py-1 bg-red-400 rounded-lg"
            >
              delete
            </button>
          </span>
        }
        // style={{ width: 600 }}
      >
        <p>ID: {productdefinition?.productID}</p>
        <p>Product Name: {productdefinition?.name}</p>
        <p>
          Sensor1: {productdefinition?.components?.soil_moisture_sensor?.name}
        </p>
        <p>Type: {productdefinition?.components?.soil_moisture_sensor?.type}</p>
        <p>Unit: {productdefinition?.components?.soil_moisture_sensor?.unit}</p>
        <p>
          Range:{" "}
          {productdefinition?.components?.soil_moisture_sensor?.range.min} -
          {productdefinition?.components?.soil_moisture_sensor?.range.max}
        </p>
        <p>Sensor2: {productdefinition?.components?.LDR_sensor?.name}</p>
        <p>Type: {productdefinition?.components?.LDR_sensor?.type}</p>
        <p>Unit: {productdefinition?.components?.LDR_sensor?.unit}</p>
        <p>
          Range:{productdefinition?.components?.LDR_sensor?.range.min} -
          {productdefinition?.components?.LDR_sensor?.range.max}
        </p>
        <p>Actuator1: {productdefinition?.components?.actuator?.type}</p>
      </Card>

      <div className="w-full max-w-2xl flex flex-col gap-3 mx-auto mt-2">
        <button
          onClick={showModal}
          className="bg-blue-300 w-full rounded-md py-1"
        >
          Create Product Definition
        </button>
        <button
          onClick={() => setIsNewProduct(!isnewproduct)}
          className="bg-blue-300 w-full rounded-md py-1"
        >
          Add new Product
        </button>
      </div>

      <Modal
        width={800}
        title="Create Product Definition"
        open={isModalOpen}
        onCancel={createCancel}
        footer={null}
      >
        <form className="w-full rounded-md flex flex-col">
          <label className="mt-2" htmlFor="">
            ProductID
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="productID"
          />
          <label className="mt-2" htmlFor="">
            Product Name
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="product name"
          />
          <label className="font-bold">Sensor1</label>
          <label className="mt-2" htmlFor="">
            name
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="name"
          />
          <label className="mt-2" htmlFor="">
            Type
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="type"
          />
          <label className="mt-2" htmlFor="">
            Unit
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="unit"
          />
          <label className="mt-2" htmlFor="">
            min-range
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="min-range"
          />
          <label className="mt-2" htmlFor="">
            max-range
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="max-range"
          />
          <label className="font-bold">Sensor2</label>
          <label className="mt-2" htmlFor="">
            name
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="name"
          />
          <label className="mt-2" htmlFor="">
            Type
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="type"
          />
          <label className="mt-2" htmlFor="">
            Unit
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="unit"
          />
          <label className="mt-2" htmlFor="">
            min-range
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="min-range"
          />
          <label className="mt-2" htmlFor="">
            max-range
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="max-range"
          />
          <label className="font-bold">Actuator1</label>
          <label className="mt-2" htmlFor="">
            Type
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="type"
          />
          <label className="mt-2" htmlFor="">
            state
          </label>
          <input
            className="border rounded-md py-1"
            type="text"
            placeholder="state"
          />

          <button className="block bg-blue-500 py-1 rounded-md mt-2">
            submit
          </button>
        </form>
      </Modal>

      {isupdate && (
        <Modal
          width={800}
          title="Update Product Definition"
          open={isupdate}
          onCancel={updateCancel}
          footer={null}
        >
          <form className="w-full rounded-md flex flex-col">
            <label className="mt-2" htmlFor="">
              ProductID
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="productID"
            />
            <label className="mt-2" htmlFor="">
              Product Name
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="product name"
            />
            <label className="font-bold">Sensor1</label>
            <label className="mt-2" htmlFor="">
              name
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="name"
            />
            <label className="mt-2" htmlFor="">
              Type
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="type"
            />
            <label className="mt-2" htmlFor="">
              Unit
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="unit"
            />
            <label className="mt-2" htmlFor="">
              min-range
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="min-range"
            />
            <label className="mt-2" htmlFor="">
              max-range
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="max-range"
            />
            <label className="font-bold">Sensor2</label>
            <label className="mt-2" htmlFor="">
              name
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="name"
            />
            <label className="mt-2" htmlFor="">
              Type
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="type"
            />
            <label className="mt-2" htmlFor="">
              Unit
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="unit"
            />
            <label className="mt-2" htmlFor="">
              min-range
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="min-range"
            />
            <label className="mt-2" htmlFor="">
              max-range
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="max-range"
            />
            <label className="font-bold">Actuator1</label>
            <label className="mt-2" htmlFor="">
              Type
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="type"
            />
            <label className="mt-2" htmlFor="">
              state
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="state"
            />

            <button className="block bg-blue-500 py-1 rounded-md mt-2">
              submit
            </button>
          </form>
        </Modal>
      )}

      {isnewproduct && (
        <Modal
          width={800}
          title="Add New Product"
          open={isnewproduct}
          onCancel={newproductCancel}
          footer={null}
        >
          <form className="w-full rounded-md flex flex-col">
            <label className="mt-2" htmlFor="">
              Product Name
            </label>
            <input
              className="border rounded-md py-1"
              type="text"
              placeholder="product name"
            />

            <button className="block bg-blue-500 py-1 rounded-md mt-5">
              submit
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ProductCard;
