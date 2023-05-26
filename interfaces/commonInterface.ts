export interface ParamsOrders {
    key: string
    dir: 'descending' | 'ascending'
}

export interface ParamsFilters {
    key: string
    dir: string
}

export interface ParamsList {
    search?: string
    per_page?: number | string | undefined
    page?: number | string | undefined
    orders?: ParamsOrders[]
    filters?: ParamsFilters[] | string
    [key: string]: any
}
export interface ResponseList {
    data?: any
    per_page?: number
    page?: number
    total?: number
    current_page?: number
    [key: string]: any
}

export type ApiResponseList = (
    params: ParamsList | undefined | null
) => Promise<ResponseList>

export interface PaginateParams {
    currentPage: number | undefined
    lastPage: number | undefined
    perPage: number | undefined
    records?: Array<any> | undefined
    total: number | undefined
}

export interface imageResponse {
    thumb?: string
    type?: 'avatar'
    url?: string
}

// key in 'list' | 'get' | 'create' | 'update' | 'delete' | 'deleteMultiple'
export interface initialStateProps {
    [key: string]: {
        loading: boolean
        result: ResponseList
        error: any
        success: boolean
    }
}

export interface QueryDefault {
    page: number
    per_page: number
    [key: string]: any
}

export interface Option {
    value: number
    label: string
    disabled?: boolean
}
