import { useRouter } from "next/router";
import { useRef, useState } from "react";
import HoverUI from "./hover.presenter";

export default function Hover() {
  const [isHidden, setIsHidden] = useState(false);
  const hideRef = useRef(isHidden);
  const router = useRouter();

  const onClickHidden = () => {
    setIsHidden(true);
  };

  const onClickRouter = () => {
    router.push("shopping");
  };

  return (
    <HoverUI
      isHidden={isHidden}
      hideRef={hideRef}
      onClickHidden={onClickHidden}
      onClickRouter={onClickRouter}
    />
  );
}
