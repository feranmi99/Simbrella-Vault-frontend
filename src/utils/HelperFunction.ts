import { getCategoryApi } from "@/service/api/getCategoryApi";
import { getStateApi } from "@/service/api/getLocationApi";
import { Category } from "@/types/category-type";
import { useQuery } from "@tanstack/react-query";

interface UseCategoryResult {
    category?: Category;
    isLoading: boolean;
    error: Error | null;
}

export const useLocationById = (state_id: string) => {
    const { data: locations, isLoading, error } = useQuery<Location[]>({
        queryKey: ['locations'],
        queryFn: getStateApi,
    });

    if (isLoading) return { isLoading: true };
    if (error) return { error: error as Error };
    if (!locations) return { notFound: true };

    const foundLocation = locations.find(location => location.id.toString() === state_id);

    return {
        location: foundLocation,
        cities: foundLocation?.cities || [],
        isLoading: false,
        error: null
    };
};
export const useCategory = (categoryId?: string): UseCategoryResult => {
    const {
        data: categories,
        isLoading,
        error
    } = useQuery<Category[]>({
        queryKey: ['categories'],
        queryFn: getCategoryApi,
        staleTime: 60 * 60 * 1000 // Cache for 1 hour
    });

    if (isLoading) return { isLoading: true, error: null };
    if (error) return { isLoading: false, error };
    if (!categoryId) return { isLoading: false, error: null };

    const category = categories?.find(cat => cat.id.toString() === categoryId);

    return {
        category,
        isLoading: false,
        error: null
    };
};