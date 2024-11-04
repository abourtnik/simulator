import {Label} from "@/Components/ui/label";
import {Input} from "@/Components/ui/input";
import { Slider } from "@/Components/ui/slider"
import {useState} from "react";
import {useSimulatorStore} from "@/stores/useSimulatorStore";

type Props = {
    type: 'initial' | 'rate',
    max: number,
    min: number,
    label: string
    step: number
}

export function Field ({type, max, min, label, step} : Props) {

    const defaultValue = useSimulatorStore((state) => state[type]);

    const [value, setValue] = useState<number>(defaultValue ?? min);

    return (
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
            <Label htmlFor="picture" className={'mb-2'}>{label}</Label>
            <Slider
                defaultValue={[value]}
                value={[value]}
                max={max}
                min={min}
                step={step}
                onValueCommit={(value) => useSimulatorStore.setState({[type]: value[0]})}
                onValueChange={(value) => setValue(value[0])}
                className={'mb-2'}
            />
            <Input
                step={step}
                max={max}
                min={min}
                onChange={(e) => setValue(Number(e.target.value))}
                className={'basis-1/2'}
                type={'number'}
                placeholder={label}
                value={value}
            />

        </div>
    )
}
