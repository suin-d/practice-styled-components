import React, { useState } from "react";
import Button from "./components/common/Button";
import MainModal from "./pages/MainModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const onToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Button fullWidth onClick={onToggleModal}>
        모달 오픈
      </Button>
      {modalOpen && <MainModal onToggleModal={onToggleModal} />}
    </>
  );
}

export default App;
