import { CountUseCase } from "../../application/usecases";
import { ReduxStoreService } from "../../infra/services/redux";
import { store } from "../../infra/services/redux/store";

export const makeCountUsecase = () => {
  const storeService = new ReduxStoreService(store);
  return new CountUseCase(storeService);
}