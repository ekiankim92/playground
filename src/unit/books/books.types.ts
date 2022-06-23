export interface PropsBooks {
  booksList: string[];
  secondPortion: string[];
  bookDetail: string[];
  isPage: boolean;
  current: number;
  onChangePagination: (page: number) => void;
  showModal: (id: string) => () => void;
  handleOk: () => void;
  handleCancel: () => void;
  isModalVisible: boolean;
}
