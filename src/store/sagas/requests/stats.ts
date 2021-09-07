import { AxiosResponse } from "axios";
import { axiosInstance } from "../../../utils";
import { IStat } from "../../slices/stats";

interface TickerStatsData {
    ticker: string;
    start_date: string;
    end_date: string;
}

export const requestTickerStats = (
    data: TickerStatsData
): Promise<AxiosResponse<IStat>> =>
    axiosInstance.request({
        url: "/stock",
        method: "GET",
        params: data,
    });
