import { CircleCheck } from 'lucide-react'
import toast from 'react-hot-toast'

import { Console } from '@/lib/logger'

// リファレンス
// https://react-hot-toast.com/docs/toast\

export const useToast = () => {
    const notify = (message: string) => {
        toast(message, { position: 'bottom-right', icon: <CircleCheck /> })
    }

    const notifyWithPromise = <T,>(message: string, promise: Promise<T>) => {
        toast
            .promise(
                promise,
                {
                    loading: 'Loading...',
                    success: () => message,
                    error: () => `Error!`
                },
                {
                    position: 'bottom-right',
                    style: {
                        width: '250px',
                        boxShadow: '4px 10px 15px rgba(34, 26, 53, 0.1)',
                        margin: '10px 0px'
                    },
                    iconTheme: {
                        primary: '#A1B1FF',
                        secondary: '#FFFFFF'
                    }
                }
            )
            .catch((error) => {
                Console.log(`error happend in toast: ${error}`)
            })
    }

    return { notify, notifyWithPromise }
}
