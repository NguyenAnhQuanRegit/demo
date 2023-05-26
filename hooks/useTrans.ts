import { useRouter } from 'next/router'
import en from '@/lang/en'
import ja from '@/lang/ja'

const useTrans = () => {
    const { locale } = useRouter()
    const trans = locale === 'en' ? en : ja

    return trans
}

export default useTrans
