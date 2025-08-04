import CommandBlock from '@/components/command-tabs'
import Spacer from '@/components/spacer/spacer'
import React from 'react'
import { BionicBlock, BionicText } from '@repo/react-bionic-reading'
import { BIONIC_BLOCK_EXAMPLE } from './bionic-block-example.const'
import { Cuboid } from 'lucide-react'

const BionicBlockExample = () => {
    return (
        <>
            <div className="flex items-center gap-3 bg-card py-2 px-4 border rounded-md">
                <Cuboid className="w-7 h-7" />
                <BionicText className="text-2xl underline text-center" text="Bionic Block" />
            </div>

            <Spacer size="small" />

            <CommandBlock
                title="bionic-block.tsx"
                command={BIONIC_BLOCK_EXAMPLE}
            />

            <Spacer size="small" />

            <div className=" bg-card py-4 px-8 border rounded-md">
                <BionicBlock>
                    <h1 className="text-center">Here is my Bionic Block</h1>
                    <p className="text-center">The above is an example of the Bionic Block component</p>
                </BionicBlock>
            </div>
        </>
    )
}

export default BionicBlockExample