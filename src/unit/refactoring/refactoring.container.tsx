import { useMutation } from "@apollo/client";
import RefactoringUI from "./refactoring.presenter";
import { CREATE_USER } from "./refactoring.queries";

export default function Refactoring() {
  const [createUser] = useMutation(CREATE_USER);

  return <RefactoringUI />;
}
