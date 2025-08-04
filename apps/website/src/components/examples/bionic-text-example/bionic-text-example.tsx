import CommandBlock from '@/components/command-tabs'
import Spacer from '@/components/spacer/spacer'
import React from 'react'
import { BionicText } from '@repo/react-bionic-reading'
import { BIONIC_TEXT_EXAMPLE } from './bionic-text-example.const'
import { RemoveFormatting } from 'lucide-react'


const BionicTextExample = () => {
    return (
        <>
           <div className="flex items-center gap-3 bg-card py-2 px-4 border rounded-md">
                <RemoveFormatting className="w-7 h-7" />
                <BionicText className="text-2xl underline" text="Bionic Text" />
            </div>

            <Spacer size="small" />

            <CommandBlock
                title="bionic-text.tsx"
                command={BIONIC_TEXT_EXAMPLE}
            />

            <Spacer size="small" />

            <div className=" bg-card py-4 px-8 border rounded-md">
                <BionicText text="Hello bionic reading lovers" />
            </div>
        </>
    )
}

export default BionicTextExample