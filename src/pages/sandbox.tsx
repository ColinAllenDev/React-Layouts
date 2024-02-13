import Head from "next/head"
import { Stack } from "@/components/base/Stack"
import { Box } from "@/components/base/Box"

export default function Sandbox() {
    return (
        <>
            <Head>
                <title>EveryLayout - Sandbox</title>
                <meta name="description" content="Sandbox for EveryLayout" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container">
                <Stack recursive className='wrapper'> 
                    <Box>
                        <p>Hello World</p>
                    </Box>
                    <Box>
                        <p>Hello World</p>
                    </Box>
                    <Box>
                        <p>Hello World</p>
                        
                        <Box>
                            <p>Hello Idiot</p>
                        </Box>
                    </Box>
                    <Box>
                        <p>Hello World</p>
                    </Box>
                </Stack>
            </main>
        </>
    )
}