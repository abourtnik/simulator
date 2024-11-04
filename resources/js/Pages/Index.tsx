import {Card,CardContent, CardHeader, CardTitle} from "@/Components/ui/card"
import {Chart} from "@/Components/Chart";
import {Field} from "@/Components/Field";
import { Head } from '@inertiajs/react'


type Props = {
    config: {
        initial: {
            min: number,
            max: number
        },
        rate: {
            min: number,
            max: number
        }
    }
}

export default function Index({ config } : Props) {
    return (
        <>
            <Head title="Accueil"/>
            <div className={'container-2xl mx-auto mt-2 h-full'}>
                <div className={'flex flex-col lg:flex-row gap-4 p-2 h-full'}>
                    <Card className={'bg-slate-200 basis-full lg:basis-1/6 h-100'}>
                        <CardHeader>
                            <CardTitle>Calcul du taux de rendement</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Field
                                type={'initial'}
                                max={config.initial.max}
                                min={config.initial.min}
                                label={'Montant de l’investissement initial en euros'}
                                step={10}
                            />
                            <Field
                                type={'rate'}
                                max={config.rate.max}
                                min={config.rate.min}
                                label={'Taux de rendement mensuel en %'}
                                step={1}
                            />
                        </CardContent>
                    </Card>
                    <Chart config={config}/>
                </div>
            </div>
        </>
    )
}
