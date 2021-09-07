import React, { ReactElement, useMemo } from "react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import { DateUtils, useAppSelector } from "../../utils";

export const BarChart = (): ReactElement | null => {
    const { stats } = useAppSelector((state) => state.stats);
    const { selectedTicker } = useAppSelector((state) => state.tickers);

    const series = useMemo(() => {
        if (stats) {
            // [{ x: date, y: [V] }]
            const series = stats.map((stat) => {
                const key = Object.keys(stat)[0];

                return {
                    x: DateUtils.formatDate(parseInt(key)),
                    y: Object.values(stat).map(
                        (value) => Object.values(value)[4]
                    )[0],
                };
            });
            return [{ data: series }];
        }
    }, [stats]);

    const options: ApexOptions = {
        title: {
            text: `${selectedTicker} Shares Volume`,
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

    return <Chart type="bar" height="100%" options={options} series={series} />;
};
