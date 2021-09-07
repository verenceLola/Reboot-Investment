import { AxiosResponse } from "axios";
import { axiosInstance } from "../../../utils";

export const requestLoadTickers = (): Promise<
    AxiosResponse<{ NASDAQ: string[] }>
> =>
    axiosInstance.request({
        url: "/tickers",
        method: "GET",
    });
