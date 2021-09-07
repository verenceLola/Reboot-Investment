import { ApexOptions } from "apexcharts";
import React, { ReactElement, useEffect, useMemo } from "react";
import Chart from "react-apexcharts";
import { loadStats } from "../../store/slices";
import { DateUtils, useAppDispatch, useAppSelector } from "../../utils";

interface IProps {
    startDate: Date | null;
    endDate: Date | null;
    interval: "1d" | "1mo" | "1w";
}

export const CandleStickChart = ({
    startDate,
    endDate,
    interval,
}: IProps): ReactElement | null => {
    const { selectedTicker } = useAppSelector((state) => state.tickers);
    const { stats } = useAppSelector((state) => state.stats);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (startDate && endDate) {
            dispatch(
                loadStats({
                    startDate: startDate.toUTCString(),
                    endDate: endDate.toUTCString(),
                    interval,
                })
            );
        }
    }, [selectedTicker, startDate, endDate, interval]);

    const series = useMemo(() => {
        if (stats) {
            // [{ x: date, y: [O,H,L,C] }]
            const series = stats.map((stat) => {
                const key = Object.keys(stat)[0];

                return {
                    x: DateUtils.formatDate(parseInt(key)),
                    y: Object.values(stat).map((value) =>
                        Object.values(value)
                    )[0],
                };
            });
            return [{ data: series }];
        }
    }, [stats]);

    const options: ApexOptions = {
        title: {
            text: `${selectedTicker} Stock`,
            align: "center",
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "Roboto",
                color: "#263238",
            },
        },
    };

    if (!stats) {
        return null;
    }

    return (
        <Chart
            height="100%"
            // width="100%"
            type="candlestick"
            series={series}
            options={options}
        />
    );
};
