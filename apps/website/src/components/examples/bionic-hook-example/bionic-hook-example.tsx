import React from 'react'
import CommandBlock from '@/components/command-tabs'
import Spacer from '@/components/spacer/spacer'
import { BionicText } from '@repo/react-bionic-reading'
import { FlaskConical } from 'lucide-react'
import { BIONIC_HOOK_EXAMPLE } from './bionic-hook-example.const'
import BionicSwitch from '@/components/bionic-switch/bionic-switch'

const BionicHookExample = () => {
    return (
        <>
            <div className="flex items-center gap-3 bg-card py-2 px-4 border rounded-md">
                <FlaskConical className="w-7 h-7" />
                <BionicText className="text-2xl underline text-center" text="useBionic" as="h3" />
            </div>

            <Spacer size="small" />

            <div className="flex items-center gap-3 bg-card py-2 px-4 border rounded-md">
                <BionicText className="text-lg text-center" text="The useBionic hook can be used to globally toggle bionic mode." as="p"/>
            </div>

            <Spacer size="small" />

            <CommandBlock
                title="bionic-switch.tsx"
                command={BIONIC_HOOK_EXAMPLE}
            />

            <Spacer size="small" />

            <BionicSwitch />
        </>
    )
}

export default BionicHookExample