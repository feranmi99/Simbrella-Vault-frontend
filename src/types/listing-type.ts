import { Category } from "./category-type";

export interface CreateListingPayload {
    category_id: string;
    sub_category_id: string;
    state_id: string;
    city_id: string;
    images: string[];
    price: number;
    special_discount: number;
    is_negotiable: string;
    video: string;
    alternative_contact: string;
    stepper: string;
    hedge_currency?: string;
    description: string;
    listing_plan: string;
    listingFields: {
        [key: string]: any; // Dynamic fields based on category and subcategory
    };

    coupon?: string;
    title: string;
    delivery_option: string;
    pricing_type: string;
    coupon_discount: number,
    paystack_ref: string;
    isBrandListing?: boolean;
    brand_id?: string;
    own_listing?: boolean;
}


interface Listing {
    id: string;
    user_id: string;
    category_id: string;
    sub_category_id: string;
    state_id: string;
    city_id: string;
    latitude: number | null;
    longitude: number | null;
    title: string | null;
    description: string;
    images: string[];
    video: string;
    listingFields: any;
    price: number;
    special_discount: number;
    hedge_currency: string;
    is_negotiable: 'yes' | 'no' | 'maybe';
    pricing_type: 'fixed' | 'negotiable' | 'auction';
    final_price: number;
    coupon: string;
    coupon_discount: number | null;
    delivery_option: 'pickup' | 'delivery' | 'both';
    alternative_contact: string;
    is_available: boolean;
    status: 'active' | 'inactive' | 'sold' | 'rented';
    featured: boolean;
    featured_until: string | null;
    listing_plan: 'free' | 'boost' | 'premium';
    is_verified: boolean;
    verification_note: string | null;
    is_reported: boolean;
    report_reason: string | null;
    deleted_at: string | null;
    views: number;
    saves: number;
    review_count: number;
    average_rating: number;
    created_at: string;
    updated_at: string;
    city: City;
    state: City;
    category: Category;
    subCategory: Category;
}

export type Listings = Listing;