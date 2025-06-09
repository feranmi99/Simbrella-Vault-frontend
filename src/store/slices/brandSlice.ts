import { getAllBrandApi } from '@/service/api/brandApi';
import { Brand, BrandStatus, Filters } from '@/types/brands-type';
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

interface BrandState {
    data: {
        brands: Brand[];
        currentPage: number;
        totalPages: number;
        totalCount: number;
    };
    filters: Filters;
    loading: boolean;
    error: string | null;
}

const initialState: BrandState = {
    data: {
        brands: [],
        currentPage: 1,
        totalPages: 1,
        totalCount: 0,
    },
    filters: {
        category_id: 'All',
        state_id: 'All',
        status: 'All',
        searchQuery: '',
        showOwnedOnly: false,
    },
    loading: false,
    error: null,
};

export const loadBrands = createAsyncThunk(
    'brands/loadBrands',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const { filters, data: { currentPage } } = state.brand;
            // const response = await getAllBrandApi(filters, currentPage);
                  const response = await getAllBrandApi(filters, Math.max(1, currentPage), 10);

            return {
                brands: response?.data || [],
                totalPages: response?.meta?.totalPages || 1,
                totalCount: response?.meta?.total || 0,
            };
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to load brands');
        }
    }
);

const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        setFilters(state, action) {
            state.filters = { ...state.filters, ...action.payload };
            state.data.currentPage = 1;
        },
        resetFilters(state) {
            state.filters = initialState.filters;
            state.data.currentPage = 1;
        },
        setPage(state, action) {
            state.data.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadBrands.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadBrands.fulfilled, (state, action) => {
                state.loading = false;
                state.data.brands = action.payload.brands;
                state.data.totalPages = action.payload.totalPages;
                state.data.totalCount = action.payload.totalCount;
            })
            .addCase(loadBrands.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Failed to load brands';
                state.data.brands = [];
            });
    },
});

// Selectors with proper null checks
export const selectBrandState = (state: RootState) => state.brand || initialState;

export const selectAllBrands = createSelector(
    [selectBrandState],
    (brand) => brand?.data?.brands || []
);

export const selectBrandFilters = createSelector(
    [selectBrandState],
    (brand) => brand?.filters || initialState.filters
);

export const selectBrandLoading = (state: RootState) => state.brand?.loading || false;

export const selectBrandError = (state: RootState) => state.brand?.error || null;

export const selectPagination = createSelector(
    [selectBrandState],
    (brand) => ({
        currentPage: brand?.data?.currentPage || 1,
        totalPages: brand?.data?.totalPages || 1,
        totalCount: brand?.data?.totalCount || 0,
    })
);

export const selectFilteredBrands = createSelector(
    [selectAllBrands, selectBrandFilters],
    (brands, filters) => {
        if (!brands || !Array.isArray(brands)) return [];

        return brands.filter(brand => {
            const matchesCategory = filters.category_id === 'All'
                || brand.category_id.toString()
                === filters.category_id.toString();
            const matchesState = filters?.state_id === 'All'
                || brand?.state_id.toString()
                === filters?.state_id.toString();
            const matchesStatus = filters?.status === 'All'
                || brand?.status
                === filters?.status;

            const searchLower = filters?.searchQuery?.toLowerCase() || '';
            const matchesSearch = !filters?.searchQuery ||
                brand?.brand_name?.toLowerCase().includes(searchLower) ||
                brand?.description?.toLowerCase().includes(searchLower) ||
                brand?.user_name?.toLowerCase().includes(searchLower);

            return matchesCategory
                && matchesState
                && matchesStatus
                && matchesSearch;
        });
    }
);

export const { setFilters, resetFilters, setPage } = brandSlice.actions;
export default brandSlice.reducer;