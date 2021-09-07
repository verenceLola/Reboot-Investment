import { ApexOptions } from "apexcharts";
import React, { ReactElement, useEffect, useMemo } from "react";
import Chart from "react-apexcharts";
import { loadStats } from "../../store/slices";
import { DateUtils, useAppDispatch, useAppSelector } from "../../utils";

export const CandleStickChart = (): ReactElement | null => {
    const { selectedTicker } = useAppSelector((state) => state.tickers);
    const { stats } = useAppSelector((state) => state.stats);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadStats());
    }, [selectedTicker]);

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

    return <Chart type="candlestick" series={series} options={options} />;
};
