import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/Components/ui/chart";
import {Bar, BarChart, CartesianGrid, XAxis, YAxis} from "recharts";
import {useSimulatorStore} from "@/stores/useSimulatorStore";
import {calculatedYield} from "@/functions/financials";

const chartConfig = {
    earnings: {
        label: "Rendement",
        color: "#2563eb",
    },
} satisfies ChartConfig

type Props = {
   config: { initial: { min: number, max: number }, rate: { min: number, max: number } }
}

export function Chart ({config} : Props) {

    const initial = useSimulatorStore((state) => state['initial']) ?? config.initial.min;
    const rate = useSimulatorStore((state) => state['rate']) ?? config.rate.min;

    const data = [ ...Array(30).keys()].map(i => ({
        year: i + 1,
        earnings: calculatedYield(initial, rate, i + 1)
    }));

    return(
        <Card className={'bg-slate-200 basis-full lg:basis-5/6'}>
            <CardHeader>
                <CardTitle>Rendement</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                    <BarChart accessibilityLayer data={data}>
                        <CartesianGrid vertical={false}/>
                        <XAxis
                            dataKey="year"
                            tickLine={true}
                            tickMargin={10}
                            axisLine={true}
                            tickFormatter={(value) => value + ' ans'}
                        />
                        <YAxis
                            dataKey="earnings"
                            tickLine={true}
                            tickMargin={10}
                            axisLine={true}
                        />
                        <ChartTooltip
                            formatter={(value, name, props) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Number(value)) + ' euros'}
                            content={<ChartTooltipContent  />}
                        />
                        <Bar dataKey="earnings" fill="var(--color-earnings)" radius={4}/>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
