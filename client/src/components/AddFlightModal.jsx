import { Input, Modal } from "antd";

const AddFlightModal = ({
  isModalOpen,
  setIsModalOpen,
  flightNumber,
  setFlightNumber,
  handleOk,
}) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Add a flight"
      open={isModalOpen}
      onOk={() => {
        setIsModalOpen(false);
        handleOk();
      }}
      onCancel={handleCancel}
    >
      <Input
        placeholder="Flight number (E.g. AA 2153)"
        onChange={(e) => setFlightNumber(e.target.value)}
        value={flightNumber}
      />
    </Modal>
  );
};

export default AddFlightModal;
