'use client'
import Script from "next/script"

interface IVideoProps { src: string }
const EmbeddedVideoPlayer = ({ src }: IVideoProps) =>
    <Script {...{ src }} />
export default EmbeddedVideoPlayer