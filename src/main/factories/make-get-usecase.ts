import { GetUsecase } from "../../application/usecases";
import { ReduxStoreService } from "../../infra/services/redux";
import { store } from "../../infra/services/redux/store";

export const makeGetUsecase = () => {
  const storeService = new ReduxStoreService(store);
  return new GetUsecase(storeService);
}