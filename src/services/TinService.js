import { get } from "../app/apiManager";

export default class TinService {
  static async getTin({ nic = "" }) {
    const response = await get({
      path: `/Registration/TPRCommon/GetSpouseDataByID?NIC=${nic}`,
    });

    return response;
  }
}
