import download from 'downloadjs'
import { toBlob, toPng } from 'html-to-image'
import { RefObject } from 'react'

import { useToast } from '@/hooks/use-toast'

import { Console } from '@/lib/logger'

export const useDOMtoImage = (elementRef: RefObject<HTMLElement>, filename = 'tmp.png') => {
    const { notifyWithPromise } = useToast()

    const copyImage = () => {
        if (elementRef.current == null) {
            return
        }

        const blobPromise = toBlob(elementRef.current, {
            width: elementRef.current.offsetWidth,
            height: elementRef.current.offsetHeight
        })
        notifyWithPromise('Copied as Image !', blobPromise)

        blobPromise
            .then((blob) => {
                if (blob == null) {
                    return
                }
                navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]).catch((error) => {
                    Console.log(`error during copying image: ${error}`)
                })
            })
            .catch((error) => {
                Console.log(`error during saving image: ${error}`)
            })
    }

    const downloadImage = () => {
        if (elementRef.current == null) {
            return
        }

        const pngPromise = toPng(elementRef.current, {
            width: elementRef.current.offsetWidth,
            height: elementRef.current.offsetHeight
        })

        notifyWithPromise('Downloaded as Image !', pngPromise)

        pngPromise
            .then((dataUrl) => {
                download(dataUrl, filename)
            })
            .catch((error) => {
                Console.log(`error during saving image: ${error}`)
            })
    }

    return { copyImage, downloadImage }
}
