import { ResponseList } from './commonInterface'

export interface Admin {
    id: number
    name: string
    mail_address: string
    created_at?: number
}

export interface AdminResult extends ResponseList {
    loading?: boolean
    result: {
        data: Admin[]
    }
    error: any
    success: boolean
}
