import React, { useState } from "react";
import Button from "./components/common/Button";
import MainModal from "./pages/MainModal";

export default function ButtonBox() {
  return (
    <div>
      <button onClick={onToggleModal}>모달 오픈</button>
      <Button large>이것은 버튼1</Button>
      <Button fullWidth>이것은 버튼2</Button>
      <Button small>이것은 버튼3</Button>
      <Button large red>
        이것은 버튼1
      </Button>
      <Button red>이것은 버튼2</Button>
      <Button small red>
        이것은 버튼3
      </Button>
      <Button large gray>
        이것은 버튼1
      </Button>
      <Button gray>이것은 버튼2</Button>
      <Button small gray>
        이것은 버튼3
      </Button>

      <Button large outline>
        이것은 버튼1
      </Button>
      <Button outline>이것은 버튼2</Button>
      <Button small outline>
        이것은 버튼3
      </Button>

      <Button large outline red>
        이것은 버튼1
      </Button>
      <Button outline red>
        이것은 버튼2
      </Button>
      <Button small outline red>
        이것은 버튼3
      </Button>

      <Button large outline gray>
        이것은 버튼1
      </Button>
      <Button outline gray>
        이것은 버튼2
      </Button>
      <Button small outline gray>
        이것은 버튼3
      </Button>
      {modalOpen && <MainModal onToggleModal={onToggleModal} />}
    </div>
  );
}

export default App;
